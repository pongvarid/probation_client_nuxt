<template>
<div>
    <v-toolbar flat fixed >
        <v-btn @click="$router.go(-1)" fab x-small outlined>
            <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <span class="ml-2 text-xl"> นางสาวเอ นามสมมุติ</span>
        <v-spacer></v-spacer>
        <v-btn fab small outlined color="orange">
            <v-icon>mdi-bookmark</v-icon>
        </v-btn>
    </v-toolbar>
    <!-- <h1 class="text-xl">Account</h1> -->
    <div class="flex flex-col justify-center items-center mt-4 ccx">
        <v-avatar size="150">
            <img src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t1.6435-9/148118814_1376793679324214_1244265604538678512_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=pAmN7IOn38UAX-eQcZs&_nc_ht=scontent.fcnx3-1.fna&oh=00_AfAU17UQmBErYgGqGqobV6h7KbME8dw-12f6pZ0Cf9DJWQ&oe=63934A24" alt="">
        </v-avatar>
        <h2 class="font-semibold text-xl">นางสาวเอ นามสมมุติ</h2>
        <br>  <br>  <br>  <br>
    </div>
    <div class="p-4  -mt-28">
        <v-card>
            <v-card-text>
                <v-tabs>
            <v-tab>
                ข้อมูลส่วนตัว
            </v-tab>
            <v-tab-item>
                <div class="p-4">
                    <h2>ข้อมูลส่วนตัว</h2><br>
                    <v-text-field dense readonly outlined value="นางสาวเอ" label="ชื่อ" id="id"></v-text-field>
                    <v-text-field dense readonly outlined value="นามสมมุติ" label="นามสกุล" id="id"></v-text-field>
                    <v-text-field dense readonly outlined value="17-08-2541" label="วัน/เดือน/ปี เกิด" id="id"></v-text-field>
                    <v-text-field dense readonly outlined value="24" label="อายุ" id="id"></v-text-field>
                    <v-text-field dense readonly outlined value="หญิง" label="เพศ" id="id"></v-text-field>
                    <h2>ข้อมูลการติดต่อ</h2><br>
                    <v-text-field dense readonly outlined value="0874456689" label="เบอร์โทร" id="id"></v-text-field>
                    <v-text-field dense readonly outlined value="445 ม.14 ต.แม่กา อ.เมืองพะเยา จ.พะเยา" label="ที่อยู่" id="id"></v-text-field>

                </div>
            </v-tab-item>
            <v-tab>
                การทำงาน
            </v-tab>
            <v-tab-item>
                <div class="p-4">
                    <v-toolbar color="transparent" dense flat>
                        <h2>ความสามารถ</h2>
                    </v-toolbar>
                    <div class="mt-4">
                        <v-chip close class="m-1">#งานสวน</v-chip>
                        <v-chip close class="m-1">#งานธุรการ</v-chip>
                        <v-chip close class="m-1">#งานช่าง</v-chip>
                        <v-chip close class="m-1">#ครู</v-chip>
                        <v-chip close class="m-1">#ไอที</v-chip>
                        <v-chip close class="m-1">#แม่บ้าน</v-chip>
                    </div>

                    <v-toolbar color="transparent" dense flat class="mt-4">
                        <h2>ประวัติการทำงาน</h2>
                        <v-spacer></v-spacer>
                    </v-toolbar>

                    <div class="mt-4">
                        <v-card>
                            <v-card-text>
                                <h2 class="text-xl">เจ้าหน้าที่บริหารงานทั่วไป</h2>
                                <p>สำนักงานเทศบาลตำบลแม่กา</p>
                                <p>2550 - 2555 (6 ปี)</p>
                            </v-card-text>
                        </v-card>
                    </div>
                </div>
            </v-tab-item>

        </v-tabs>
            </v-card-text>
        </v-card>
    </div>
    <div class="mt-4">
   

    </div>
</div>
</template>

    
    
<script>
export default {
    layout: 'admin',
    data: () => ({
        dialog: false,
        dialog2: false,
        dialog3: false,
        dialog4: false,
        dialog5: false,
    }),
}
</script>
    
    
<style>
    
    </style>
