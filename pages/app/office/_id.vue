<template>
  <div>
    <v-toolbar flat fixed>
      <v-btn @click="$router.go(-1)" fab x-small outlined>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <div class="ml-2 text-box text-xl"> {{office.name}}</div>
      <v-spacer></v-spacer>
    </v-toolbar>
    <!-- <h1 class="text-xl">Account</h1> -->
    <div class="flex flex-col justify-center items-center p-8 ccx">
      <v-avatar size="150">
        <v-img v-if="office.image" :src="office.image" alt="">
        </v-img>
      </v-avatar>
      <h2 class="font-semibold text-xl mt-2">{{office.name}}</h2>
      <br> <br> <br> <br>
    </div>
    <div class="p-4 -mt-28">
      <v-card>
        <v-card-text>
          <div>
            <v-tabs>
              <v-tab>
                ข้อมูลหน่วยงาน
              </v-tab>
              <v-tab-item>
                <div class="p-4">
                  <v-toolbar color="transparent" dense flat>
                    <h2>ข้อมูลบริษัท หน่วยงาน</h2>
                    <v-spacer></v-spacer>
                  </v-toolbar>
                  <v-text-field readonly dense readonly outlined :value="office.name" label="ชื่อบริษัท หน่วยงาน" id="id"></v-text-field>
                  <v-text-field readonly dense outlined :value="office.address"  label="ที่อยู่" id="id"></v-text-field>
                  <v-text-field readonly dense outlined :value="office.province"  label="ที่อยู่" id="id"></v-text-field>
                  <v-text-field readonly dense outlined :value="office.ampher"  label="ที่อยู่" id="id"></v-text-field>
                  <v-text-field readonly dense outlined :value="office.tumbon"  label="ที่อยู่" id="id"></v-text-field>
                  <v-text-field readonly dense outlined :value="office.zip_code"  label="ที่อยู่" id="id"></v-text-field>
                  <v-textarea readonly dense outlined :value="office.detail" label="รายละเอียดเกี่ยวกับหน่วยงาน"></v-textarea>

                </div>
              </v-tab-item>
              <v-tab>
                การติดต่อ
              </v-tab>
              <v-tab-item>
                <div>

                  <div v-for="contract,i in office.contract">
                    <Core-ListMenu :head="contract.name" :txt="contract.values"></Core-ListMenu>
                    <v-divider></v-divider>
                  </div>

                </div>
              </v-tab-item>

            </v-tabs>

            </div>
        </v-card-text>
      </v-card>
    </div>

  </div>
</template>

<script>
export default {
  name: "office",
  data: () => ({
     office:{}
  }),
  async created() {
    await this.run()
  },
  methods:{
      async run(){
        this.office = await this.$core.getHttp(`/api/job/office/${this.$route.params.id}/`)
      }
  }
}
</script>

<style scoped>

</style>