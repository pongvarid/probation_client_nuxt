<template>
  <div class="p-4">
    <v-toolbar color="transparent" dense flat>
      <h2>ข้อมูลบริษัท หน่วยงาน</h2>
      <v-spacer></v-spacer> </v-toolbar
    ><v-form ref="vform" class="mt-4">
      <v-text-field
        :rules="[$v.req]"
        close
        dense
        readonly
        outlined
        v-model="form.name"
        label="ชื่อบริษัท หน่วยงาน"
      ></v-text-field>
      <v-text-field
        :rules="[$v.req]"
        dense
        outlined
        v-model="form.address"
        label="ที่อยู่"
      ></v-text-field>
      <v-text-field
        :rules="[$v.req]"
        dense
        outlined
        v-model="form.tumbon"
        label="ตำบล / แขวง"
      ></v-text-field>
      <v-text-field
        :rules="[$v.req]"
        dense
        outlined
        v-model="form.ampher"
        label="อำเภอ / เขต"
      ></v-text-field>
      <v-text-field
        :rules="[$v.req]"
        dense
        outlined
        v-model="form.province"
        label="จังหวัด"
      ></v-text-field>
      <v-text-field
        :rules="[$v.req]"
        dense
        outlined
        v-model="form.zip_code"
        label="รหัสไปรษณีย์"
      ></v-text-field>
      <v-file-input v-model="form.file" dense outlined label="ภาพโลโก้"></v-file-input>
      <v-textarea
        :rules="[$v.req]"
        dense
        outlined
        label="รายละเอียดเกี่ยวกับหน่วยงานของคุณ"
        v-model="form.detail"
      ></v-textarea>
      <v-btn
        @click="updateOffice() "
        depressed
        block
        color="success"
        >แก้ไขข้อมูล</v-btn
      >
    </v-form>
  </div>
</template>

<script>
export default {
  name: "Info.vue",
  data() {
    return {
      form: {},
      data: [],
    };
  },
  async created() {
    await this.run();
  },
  methods: {
    async run() {
      await this.$auth.setUser();
      this.form = this.$auth.myOffice;
      console.log(this.form);
    },
    async updateOffice() {
      if (this.$refs.vform.validate()) {
        try {
          delete this.form.image;
          let job = await this.$core.putHttp(
            `/api/job/office/${this.form.id}/`,
            this.form
          );
          if (job.id) {
            if(this.form.file){
              let form = new FormData();
              form.append("image", this.form.file);
               await this.$core.putImageHttp(
                `/api/job/office/${job.id}/`,
                form
              );

            }
            await this.$web.alert(
              `บันทึกข้อมูลเรียบร้อย`,
              `success`,
              `แก้ไขข้อมูลหน่วยงานของคุณเรียบร้อยแล้ว`
            );
            this.dialog = false;
            this.form = {};
            await this.run();
          } else {
            await this.$web.alert(
              `บันทึกข้อมูลไม่สำเร็จ`,
              `error`,
              `กรุณาลองใหม่อีกครั้ง`
            );
          }
        } catch (e) {
          await this.$web.alert(
            `บันทึกข้อมูลไม่สำเร็จ`,
            `error`,
            `กรุณาลองใหม่อีกครั้ง`
          );
          console.log("updateJob", e);
        }
      }
    },
  },
};
</script>

<style scoped>
</style>