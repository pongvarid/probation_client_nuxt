<template>
<div class="bbg">
    <div class="p-4  ">
        <h2 class="text-xl font-semibold">งานที่บันทึกไว้ </h2>
     
    </div>

    <v-card class="mx-auto mt-4" max-width="374" v-for="job,index in bookmarks" :key="index" @click="$router.push(`/app/search/${job.job}/`)">
        <template slot="progress">
            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
        </template>


        <v-img contain height="150" :src="$url+job.image"></v-img>

        <v-card-title>{{job.name}}</v-card-title>

        <v-card-text>
          <v-divider class="mt-2"></v-divider>
          <div class="my-4 text-subtitle-1">
            <div class="flex h-full items-center">
              <img class="h-auto w-16  mr-2" :src="$url+job.office_data.image" alt="">
              <span class="text-xs">{{job.office_data.name}}</span>
            </div>
          </div>
          <div>{{job.content}}</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>
        <div class="flex">
          <v-spacer></v-spacer>
          <span class="mr-6 text-xs p-2">{{$kit.dateTH(job.bookmark_add)}}</span>
        </div>


    </v-card>

</div>
</template>

    
    
<script>
export default {
    data: () => ({
        bookmarks:[],
    }),
    async created() {
        await this.run()
    },
  methods:{
      async run(){
        let bookmarks = this.$_.map(this.$auth.myBookMark,(r)=>{
          return {...r.job_data,"bookmark_id":r.id, "bookmark_add":r.created_at}
        })
        this.bookmarks =  bookmarks
      }
  }
}
</script>
    
    
<style>
.bbg {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='800' height='500' preserveAspectRatio='none' viewBox='0 0 800 500'%3e%3cg mask='url(%26quot%3b%23SvgjsMask4800%26quot%3b)' fill='none'%3e%3crect width='800' height='500' x='0' y='0' fill='rgba(255%2c 204%2c 204%2c 1)'%3e%3c/rect%3e%3crect width='228' height='228' clip-path='url(%26quot%3b%23SvgjsClipPath4801%26quot%3b)' x='245.11' y='339.44' fill='url(%23SvgjsPattern4802)' transform='rotate(85.81%2c 359.11%2c 453.44)'%3e%3c/rect%3e%3cpath d='M169.49 151.98L180.42 158.66 176.3 170.79 187.22 177.47 183.1 189.59 194.03 196.27 189.91 208.4M161.97 154.7L172.89 161.38 168.77 173.51 179.7 180.19 175.58 192.32 186.51 199 182.39 211.12M154.45 157.43L165.37 164.11 161.25 176.23 172.18 182.91 168.06 195.04 178.99 201.72 174.87 213.84' stroke='rgba(231%2c 54%2c 53%2c 0.38)' stroke-width='2.08' stroke-dasharray='3%2c 3'%3e%3c/path%3e%3cpath d='M47.99 161.09a5.6 5.6 0 1 0 9.66 5.68 5.6 5.6 0 1 0-9.66-5.68zM61.78 169.2a5.6 5.6 0 1 0 9.66 5.68 5.6 5.6 0 1 0-9.66-5.68zM75.58 177.31a5.6 5.6 0 1 0 9.65 5.68 5.6 5.6 0 1 0-9.65-5.68zM89.37 185.42a5.6 5.6 0 1 0 9.65 5.68 5.6 5.6 0 1 0-9.65-5.68zM12.3 158.66a5.6 5.6 0 1 0 9.65 5.68 5.6 5.6 0 1 0-9.65-5.68zM26.09 166.77a5.6 5.6 0 1 0 9.65 5.68 5.6 5.6 0 1 0-9.65-5.68zM39.88 174.88a5.6 5.6 0 1 0 9.65 5.68 5.6 5.6 0 1 0-9.65-5.68zM53.67 182.99a5.6 5.6 0 1 0 9.66 5.68 5.6 5.6 0 1 0-9.66-5.68z' fill='rgba(66%2c 68%2c 90%2c 1)'%3e%3c/path%3e%3ccircle r='59.20138994313817' cx='222.82' cy='59.3' stroke='rgba(66%2c 68%2c 90%2c 1)' stroke-width='2.89' stroke-dasharray='4%2c 4'%3e%3c/circle%3e%3cpath d='M541 55.14L532.28 64.53 521.21 58.09 512.5 67.48 501.43 61.04 492.72 70.42 481.65 63.98M539.82 47.23L531.11 56.62 520.04 50.18 511.32 59.56 500.25 53.12 491.54 62.51 480.47 56.07M538.64 39.32L529.93 48.7 518.86 42.26 510.15 51.65 499.08 45.21 490.36 54.6 479.29 48.16' stroke='rgba(255%2c 255%2c 255%2c 0.41)' stroke-width='2.73' stroke-dasharray='4%2c 4'%3e%3c/path%3e%3crect width='100' height='100' clip-path='url(%26quot%3b%23SvgjsClipPath4803%26quot%3b)' x='197.63' y='-18.62' fill='url(%23SvgjsPattern4804)' transform='rotate(245.94%2c 247.63%2c 31.38)'%3e%3c/rect%3e%3ccircle r='62.73399871025873' cx='40.09' cy='272.32' fill='rgba(211%2c 183%2c 20%2c 0.42)'%3e%3c/circle%3e%3cpath d='M563.39 498.76a5.6 5.6 0 1 0 11.16-0.94 5.6 5.6 0 1 0-11.16 0.94zM579.33 497.42a5.6 5.6 0 1 0 11.17-0.94 5.6 5.6 0 1 0-11.17 0.94zM595.28 496.08a5.6 5.6 0 1 0 11.16-0.94 5.6 5.6 0 1 0-11.16 0.94zM611.22 494.74a5.6 5.6 0 1 0 11.16-0.94 5.6 5.6 0 1 0-11.16 0.94zM532.84 517.38a5.6 5.6 0 1 0 11.16-0.94 5.6 5.6 0 1 0-11.16 0.94zM548.79 516.04a5.6 5.6 0 1 0 11.16-0.94 5.6 5.6 0 1 0-11.16 0.94zM564.73 514.7a5.6 5.6 0 1 0 11.16-0.94 5.6 5.6 0 1 0-11.16 0.94zM580.67 513.36a5.6 5.6 0 1 0 11.16-0.93 5.6 5.6 0 1 0-11.16 0.93z' fill='rgba(203%2c 203%2c 206%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask4800'%3e%3crect width='800' height='500' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern4802'%3e%3cpath d='M0 6L3 0L6 6' stroke='rgba(255%2c 255%2c 255%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath4801'%3e%3ccircle r='57' cx='359.11' cy='453.44'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='100' height='10' patternUnits='userSpaceOnUse' id='SvgjsPattern4804'%3e%3crect width='100' height='5' x='0' y='0' fill='rgba(203%2c 203%2c 206%2c 1)'%3e%3c/rect%3e%3crect width='100' height='5' x='0' y='5' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath4803'%3e%3ccircle r='25' cx='247.63' cy='31.38'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
}
</style>
