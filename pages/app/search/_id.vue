<template>
  <div v-if="response">
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

    <v-img class="w-full" v-if="job.image" :src="job.image" alt="">
      <v-chip class="m-4"  color="info">{{job.category_name}}</v-chip>
    </v-img>

    <h2 class="text-xl ml-4 mr-4 mt-4 font-semibold">{{job.name}}</h2>

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

      <div class="mt-4 p-4 bg-gray-100" v-html="job.detail"></div>
      <br>  
      <div class="w-full">
        <h2 class="font-semibold">การทำงาน</h2> 
        <div class="bg-gray-100 rounded p-2 m-2" >
        <Core-List icon="" head="วันทำงาน" :txt="job.date_work"></Core-List>
        <Core-List icon="" head="เวลาทำงาน" :txt="job.time_work"></Core-List>
        <Core-List icon="" head="อัตราจ้าง" :txt="job.rate"></Core-List>
        </div>  
        <br> 
      </div>

      <div class="w-full">
        <h2 class="font-semibold">คุณสมบัติ</h2> 
        <div class="bg-gray-100 rounded p-2 m-2" >
        <Core-List icon="" head="เพศ" :txt="job.gender"></Core-List>
        <Core-List icon="" head="อายุ" :txt="job.age"></Core-List>
        <Core-List icon="" head="วุฒิการศึกษา" :txt="job.education"></Core-List>
        <Core-List icon="" head="สาขาวิชา" :txt="job.major"></Core-List>
        <Core-List icon="" head="ประสบการณ์ทำงาน" :txt="job.experience"></Core-List>
        </div>  
        <br> 
      </div>

      <div class="w-full">
        <h2 class="font-semibold">เงื่อนไขในการทำงาน</h2> 
        <div class="m-1 p-4 bg-gray-100" v-html="job.working_condition"></div>  
        <br> 
        <h2 class="font-semibold">วิธีการคัดเลือก</h2> 
        <div class="m-1 p-4 bg-gray-100" v-html="job.selection_method"></div>  
        <br> 
        <h2 class="font-semibold">ระยะเวลาทดลองงาน</h2> 
        <div class="m-1 p-4 bg-gray-100" v-html="job.trial_period"></div>  
        <br> 
        <h2 class="font-semibold">สวัสดิการ</h2> 
        <div class="m-1 p-4 bg-gray-100" v-html="job.welfare_benefit"></div>  
        <br> 
      </div>

      <div class="w-full flex">
        <h2 class="font-semibold">การติดต่อ</h2>  
      </div>
      <div class="bg-green-100 rounded p-2 m-2" v-if="job.office">
        <Core-List v-for="contact,i in job.office_data.contract" :key="i" icon="" :head="contact.name" :txt="contact.values"></Core-List>

      </div>

      <Office-RequestJob :id="job.id"></Office-RequestJob>

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
    response:false,
  }),
  async created() {
    await this.run()
  },

  methods:{
    async run(){
      this.job = await this.$core.getHttp(`/api/job/job-detail/${this.$route.params.id}/`)
      this.check = await this.$auth.getExistBookMark(this.job.id)
      await this.storeView()
      this.response = true
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
