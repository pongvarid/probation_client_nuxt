<template>
<div>

    <v-toolbar color="transparent" flat class="mt-4">
        <h2 class="font-semibold text-xl">งานของฉัน</h2>
        <v-spacer></v-spacer>
        <v-btn depressed small @click="dialog=true" color="success">เพิ่มตำแหน่งงาน</v-btn>
    </v-toolbar>
    <v-card class="mx-auto mt-4" max-width="374" v-for="job,index in data" :key="index">
        <template slot="progress">
            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
        </template>
        <div style="position:relative">
            <div class="absolute w-full" style="z-index:99999px;">
                <div class="flex  p-2">
                    <v-spacer></v-spacer>
                    <v-btn depressed fab small @click="dialog=true" color="warning">
                        <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                </div>
            </div>
            <img height="150" :src="job.bannerUrl" />
        </div>

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
    <v-dialog v-model="dialog" scrollable fullscreen persistent :overlay="false" max-width="500px" transition="dialog-transition">
        <v-card>
            <v-card-title primary-title>
                เพิ่มตำแหน่งงาน <v-spacer></v-spacer>
                <v-btn icon @click="dialog = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-autocomplete outlined dense :items="$categories" item-text="name" label="ประเภทของงาน"></v-autocomplete>
                    <v-text-field outlined dense label="สถานที่ปฏิบัติงาน" id="id"></v-text-field>
                    <v-text-field outlined dense label="ตำแหน่งงาน" id="id"></v-text-field>
                    <v-text-field outlined dense label="เงินเดือน" id="id"></v-text-field>
                    <v-text-field outlined dense label="อัตรา" id="id"></v-text-field> 
                    <v-file-input label="ภาพประกอบ" outlined dense></v-file-input>
                    <v-textarea outlined dense textarea label="รายละเอียดของงาน เงื่อนไข คุณสมบัติ สวัสดิการ" placeholder="รายละเอียดของงาน เงื่อนไข คุณสมบัติ สวัสดิการ"></v-textarea>
                    <v-btn block depressed color="success">บันทึก</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
export default {
    data: () => ({
        data: [],
        dialog: false
    }),
    async created() {
        this.data = this.$_.filter(this.$jobs, (job, index) => {
            return job.companyMeta.id == '448566'
        })
    }
}
</script>

<style>
      
      </style>
