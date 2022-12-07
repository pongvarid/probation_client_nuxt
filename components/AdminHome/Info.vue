<template>
  <div>
    <div>
      <v-divider></v-divider>
      <div @click="getService">
        <Core-ListMenu
          head="ข้อกำหนดและเงื่อนไข"
          txt=" "
          icon="mdi-arrow-right"
        ></Core-ListMenu>
      </div>
      <v-divider></v-divider>
      <div @click="getPrivacy">
        <Core-ListMenu
          head="นโยบายความเป็นส่วนตัว"
          txt=" "
          icon="mdi-arrow-right"
        ></Core-ListMenu>
      </div>
      <v-divider></v-divider>
      <div @click="getContactUs">
        <Core-ListMenu
          head="ติดต่อเรา"
          txt=" "
          icon="mdi-arrow-right"
        ></Core-ListMenu>
      </div>
      <v-divider></v-divider>
      <Core-ListMenu head="เวอร์ชัน" txt="0.1a"></Core-ListMenu>
      <v-divider></v-divider>
      <div class="p-2">
        <v-btn
          depressed
          block
          color="error"
          large
          class="mt-6"
          @click="logout()"
          >ออกจากระบบ</v-btn
        >
      </div>
    </div>
    <v-dialog
      v-model="dialog"
      scrollable
      :overlay="false"
      max-width="500px"
      transition="dialog-transition"
    >
      <v-card>
        <v-card-title primary-title>
          {{ serviceData.name }} <v-spacer></v-spacer>
          <v-btn icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <div class="p-2">
            <p>{{ serviceData.detail }}</p>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="dialog2"
      scrollable
      :overlay="false"
      max-width="500px"
      transition="dialog-transition"
    >
      <v-card>
        <v-card-title primary-title>
          {{ privacyData.name }}<v-spacer></v-spacer>
          <v-btn icon @click="dialog2 = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <div class="p-2">
            <p>
              {{ privacyData.detail }}
            </p>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="dialog5"
      scrollable
      :overlay="false"
      max-width="500px"
      transition="dialog-transition"
    >
      <v-card>
        <v-card-title primary-title>
          ติดต่อเรา<v-spacer></v-spacer>
          <v-btn icon >
            <v-icon @click="dialog5 = false">mdi-close</v-icon>
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
  name: "Info.vue",
  data() {
    return {
      dialog: false,
      dialog2: false,
      dialog5: false,
      privacyData: [],
      contactUsData: [],
      serviceData: [],
    };
  },
  async created() {},
  methods: {
    async logout() {
      await this.$auth.logout();
      await this.$router.push("/");
    },
    async getPrivacy() {
      try {
        let privacy = await this.$core.getHttp(`/api/application/privacy/`);
        if (privacy) {
          this.dialog2 = true;
          this.privacyData = privacy[0];
        }
        console.log(this.privacyData);
      } catch (e) {
        this.privacyData.name = "ไม่มีข้อมูล";
        console.log(e);
      }
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
        console.log(this.contactUsData);
      } catch (e) {
        this.contactUsData = "ไม่มีข้อมูล";
        console.log(e);
      }
    },
    async getService() {
      try {
        let service = await this.$core.getHttp(`/api/application/service/`);
        if (service) {
          this.dialog = true;
          this.serviceData = service[0];
        }
        console.log(this.serviceData);
      } catch (e) {
        this.serviceData = "ไม่มีข้อมูล";
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>
</style>