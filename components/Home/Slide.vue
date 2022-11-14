<template>
<v-slide-group v-model="model"  active-class="success">
    <v-slide-item v-for="img,i in imgs" :key="i" v-slot="{ active, toggle }" class="w-full">
        <v-card class="ma-2" height="200" :width="$vuetify.breakpoint.width-80" @click="toggle">
            <v-img class="h-full w-full" :src="img"></v-img>
        </v-card>
    </v-slide-item>
</v-slide-group>
</template>

<script>
export default {
    data: () => ({
        model: 0,
        imgs:[
        'https://media.chiangmainews.co.th/q:i/r:0/wp:1/w:1/u:https://www.chiangmainews.co.th/wp-content/uploads/2022/10/08/2759968/1665221491_161326-chiangmainews.jpg',
            'https://maxtvthailandonline.com/wp-content/uploads/2022/03/A748EAD5-8D55-459F-8259-51CC68CFAA69.jpg',
          
        ]
    })
}
</script>

<style>
  
  </style>
