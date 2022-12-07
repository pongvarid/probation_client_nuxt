<template>
<div> 
  <Profile-Avatar></Profile-Avatar>
    <div class="p-4 -mt-28">
        <v-card>
        <v-card-text>
            <div >
                <v-tabs>
                    <v-tab>
                        ข้อมูลส่วนตัว
                    </v-tab>
                    <v-tab-item>
                       <div>
                         <Profile-General></Profile-General>
                       </div>
                    </v-tab-item>
                    <v-tab>
                        การทำงาน
                    </v-tab>
                    <v-tab-item>
                        <div>
                            <Profile-Skill></Profile-Skill>
                          <Profile-JobHistory></Profile-JobHistory>
                        </div>
                    </v-tab-item>
                    <v-tab>
                        แอปพลิเคชั่น
                    </v-tab>
                    <v-tab-item>
                        <div>
                            <App-Info></App-Info>
                        </div>
                    </v-tab-item>
                </v-tabs>


            </div>
        </v-card-text>
    </v-card>
    </div>
</div>
</template>

<script>
export default {
    data: () => ({
        dialog: false,
        dialog2: false,
        dialog3: false,
        dialog4: false,
        dialog5: false,
      form:{},
    }),
  async created(){
      this.form = this.$auth.user
  },
  methods:{
      async run(){

      }
  },
  computed: {
      user() {
          return this.$auth.user
      }
  }
}
</script>

<style>
.ccx {
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='800' height='500' preserveAspectRatio='none' viewBox='0 0 800 500'%3e%3cg mask='url(%26quot%3b%23SvgjsMask4219%26quot%3b)' fill='none'%3e%3crect width='338.4' height='338.4' clip-path='url(%26quot%3b%23SvgjsClipPath4220%26quot%3b)' x='475.8' y='145.71' fill='url(%23SvgjsPattern4221)' transform='rotate(284.53%2c 645%2c 314.91)'%3e%3c/rect%3e%3ccircle r='41.666666666666664' cx='89.13' cy='453.16' stroke='rgba(172%2c 179%2c 255%2c 0.47)' stroke-width='1' stroke-dasharray='4%2c 4'%3e%3c/circle%3e%3crect width='91.56' height='91.56' clip-path='url(%26quot%3b%23SvgjsClipPath4222%26quot%3b)' x='277.19' y='333.57' fill='url(%23SvgjsPattern4223)' transform='rotate(3.68%2c 322.97%2c 379.35)'%3e%3c/rect%3e%3ccircle r='62.72552660815657' cx='239.87' cy='373.09' fill='rgba(172%2c 179%2c 255%2c 0.47)'%3e%3c/circle%3e%3crect width='288' height='288' clip-path='url(%26quot%3b%23SvgjsClipPath4224%26quot%3b)' x='282.52' y='132.52' fill='url(%23SvgjsPattern4225)' transform='rotate(303.78%2c 426.52%2c 276.52)'%3e%3c/rect%3e%3cpath d='M32.27-2.5a5.6 5.6 0 1 0-5.03 10.01 5.6 5.6 0 1 0 5.03-10.01zM25.08 11.8a5.6 5.6 0 1 0-5.03 10 5.6 5.6 0 1 0 5.03-10zM17.89 26.09a5.6 5.6 0 1 0-5.03 10.01 5.6 5.6 0 1 0 5.03-10.01zM10.7 40.39a5.6 5.6 0 1 0-5.03 10 5.6 5.6 0 1 0 5.03-10zM32.35-38.27a5.6 5.6 0 1 0-5.03 10 5.6 5.6 0 1 0 5.03-10zM25.16-23.98a5.6 5.6 0 1 0-5.03 10.01 5.6 5.6 0 1 0 5.03-10.01zM17.97-9.68a5.6 5.6 0 1 0-5.03 10 5.6 5.6 0 1 0 5.03-10zM10.79 4.61a5.6 5.6 0 1 0-5.04 10.01 5.6 5.6 0 1 0 5.04-10.01zM32.44-74.05a5.6 5.6 0 1 0-5.04 10.01 5.6 5.6 0 1 0 5.04-10.01zM25.25-59.76a5.6 5.6 0 1 0-5.03 10.01 5.6 5.6 0 1 0 5.03-10.01zM18.06-45.46a5.6 5.6 0 1 0-5.03 10 5.6 5.6 0 1 0 5.03-10zM10.87-31.17a5.6 5.6 0 1 0-5.03 10.01 5.6 5.6 0 1 0 5.03-10.01z' stroke='rgba(211%2c 183%2c 20%2c 0.42)' stroke-width='1' stroke-dasharray='4%2c 4'%3e%3c/path%3e%3crect width='222.72' height='222.72' clip-path='url(%26quot%3b%23SvgjsClipPath4226%26quot%3b)' x='-15.57' y='17.16' fill='url(%23SvgjsPattern4227)' transform='rotate(77.57%2c 95.79%2c 128.52)'%3e%3c/rect%3e%3crect width='232.4' height='232.4' clip-path='url(%26quot%3b%23SvgjsClipPath4228%26quot%3b)' x='-75.32' y='40.56' fill='url(%23SvgjsPattern4229)' transform='rotate(88.12%2c 40.88%2c 156.76)'%3e%3c/rect%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask4219'%3e%3crect width='800' height='500' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='11.28' height='11.28' patternUnits='userSpaceOnUse' id='SvgjsPattern4221'%3e%3cpath d='M0 11.28L5.64 0L11.28 11.28' stroke='rgba(172%2c 179%2c 255%2c 0.47)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath4220'%3e%3ccircle r='84.6' cx='645' cy='314.91'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='91.56' height='6.54' patternUnits='userSpaceOnUse' id='SvgjsPattern4223'%3e%3crect width='91.56' height='3.27' x='0' y='0' fill='rgba(170%2c 174%2c 224%2c 1)'%3e%3c/rect%3e%3crect width='91.56' height='3.27' x='0' y='3.27' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath4222'%3e%3ccircle r='22.89' cx='322.97' cy='379.35'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern4225'%3e%3cpath d='M3 1L3 5M1 3L5 3' stroke='rgba(255%2c 255%2c 255%2c 0.41)' fill='none' stroke-width='1'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath4224'%3e%3ccircle r='72' cx='426.52' cy='276.52'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='13.92' height='13.92' patternUnits='userSpaceOnUse' id='SvgjsPattern4227'%3e%3cpath d='M0 13.92L6.96 0L13.92 13.92' stroke='rgba(232%2c 218%2c 63%2c 0.3)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath4226'%3e%3ccircle r='55.68' cx='95.79' cy='128.52'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='232.4' height='8.3' patternUnits='userSpaceOnUse' id='SvgjsPattern4229'%3e%3crect width='232.4' height='4.15' x='0' y='0' fill='rgba(231%2c 54%2c 53%2c 0.38)'%3e%3c/rect%3e%3crect width='232.4' height='4.15' x='0' y='4.15' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath4228'%3e%3ccircle r='58.1' cx='40.88' cy='156.76'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
 background-attachment: fixed;
background-size: cover;
}
</style>
