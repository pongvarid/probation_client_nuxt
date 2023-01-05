<template>
  <div>
    <div class="w-full container mx-auto   ">   
        <v-card class="mt-4" v-for="bookmark,i in data" :key="i">
          <v-card-text  @click="$router.push(`/admin/search/${bookmark.id}/`)">
            <div class="flex items-center">
              <v-avatar size="80" >
                <v-img v-if="bookmark.image" :src="$url+bookmark.image" ></v-img>
                <span v-else>ผู้ใช้</span>
              </v-avatar>
              <div class="ml-4">
                <div>ชื่อ: {{bookmark.name}}</div>
                <div>อายุ: {{bookmark.age}} ปี</div>
                <div>ความสามารถ:   <v-chip v-for="skill, k in bookmark.skill" :key="k" small  class="m-1">#{{skill.name}}</v-chip>
                </div>
              </div>
            </div>
          </v-card-text>
          <v-card-actions>
            <span class="text-xs">{{$kit.dateTH(bookmark.bookmark_created_at)}}</span>
            <v-spacer></v-spacer>
            <v-btn dark depressed small fab color="red" @click="deleteBookmark(bookmark.bookmark_id)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>

      </div>
  </div>
</template>

<script>
export default {
 
  data() {
    return {
      data:[]
    }
  },
  async created(){
    await this.run();
  },
  methods: {
    async run(){
      let data = await this.$core.getHttp(`/api/job/office-bookmark/?office=${this.$auth.myOffice.id}`)
      this.data = this.$_.map(data,(v)=>{
        return {
          ...v.user_data,
          skill: v.skill,
          bookmark_id: v.id,
          bookmark_created_at: v.created_at
        }
      })
    },
    async deleteBookmark(bookmark) {
      console.log(bookmark);
      let check = await this.$web.confirm(
          `ลบ Bookmark`,
          `คุณต้องการลบ Bookmark นี้ใช่หรือไม่?`
      );
      if (check) {
        try {
          let remove = await this.$core.deleteHttp(
              `/api/job/office-bookmark/${bookmark}/`
          );
          if (remove) {
            await this.$web.alert(
                `ลบข้อมูลเรียบร้อย`,
                `success`,
                `ลบ Bookmark ของคุณเรียบร้อยแล้ว`
            );
            await this.run();
          } else {
            await this.$web.alert(
                `ลบข้อมูลไม่สำเร็จ`,
                `error`,
                `กรุณาลองใหม่อีกครั้ง`
            );
          }
        } catch (e) {
          await this.$web.alert(
              `ลบข้อมูลไม่สำเร็จ`,
              `error`,
              `กรุณาลองใหม่อีกครั้ง`
          );
          console.log("deleteJob", e);
        }
      }
    },
  }
}
</script>


<style>

</style>