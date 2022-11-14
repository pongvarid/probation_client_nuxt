<template>
    <v-bottom-navigation fixed>
      <v-btn  @click="$router.push(`/admin/`)">
          <span>หน้าหลัก</span> 
          <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn  @click="$router.push(`/admin/search/`)">
          <span>หาคน</span> 
          <v-icon>mdi-card-search</v-icon>
      </v-btn> 
      <v-btn  @click="$router.push(`/admin/bookmark/`)">
          <span>บุ๊คมาร์ค</span> 
          <v-icon>mdi-bookmark</v-icon>
      </v-btn>

      <v-btn  @click="$router.push(`/admin/account/`)">
          <span >หน่วยงาน</span> 
          <v-icon>mdi-account</v-icon>
      </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {

}
</script>

<style>

</style>