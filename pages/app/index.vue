<template>
<div>
    <div class="xbg">
        <div class="flex  p-5 w-full ">
            <div class="flex flex-col">
                <span>สวัสดี,</span><span class="text-xl font-semibold">{{user.first_name}}</span>
            </div>
            <v-spacer></v-spacer>
            <v-avatar size="40" color="white">
                <v-img v-if="user.image_profile" :src="user.image_profile" alt="">
                </v-img>
                <v-icon v-else>mdi-account</v-icon>
                </v-avatar>
        </div>
        <!-- <h2>ข่าวประชาสัมพันธ์</h2> -->
        <Home-Slide></Home-Slide>
    </div>

    <div class="p-5 bgh">
        <h2 class="text-base font-semibold">บริษัทชั้นนำ</h2>
        <Home-BestCompany></Home-BestCompany>
    </div>
    <div class="p-5 ">
        <h2 class="text-base font-semibold">งานแนะนำ</h2><br>
        <div class="flex flex-wrap">
            <v-chip v-for="skill,i in skills" :key="i" v-if="i < 6" @click="$router.push(`/app/search/?category=${skill.id}`)" class="m-1">#{{skill.name}}</v-chip>
        </div>
        <Home-RecommendJob></Home-RecommendJob>
    </div>

    <!-- <h2>งานยอดนิยม</h2>
  <Home-BestJob></Home-BestJob> -->
</div>
</template>

<script>
export default {
    name: 'IndexPage',
  data: () => ({
    skills:[],
    response: false,
  }),
  async created() {
  await this.getSkills();
    this.response = true;
  },
  methods: {
    async getSkills() {
      let skills = await this.$core.getHttp('/api/job/category/');
      this.skills = skills;
    },
  },
  computed: {
    user() {
      return this.$auth.user;
    }
  },
}
</script>

