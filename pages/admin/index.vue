<template>
<div>
    <div class="xbg">
        <div class="flex  p-5 w-full ">
            <div class="flex flex-col">
                <span>สวัสดี,</span><span class="text-xl font-semibold">THAI UNION GROUP PCL.</span>
            </div>
            <v-spacer></v-spacer>
            <v-avatar size="40">
                <v-img src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t1.6435-9/148118814_1376793679324214_1244265604538678512_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=pAmN7IOn38UAX-eQcZs&_nc_ht=scontent.fcnx3-1.fna&oh=00_AfAU17UQmBErYgGqGqobV6h7KbME8dw-12f6pZ0Cf9DJWQ&oe=63934A24" alt="">
                </v-img>
                </v-avatar>
        </div>
        <Home-Slide></Home-Slide>
    </div>

    <AdminHome-LastJob></AdminHome-LastJob>
    
</div>
</template>

<script>
export default {
    layout: 'admin',
    name: 'IndexPage',
    data: () => ({
        dialog: false,
    }),
}
</script>
