<template>
<div>
    <v-slide-group v-model="model" active-class="success">
        <v-slide-item v-for="img,i in imgs" :key="i" v-slot="{ active, toggle }" class="w-full">
            <v-card  class="ma-2" height="200" :width="($vuetify.breakpoint.width > 700 )?`400`:$vuetify.breakpoint.width-80" @click="toggle">
                <v-img @click="openDialog(img.id)" class="h-full w-full" :src="img.image"></v-img>
            </v-card>
        </v-slide-item>
    </v-slide-group>
    <v-dialog v-model="dialog" fullscreen persistent>
        <v-card>
            <v-card-title primary-title> 
                <v-spacer></v-spacer>
                <v-btn icon   @click="dialog = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text>
                <h2 class="font-semibold text-base">{{ data.name }}</h2>
                
                <v-img :src="data.image" class="w-full h-full mt-4" ></v-img> 
                <div class="mt-4" v-html="data.detail"></div>
            </v-card-text>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
export default {
    data: () => ({
        model: 0,
        imgs: [],
        data: {},
        dialog: false
    }),
    async mounted() {
        await this.run();
    },
    methods: {
        async run() {
            let imgs = await this.$core.getHttp(`/api/application/silde/?is_active=true`)
            imgs = this.$_.filter(imgs, (img) => {
                img.detail = ''
                if (img.end_date == null) {
                    return true
                } else {
                    return this.$moment(img.end_date).isAfter(this.$moment())
                }
            })
            this.imgs = imgs
        },
        async openDialog(id) {
            let data = await this.$core.getHttp(`/api/application/silde/${id}/`)
            this.data = data
            this.dialog = true
        }
    }
}
</script>

<style>
  
  </style>
