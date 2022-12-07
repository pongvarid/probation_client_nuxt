<template>
  <div>
    <v-toolbar flat fixed >
      <v-btn @click="$router.go(-1)" fab x-small outlined>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <span class="ml-2 text-xl"> {{`${user.first_name} ${user.last_name}`}}</span>
      <v-spacer></v-spacer>
      <v-btn v-if="bookmark" @click="addBookMark" fab small outlined color="orange">
        <v-icon>mdi-bookmark</v-icon>
      </v-btn>
    </v-toolbar>
    <!-- <h1 class="text-xl">Account</h1> -->
    <div class="flex flex-col justify-center items-center mt-4 ccx">
      <v-avatar size="150">
        <v-img v-if="user.image_profile" :src="user.image_profile" alt="">
        </v-img>
        <v-icon v-else>mdi-account</v-icon>
      </v-avatar>

      <h2 class="font-semibold text-xl"> {{`${user.first_name} ${user.last_name}`}}</h2>
      <br>  <br>  <br>  <br>
    </div>
    <div class="p-4  -mt-28">
      <v-card>
        <v-card-text>
          <v-tabs>
            <v-tab>
              ข้อมูลส่วนตัว
            </v-tab>
            <v-tab-item>
              <div class="p-4">
                <div>
                  <h2>ข้อมูลส่วนตัว</h2><br>
                  <v-text-field :value="`${user.first_name} ${user.last_name}`" dense readonly outlined  label="ชื่อ" id="id"></v-text-field>
                  <v-text-field :value="`${user.birth_date}`"  dense readonly outlined  type="date" label="วัน/เดือน/ปี เกิด" id="id"></v-text-field>
                  <v-text-field dense readonly outlined :value="`${user.age}`"label="อายุ" id="id"></v-text-field>
                  <v-text-field dense readonly outlined :value="`${user.gender}`"label="เพศ" id="id"></v-text-field>
                  <h2>ข้อมูลการติดต่อ</h2><br>
                  <v-text-field dense readonly outlined :value="`${user.phone_number}`" label="เบอร์โทร" id="id"></v-text-field>
                  <v-text-field dense readonly outlined  :value="`${user.address}`" label="ที่อยู่" id="id"></v-text-field>
                </div>

              </div>
            </v-tab-item>
            <v-tab>
              การทำงาน
            </v-tab>
            <v-tab-item>
              <div class="p-4">
                <v-toolbar color="transparent" dense flat>
                  <h2>ความสามารถ</h2>
                </v-toolbar>
                <div class="mt-4">
                  <v-chip v-for="skill, i in user.skills" :key="i"   class="m-1">#{{skill.name}}</v-chip>
                </div>

                <v-toolbar color="transparent" dense flat class="mt-4">
                  <h2>ประวัติการทำงาน</h2>
                  <v-spacer></v-spacer>
                </v-toolbar>

                <div class="mt-4" v-for="history,i in user.job_history" :key="i">
                  <v-card outlined>
                    <v-card-text>
                      <h2 class="text-xl">{{history.job}}</h2>
                      <p>{{history.organize}}</p>
                      <p>{{history.count_year}}</p>
                    </v-card-text>
                  </v-card>
                </div>
              </div>
            </v-tab-item>

          </v-tabs>
        </v-card-text>
      </v-card>
    </div>
    <div class="mt-4">


    </div>
  </div>
</template>


<script>
export default {
  layout: 'admin',
  data: () =>{
    return ({
      user:{},
      bookmark: true,
    })
  },
  async created() {
    await this.run();
    await this.getBookMark();
  },
  methods:{
    async run(){
        await this.getUser()
    },
    async getUser(){
      try {
        this.user = await this.$core.getHttp(`/api/account/userprofile/${this.$route.params.id}/`)
      } catch (error) {
        console.log(error);
      }
    },
    async getBookMark(){
      try {
        let check = await this.$core.getHttp(`/api/job/office-bookmark/?user=${this.user.id}&office=${this.$auth.myOffice.id}`)
        this.bookmark = (check.length > 0) ? false : true

      }catch (error) {
        console.log(error);
      }
    },
    async addBookMark(){
      let add = await this.$core.postHttp(`/api/job/office-bookmark/`,{user:Number(this.$route.params.id),office:Number(this.$auth.myOffice.id)})
      if(add.id){
        await this.$web.alert(`เพิ่มรายการโปรดเรียบร้อย`, `success`)
        await this.$auth.setUser()
        await this.run()
        await this.getBookMark();
      }
    },
  }
}
</script>


<style>

</style>
