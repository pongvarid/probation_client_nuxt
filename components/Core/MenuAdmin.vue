<template>
<v-bottom-navigation fixed style="z-index:9999;">
    <div class="w-full flex justify-center items-center">
        <v-btn color="white" @click="$router.push(`/admin/`)">
            <span>หน้าหลัก</span>
            <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn color="white" @click="$router.push(`/admin/search/`)">
            <span>หาคน</span>
            <v-icon>mdi-card-search</v-icon>
        </v-btn>
        <v-btn color="white" @click="$router.push(`/admin/bookmark/list/`)">
            <span>บุ๊คมาร์ค</span>
            <v-icon>mdi-bookmark</v-icon>
        </v-btn>

        <v-btn color="white" @click="$router.push(`/admin/account/`)">
            <span>หน่วยงาน</span>
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
