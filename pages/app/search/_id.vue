<template>
  <div>
    <v-toolbar flat fixed>
      <v-btn @click="$router.go(-1)" fab x-small outlined>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <span class="ml-2 text-xl"> {{job.name}}</span>
      <v-spacer></v-spacer>
      <v-btn fab small outlined color="orange">
        <v-icon>mdi-bookmark</v-icon>
      </v-btn>
    </v-toolbar>

    <img src="https://image-service-cdn.seek.com.au/bd520ed0973dbc871079a9e3c04da6e0d1f6b8f9/a868bcb8fbb284f4e8301904535744d488ea93c1" alt="">
    <h2 class="text-xl ml-4 mr-4 mt-4">{{job.name}}</h2>
    <span class="ml-4 mt-2">{{$kit.dateTH(job.created_at)}}</span>
    <v-divider></v-divider>
    <div class="flex items-center p-4" @click="$router.push(`/admin/account/view/`)" v-if="job.office">
      <img class="h-10" :src="job.office.image" alt="">
      <span  class="text-xs ml-2">{{job.office.name}}</span>
    </div>
    <v-divider></v-divider>
    <div class="bg-purple-100 rounded p-2 m-2">
      <Core-List icon="mdi-map" head="สถานที่ปฏิบัติงาน" :txt="job.location"></Core-List>
      <Core-List icon="mdi-cash" head="เงินเดือน" :txt="job.salary"></Core-List>
      <Core-List icon="mdi-account" head="อัตรา" :txt="job.member"></Core-List>
    </div>

    <div class="p-4">
      <h2>รายละเอียดงาน</h2>
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
    job: {}
  }),
  async created() {
    this.job = await this.$core.getHttp(`/api/job/job-detail/${this.$route.params.id}/`)
  }
}
</script>

<style>

</style>
