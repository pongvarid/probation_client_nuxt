<template>
<v-app> 
    <v-main v-if="response" >
        <nuxt class="pb-20" />
    </v-main>
    <Core-Menu></Core-Menu>
</v-app>
</template>

<script>
export default {
  data: () => ({
    response: false,
  }),
  async created() {
    await this.$auth.checkUserLogin();
    try {
      if(this.$auth.user.is_employer){
        await this.$router.replace('/admin/');
      }
    }catch (e) {
      console.log(e);
    }
    this.response = true;

  },
  methods: {

  },
  watch: {
    async $route(to, from) {
      await this.$auth.checkUserLogin()
    }
  }
}
</script>

