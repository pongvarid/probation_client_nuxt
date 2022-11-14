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
                <v-form>
                    <v-text-field dense outlined label="ชื่อผู้ใช้"></v-text-field>
                    <v-text-field dense type="password" outlined label="รหัสผ่าน"></v-text-field>
                    <v-text-field dense outlined label="อีเมล"></v-text-field>
                    <v-text-field dense outlined label="ชื่อบริษัท หน่วยงาน"></v-text-field>
                    <v-text-field dense outlined label="ที่อยู่"></v-text-field>
                    <v-text-field dense outlined label="เบอร์โทรติดต่อ"></v-text-field>
                    <v-btn class="mt-6" depressed block @click="register" color="primary">สมัครสมาชิก</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
        <v-divider></v-divider><br>
    <v-btn outlined class="mt-6" depressed block @click="$router.push(`/auth/adminlogin/`)" color="primary">กลับไปหน้าเข้าสู่ระบบ</v-btn>

    </div> 

</div>
</template>

<script>
export default {
    layout: 'auth',
    data: () => ({

    }),
    methods: {
        async register() {
            await this.$web.alert('สมัครสมาชิกสำเร็จ', 'success', `ขอบคุณที่สมัครสมาชิกกับเรา ทางผู้ดูแลระบบต้องดำเนินการตรวจสอบข้อมูลหน่วยงานของคุณก่อน และจะติดต่อกลับไปภายใน 1-2 วันทำการ เพื่อยืนยันการสมัครสมาชิก`)
        }
    }
}
</script>

<style>
    
    </style>
