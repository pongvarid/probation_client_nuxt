<template>
 <div> 
   
     <v-data-table :search="search" :headers="headers" :items="items" class="mt-4">

         <template v-slot:top>
             <v-text-field outlined dense v-model="search" label="ค้นหา" class="mx-4 pt-2"></v-text-field>
         </template>

         <template v-slot:item.id="{ item, index }">
             {{index+1}}
         </template>
         <template v-slot:item.created_at="{ item }">
             {{$kit.dateTH(item.created_at)}}
         </template>
         <template v-slot:item.updated_at="{ item }">
             {{$kit.dateTH(item.created_at)}}
         </template>
         <template v-slot:item.job_name="{ item }">
             <span class="font-semibold">{{item.job_name}}</span>
         </template>
         <template v-slot:item.status_name="{ item }">
             <span class="font-semibold" :class="item.status_color">{{item.status_name}}</span>
         </template>
         <template v-slot:item.action="{ item }"> 
             <v-btn :disabled="item.status != 0" depressed @click="remove(item)" color="error" small>
                 <v-icon>mdi-delete</v-icon> ยกเลิกการสมัคร 
             </v-btn>
         </template>

     </v-data-table>

 </div>
</template>

   
<script>
import {
    Core
} from "@/vuexes/core";
import {
    Web
} from "@/vuexes/web";
import {
    Auth
} from "@/vuexes/auth";
import _ from "lodash";
import moment from "moment";
export default {
    data: () => {
        return {
            req: v => !!v || "ฟิลล์นี้ต้องระบุข้อมูล",
            items: [],
            headers: [ {
                    text: 'งาน',
                    sortable: true,
                    value: 'job_name', 
                },
                {
                    text: 'บริษัท / หน่วยงาน',
                    sortable: true,
                    value: 'job_office',
                },
                {
                    text: 'วันที่สมัคร',
                    sortable: true,
                    value: 'created_at',
                }, 
                {
                    text: 'สถานะ',
                    sortable: true,
                    value: 'status_name',
                },  
                {
                    text: 'จัดการ',
                    sortable: false,
                    value: 'action',
                }
            ], 
            search: "",
            form: {},
            core: Core, 
        };
    },
    async created() {
        await this.run();
    },
    methods: {
        async run() {
            this.items = await Core.getHttp(`/api/account/request/?user=${Auth.user.id}`);
             
        },  
        async remove(item) {
            let check = await Web.confirm('คุณแน่ใจใช่ไหมที่จะยกเลิกการสมัครงานนี้')
            if (check) {
                let data = await Core.deleteHttp('/api/account/request/' + item.id + '/')
                if (data) {
                    await Web.alertAuto('ยกเลิกการสมัครสำเร็จ');
                } 
                await this.run()
            }
        },
 
 
    },
    
}
</script>
