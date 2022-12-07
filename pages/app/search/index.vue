<template>
<div>
    <div class="p-4 sbg">
        <h2 class="text-xl font-semibold">ค้นหางานที่ใช่ในแบบคุณ </h2>
        <v-form class="mt-6">
            <v-text-field @input="run()" v-model="search" dense solo label="ชื่อตำแหน่ง คีย์เวริด หรือ ชื่อบริษัท" placeholder="ชื่อตำแหน่ง คีย์เวริด หรือ ชื่อบริษัท" id="id"></v-text-field>
            <v-autocomplete v-model="province" @input="run()"  dense solo label="จังหวัด" :items="$provinces"></v-autocomplete>
            <v-autocomplete v-model="category"  @input="run()"  dense solo label="ประเภทของงาน" :items="[{id:null,name:'ทั้งหมด'},...$auth.categories]" item-text="name" item-value="id"></v-autocomplete>
        </v-form>

    </div>
    <div class="p-4 mbg">
        <h1 class="font-semibold text-xl">รายการค้นหา</h1>
      <v-card class="mx-auto my-12" max-width="374" v-for="job,index in data" :key="index" @click="$router.push(`/app/search/${job.id}/`)" >
        <template slot="progress">
          <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
        </template>

        <v-img height="150" :src="job.image"></v-img>

        <v-card-title>{{job.name}}</v-card-title>

        <v-card-text>
          <v-divider class="mt-2"></v-divider>
          <div class="my-4 text-subtitle-1" v-if="job.office_data">
            <div class="flex h-full items-center">
              <img class="h-10  mr-2" :src="job.office_data.image" alt="">
              <span class="text-xs">{{job.office_data.name}}</span>
            </div>
          </div>
          <div>{{job.content}}</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>
        <v-card-actions>
          <span class="text-xs">{{$kit.dateTH(job.created_at)}}</span>
          <v-spacer></v-spacer>
          <v-chip small ><v-icon>mdi-eye</v-icon> {{job.views}}</v-chip>
        </v-card-actions>
      </v-card>
    </div>
</div>
</template>

<script>
export default {
    data: () => ({
        data: [],
      province:'ทั้งหมด',
      category:null,
      search:'',
    }),
    async created() {
      if(this.$route.query.category){
        this.category = Number(this.$route.query.category)
      }
      await this.run()
    },
    methods:{
      async run(){
        let province = (this.province != 'ทั้งหมด')?`&office__province=${this.province}`:``
        let category = (this.category)?`&category=${this.category}`:``
        let search = (this.search)?`&search=${this.search}`:``
        this.data = await this.$core.getHttp(`/api/job/job-detail/?is_active=true${province}${category}${search}`)
      }
    }
}
</script>

