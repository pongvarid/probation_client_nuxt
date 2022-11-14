<template>
<div>
    
    <v-slide-group class="pa-4" active-class="success">
        <v-slide-item v-for="company,index in companies" :key="index" v-slot="{ active, toggle }" class="w-full">
            <v-card outlined class="ma-2" height="100" width="100" >
                <div class="p-2 flex flex-col w-full h-full justify-center ">
                    <img class="w-auto" :src="company.logo" alt=""> 
                </div>
            </v-card>
        </v-slide-item>
    </v-slide-group>
</div>
</template>

<script>
import data from '@/assets/data/job.json'
export default {
    data: () => ({
        data: data.jobs,
        companies: [],
    }),
    async created() {
        this.companies = this.$_.map(data.jobs, (r) => {
            return {
                name: (r.companyMeta.name).split(' ')[0],
                logo: r.companyMeta.logoUrl,
                slug: r.companyMeta.slug
            }
        })
    }
}
</script>

<style>
  
  </style>
