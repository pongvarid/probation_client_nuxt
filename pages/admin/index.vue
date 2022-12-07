<template>
<div>
    <div class="xbg">
        <div class="flex  p-5 w-full ">
            <div class="flex flex-col">
                <span>สวัสดี,</span><span class="text-xl font-semibold">{{office.name}}</span>

            </div>
            <v-spacer></v-spacer>
            <v-avatar size="40" color="blue">
                <v-img v-if="office.image"  :src="$url+office.image" alt="">
                </v-img>
              <span v-else class="text-white">{{office.name}}</span >
                </v-avatar>
        </div>
        <Home-Slide></Home-Slide>
    </div>

    <AdminHome-LastJob></AdminHome-LastJob>
    
</div>
</template>

<script>
export default {
    layout: 'admin',
    name: 'IndexPage',
    data: () => ({
        dialog: false,
    }),
  async created(){

  },
  methods:{
      async run(){

      }
  },
  computed:{
    office(){
        return this.$auth.myOffice
    }
  }
}
</script>
