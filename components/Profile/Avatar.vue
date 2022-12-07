<template>
  <div class="flex flex-col justify-center items-center p-8 ccx">

    <v-avatar size="150">
      <v-img v-if="user.image_profile" :src="user.image_profile" alt="">
      </v-img>
      <v-icon v-else>mdi-account</v-icon>
    </v-avatar>
    <h2 class="font-semibold text-xl mt-2">{{user.first_name}} {{user.last_name}}</h2>
    <br>  <br>  <br>  <br>
  </div>
</template>

<script>
export default {
  name: "Work",
  computed:{
    user(){
      return this.$auth.user
    }
  }
}
</script>

<style scoped>

</style>