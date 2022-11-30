<template>
      <v-bottom-navigation fixed>
        <div class="w-full flex justify-center items-center">
            <v-btn color="white"  @click="$router.push(`/app/`)">
            <span>หน้าหลัก</span> 
            <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn color="white"  @click="$router.push(`/app/search/`)">
            <span>หางาน</span> 
            <v-icon>mdi-card-search</v-icon>
        </v-btn> 
        <v-btn color="white"  @click="$router.push(`/app/bookmark/`)">
            <span>งานที่บันทึกไว้</span> 
            <v-icon>mdi-bookmark</v-icon>
        </v-btn>

        <v-btn color="white"  @click="$router.push(`/app/account/`)">
            <span >ฉัน</span> 
            <v-icon>mdi-account</v-icon>
        </v-btn>
        </div>
    </v-bottom-navigation>
</template>

<script>
export default {

}
</script>

<style>

</style>