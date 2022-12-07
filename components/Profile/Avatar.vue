<template>
  <div class="flex flex-col justify-center items-center p-8 ccx">

    <v-avatar size="150">
      <v-img v-if="user.image_profile" src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t1.6435-9/148118814_1376793679324214_1244265604538678512_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=pAmN7IOn38UAX-eQcZs&_nc_ht=scontent.fcnx3-1.fna&oh=00_AfAU17UQmBErYgGqGqobV6h7KbME8dw-12f6pZ0Cf9DJWQ&oe=63934A24" alt="">
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