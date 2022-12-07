<template>
    <v-app v-if="response">
        <v-main  >
            <nuxt class="pb-20" />    
        </v-main>
        <Core-MenuAdmin></Core-MenuAdmin>
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
      if(!this.$auth.user.is_employer){
        await this.$router.replace('/app/');
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

