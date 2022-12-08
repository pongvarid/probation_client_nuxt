<template>
  <v-app >
    <v-main class="bghhhP">
        <nuxt class="pb-20 " />
    </v-main> 
</v-app>
</template>

<script>
export default {
  async mounted() {
    await this.run();
  },
  methods: {
    async run(){
      await this.$auth.checkUserLogin();

    }
  }

}
</script>

<style>

</style>