<template>
<div class="bgho">
    <v-toolbar flat fixed>
        <v-btn @click="$router.go(-1)" fab x-small outlined>
            <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <span class="ml-2 text-xl"> {{`${user.first_name} ${user.last_name}`}}</span>
        <v-spacer></v-spacer>
        <v-btn v-if="bookmark" @click="addBookMark" fab small outlined color="orange">
            <v-icon>mdi-bookmark</v-icon>
        </v-btn>
    </v-toolbar>
    <!-- <h1 class="text-xl">Account</h1> -->
    <div class="flex flex-col justify-center items-center mt-4  ">
        <v-avatar size="150" class="border-2 border-orange-500">
            <v-img v-if="user.image_profile" :src="user.image_profile" alt="">
            </v-img>
            <v-icon v-else>mdi-account</v-icon>
        </v-avatar>

        <h2 class="font-semibold text-xl"> {{`${user.first_name} ${user.last_name}`}}</h2>
        <br> <br> <br> <br>
    </div>
    <div class="p-4  -mt-28 ">
        <v-card outlined>
            <v-card-text>
                <v-tabs>
                    <v-tab>
                        ข้อมูลส่วนตัว
                    </v-tab>
                    <v-tab-item>
                        <div class="p-4">
                            <div>
                                <h2>ข้อมูลส่วนตัว</h2><br>
                                <v-text-field :value="`${user.first_name} ${user.last_name}`" dense readonly outlined label="ชื่อ" id="id"></v-text-field>
                                <v-text-field :value="`${user.birth_date}`" dense readonly outlined type="date" label="วัน/เดือน/ปี เกิด" id="id"></v-text-field>
                                <v-text-field dense readonly outlined :value="`${user.age}`" label="อายุ" id="id"></v-text-field>
                                <v-text-field dense readonly outlined :value="`${user.gender}`" label="เพศ" id="id"></v-text-field>
                                <h2>ข้อมูลการติดต่อ</h2><br>
                                <v-text-field dense readonly outlined :value="`${user.phone_number}`" label="เบอร์โทร" id="id"></v-text-field>
                                <v-text-field dense readonly outlined :value="`${user.address}`" label="ที่อยู่" id="id"></v-text-field>
                            </div>

                        </div>
                    </v-tab-item>
                    <v-tab>
                        การทำงาน
                    </v-tab>
                    <v-tab-item>
                        <div class="p-4">
                            <v-toolbar color="transparent" dense flat>
                                <h2>ความสามารถ</h2>
                            </v-toolbar>
                            <div class="mt-4">
                                <v-chip v-for="skill, i in user.skills" :key="i" class="m-1">#{{skill.name}}</v-chip>
                            </div>

                            <v-toolbar color="transparent" dense flat class="mt-4">
                                <h2>ประวัติการทำงาน</h2>
                                <v-spacer></v-spacer>
                            </v-toolbar>

                            <div class="mt-4" v-for="history,i in user.job_history" :key="i">
                                <v-card outlined>
                                    <v-card-text>
                                        <h2 class="text-xl">{{history.job}}</h2>
                                        <p>{{history.organize}}</p>
                                        <p>{{history.count_year}}</p>
                                    </v-card-text>
                                </v-card>
                            </div>
                        </div>
                    </v-tab-item>

                </v-tabs>
            </v-card-text>
        </v-card>
    </div>
    <div class="mt-4">

    </div>
</div>
</template>

<script>
export default {
    layout: 'admin',
    data: () => {
        return ({
            user: {},
            bookmark: true,
        })
    },
    async created() {
        await this.run();
        await this.getBookMark();
    },
    methods: {
        async run() {
            await this.getUser()
        },
        async getUser() {
            try {
                this.user = await this.$core.getHttp(`/api/account/userprofile/${this.$route.params.id}/`)
            } catch (error) {
                console.log(error);
            }
        },
        async getBookMark() {
            try {
                let check = await this.$core.getHttp(`/api/job/office-bookmark/?user=${this.user.id}&office=${this.$auth.myOffice.id}`)
                this.bookmark = (check.length > 0) ? false : true

            } catch (error) {
                console.log(error);
            }
        },
        async addBookMark() {
            let add = await this.$core.postHttp(`/api/job/office-bookmark/`, {
                user: Number(this.$route.params.id),
                office: Number(this.$auth.myOffice.id)
            })
            if (add.id) {
                await this.$web.alert(`เพิ่มรายการโปรดเรียบร้อย`, `success`)
                await this.$auth.setUser()
                await this.run()
                await this.getBookMark();
            }
        },
    }
}
</script>

