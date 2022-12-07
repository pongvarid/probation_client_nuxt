<template>
  <div class="p-4">
    <h2>ข้อมูลส่วนตัว</h2><br>
    <v-text-field disabled dense readonly outlined v-model="form.code_id"  label="รหัส" id="id"></v-text-field>
    <v-text-field disabled dense readonly outlined v-model="form.first_name"   label="ชื่อ" id="id"></v-text-field>
    <v-text-field disabled dense readonly outlined v-model="form.last_name"    label="นามสกุล" id="id"></v-text-field>
    <v-text-field type="date" disabled dense readonly outlined v-model="form.birth_date"   label="วัน/เดือน/ปี เกิด" id="id"></v-text-field>
    <v-text-field disabled dense readonly outlined v-model="form.age"    label="อายุ" id="id"></v-text-field>
    <v-text-field disabled dense readonly outlined v-model="form.code"    label="เลขบัตรประจำตัวประชาชน" id="id"></v-text-field>
    <v-text-field disabled dense readonly outlined v-model="form.gender"    label="เพศ" id="id"></v-text-field>
    <h2>ข้อมูลการติดต่อ</h2><br>
    <v-text-field dense outlined v-model="form.phone_number"  label="เบอร์โทร" id="id"></v-text-field>
    <v-text-field dense outlined v-model="form.address"    label="ที่อยู่" id="id"></v-text-field>
    <v-btn @click="update()" depressed block color="success">แก้ไขข้อมูลการติดต่อ</v-btn>
  </div>
</template>

<script>
export default {
  name: "General",
  data:()=>({
    form:{}
  }),
  async created(){
    await this.run();
  },
  methods:{
    async run(){
      this.form = this.$auth.user;
      delete this.form.image_profile;
      delete this.form.skill;
      delete this.form.bookmark;
    },
    async update(){
      let check = await this.$web.confirm("ยืนยันการแก้ไขข้อมูล","คุณต้องการแก้ไขข้อมูลการติดต่อหรือไม่");
      if(check){
        let user = await this.$core.putHttp(`/api/account/userprofile/${this.$auth.user.id}/`,this.form);
        if(user.id){
          await  this.$web.alert("แก้ไขข้อมูลสำเร็จ","success","แก้ไขข้อมูลการติดต่อสำเร็จ");
          await this.$auth.setUser();
        }
      }
    }
  },
  computed:{
    user(){
      return this.$auth.user
    }
  }
}
</script>

<style scoped>

</style>