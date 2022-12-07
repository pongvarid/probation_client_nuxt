<template>
  <div class="p-4">
    <v-toolbar color="transparent" dense flat>
      <h2>ความสามารถ</h2>
      <v-spacer></v-spacer>
    </v-toolbar>

    <div class="mt-4">
      <v-autocomplete return-object @change="updateSkill()" dense :items="$auth.subCategories" item-text="name" item-value="id" class="mt-4"   outlined  v-model="formSkill.skill" label="เพิ่มทักษะ" id="id"></v-autocomplete>

      <v-chip close @click:close="removeSkill(skill)" v-for="skill,i in user.skills" :key="i"  class="m-1">#{{skill.name}}</v-chip>

    </div>

  </div>
</template>
  
<script>
export default {
  name: "Work",
  data() {
    return {
      formSkill:{}
    };
  },
  methods:{
    async updateSkill(){
      try {
        await this.$auth.setUser()
        console.log(this.$auth.user);
        let check = await this.$web.confirm(`คุณแน่ใจใช่ไหม`, `เพิ่มทักษะ ${this.formSkill.skill.name} ใช่หรือไม่?`)
        if(check){
          let skill = await this.$core.putHttp(`/api/account/userprofile/${this.user.id}/`, {
            skill: [...[this.formSkill.skill.id], ...this.user.skill]
          })
          if(skill.id){
            await this.$auth.setUser()
            this.formSkill = {}
            await this.$web.alert(`เพิ่มทักษะสำเร็จ`)
          }
        }
      }catch (e) {
        console.log('updateSkill',e)
        await this.$web.alert(`เกิดข้อผิดพลาด`,`info`,`${JSON.stringify(e)}`)
      }
    },
    async removeSkill(skill){
      try {
        let data = this.$_.filter(this.user.skill, (o) => {
          return o !== skill.id
        })
        await this.$auth.setUser()
        let check = await this.$web.confirm(`คุณแน่ใจใช่ไหม`, `ลบทักษะ ${skill.name} ใช่หรือไม่?`)
        if(check){
          let skill = await this.$core.putHttp(`/api/account/userprofile/${this.user.id}/`, {
            skill: data
          })
          if(skill.id){
            await this.$auth.setUser()
            await this.$web.alert(`ลบทักษะสำเร็จ`)
          }
        }
        await this.$auth.setUser()
        console.log
    }catch (e) {
        console.log('removeSkill',e)
        await this.$web.alert(`เกิดข้อผิดพลาด`,`info`,`${JSON.stringify(e)}`)
      }
    }
  },
  computed:{
    user(){
      return this.$auth.user
    }
  }
}
</script>

<style scoped>

</style>