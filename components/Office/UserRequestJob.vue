<template>
<div>
    <v-dialog v-model="dialog" scrollable persistent max-width="500px" transition="dialog-transition">
        <v-card>
            <v-card-title primary-title>
                จัดการข้อมูล <v-spacer></v-spacer>
                <v-btn text @click="run()" color="error">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text>
                <v-form ref="form">
                    <v-select outlined dense type="choice" label="สถานะ" v-model="form.status" :rules="[$v.req]" item-text="name" item-value="value" :items="[ 
                                { name: 'รับสมัครเข้าทำงาน', value: 1 },
                                { name: 'ไม่รับสมัครเข้าทำงาน', value: 2 }, 
                            ]"></v-select>
                    <div class="flex">
                        <v-spacer></v-spacer>
                        <v-btn @click="(form.id)?update():store()" :color="(form.id)?'warning':'success'">บันทึกข้อมูล</v-btn>
                    </div>
                </v-form>

            </v-card-text>
        </v-card>
    </v-dialog>

    <v-data-table :search="search" :headers="headers" :items="items">

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
            <v-btn  :disabled="item.status != 0"  depressed @click="openUpdateDialog(item)" color="warning" small>
                <v-icon>mdi-pencil</v-icon>แก้ไขข้อมูล
            </v-btn>
            <v-btn dark depressed @click="$router.push(`/admin/search/${item.user}/`)" color="primary" small>
                <v-icon>mdi-account</v-icon> ดูข้อมูล
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
            headers: [{
                    text: 'งาน',
                    sortable: true,
                    value: 'job_name',
                },
                {
                    text: 'ผู้สมัคร',
                    sortable: true,
                    value: 'user_name',
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
            page: 1,
            maxPage: 3,
            search: "",
            form: {},
            core: Core,
            dialog: false,
        };
    },
    async created() {
        await this.run();
    },
    methods: {
        async run() {
            try {
                let officeId = this.$auth.myOffice.id
                this.items = await Core.getHttp(`/api/account/request/?job__office=${officeId}`);
                await this.closeDialog()
            } catch (error) {
                this.items = []
            }
        },

        async closeDialog() {
            this.form = {}
            this.dialog = false;
        },
        async openUpdateDialog(item) {
            this.form = item
            this.dialog = true
        },
        async update() {

            this.dialog = false
            let check = await Web.confirm('คุณแน่ใจใช่ไหมที่จะรับสมัครบุคคลนี้เข้าทำงาน')
            if (check && this.$refs.form.validate()) {
                let data = await Core.putHttp('/api/account/request/' + this.form.id + '/', this.form)
                if (data.id) {
                    await Web.alertAuto('บันทึกข้อมูลสำเร็จ');
                    await this.closeDialog()
                    await this.run()
                } else {
                    await Web.alertAuto('ลบข้อมูลไม่สำเร็จ', '1000', 'error');
                }
            } else {
                this.dialog = true
            }
        }, 
 
    }
}
</script>
