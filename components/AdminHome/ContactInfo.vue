<template>
  <div>
    <v-toolbar color="transparent" dense flat class="mt-4">
      <h2>ข้อมูลการติดต่อ</h2>
      <v-spacer></v-spacer>
      <v-btn small depressed color="success" @click="dialog = true"
        >เพิ่มข้อมูล</v-btn
      >
    </v-toolbar>
    <v-dialog
      v-model="dialog"
      fullscreen
      persistent
      :overlay="false"
      max-width="500px"
      transition="dialog-transition"
    >
      <v-card tile>
        <v-form ref="vform">
          <v-card-title class="headline"
            >เพิ่มข้อมูลการติดต่อ<v-spacer></v-spacer>
            <v-btn icon @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn></v-card-title
          >
          <v-card-text>
            <v-text-field
              dense
              outlined
              :rules="[$v.req]"
              v-model="form.name"
              label="ชื่อผู้ติดต่อ"
              id="id"
            ></v-text-field>
            <v-text-field
              dense
              outlined
              :rules="[$v.req]"
              v-model="form.values"
              label="รายละเอียดการติดต่อ"
              id="id"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="success"
              depressed
              @click="form.id ? updateContact() : storeContact()"
              >บันทึก</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
    <v-divider class="mt-4"> </v-divider>
    <div>
      <div v-for="(info, index) in data" :key="index">
        <v-card-text>
          <div class="my-4 text-subtitle-2">
            <div class="flex h-full items-center">
              <span class="ml-2"> {{ info.name }}</span>
              <v-spacer></v-spacer>
              <span>{{ info.values }}</span>
            </div>
          </div>
        </v-card-text>
        <!-- <v-divider></v-divider> -->
        <v-card-actions
          ><v-spacer></v-spacer>
          <v-btn depressed fab x-small @click="openDialog(info)" color="warning">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn depressed fab x-small @click="deleteContact(info)" color="error">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-card-actions>

        <v-divider></v-divider>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Info.vue",
  data() {
    return {
      dialog: false,
      form: {},
      data: [],
    };
  },
  async created() {
    await this.run();
  },
  methods: {
    async run() {
      this.data = await this.$core.getHttp(
        `/api/job/contract/?office=${this.$auth.myOffice.id}`
      );
      console.log(this.data);
    },
    async storeContact() {
      if (this.$refs.vform.validate()) {
        try {
          this.dialog = false;
          let contact = await this.$core.postHttp(
            `/api/job/contract/?office=${this.$auth.myOffice.id}`,
            {
              office: this.$auth.myOffice.id,
              ...this.form,
            }
          );
          if (contact.id) {
            await this.$web.alert(
              `บันทึกข้อมูลเรียบร้อย`,
              `success`,
              `เพิ่มข้อมูลการติดต่อของคุณเรียบร้อยแล้ว`
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
          console.log("storeContact", e);
        }
      }
      console.log(this.form.office);
    },
    async openDialog(info) {
      this.form = info;
      this.dialog = true;
    },
    async updateContact() {
      if (this.$refs.vform.validate()) {
        try {
          let job = await this.$core.putHttp(
            `/api/job/contract/${this.form.id}/`,
            this.form
          );
          if (job.id) {
            await this.$web.alert(
              `บันทึกข้อมูลเรียบร้อย`,
              `success`,
              `แก้ไขข้อมูลการติดต่อคุณเรียบร้อยแล้ว`
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
    async deleteContact(info) {
      let check = await this.$web.confirm(
        `ลบข้อมูลการติดต่อ`,
        `คุณต้องการลบข้อมูลการติดต่อนี้ใช่หรือไม่?`
      );
      if (check) {
        try {
          let remove = await this.$core.deleteHttp(
            `/api/job/contract/${info.id}/`
          );
          if (remove) {
            await this.$web.alert(
              `ลบข้อมูลเรียบร้อย`,
              `success`,
              `ลบข้อมูลการติดต่อของคุณเรียบร้อยแล้ว`
            );
            await this.run();
          } else {
            await this.$web.alert(
              `ลบข้อมูลไม่สำเร็จ`,
              `error`,
              `กรุณาลองใหม่อีกครั้ง`
            );
          }
        } catch (e) {
          await this.$web.alert(
            `ลบข้อมูลไม่สำเร็จ`,
            `error`,
            `กรุณาลองใหม่อีกครั้ง`
          );
          console.log("deleteJob", e);
        }
      }
    },
  },
};
</script>

<style scoped>
</style>