<style>
.sbg {
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='800' height='300' preserveAspectRatio='none' viewBox='0 0 800 300'%3e%3cg mask='url(%26quot%3b%23SvgjsMask4574%26quot%3b)' fill='none'%3e%3crect width='800' height='300' x='0' y='0' fill='rgba(253%2c 227%2c 187%2c 1)'%3e%3c/rect%3e%3crect width='144' height='144' clip-path='url(%26quot%3b%23SvgjsClipPath4575%26quot%3b)' x='647.1' y='208.32' fill='url(%23SvgjsPattern4576)' transform='rotate(6.43%2c 719.1%2c 280.32)'%3e%3c/rect%3e%3cpath d='M559.19 275.13L571.8 277.39 572.37 290.18 584.97 292.44 585.54 305.23 598.14 307.49 598.71 320.28' stroke='rgba(255%2c 255%2c 255%2c 1)' stroke-width='1.26' stroke-dasharray='3%2c 3'%3e%3c/path%3e%3ccircle r='36.90240704294083' cx='566.17' cy='178.67' fill='rgba(231%2c 54%2c 53%2c 0.38)'%3e%3c/circle%3e%3cpath d='M729.28 156.97a5.6 5.6 0 1 0-1.09-11.15 5.6 5.6 0 1 0 1.09 11.15zM727.72 141.05a5.6 5.6 0 1 0-1.1-11.15 5.6 5.6 0 1 0 1.1 11.15zM726.15 125.12a5.6 5.6 0 1 0-1.09-11.14 5.6 5.6 0 1 0 1.09 11.14zM724.59 109.2a5.6 5.6 0 1 0-1.09-11.15 5.6 5.6 0 1 0 1.09 11.15zM748.33 187.25a5.6 5.6 0 1 0-1.09-11.14 5.6 5.6 0 1 0 1.09 11.14zM746.77 171.33a5.6 5.6 0 1 0-1.09-11.15 5.6 5.6 0 1 0 1.09 11.15zM745.21 155.41a5.6 5.6 0 1 0-1.1-11.15 5.6 5.6 0 1 0 1.1 11.15zM743.64 139.48a5.6 5.6 0 1 0-1.09-11.14 5.6 5.6 0 1 0 1.09 11.14zM767.39 217.54a5.6 5.6 0 1 0-1.1-11.15 5.6 5.6 0 1 0 1.1 11.15zM765.82 201.61a5.6 5.6 0 1 0-1.09-11.14 5.6 5.6 0 1 0 1.09 11.14zM764.26 185.69a5.6 5.6 0 1 0-1.1-11.15 5.6 5.6 0 1 0 1.1 11.15zM762.69 169.76a5.6 5.6 0 1 0-1.09-11.14 5.6 5.6 0 1 0 1.09 11.14z' fill='rgba(231%2c 54%2c 53%2c 0.38)'%3e%3c/path%3e%3ccircle r='25' cx='471.2' cy='76.58' stroke='rgba(255%2c 255%2c 255%2c 0.41)' stroke-width='1.68'%3e%3c/circle%3e%3crect width='138.2' height='138.2' clip-path='url(%26quot%3b%23SvgjsClipPath4577%26quot%3b)' x='87.43' y='155.49' fill='url(%23SvgjsPattern4578)' transform='rotate(318.88%2c 156.53%2c 224.59)'%3e%3c/rect%3e%3crect width='105.4' height='105.4' clip-path='url(%26quot%3b%23SvgjsClipPath4579%26quot%3b)' x='80.96' y='153.83' fill='url(%23SvgjsPattern4580)' transform='rotate(217.61%2c 133.66%2c 206.53)'%3e%3c/rect%3e%3ccircle r='40.13192551060014' cx='671.55' cy='268.45' stroke='rgba(172%2c 179%2c 255%2c 0.47)' stroke-width='2.64' stroke-dasharray='4%2c 4'%3e%3c/circle%3e%3cpath d='M245.78 169.11a5.6 5.6 0 1 0 9.31 6.21 5.6 5.6 0 1 0-9.31-6.21zM259.09 177.99a5.6 5.6 0 1 0 9.31 6.21 5.6 5.6 0 1 0-9.31-6.21zM272.39 186.87a5.6 5.6 0 1 0 9.32 6.21 5.6 5.6 0 1 0-9.32-6.21zM285.7 195.75a5.6 5.6 0 1 0 9.32 6.21 5.6 5.6 0 1 0-9.32-6.21z' stroke='rgba(255%2c 255%2c 255%2c 1)' stroke-width='1.82'%3e%3c/path%3e%3crect width='164.12' height='164.12' clip-path='url(%26quot%3b%23SvgjsClipPath4581%26quot%3b)' x='579.88' y='194.12' fill='url(%23SvgjsPattern4582)' transform='rotate(142.69%2c 661.94%2c 276.18)'%3e%3c/rect%3e%3crect width='132' height='132' clip-path='url(%26quot%3b%23SvgjsClipPath4583%26quot%3b)' x='179.18' y='-36.28' fill='url(%23SvgjsPattern4584)' transform='rotate(227.18%2c 245.18%2c 29.72)'%3e%3c/rect%3e%3cpath d='M763.08 212.9L757.56 201.35 767.62 193.42 762.1 181.87 772.16 173.95 766.64 162.39 776.7 154.47M770.87 214.72L765.35 203.16 775.41 195.24 769.89 183.68 779.95 175.76 774.43 164.21 784.49 156.28' stroke='rgba(172%2c 179%2c 255%2c 0.47)' stroke-width='1' stroke-dasharray='3%2c 3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask4574'%3e%3crect width='800' height='300' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern4576'%3e%3cpath d='M3 1L3 5M1 3L5 3' stroke='rgba(255%2c 255%2c 255%2c 1)' fill='none' stroke-width='1'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath4575'%3e%3ccircle r='36' cx='719.1' cy='280.32'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='138.2' height='13.82' patternUnits='userSpaceOnUse' id='SvgjsPattern4578'%3e%3crect width='138.2' height='6.91' x='0' y='0' fill='rgba(232%2c 218%2c 63%2c 0.3)'%3e%3c/rect%3e%3crect width='138.2' height='6.91' x='0' y='6.91' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath4577'%3e%3ccircle r='34.55' cx='156.53' cy='224.59'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='10.54' height='10.54' patternUnits='userSpaceOnUse' id='SvgjsPattern4580'%3e%3cpath d='M5.27 1L5.27 9.54M1 5.27L9.54 5.27' stroke='rgba(172%2c 179%2c 255%2c 0.47)' fill='none' stroke-width='1.79'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath4579'%3e%3ccircle r='26.35' cx='133.66' cy='206.53'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='7.46' height='7.46' patternUnits='userSpaceOnUse' id='SvgjsPattern4582'%3e%3cpath d='M3.73 1L3.73 6.46M1 3.73L6.46 3.73' stroke='rgba(232%2c 218%2c 63%2c 0.3)' fill='none' stroke-width='2'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath4581'%3e%3ccircle r='41.03' cx='661.94' cy='276.18'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='132' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern4584'%3e%3crect width='132' height='3' x='0' y='0' fill='rgba(211%2c 183%2c 20%2c 0.42)'%3e%3c/rect%3e%3crect width='132' height='3' x='0' y='3' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath4583'%3e%3ccircle r='33' cx='245.18' cy='29.72'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");

}