<style>
.bgho {
    background-repeat: repeat;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='500' height='200' preserveAspectRatio='none' viewBox='0 0 500 200'%3e%3cg mask='url(%26quot%3b%23SvgjsMask11735%26quot%3b)' fill='none'%3e%3crect width='80.4' height='80.4' clip-path='url(%26quot%3b%23SvgjsClipPath11736%26quot%3b)' x='452.63' y='58.66' fill='url(%23SvgjsPattern11737)' transform='rotate(279.33%2c 492.83%2c 98.86)'%3e%3c/rect%3e%3cpath d='M227.7 102.95a5.6 5.6 0 1 0 10.19-4.65 5.6 5.6 0 1 0-10.19 4.65zM242.26 96.31a5.6 5.6 0 1 0 10.19-4.65 5.6 5.6 0 1 0-10.19 4.65zM256.82 89.67a5.6 5.6 0 1 0 10.19-4.65 5.6 5.6 0 1 0-10.19 4.65zM271.37 83.03a5.6 5.6 0 1 0 10.2-4.64 5.6 5.6 0 1 0-10.2 4.64zM205.22 130.78a5.6 5.6 0 1 0 10.19-4.65 5.6 5.6 0 1 0-10.19 4.65zM219.78 124.14a5.6 5.6 0 1 0 10.19-4.64 5.6 5.6 0 1 0-10.19 4.64zM234.34 117.5a5.6 5.6 0 1 0 10.19-4.64 5.6 5.6 0 1 0-10.19 4.64zM248.9 110.87a5.6 5.6 0 1 0 10.19-4.65 5.6 5.6 0 1 0-10.19 4.65z' stroke='rgba(203%2c 203%2c 206%2c 1)' stroke-width='2.4'%3e%3c/path%3e%3cpath d='M142.66 198.18a5.6 5.6 0 1 0-10.53-3.81 5.6 5.6 0 1 0 10.53 3.81zM127.61 192.74a5.6 5.6 0 1 0-10.53-3.81 5.6 5.6 0 1 0 10.53 3.81zM112.57 187.29a5.6 5.6 0 1 0-10.53-3.81 5.6 5.6 0 1 0 10.53 3.81zM97.52 181.85a5.6 5.6 0 1 0-10.53-3.82 5.6 5.6 0 1 0 10.53 3.82zM178.19 194.03a5.6 5.6 0 1 0-10.53-3.81 5.6 5.6 0 1 0 10.53 3.81zM163.15 188.59a5.6 5.6 0 1 0-10.53-3.82 5.6 5.6 0 1 0 10.53 3.82zM148.1 183.14a5.6 5.6 0 1 0-10.53-3.81 5.6 5.6 0 1 0 10.53 3.81zM133.06 177.69a5.6 5.6 0 1 0-10.53-3.81 5.6 5.6 0 1 0 10.53 3.81z' stroke='rgba(211%2c 183%2c 20%2c 0.42)' stroke-width='2.74' stroke-dasharray='4%2c 4'%3e%3c/path%3e%3crect width='138' height='138' clip-path='url(%26quot%3b%23SvgjsClipPath11738%26quot%3b)' x='7.31' y='-61.34' fill='url(%23SvgjsPattern11739)' transform='rotate(277.96%2c 76.31%2c 7.66)'%3e%3c/rect%3e%3ccircle r='21.079067574297444' cx='434.45' cy='3.56' fill='rgba(211%2c 183%2c 20%2c 0.42)'%3e%3c/circle%3e%3crect width='60' height='60' clip-path='url(%26quot%3b%23SvgjsClipPath11740%26quot%3b)' x='385.09' y='23.23' fill='url(%23SvgjsPattern11741)' transform='rotate(280.89%2c 415.09%2c 53.23)'%3e%3c/rect%3e%3crect width='84' height='84' clip-path='url(%26quot%3b%23SvgjsClipPath11742%26quot%3b)' x='67.99' y='23.57' fill='url(%23SvgjsPattern11743)' transform='rotate(164.86%2c 109.99%2c 65.57)'%3e%3c/rect%3e%3ccircle r='26.41347964681275' cx='92.05' cy='191.97' fill='rgba(172%2c 179%2c 255%2c 0.47)'%3e%3c/circle%3e%3cpath d='M404.44 81.01a5.6 5.6 0 1 0 10.32 4.34 5.6 5.6 0 1 0-10.32-4.34zM419.19 87.21a5.6 5.6 0 1 0 10.33 4.33 5.6 5.6 0 1 0-10.33-4.33zM433.94 93.4a5.6 5.6 0 1 0 10.33 4.34 5.6 5.6 0 1 0-10.33-4.34zM448.69 99.6a5.6 5.6 0 1 0 10.33 4.33 5.6 5.6 0 1 0-10.33-4.33zM368.74 83.37a5.6 5.6 0 1 0 10.33 4.34 5.6 5.6 0 1 0-10.33-4.34zM383.49 89.57a5.6 5.6 0 1 0 10.33 4.33 5.6 5.6 0 1 0-10.33-4.33zM398.24 95.76a5.6 5.6 0 1 0 10.33 4.34 5.6 5.6 0 1 0-10.33-4.34zM412.99 101.96a5.6 5.6 0 1 0 10.33 4.33 5.6 5.6 0 1 0-10.33-4.33zM333.04 85.73a5.6 5.6 0 1 0 10.33 4.34 5.6 5.6 0 1 0-10.33-4.34zM347.79 91.93a5.6 5.6 0 1 0 10.33 4.34 5.6 5.6 0 1 0-10.33-4.34zM362.54 98.12a5.6 5.6 0 1 0 10.33 4.34 5.6 5.6 0 1 0-10.33-4.34zM377.3 104.32a5.6 5.6 0 1 0 10.32 4.34 5.6 5.6 0 1 0-10.32-4.34z' stroke='rgba(193%2c 198%2c 255%2c 1)' stroke-width='1.04' stroke-dasharray='3%2c 2'%3e%3c/path%3e%3crect width='134.2' height='134.2' clip-path='url(%26quot%3b%23SvgjsClipPath11744%26quot%3b)' x='309.5' y='41.44' fill='url(%23SvgjsPattern11745)' transform='rotate(253.45%2c 376.6%2c 108.54)'%3e%3c/rect%3e%3crect width='84' height='84' clip-path='url(%26quot%3b%23SvgjsClipPath11746%26quot%3b)' x='-17.28' y='17.85' fill='url(%23SvgjsPattern11747)' transform='rotate(49.09%2c 24.72%2c 59.85)'%3e%3c/rect%3e%3cpath d='M384.33 161.12 L417.71 161.38L384.0203097681661 178.24969023183388z' fill='rgba(193%2c 198%2c 255%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask11735'%3e%3crect width='500' height='200' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='8.04' height='8.04' patternUnits='userSpaceOnUse' id='SvgjsPattern11737'%3e%3cpath d='M4.02 1L4.02 7.039999999999999M1 4.02L7.039999999999999 4.02' stroke='rgba(232%2c 218%2c 63%2c 0.3)' fill='none' stroke-width='1.78'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath11736'%3e%3ccircle r='20.1' cx='492.83' cy='98.86'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='11.5' height='11.5' patternUnits='userSpaceOnUse' id='SvgjsPattern11739'%3e%3cpath d='M0 11.5L5.75 0L11.5 11.5' stroke='rgba(232%2c 218%2c 63%2c 0.3)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath11738'%3e%3ccircle r='34.5' cx='76.31' cy='7.66'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern11741'%3e%3cpath d='M0 6L3 0L6 6' stroke='rgba(231%2c 54%2c 53%2c 0.38)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath11740'%3e%3ccircle r='15' cx='415.09' cy='53.23'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='84' height='7' patternUnits='userSpaceOnUse' id='SvgjsPattern11743'%3e%3crect width='84' height='3.5' x='0' y='0' fill='rgba(232%2c 218%2c 63%2c 0.3)'%3e%3c/rect%3e%3crect width='84' height='3.5' x='0' y='3.5' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath11742'%3e%3ccircle r='21' cx='109.99' cy='65.57'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='134.2' height='13.42' patternUnits='userSpaceOnUse' id='SvgjsPattern11745'%3e%3crect width='134.2' height='6.71' x='0' y='0' fill='rgba(255%2c 255%2c 255%2c 0.41)'%3e%3c/rect%3e%3crect width='134.2' height='6.71' x='0' y='6.71' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath11744'%3e%3ccircle r='33.55' cx='376.6' cy='108.54'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern11747'%3e%3cpath d='M3 1L3 5M1 3L5 3' stroke='rgba(231%2c 54%2c 53%2c 0.38)' fill='none' stroke-width='1'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath11746'%3e%3ccircle r='21' cx='24.72' cy='59.85'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
}
</style>
