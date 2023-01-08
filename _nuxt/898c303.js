(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{824:function(t,e,n){"use strict";n.r(e);var r=n(2),o=(n(30),n(40),n(9),n(54),n(55),n(52),n(47)),c=n(61),l=n.n(c),m={layout:"test",data:function(){return{t:"<template> <div> ",et:"</div> </template>",dhtml:"",forms:"",tables:"",script:"",host:"/api/account/request/",maps:{}}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var data,n,r,c,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.options("".concat(t.host)).then((function(t){return t.data}));case 2:return data=e.sent,n=data.actions.POST,r=Object.keys(n),c=l.a.values(n),m=l.a.map(c,(function(e,n){var o=e;return o.key=r[n],o.type2=t.getType(e.type),o.label="nested object"==e.type?o.label+"(FK)":o.label,o})),t.maps=m,e.next=10,t.genForm(m);case 10:return t.forms=e.sent,e.next=13,t.getDatable(m);case 13:return t.tables=e.sent,e.next=16,t.getScript(m);case 16:t.script=e.sent;case 17:case"end":return e.stop()}}),e)})))()},methods:{genForm:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var html,r,o,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(html='<v-form ref="form">\n',r=0;r<t.length;r++)"id"!=(o=t[r]).key&&"created_at"!=o.key&&"updated_at"!=o.key&&(html+='<v-text-field  outlined dense  type="'.concat(e.getType(o.type),'"  label="').concat(o.label,'" v-model="form.').concat(o.key,'"  :rules="[').concat(o.required?"v => !!v || '"+o.label+" ต้องระบุข้อมูล' ":"",']" ></v-text-field>\n'));return html+='<div class="flex">\n                            <v-spacer></v-spacer>\n                            <v-btn @click="(form.id)?update():store()" :color="(form.id)?\'warning\':\'success\'">บันทึกข้อมูล</v-btn>\n                        </div>\n',data='\n                 <v-dialog \n\n                    v-model="dialog"\n                    scrollable   \n                    persistent \n                    max-width="500px"\n                    transition="dialog-transition"\n                >  \n                    <v-card>  \n                    <v-card-title primary-title> \n                        จัดการข้อมูล <v-spacer></v-spacer>\n                        <v-btn text @click="closeDialog()" color="error"><v-icon>mdi-close</v-icon></v-btn> \n                    </v-card-title> \n                    <v-card-text> \n                        '.concat(html+="</v-form>\n"," \n                    </v-card-text> \n                    </v-card> \n                </v-dialog> \n                "),n.abrupt("return",data);case 6:case"end":return n.stop()}}),n)})))()},getDatable:function(t){return Object(r.a)(regeneratorRuntime.mark((function t(){var html;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return html="",html+='\n                          <v-toolbar color="transparent" flat>\n                        การจัดการข้อมูล <v-spacer></v-spacer>\n                        <v-btn @click="dialog=true" color="primary">เพิ่มข้อมูล</v-btn> \n                    </v-toolbar> \n\n                  <v-data-table    :search="search" \n                    :headers="headers"\n                    :items="items"  >\n    \n                    <template v-slot:top> \n                            <v-text-field outlined dense v-model="search" label="ค้นหา" class="mx-4 pt-2"></v-text-field>\n                        </template> \n                        \n                      <template v-slot:item.id="{ item, index }">\n                    {{index+1}}\n                </template>\n                      <template v-slot:item.created_at="{ item }">\n                            {{core.dateTTH(item.created_at)}}\n                    </template>\n                      <template v-slot:item.updated_at="{ item }">\n                         {{core.dateTTH(item.created_at)}}\n                    </template>\n                        <template v-slot:item.action="{ item }">\n                            <v-btn @click="openUpdateDialog(item)" color="warning" small><v-icon>mdi-pencil</v-icon>แก้ไขข้อมูล</v-btn>\n                            <v-btn  @click="remove(item)"  color="error"  small  ><v-icon>mdi-delete</v-icon> ลบข้อมูล</v-btn>\n                    </template>\n    \n                </v-data-table>\n                ',t.abrupt("return",html);case 3:case"end":return t.stop()}}),t)})))()},getType:function(t){return"string"==t?"text":"integer"==t?"number":t},getScript:function(t){var html="<script>";html+='import { Core } from "@/vuexes/core";\n',html+='import { Web } from "@/vuexes/web";\n',html+='import { Auth } from "@/vuexes/auth";\n',html+='import _ from "lodash";\n',html+='import moment from "moment";\n',html+="export default {\n",html+="data: () => {\n",html+="return {\n",html+='req: v => !!v || "ฟิลล์นี้ต้องระบุข้อมูล",\n',html+="items: [],\n",html+="headers: [\n";for(var e=0;e<t.length;e++){var n=t[e];html+="{\n                        text: '".concat(n.label,"', \n                        sortable: true,\n                        value: '").concat(n.key,"',\n                    },")}return html+="\n{\n                      text: 'จัดการ', \n                        sortable: false,\n                        value: 'action',\n                }],\n",html+="page: 1,\n",html+="maxPage: 3,\n",html+='search: "",\n',html+="form: {},\n",html+="core: Core,\n",html+="dialog: false,\n",html+="};\n",html+="},\n",html+="async created() {\n",html+="await this.run();\n",html+="},methods:{\n",html=(html+="async run() {\n")+"this.items = await Core.getHttp(`"+this.host+"?page=${this.page}&search=${this.search}`);\n",html+="await this.closeDialog()\n",html+="},\n",html+=this.genUpdate(),html+="async store() {\n",html=(html+="if(this.$refs.form.validate()) {\n")+"let data = await Core.postHttp(`"+this.host+"`, this.form)\n",html+="if (data.id) {\n",html+="await Web.alertAuto(`บันทึกข้อมูลสำเร็จ`); \n await this.run(); }else{\n                        this.dialog = false\n                        await Web.alertAuto('บันทึกข้อมูลไม่สำเร็จ',2000,'error'); \n                        await this.run();\n                    } \n}\n}\n}\n}\n <\/script>",html+=""},genUpdate:function(){return"\n                async closeDialog(){\n                    this.form = {}\n                    this.dialog = false; \n                },\n                async openUpdateDialog(item){\n                    this.form = item\n                    this.dialog = true\n                }, \n                async update() {\n \n                    this.dialog = false\n                    let check = await Web.confirm('คุณแน่ใจใช่ไหมที่จะแก้ไขข้อมูลนี้')\n                    if(check && this.$refs.form.validate()){\n                    let data = await Core.putHttp('".concat(this.host,"'+this.form.id+'/',this.form)\n                    if(data.id){\n                        await Web.alertAuto('บันทึกข้อมูลสำเร็จ');\n                        await this.closeDialog()\n                        await this.run()\n                    } else{\n                            await Web.alertAuto('ลบข้อมูลไม่สำเร็จ','1000','error');\n                    } }else{\n                        this.dialog = true\n                    }\n                },  \n                async remove(item){\n                    let check = await Web.confirm('คุณแน่ใจใช่ไหมที่จะลบข้อมูลนี้')\n                    if(check){\n                        let data = await Core.deleteHttp('").concat(this.host,"'+item.id+'/')\n                        if(data){\n                            await Web.alertAuto('ลบข้อมูลสำเร็จ');\n                        } \n                        await this.closeDialog()\n                        await this.run()\n                    }\n                }, \n    \n                ")}}},d=n(63),component=Object(d.a)(m,(function(){var t=this,e=t._self._c;return e("div",[e("br"),e("br"),t._v(" "),e("xmp",[t._v("\n        "+t._s(t.t)+"\n        "+t._s(t.forms)+"\n        "+t._s(t.tables)+"\n        "+t._s(t.et)+"\n        "+t._s(t.script)+"\n    ")])],1)}),[],!1,null,null,null);e.default=component.exports}}]);