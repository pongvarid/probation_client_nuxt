<template>
<div>
    <center>
        <img class="w-40" src="@/assets/images/006-jobs.png" alt="">
        <h2 class="font-semibold text-2xl mt-4">คุมประพฤติ</h2>
        <span class="font-semibold">สมัครสมาชิกผู้ประอบการ </span>
    </center>
    <div class="p-4">
        <v-card outlined>
            <v-card-text>
                <v-form ref="vform">
                    <v-text-field :rules="[$v.req]" v-model="form.username" dense outlined label="ชื่อผู้ใช้"></v-text-field>
                    <v-text-field :rules="[$v.req]"  v-model="form.password" dense type="password" outlined label="รหัสผ่าน"></v-text-field>
                    <v-text-field :rules="[$v.req]"  v-model="form.password_confirm" dense type="password" outlined label="ยืนยันรหัสผ่าน"></v-text-field>
                    <v-text-field :rules="[$v.req]"  v-model="form.email" dense outlined label="อีเมล"></v-text-field>

                    <v-text-field :rules="[$v.req]"  v-model="formCom.name" dense outlined label="ชื่อบริษัท หน่วยงาน"></v-text-field>
                    <v-text-field :rules="[$v.req]"  v-model="formCom.address" dense outlined label="ที่อยู่"></v-text-field>

                    <v-btn @click="register()" class="mt-6" depressed block color="primary">สมัครสมาชิก</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
        <v-divider></v-divider><br>
        <v-btn outlined class="mt-6" depressed block @click="$router.push(`/auth/adminlogin/`)" color="primary">กลับไปหน้าเข้าสู่ระบบ</v-btn>

    </div>

    <v-dialog v-model="dialog" scrollable fullscreen persistent :overlay="false" max-width="500px" transition="dialog-transition">
        <v-card>
            <v-card-title primary-title>
                เงื่อนไขการสมัครสมาชิก
            </v-card-title>
            <v-card-text>
               <p> <b>เงื่อนไขการสมัครสมาชิก</b><br> 
                เงื่อนไขข้อตกลงและสิทธิประโยชน์การเป็นสมาชิก (สำหรับบริษัทหาคน)<br>
                <b>เงื่อนไขข้อตกลง</b><br> 
                การเป็นสมาชิกเพื่อประกาศตำแหน่งงานว่าง และค้นหาใบสมัครงาน สามารถเลือกเป็นสมาชิก แบบไม่มีค่าใช้จ่าย หรือ แบบมีค่าใช้จ่ายขึ้นอยู่กับความต้องการของแต่ละบริษัท (โปรดศึกษาความแตกต่างของสมาชิกแต่ละประเภท)
                สมาชิก 1 บริษัทสามารถมีได้ 1 account เท่านั้น ดังนั้นก่อนการสมัครสมาชิกโปรดแน่ใจว่า บริษัทของท่านยังไม่เคยเป็นสมาชิกมาก่อน
                โปรดกรอกข้อมูลบริษัทให้ครบถ้วนและเป็นความจริงเท่านั้น หากพบเจอหรือมีการแจ้งว่าข้อมูลบริษัทดังกล่าวไม่ถูกต้องหรือไม่เหมาะสม อาจมีการยกเลิกการเป็นสมาชิกโดยไม่ต้องแจ้งให้ทราบล่วงหน้า
                บริษัทสมาชิกที่ทำธุรกิจเกี่ยวกับ MLM ประกันชีวิต บัตรเครดิต หรือ บริษัทที่ต้องการรับสมัครพนักงานจำนวนมาก/ตลอดเวลา ไม่สามารถสมัครเป็นสมาชิกแบบ FREE ได้
                ห้ามประกาศรับสมัครพนักงานเพื่อทำงานที่ ผิดกฎหมาย ผิดศิลธรรม หรือ งานที่คนส่วนใหญ่ในสังคมไม่ยอมรับ หากพบเห็นจะดำเนินการยกเลิกการเป็นสมาชิกโดยทันที
                ห้ามประกาศข้อความอื่นใดที่ไม่ใช่ตำแหน่งงานว่าง หากพบเห็นข้อความดังกล่าวจะถูกลบทิ้ง และอาจมีการพิจารณายกเลิกการเป็นบริษัทสมาชิก
                หากเกิดการฟ้องร้อง ไม่พึงพอใจ หรือเกิดเหตุการณ์ใดก็แล้วแต่ อันเนื่องมาจากข้อมูล (ข้อความ,รูปภาพ,ภาพเคลื่อนไหว,ไฟล์ข้อมูล) ที่สมาชิกเป็นผู้เพิ่มข้อมูล ทางทีมงาน jobnorththailand.com อาจมีการพิจารณายกเลิกการเป็นบริษัทสมาชิก และไม่ขอรับผิดชอบในข้อมูลดังกล่าวไม่ว่ากรณีใดๆ ทั้งสิ้น
                เว็บไซต์นี้มีการเผยแพร่ข้อมูลส่วนบุคคล เช่น ข้อมูลบริษัท โปรดทำความเข้าใจ นโยบายคุ้มครองสิทธิส่วนบุคคล
                คลิก ฉันยอมรับตามเงื่อนไขดังกล่าว</p>
            </v-card-text>
            <v-card-actions>
                <v-checkbox label="ยอมรับเงื่อนไขการให้บริการ" v-model="agreement" >  </v-checkbox>
                <v-spacer></v-spacer>
                <v-btn v-if="agreement" color="primary" flat @click="register">สมัครสมาชิก</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

</div>
</template>

<script>
export default {
    layout: 'auth',
    data: () => ({
      form:{},
      formCom:{},
        dialog:false,
        agreement: false,
    }),
    methods: {
        async register() {
          if(this.$refs.vform.validate()){
            if(this.form.password_confirm == this.form.password){
              let reg = await this.$auth.register({...this.form,is_employer:true,firsname:"Admin",lastname:this.formCom.name,display_name:this.formCom.name})
              if(reg.id){
                this.formCom.user = reg.id
                let com = await this.$core.postHttp('/api/job/office/',this.formCom)
                if(com.id){
                  await this.$web.alert(`สมัครสมาชิกเรียบร้อยแล้ว`,`success`,`งานของคุณจะยังไม่แสดงในเว็บไซต์ จนกว่าผุ้ดูแลระบบจะตรวจสอบและอนุมัติ`)
                  this.$router.push('/login')
                }
              }
            }else {
              await this.$web.alert('รหัสผ่านไม่ตรงกัน','error','กรุณากรอกรหัสผ่านให้ตรงกัน')
            }
          }
        }
    }
}
</script>

<style>
    
    </style>
