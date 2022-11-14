<template>
<div> 
    <v-card class="mx-auto my-12" max-width="374" v-for="job,index in data" :key="index" @click="$router.push(`/app/search/detail/`)" >
        <template slot="progress">
            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
        </template>

        <v-img height="150" :src="job.bannerUrl"></v-img>

        <v-card-title>{{job.jobTitle}}</v-card-title>

        <v-card-text> 
            <v-divider class="mt-2"></v-divider> 
            <div class="my-4 text-subtitle-1">
               <div class="flex h-full items-center"> 
                <img class="h-10  mr-2" :src="job.com_logo" alt="">
                <span class="text-xs">{{job.com_name}}</span>
               </div>
            </div> 
            <div>{{job.description}}</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <!-- <v-card-title>Tonight's availability</v-card-title>  -->
        <!-- <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="reserve">
                Reserve
            </v-btn>
        </v-card-actions> -->
    </v-card>
</div>
</template>

  
  
<script>
export default {
    data: () => ({
        data: [],
    }),
    async created() {
        this.data = this.$_.filter(this.$jobs, (job,index) => {
            return index <= 5
        })
    }
}
</script>
  
  
<style>
  
  </style>
