<template>
  <div>
    <v-toolbar flat fixed>
      <v-btn @click="$router.go(-1)" fab x-small outlined>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <div class="ml-2 text-box text-xl"> {{job.name}}</div>
      <v-spacer></v-spacer>
      <v-btn v-if="check" @click="addBookMark" fab small outlined color="orange">
        <v-icon>mdi-bookmark</v-icon>
      </v-btn>
    </v-toolbar>

    <img v-if="job.image" :src="job.image" alt="">

    <h2 class="text-xl ml-4 mr-4 mt-4">{{job.name}}</h2>
    <span class="ml-4 mt-2">{{$kit.dateTH(job.created_at)}}</span>


    <v-divider></v-divider>
    <div class="flex items-center p-4" @click="$router.push(`/app/office/${job.office_data.id}/`)" v-if="job.office_data">
      <img v-if="job.office_data.image" class="h-10" :src="$url+job.office_data.image" alt="">
      <span  class="text-xs ml-2">{{job.office_data.name}}</span>
    </div>
    <v-divider></v-divider>
    <div class="bg-purple-100 rounded p-2 m-2">
      <Core-List icon="mdi-map" head="สถานที่ปฏิบัติงาน" :txt="job.location"></Core-List>
      <Core-List icon="mdi-cash" head="เงินเดือน" :txt="job.salary"></Core-List>
      <Core-List icon="mdi-account" head="อัตรา" :txt="job.member"></Core-List>
    </div>

    <div class="p-4">

      <div class="w-full flex">
        <h2 class="font-semibold">รายละเอียดงาน</h2>
        <v-spacer></v-spacer>
        <v-chip v-if="job.approve"  color="success" class="m-2"  small><v-icon size="20" class="mr-2">mdi-check-circle</v-icon> ยินดีรับผู้เคยถูกดำเนินคดี</v-chip>
      </div>

      <div class="mt-4" v-html="job.detail"></div>

      <div class="bg-green-100 rounded p-2 m-2" v-if="job.office">
        <Core-List v-for="contact,i in job.office_data.contract" :key="i" icon="" :head="contact.name" :txt="contact.values"></Core-List>

      </div>

    </div>
    <br><br><br>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: true,
    job: {},
    check: false,
  }),
  async created() {
    await this.run()
  },

  methods:{
    async run(){
      this.job = await this.$core.getHttp(`/api/job/job-detail/${this.$route.params.id}/`)
      this.check = await this.$auth.getExistBookMark(this.job.id)
      await this.storeView()
    },
    async addBookMark(){
      let check = await this.$auth.getExistBookMark(this.job.id)
      if(check){
        let add = await this.$core.postHttp(`/api/account/user-bookmark/`,{job:Number(this.$route.params.id),user:Number(this.$auth.user.id)})
        if(add.id){
          await this.$web.alert(`เพิ่มรายการโปรดเรียบร้อย`, `success`)
          await this.$auth.setUser()
          await this.run()
        }
      }
    },
    async storeView(){
       try {
         await this.$core.putHttp(`/api/job/job-detail/${this.$route.params.id}/`,{views:this.job.views+1})
       }catch (e){
         console.log(e)
       }
    }
  }
}
</script>

<style>
.text-box {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>
