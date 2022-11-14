<template>
<div>
    <v-toolbar   flat fixed>
        <v-btn @click="$router.go(-1)" fab x-small outlined>
            <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <span class="ml-2 text-xl"> เจ้าหน้าที่พัฒนาทรัพยากรบุคคล</span>
        <v-spacer></v-spacer>
        <v-btn fab small outlined color="orange">
            <v-icon>mdi-bookmark</v-icon>
        </v-btn>
    </v-toolbar>

    <img src="https://image-service-cdn.seek.com.au/bd520ed0973dbc871079a9e3c04da6e0d1f6b8f9/a868bcb8fbb284f4e8301904535744d488ea93c1" alt="">
    <h2 class="text-xl ml-4 mr-4 mt-4">เจ้าหน้าที่พัฒนาทรัพยากรบุคคล ประจำสำนักงานใหญ่ ปฏิบัติงาน จันทร์-ศุกร์</h2>
    <span class="ml-4 mt-2">ลงประกาศเมื่อ 8 ชั่วโมงที่ผ่านมา</span>
    <v-divider></v-divider>
    <div class="flex items-center p-4">
        <img class="h-10" src="https://image-service-cdn.seek.com.au/528193c5d2dd760dd6041c07f9c34b5571d98c46/ee4dce1061f3f616224767ad58cb2fc751b8d2dc" alt="">
        <span class="text-xs ml-2">Secretary to CEO (Junior Level CHIA TAI CO., LTD.</span>
    </div>
    <v-divider></v-divider>
    <div class="bg-purple-100 rounded p-2 m-2">
        <Core-List icon="mdi-map" head="สถานที่ปฏิบัติงาน" txt="อ.คลองหลวง จ.ปทุมธานี"></Core-List>
        <Core-List icon="mdi-cash" head="เงินเดือน" txt="20,000-30,000 บาท"></Core-List>
        <Core-List icon="mdi-account" head="อัตรา" txt="1"></Core-List>
    </div>

    <div class="p-4">
        <h2>รายละเอียดงาน</h2>
        <p>
            <br>-ฝึกอบรมและพัฒนาบุคลากร เพื่อให้บุคลากรของบริษัท มีทักษะ ความรู้ ความสามารถ ที่สอดคล้องกับหน้าที่รับผิดชอบ รวมถึงการมีทัศนคติ พฤติกรรม ที่พึงประสงค์
            <br>-ฝึกอบรมภายในบริษัทฯ (In-house Training) ประสานงานและดำเนินการจัดฝึกอบรม / พัฒนาพนักงานภายในบริษัทฯ / ฝึกอบรมภายนอกบริษัท (Public Training) ประสานงานการจัดส่งพนักงานเข้ารับการฝึกอบรมและร่วมสัมมนาภายนอกบริษัทฯ ติดตามประเมินผลการฝึกอบรม ติดตามการจัดทำรายงานการฝึกอบรม และบันทึกข้อมูลการฝึกอบรมเข้าในระบบ
            <br>-รวบรวมเอกสาร หนังสือ อุปกรณ์ และเครื่องมือเครื่องใช้ที่เกี่ยวกับการเรียนรู้ของพนักงาน เก็บไว้ในคลังความรู้ เพื่อให้พนักงานเข้าไปศึกษาและเรียนรู้เพิ่มเติมเกี่ยวกับเรื่องที่พนักงานสนใจ
            <br>-ติดต่อสื่อสารกับสาขาและส่วนงานอื่นๆ เพื่อที่จะกำหนดข้อมูลของบุคลากรในแต่ละหน่วยงาน

        </p>

        <h2>คุณสมบัติผู้สมัคร</h2>
        <p>
            <br>-ไม่จำกัดเพศ อายุ 25 ปีขึ้นไป
            <br>-วุฒิปริญญาตรีในสาขาที่เกี่ยวข้อง
            <br>-มีประสบการด้านการฝึกอบรม 2 ปีขึ้นไป
            <br>-สามารถติดต่อและสื่อสารได้เป็นอย่างดี
            <br>-มีทักษะในการนําเสนอ,การประสานงาน และทักษะในการเจรจา
            <br>-ทนแรงกดดันและแก้ไขปัญหาเฉพาะหน้าได้ดีและทันต่อสถานะการณ์ต่างๆ
            <br>-สามารถเดินทางไปปฏิบัติงานหน้าร้านได้(บางครั้ง)
            <br>-มีความอดทน เรียนรู้ไว
            <br>-มีใบขับขี้รถยนต์ และรถยนต์เป็นของตัวเองจะพิจารณาเป็นพิเศษ
            <br>-สามารถเริ่มงานได้ทันที จะพิจารณาเป็นพิเศษ
        </p>

        <div class="bg-green-100 rounded p-2 m-2">
            <Core-List icon="mdi-phone" head="ติดต่อ" txt="0988203979"></Core-List>
            <Core-List icon="mdi-chat" head="Line" txt="@pongv"></Core-List> 
        </div>

    </div>
    <br><br><br>
</div>
</template>

<script>
export default {
    data: () => ({
        dialog: true,
        job: {}
    }),
    async created() {
        this.job = this.$job
    }
}
</script>

<style>

</style>
