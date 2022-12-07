<template>
<div>

  <v-toolbar color="transparent" dense flat class="mt-4">
    <h2>ประวัติการทำงาน</h2>
    <v-spacer></v-spacer>
    <v-btn small depressed @click="dialog3=true" color="success">เพิ่มข้อมูล</v-btn>
  </v-toolbar>
  <v-dialog v-model="dialog3" scrollable persistent :overlay="false" max-width="500px" transition="dialog-transition">
    <v-card>
      <v-card-title primary-title>
        <span class="headline">ประวัติการทำงาน</span>
        <v-spacer></v-spacer>
        <v-btn icon @click="dialog3 = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-form ref="vform">
          <v-text-field :rules="[$v.req]" v-model="form.job" class="mt-4" dense outlined   label="ตำแหน่ง" id="id"></v-text-field>
          <v-text-field :rules="[$v.req]" v-model="form.organize"  dense outlined   label="หน่วยงาน บริษัท" id="id"></v-text-field>
          <v-text-field :max="form.end_year" :rules="[$v.req]" v-model="form.start_year" type="date" dense outlined  label="เริ่มงาน" id="id"></v-text-field>
          <v-text-field :min="form.start_year" :rules="[$v.req]" v-model="form.end_year"  type="date"  dense outlined  label="สิ้นสุด" id="id"></v-text-field>
          <v-btn @click="storeJobHistory()" depressed block color="success">บันทึก</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>

  <div class="mt-4" v-for="history,i in histories" :key="i">
    <v-card outlined>
      <v-card-text>
        <h2 class="text-xl">{{history.job}}</h2>
        <p>{{history.organize}}</p>
        <p>{{history.count_year}}</p>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn outlined @click="deleteJobHistory(history.id)" color="error" depressed small>
          <v-icon>mdi-delete</v-icon> ลบข้อมูล
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>

</div>
</template>

<script>
export default {
  name: "JobHistory",
  data: () => ({
    dialog3: false,
    form: {},
    histories:[],
  }),
  async created() {
    await this.run()
  },
  methods:{
    async run(){
      await this.getJobHistory()
    },
    async getJobHistory(){
      try {
        let data = await this.$core.getHttp(`/api/account/job-history/?user=${this.$auth.user.id}`)
        this.histories = data
      }catch (e){
        console.log('getJobHistory',e)
      }
    },
    async storeJobHistory(){
      try {
        if(this.$refs.vform.validate()){
          this.dialog3 = false
          let data = await this.$core.postHttp(`/api/account/job-history/`,{user:this.$auth.user.id,...this.form})
          if(data.id){
            await this.$web.alert('บันทึกข้อมูลเรียบร้อยแล้ว','success',)
          }
          this.form = {}
          await this.getJobHistory()
        }
      }catch (e){
        console.log('storeJobHistory',e)
      }
    },

    async deleteJobHistory(id){
      try {
        let check = await this.$web.confirm('ยืนยันการลบข้อมูล',`คุณต้องการลบข้อมูลนี้ใช่หรือไม่`)
        if(check){
          let data = await this.$core.deleteHttp(`/api/account/job-history/${id}/`)
          if(data){
            await this.$web.alert('ลบข้อมูลเรียบร้อยแล้ว','success',)
          }
          await this.getJobHistory()
        }
      }catch (e){
        console.log('deleteJobHistory',e)
      }
    }
  },
}
</script>

<style scoped>

</style>