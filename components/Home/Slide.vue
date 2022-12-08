<template>
<v-slide-group v-model="model"  active-class="success">
    <v-slide-item v-for="img,i in imgs" :key="i" v-slot="{ active, toggle }" class="w-full">
        <v-card class="ma-2" height="200" :width="($vuetify.breakpoint.width > 700 )?`400`:$vuetify.breakpoint.width-80" @click="toggle">
            <v-img class="h-full w-full" :src="img.image"></v-img>
        </v-card>
    </v-slide-item>
</v-slide-group>
</template>

<script>
export default {
    data: () => ({
        model: 0,
        imgs:[ ]
    }),
    async mounted() {
      await this.run();
    },
    methods: {
        async run(){
             let imgs = await this.$core.getHttp(`/api/application/silde/?is_active=true`)
            imgs = this.$_.filter(imgs, (img) => {
               if(img.end_date == null){
                 return true
               }else{
                  return this.$moment(img.end_date).isAfter(this.$moment())
               }
          })
             this.imgs = imgs
        }
    }
}
</script>

<style>
  
  </style>