.mbg{
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1090' height='500' preserveAspectRatio='none' viewBox='0 0 1090 500'%3e%3cg mask='url(%26quot%3b%23SvgjsMask4413%26quot%3b)' fill='none'%3e%3ccircle r='43.967253105204016' cx='700.16' cy='290.89' fill='rgba(231%2c 54%2c 53%2c 0.38)'%3e%3c/circle%3e%3ccircle r='53.3477251011441' cx='68.86' cy='241.69' fill='rgba(66%2c 68%2c 90%2c 1)'%3e%3c/circle%3e%3crect width='216' height='216' clip-path='url(%26quot%3b%23SvgjsClipPath4414%26quot%3b)' x='438.37' y='-56.78' fill='url(%23SvgjsPattern4415)' transform='rotate(85.34%2c 546.37%2c 51.22)'%3e%3c/rect%3e%3crect width='204' height='204' clip-path='url(%26quot%3b%23SvgjsClipPath4416%26quot%3b)' x='428.38' y='385.06' fill='url(%23SvgjsPattern4417)' transform='rotate(230.81%2c 530.38%2c 487.06)'%3e%3c/rect%3e%3crect width='88' height='88' clip-path='url(%26quot%3b%23SvgjsClipPath4418%26quot%3b)' x='468.78' y='343.82' fill='url(%23SvgjsPattern4419)' transform='rotate(291.81%2c 512.78%2c 387.82)'%3e%3c/rect%3e%3crect width='211.64' height='211.64' clip-path='url(%26quot%3b%23SvgjsClipPath4420%26quot%3b)' x='89.67' y='-53.93' fill='url(%23SvgjsPattern4421)' transform='rotate(358.14%2c 195.49%2c 51.89)'%3e%3c/rect%3e%3crect width='117.8' height='117.8' clip-path='url(%26quot%3b%23SvgjsClipPath4422%26quot%3b)' x='191.62' y='115.41' fill='url(%23SvgjsPattern4423)' transform='rotate(255.89%2c 250.52%2c 174.31)'%3e%3c/rect%3e%3ccircle r='61.885710639591544' cx='359.61' cy='109.84' fill='rgba(231%2c 54%2c 53%2c 0.38)'%3e%3c/circle%3e%3crect width='114.4' height='114.4' clip-path='url(%26quot%3b%23SvgjsClipPath4424%26quot%3b)' x='69.45' y='219.92' fill='url(%23SvgjsPattern4425)' transform='rotate(172.58%2c 126.65%2c 277.12)'%3e%3c/rect%3e%3crect width='276' height='276' clip-path='url(%26quot%3b%23SvgjsClipPath4426%26quot%3b)' x='24.81' y='-106.31' fill='url(%23SvgjsPattern4427)' transform='rotate(231.08%2c 162.81%2c 31.69)'%3e%3c/rect%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask4413'%3e%3crect width='1090' height='500' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern4415'%3e%3cpath d='M0 6L3 0L6 6' stroke='rgba(170%2c 174%2c 224%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath4414'%3e%3ccircle r='54' cx='546.37' cy='51.22'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern4417'%3e%3cpath d='M0 6L3 0L6 6' stroke='rgba(231%2c 54%2c 53%2c 0.38)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath4416'%3e%3ccircle r='51' cx='530.38' cy='487.06'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='88' height='8.8' patternUnits='userSpaceOnUse' id='SvgjsPattern4419'%3e%3crect width='88' height='4.4' x='0' y='0' fill='rgba(231%2c 54%2c 53%2c 0.38)'%3e%3c/rect%3e%3crect width='88' height='4.4' x='0' y='4.4' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath4418'%3e%3ccircle r='22' cx='512.78' cy='387.82'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='211.64' height='9.62' patternUnits='userSpaceOnUse' id='SvgjsPattern4421'%3e%3crect width='211.64' height='4.81' x='0' y='0' fill='rgba(172%2c 179%2c 255%2c 0.47)'%3e%3c/rect%3e%3crect width='211.64' height='4.81' x='0' y='4.81' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath4420'%3e%3ccircle r='52.91' cx='195.49' cy='51.89'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='11.78' height='11.78' patternUnits='userSpaceOnUse' id='SvgjsPattern4423'%3e%3cpath d='M5.89 1L5.89 10.78M1 5.89L10.78 5.89' stroke='rgba(172%2c 179%2c 255%2c 0.47)' fill='none' stroke-width='4.52'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath4422'%3e%3ccircle r='29.45' cx='250.52' cy='174.31'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='11.44' height='11.44' patternUnits='userSpaceOnUse' id='SvgjsPattern4425'%3e%3cpath d='M5.72 1L5.72 10.44M1 5.72L10.44 5.72' stroke='rgba(211%2c 183%2c 20%2c 0.42)' fill='none' stroke-width='4.62'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath4424'%3e%3ccircle r='28.6' cx='126.65' cy='277.12'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern4427'%3e%3cpath d='M0 6L3 0L6 6' stroke='rgba(255%2c 255%2c 255%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath4426'%3e%3ccircle r='69' cx='162.81' cy='31.69'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");

}
</style>
