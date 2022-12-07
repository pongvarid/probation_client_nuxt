<template>
<div>

    <v-toolbar color="transparent" flat class="mt-4">
        <h2 class="font-semibold text-xl">งานของฉัน</h2>
        <v-spacer></v-spacer>
        <v-btn depressed small @click="dialog=true" color="success">เพิ่มตำแหน่งงาน</v-btn>
    </v-toolbar>


    <v-card class="mx-auto mt-4" max-width="374" v-for="job,index in data" :key="index">
        <template slot="progress">
            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
        </template>
        <div >
            <div class="absolute w-full"  >
                <div class="flex  p-2">
                    <v-spacer></v-spacer>

                </div>
            </div>
          <v-img height="150" :src="job.image"></v-img>
        </div>

      <v-card-title>{{job.name}}</v-card-title>

        <v-card-text>
            <v-divider class="mt-2"></v-divider>
          <div class="my-4 text-subtitle-1" v-if="job.office_data">
            <div class="flex h-full items-center">
              <img class="h-10  mr-2" :src="$url+job.office_data.image" alt="">
              <span class="text-xs">{{job.office_data.name}}</span>
            </div>
          </div>
            <div>{{job.content}}</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider> 
        <v-card-actions>
            <v-chip small @click="$router.push(`/admin/bookmark/${job.id}/`)"><v-icon>mdi-bookmark</v-icon> {{job.bookmark}} </v-chip>
          <v-chip class="ml-2" small ><v-icon>mdi-eye</v-icon> {{job.views}}</v-chip>
                <v-spacer></v-spacer>

          <v-btn depressed fab small @click="openDialog(job)" color="warning">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn depressed fab small @click="deleteJob(job)" color="error">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
            </v-card-actions>
    </v-card>

    <v-dialog v-model="dialog" scrollable fullscreen persistent :overlay="false" max-width="500px" transition="dialog-transition" style="z-index:9999;">
        <v-card>
            <v-card-title primary-title>
                เพิ่มตำแหน่งงาน <v-spacer></v-spacer>
                <v-btn icon @click="dialog = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text>
                <v-img v-if="form.id" :src="form.image"></v-img>
                <v-form ref="vform" class="mt-4">
                    <v-autocomplete :rules="[$v.req]" v-model="form.category" outlined dense :items="$auth.categories" item-text="name" item-value="id" label="ประเภทของงาน"></v-autocomplete>
                    <v-autocomplete :rules="[$v.req]"   v-model="form.sub_category" outlined dense :items="$auth.getSubCategoryByCategory(form.category)" item-text="name" item-value="id" label="ประเภทของงาน"></v-autocomplete>
                    <v-text-field  :rules="[$v.req]"  v-model="form.name"  outlined dense label="ตำแหน่งงาน" id="id"></v-text-field>
                    <v-text-field :rules="[$v.req]"   v-model="form.content"  outlined dense label="คำอธิบายแบบย่อ" id="id"></v-text-field>
                    <v-text-field  :rules="[$v.req]"  v-model="form.location"  v- outlined dense label="สถานที่ปฏิบัติงาน" id="id"></v-text-field>
                    <v-text-field :rules="[$v.req]"   v-model="form.salary"  outlined dense label="เงินเดือน" id="id"></v-text-field>
                    <v-text-field :rules="[$v.req]"   v-model="form.member" type="number"  outlined dense label="อัตรา" id="id"></v-text-field>
                    <v-file-input :rules="[$v.req]"   v-model="form.file"  :label="(form.id)?`เปลี่ยนภาพประกอบ`:`ภาพประกอบ`" outlined dense></v-file-input>
                    <v-textarea  :rules="[$v.req]"  v-model="form.detail"  outlined dense textarea label="รายละเอียดของงาน เงื่อนไข คุณสมบัติ สวัสดิการ" placeholder="รายละเอียดของงาน เงื่อนไข คุณสมบัติ สวัสดิการ"></v-textarea>
                    <v-checkbox v-model="form.approve" label="ยินดียอมรับผู้เคยมีประวัติดำเนินคดี" ></v-checkbox>
                    <v-btn @click="(form.id)?updateJob():storeJob()" block depressed color="success">บันทึก</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
export default {
    data: () => ({
        data: [],
        dialog: false,
        form:{},
    }),
    async created() {
      await this.run()
    },
  methods:{
      async run(){
        this.data = await this.$core.getHttp(`/api/job/job-detail/?office=${this.$auth.myOffice.id}`)
      },
      async storeJob(){
          if (this.$refs.vform.validate()){
             try {
               this.dialog = false;
               let job = await this.$core.postHttp(`/api/job/job-detail/`, {office:this.$auth.myOffice.id,...this.form})
               if(job.id){
                 if(this.form.file){
                   let form = new FormData()
                   form.append('image', this.form.file)
                   await this.$core.putImageHttp(`/api/job/job-detail/${job.id}/`, form )
                 }
                 await this.$web.alert(`บันทึกข้อมูลเรียบร้อย`, `success`, `สร้างตำแหน่งงานของคุณเรียบร้อยแล้ว`)
                 this.dialog = false;
                 this.form = {}
                 await this.run();
               }else{
                 await this.$web.alert(`บันทึกข้อมูลไม่สำเร็จ`, `error`, `กรุณาลองใหม่อีกครั้ง`)
               }
             }catch (e){
                await this.$web.alert(`บันทึกข้อมูลไม่สำเร็จ`, `error`, `กรุณาลองใหม่อีกครั้ง`)
               console.log('storeJob',e)

             }
          }
      },
      async openDialog(job){
          this.form = job
          this.dialog = true
      },
    async updateJob(){
      if (this.$refs.vform.validate()){
        try {
          this.dialog = false;
          delete this.form.image
          let job = await this.$core.putHttp(`/api/job/job-detail/${this.form.id}/`, this.form)
          if(job.id){
            if(this.form.file){
              let form = new FormData()
              form.append('image', this.form.file)
              await this.$core.putImageHttp(`/api/job/job-detail/${job.id}/`, form )
            }
            await this.$web.alert(`บันทึกข้อมูลเรียบร้อย`, `success`, `แก้ไขตำแหน่งงานของคุณเรียบร้อยแล้ว`)
            this.dialog = false;
            this.form = {}
            await this.run();
          }else{
            await this.$web.alert(`บันทึกข้อมูลไม่สำเร็จ`, `error`, `กรุณาลองใหม่อีกครั้ง`)
          }
        }catch (e){
          await this.$web.alert(`บันทึกข้อมูลไม่สำเร็จ`, `error`, `กรุณาลองใหม่อีกครั้ง`)
          console.log('updateJob',e)
        }
      }
    },
    async deleteJob(job){
        let check = await this.$web.confirm(`ลบตำแหน่งงาน`, `คุณต้องการลบตำแหน่งงานนี้ใช่หรือไม่?`)
        if (check){
          try {
            let remove = await this.$core.deleteHttp(`/api/job/job-detail/${job.id}/`)
            if(remove){
              await this.$web.alert(`ลบข้อมูลเรียบร้อย`, `success`, `ลบตำแหน่งงานของคุณเรียบร้อยแล้ว`)
              await this.run();
            }else{
              await this.$web.alert(`ลบข้อมูลไม่สำเร็จ`, `error`, `กรุณาลองใหม่อีกครั้ง`)
            }
          }catch (e){
            await this.$web.alert(`ลบข้อมูลไม่สำเร็จ`, `error`, `กรุณาลองใหม่อีกครั้ง`)
            console.log('deleteJob',e)
          }
        }
    }
  }
}
</script>

<style>
      
      </style>
