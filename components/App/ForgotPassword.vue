<template>
  <div>
    <v-dialog v-model="dialogContect" persistent>
      <v-card>
        <v-card-title primary-title>
          กรุณาติดต่อผู้ดูแลระบบ<v-spacer></v-spacer>
          <v-btn icon>
            <v-icon @click="tryThis()">mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <Core-list
            v-for="(contactData, index) in contactUsData"
            :key="index"
            :head="contactData.name"
            :txt="contactData.values"
            icon=""
          ></Core-list>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    dialog: {
      default: false,
    },
  },
  emits: ["backward"],
  name: "ForgotPassword.vue",
  data() {
    return {
      dialogContect: false,
      contactUsData: [],
      oo: this.dialog,
    };
  },
  async created() {
    this.dialogContect = this.dialog;
    await this.getContactUs();
  },
  methods: {
    tryThis() {
      this.dialogContect = false;
      console.log("trying");
      this.$emit("backward", false);
    },
    async getContactUs() {
      try {
        let contactUs = await this.$core.getHttp(
          `/api/application/contact-us/`
        );
        if (contactUs) {
          this.dialog5 = true;
          this.contactUsData = contactUs;
        }
      } catch (e) {
        this.contactUsData = "ไม่มีข้อมูล";
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>
</style>