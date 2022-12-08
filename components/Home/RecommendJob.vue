<template>
<div  :class="($vuetify.breakpoint.width > 700 )?`flex flex-wrap`:``">
    <div  class="p-1"  :class="($vuetify.breakpoint.width > 700 )?`w-1/3`:``"  v-for="job,index in data" :key="index" >
      <v-card    max-width="374"  @click="$router.push(`/app/search/${job.id}/`)" >
        <template slot="progress">
          <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
        </template>

        <v-img height="150" :src="job.image">
          <v-chip v-if="job.approve"  color="success" class="m-2"  small><v-icon size="20" class="mr-2">mdi-check-circle</v-icon> ยินดีรับผู้เคยถูกดำเนินคดี</v-chip>
        </v-img>

        <v-card-title  style="height:80px;"  class="text-limit " >{{job.name}}   </v-card-title>

        <v-card-text style="height:150px;">
          <v-divider class="mt-2"></v-divider>
          <div class="my-4 text-subtitle-1" v-if="job.office_data">
            <div class="flex h-full items-center">
              <img class="h-10  mr-2" :src="$url+job.office_data.image" alt="">
              <span class="text-xs">{{job.office_data.name}}</span>

            </div>
          </div>
          <div class="text-limit ">{{job.content}}</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>
        <v-card-actions>
          <span class="text-xs">{{$kit.dateTH(job.created_at)}}</span>
          <v-spacer></v-spacer>
          <v-chip small ><v-icon class="mr-2">mdi-eye</v-icon> {{job.views}}</v-chip>
        </v-card-actions>
      </v-card>
    </div>
</div>
</template>

  
  
<script>
export default {
    data: () => ({
        data: [],
    }),
    async created() {
        this.data = await this.$core.getHttp(`/api/job/job-detail/`)
    }
}
</script>
  
  
<style>
  
  </style>