<style>
.bgh {
 background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='900' height='400' preserveAspectRatio='none' viewBox='0 0 900 400'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1243%26quot%3b)' fill='none'%3e%3crect width='900' height='400' x='0' y='0' fill='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/rect%3e%3crect width='168' height='168' clip-path='url(%26quot%3b%23SvgjsClipPath1244%26quot%3b)' x='282.78' y='37.83' fill='url(%23SvgjsPattern1245)' transform='rotate(332.24%2c 366.78%2c 121.83)'%3e%3c/rect%3e%3ccircle r='33.333333333333336' cx='112.3' cy='284.72' fill='rgba(3%2c 123%2c 11%2c 0.41)'%3e%3c/circle%3e%3cpath d='M429.85 80.1L440.31 72.71 449.81 81.29 460.27 73.9 469.78 82.48 480.23 75.09 489.74 83.67' stroke='rgba(3%2c 123%2c 11%2c 0.41)' stroke-width='1.64' stroke-dasharray='4%2c 4'%3e%3c/path%3e%3ccircle r='33.333333333333336' cx='87.54' cy='31.31' stroke='rgba(211%2c 183%2c 20%2c 0.42)' stroke-width='1.01' stroke-dasharray='4%2c 4'%3e%3c/circle%3e%3cpath d='M641.51 72.62L634.21 83.14 622.34 78.34 615.05 88.87 603.18 84.06 595.89 94.59 584.02 89.79M639.22 64.95L631.92 75.48 620.05 70.67 612.76 81.2 600.89 76.4 593.6 86.92 581.73 82.12M636.93 57.28L629.63 67.81 617.76 63.01 610.47 73.54 598.6 68.73 591.31 79.26 579.44 74.46' stroke='rgba(211%2c 183%2c 20%2c 0.42)' stroke-width='2.1'%3e%3c/path%3e%3crect width='87.8' height='87.8' clip-path='url(%26quot%3b%23SvgjsClipPath1246%26quot%3b)' x='263.9' y='190.25' fill='url(%23SvgjsPattern1247)' transform='rotate(58.59%2c 307.8%2c 234.15)'%3e%3c/rect%3e%3ccircle r='33.333333333333336' cx='415.79' cy='159.88' stroke='rgba(3%2c 123%2c 11%2c 0.41)' stroke-width='2.13' stroke-dasharray='3%2c 2'%3e%3c/circle%3e%3crect width='180' height='180' clip-path='url(%26quot%3b%23SvgjsClipPath1248%26quot%3b)' x='238.37' y='239.7' fill='url(%23SvgjsPattern1249)' transform='rotate(276.69%2c 328.37%2c 329.7)'%3e%3c/rect%3e%3cpath d='M-2.82 232.2L9.75 229.77 14.88 241.5 27.46 239.06 32.59 250.79 45.17 248.36 50.3 260.09M-6.54 239.28L6.03 236.85 11.17 248.58 23.74 246.15 28.87 257.88 41.45 255.44 46.58 267.17' stroke='rgba(211%2c 183%2c 20%2c 0.42)' stroke-width='1.74'%3e%3c/path%3e%3ccircle r='64.8628603552672' cx='200.02' cy='115.97' stroke='rgba(231%2c 54%2c 53%2c 0.38)' stroke-width='2.38' stroke-dasharray='3%2c 2'%3e%3c/circle%3e%3ccircle r='52.53790022108053' cx='601.71' cy='227.42' stroke='rgba(231%2c 54%2c 53%2c 0.38)' stroke-width='1' stroke-dasharray='2%2c 2'%3e%3c/circle%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1243'%3e%3crect width='900' height='400' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='168' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern1245'%3e%3crect width='168' height='3' x='0' y='0' fill='rgba(3%2c 123%2c 11%2c 0.41)'%3e%3c/rect%3e%3crect width='168' height='3' x='0' y='3' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1244'%3e%3ccircle r='42' cx='366.78' cy='121.83'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='8.78' height='8.78' patternUnits='userSpaceOnUse' id='SvgjsPattern1247'%3e%3cpath d='M0 8.78L4.39 0L8.78 8.78' stroke='rgba(231%2c 54%2c 53%2c 0.38)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1246'%3e%3ccircle r='21.95' cx='307.8' cy='234.15'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern1249'%3e%3cpath d='M3 1L3 5M1 3L5 3' stroke='rgba(211%2c 183%2c 20%2c 0.42)' fill='none' stroke-width='1'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1248'%3e%3ccircle r='45' cx='328.37' cy='329.7'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
 
 }

 .xbg{
 background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='800' height='200' preserveAspectRatio='none' viewBox='0 0 800 200'%3e%3cg mask='url(%26quot%3b%23SvgjsMask4849%26quot%3b)' fill='none'%3e%3crect width='800' height='200' x='0' y='0' fill='rgba(255%2c 215%2c 163%2c 1)'%3e%3c/rect%3e%3ccircle r='16.666666666666668' cx='250.92' cy='92.11' fill='rgba(172%2c 179%2c 255%2c 0.47)'%3e%3c/circle%3e%3cpath d='M349.53 185.84L360.08 193.1 355.31 204.99 365.86 212.24 361.09 224.13 371.64 231.39 366.88 243.28M341.87 188.15L352.42 195.41 347.65 207.3 358.2 214.56 353.44 226.44 363.99 233.7 359.22 245.59' stroke='rgba(231%2c 54%2c 53%2c 0.38)' stroke-width='1'%3e%3c/path%3e%3cpath d='M442.51 143.31L452.49 151.34 446.84 162.83 456.82 170.86 451.18 182.36 461.16 190.39 455.52 201.88M434.7 145.04L444.68 153.07 439.03 164.57 449.01 172.6 443.37 184.09 453.35 192.12 447.71 203.62' stroke='rgba(255%2c 255%2c 255%2c 0.41)' stroke-width='1.21' stroke-dasharray='2%2c 2'%3e%3c/path%3e%3cpath d='M184.65 115.28L172.47 119.23 165.94 108.21 153.76 112.17 147.23 101.15 135.05 105.1 128.52 94.08M187.48 107.8L175.3 111.75 168.77 100.73 156.59 104.68 150.06 93.66 137.88 97.62 131.35 86.6' stroke='rgba(172%2c 179%2c 255%2c 0.47)' stroke-width='1' stroke-dasharray='3%2c 3'%3e%3c/path%3e%3crect width='117.2' height='117.2' clip-path='url(%26quot%3b%23SvgjsClipPath4850%26quot%3b)' x='363.07' y='23.98' fill='url(%23SvgjsPattern4851)' transform='rotate(183.27%2c 421.67%2c 82.58)'%3e%3c/rect%3e%3ccircle r='16.666666666666668' cx='180.67' cy='117.49' stroke='rgba(172%2c 179%2c 255%2c 0.47)' stroke-width='1' stroke-dasharray='3%2c 3'%3e%3c/circle%3e%3cpath d='M615.55 180.25 L563.05 149.68L610.9232537111036 143.3417462888964z' fill='rgba(211%2c 183%2c 20%2c 0.42)'%3e%3c/path%3e%3crect width='60' height='60' clip-path='url(%26quot%3b%23SvgjsClipPath4852%26quot%3b)' x='197.12' y='113.92' fill='url(%23SvgjsPattern4853)' transform='rotate(7.47%2c 227.12%2c 143.92)'%3e%3c/rect%3e%3ccircle r='16.906189779118826' cx='480.41' cy='82.33' fill='rgba(231%2c 54%2c 53%2c 0.38)'%3e%3c/circle%3e%3crect width='60' height='60' clip-path='url(%26quot%3b%23SvgjsClipPath4854%26quot%3b)' x='257.8' y='121.11' fill='url(%23SvgjsPattern4855)' transform='rotate(13.55%2c 287.8%2c 151.11)'%3e%3c/rect%3e%3cpath d='M26.46 79.50999999999999 L13.99 78.83L25.047962554652706 74.34703744534728z' stroke='rgba(231%2c 54%2c 53%2c 0.38)' stroke-width='1.71'%3e%3c/path%3e%3cpath d='M612.68 127.68L624.79 123.5 631.52 134.4 643.63 130.22 650.36 141.11 662.47 136.93 669.2 147.82M610 135.22L622.1 131.04 628.84 141.93 640.94 137.75 647.68 148.64 659.78 144.46 666.52 155.36M607.31 142.76L619.42 138.58 626.15 149.47 638.26 145.29 644.99 156.18 657.1 152 663.83 162.89' stroke='rgba(255%2c 255%2c 255%2c 1)' stroke-width='1.49' stroke-dasharray='3%2c 3'%3e%3c/path%3e%3crect width='84' height='84' clip-path='url(%26quot%3b%23SvgjsClipPath4856%26quot%3b)' x='110.24' y='44.1' fill='url(%23SvgjsPattern4857)' transform='rotate(306.8%2c 152.24%2c 86.1)'%3e%3c/rect%3e%3crect width='120' height='120' clip-path='url(%26quot%3b%23SvgjsClipPath4858%26quot%3b)' x='261.56' y='-58.51' fill='url(%23SvgjsPattern4859)' transform='rotate(257.77%2c 321.56%2c 1.49)'%3e%3c/rect%3e%3ccircle r='16.666666666666668' cx='786.76' cy='199.31' stroke='rgba(231%2c 54%2c 53%2c 0.38)' stroke-width='2.4' stroke-dasharray='3%2c 2'%3e%3c/circle%3e%3crect width='60' height='60' clip-path='url(%26quot%3b%23SvgjsClipPath4860%26quot%3b)' x='370.28' y='133.44' fill='url(%23SvgjsPattern4861)' transform='rotate(219.53%2c 400.28%2c 163.44)'%3e%3c/rect%3e%3cpath d='M177.78 172.03L188.81 178.54 184.88 190.73 195.91 197.24 191.98 209.43 203.01 215.94 199.08 228.13M170.3 174.87L181.33 181.38 177.4 193.57 188.43 200.08 184.5 212.27 195.53 218.78 191.6 230.97M162.82 177.71L173.85 184.22 169.92 196.41 180.95 202.92 177.02 215.11 188.05 221.62 184.12 233.81' stroke='rgba(232%2c 218%2c 63%2c 0.3)' stroke-width='2.93'%3e%3c/path%3e%3cpath d='M661.12 127.22a5.6 5.6 0 1 0-11-2.13 5.6 5.6 0 1 0 11 2.13zM645.41 124.17a5.6 5.6 0 1 0-10.99-2.14 5.6 5.6 0 1 0 10.99 2.14zM629.71 121.12a5.6 5.6 0 1 0-11-2.14 5.6 5.6 0 1 0 11 2.14zM614 118.07a5.6 5.6 0 1 0-10.99-2.14 5.6 5.6 0 1 0 10.99 2.14zM695.58 117.62a5.6 5.6 0 1 0-10.99-2.13 5.6 5.6 0 1 0 10.99 2.13zM679.88 114.57a5.6 5.6 0 1 0-11-2.14 5.6 5.6 0 1 0 11 2.14zM664.17 111.52a5.6 5.6 0 1 0-10.99-2.14 5.6 5.6 0 1 0 10.99 2.14zM648.46 108.47a5.6 5.6 0 1 0-10.99-2.14 5.6 5.6 0 1 0 10.99 2.14z' fill='rgba(232%2c 218%2c 63%2c 0.3)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask4849'%3e%3crect width='800' height='200' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='117.2' height='11.72' patternUnits='userSpaceOnUse' id='SvgjsPattern4851'%3e%3crect width='117.2' height='5.86' x='0' y='0' fill='rgba(172%2c 179%2c 255%2c 0.47)'%3e%3c/rect%3e%3crect width='117.2' height='5.86' x='0' y='5.86' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath4850'%3e%3ccircle r='29.3' cx='421.67' cy='82.58'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern4853'%3e%3cpath d='M0 6L3 0L6 6' stroke='rgba(232%2c 218%2c 63%2c 0.3)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath4852'%3e%3ccircle r='15' cx='227.12' cy='143.92'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern4855'%3e%3cpath d='M3 1L3 5M1 3L5 3' stroke='rgba(232%2c 218%2c 63%2c 0.3)' fill='none' stroke-width='1'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath4854'%3e%3ccircle r='15' cx='287.8' cy='151.11'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern4857'%3e%3cpath d='M0 6L3 0L6 6' stroke='rgba(211%2c 183%2c 20%2c 0.42)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath4856'%3e%3ccircle r='21' cx='152.24' cy='86.1'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern4859'%3e%3cpath d='M3 1L3 5M1 3L5 3' stroke='rgba(231%2c 54%2c 53%2c 0.38)' fill='none' stroke-width='1.66'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath4858'%3e%3ccircle r='30' cx='321.56' cy='1.49'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern4861'%3e%3cpath d='M3 1L3 5M1 3L5 3' stroke='rgba(211%2c 183%2c 20%2c 0.42)' fill='none' stroke-width='1'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath4860'%3e%3ccircle r='15' cx='400.28' cy='163.44'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
 }
</style>
