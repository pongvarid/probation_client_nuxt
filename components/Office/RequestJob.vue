<template>
  <div class="m-4"> 
    <v-btn @click="requestJob" :disabled="disabled" depressed x-large block color="success"><v-icon>em em-handshake</v-icon> <b>สนใจสมัครงาน</b></v-btn>
 
  </div>
</template>

<script> 

export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    data: () => ({ 
        disabled: false,
    }),
    async created(){
        await this.checkRequest()
    },
    methods:{
        async requestJob(){
            let check = await this.$web.confirm(`คุณต้องการสมัครงานนี้ใช่หรือไม่?`)
            if(check){
                try {
                    let data = await this.$core.postHttp(`/api/account/request/`,{job:this.id,user:this.$auth.user.id})
                    if(data.id){
                        await this.$web.alert(`ส่งคำขอสมัครงานเรียบร้อย`, `success`,`ระบบได้ส่งคำขอสมัครงานไปยังผู้ประกาศแล้ว กรุณารอการตอบกลับจากผู้ประกาศ`)
                        await this.checkRequest()
                    }
                } catch (error) {
                    await this.$web.alert(`เกิดข้อผิดพลาด`, `error`,error)
                }
            } 
        },
        async checkRequest(){
            try {
                let data = await this.$core.getHttp(`/api/account/request/?job=${this.id}&user=${this.$auth.user.id}&status=0`)
                if(data.length > 0){
                    this.disabled = true
                }
            } catch (error) {
                console.log(error)
                await this.$web.alert(`เกิดข้อผิดพลาด`, `error`,error)
            }
        }
    }
}
</script>

<style>

</style>