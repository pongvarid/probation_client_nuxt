<template>
  <div class=" ">
    <div class="p-4 gghP  h-60">
      <div class="w-full container mx-auto   ">
        <div class="container mx-auto  bbg h-full w-full" >
          <h2 class="text-xl font-semibold">งานที่บันทึกไว้</h2>
        </div>
      </div>
    </div>

    <div class="-mt-40">
      <div :class="($vuetify.breakpoint.width > 700 )?`flex flex-wrap justify-center`:`flex flex-col w-full items-center`">
        <div class="p-2"  :class="($vuetify.breakpoint.width > 700 )?`w-300`:``"  v-for="(job, index) in bookmarks"
             :key="index">
          <v-card :width="($vuetify.breakpoint.width > 700 )?300:350" >
            <template slot="progress">
              <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
              ></v-progress-linear>
            </template>

            <v-img height="150" :src="$url + job.image">
              <v-toolbar color="transparent" flat>
                <v-spacer></v-spacer>
                <v-btn small
                       fab
                       depressed
                       @click="deleteBookmark(job.bookmark_id)"
                       color="error"
                >
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn >
              </v-toolbar>
            </v-img>

            <v-card-title style="height:80px;" >{{ job.name }}</v-card-title>

            <v-card-text  style="height:150px;">
              <v-divider class="mt-2"></v-divider>
              <div class="my-4 text-subtitle-1">
                <div class="flex h-full items-center">
                  <img
                      class="h-auto w-16 mr-2"
                      :src="$url + job.office_data.image"
                      alt=""
                  />
                  <span class="text-xs">{{ job.office_data.name }}</span>
                </div>
              </div>
              <div>{{ job.content }}</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>
            <v-card-actions>
          <span class="mr-6 text-xs p-2">{{
              $kit.dateTH(job.bookmark_add)
            }}</span>
              <v-spacer></v-spacer>

              <v-btn fab small
                     class="ma-1"
                     outlined
                     depressed
                     @click="$router.push(`/app/search/${job.bookmark_id}/`)"
                     color="primary" >
                <v-icon>mdi-eye</v-icon>
              </v-btn >
            </v-card-actions>

          </v-card>
        </div>

      </div>

    </div>


  </div>
</template>


<script>
export default {
  data: () => ({
    bookmarks: [],
  }),
  async created() {
    await this.run();
  },
  methods: {
    async run() {
      let bookmarks = this.$_.map(this.$auth.myBookMark, (r) => {
        return {...r.job_data, bookmark_id: r.id, bookmark_add: r.created_at};
      });
      this.bookmarks = bookmarks;
      console.log(this.bookmarks);
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
              `/api/account/user-bookmark/${bookmark}/`
          );
          if (remove) {
            await this.$web.alert(
                `ลบข้อมูลเรียบร้อย`,
                `success`,
                `ลบ Bookmark ของคุณเรียบร้อยแล้ว`
            );

            await this.$auth.setUser();
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
  },
};
</script>


<style>
.bbg {
  background-size: cover;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='500' preserveAspectRatio='none' viewBox='0 0 1920 500'%3e%3cg mask='url(%26quot%3b%23SvgjsMask18913%26quot%3b)' fill='none'%3e%3crect width='101.6' height='101.6' clip-path='url(%26quot%3b%23SvgjsClipPath18914%26quot%3b)' x='352.95' y='149.29' fill='url(%23SvgjsPattern18915)' transform='rotate(89.81%2c 403.75%2c 200.09)'%3e%3c/rect%3e%3crect width='240' height='240' clip-path='url(%26quot%3b%23SvgjsClipPath18916%26quot%3b)' x='855.14' y='6.52' fill='url(%23SvgjsPattern18917)' transform='rotate(207.73%2c 975.14%2c 126.52)'%3e%3c/rect%3e%3crect width='132' height='132' clip-path='url(%26quot%3b%23SvgjsClipPath18918%26quot%3b)' x='178.68' y='375.03' fill='url(%23SvgjsPattern18919)' transform='rotate(32.38%2c 244.68%2c 441.03)'%3e%3c/rect%3e%3cpath d='M135.87 75.4L128.81 64.72 137.69 55.48 130.63 44.8 139.5 35.57 132.44 24.88 141.31 15.65M143.84 76.13L136.78 65.44 145.65 56.21 138.59 45.53 147.47 36.29 140.41 25.61 149.28 16.37M151.81 76.85L144.75 66.17 153.62 56.93 146.56 46.25 155.43 37.02 148.37 26.33 157.25 17.1' stroke='rgba(23%2c 103%2c 205%2c 1)' stroke-width='1' stroke-dasharray='3%2c 2'%3e%3c/path%3e%3crect width='60' height='60' clip-path='url(%26quot%3b%23SvgjsClipPath18920%26quot%3b)' x='1412.18' y='221.15' fill='url(%23SvgjsPattern18921)' transform='rotate(183.01%2c 1442.18%2c 251.15)'%3e%3c/rect%3e%3cpath d='M1358.73 265.18 L1355.6599999999999 325.89L1321.694970160497 260.034970160497z' stroke='rgba(154%2c 255%2c 166%2c 1)' stroke-width='2.57'%3e%3c/path%3e%3ccircle r='41.666666666666664' cx='520.67' cy='223.85' stroke='rgba(251%2c 255%2c 158%2c 1)' stroke-width='1.64'%3e%3c/circle%3e%3cpath d='M1287.99 360.25a5.6 5.6 0 1 0 2.96-10.81 5.6 5.6 0 1 0-2.96 10.81zM1292.21 344.81a5.6 5.6 0 1 0 2.96-10.8 5.6 5.6 0 1 0-2.96 10.8zM1296.44 329.38a5.6 5.6 0 1 0 2.96-10.8 5.6 5.6 0 1 0-2.96 10.8zM1300.66 313.95a5.6 5.6 0 1 0 2.96-10.8 5.6 5.6 0 1 0-2.96 10.8zM1294.97 395.33a5.6 5.6 0 1 0 2.96-10.8 5.6 5.6 0 1 0-2.96 10.8zM1299.2 379.9a5.6 5.6 0 1 0 2.95-10.8 5.6 5.6 0 1 0-2.95 10.8zM1303.42 364.47a5.6 5.6 0 1 0 2.96-10.8 5.6 5.6 0 1 0-2.96 10.8zM1307.65 349.04a5.6 5.6 0 1 0 2.95-10.8 5.6 5.6 0 1 0-2.95 10.8zM1301.95 430.42a5.6 5.6 0 1 0 2.96-10.8 5.6 5.6 0 1 0-2.96 10.8zM1306.18 414.99a5.6 5.6 0 1 0 2.96-10.8 5.6 5.6 0 1 0-2.96 10.8zM1310.4 399.56a5.6 5.6 0 1 0 2.96-10.8 5.6 5.6 0 1 0-2.96 10.8zM1314.63 384.13a5.6 5.6 0 1 0 2.96-10.81 5.6 5.6 0 1 0-2.96 10.81z' fill='rgba(247%2c 86%2c 123%2c 1)'%3e%3c/path%3e%3crect width='108.24' height='108.24' clip-path='url(%26quot%3b%23SvgjsClipPath18922%26quot%3b)' x='1630.87' y='154.2' fill='url(%23SvgjsPattern18923)' transform='rotate(71.98%2c 1684.99%2c 208.32)'%3e%3c/rect%3e%3cpath d='M1540.23 61.41a5.6 5.6 0 1 0-10.55-3.74 5.6 5.6 0 1 0 10.55 3.74zM1525.15 56.07a5.6 5.6 0 1 0-10.56-3.74 5.6 5.6 0 1 0 10.56 3.74zM1510.07 50.73a5.6 5.6 0 1 0-10.56-3.74 5.6 5.6 0 1 0 10.56 3.74zM1494.99 45.39a5.6 5.6 0 1 0-10.56-3.74 5.6 5.6 0 1 0 10.56 3.74zM1575.74 57.01a5.6 5.6 0 1 0-10.56-3.74 5.6 5.6 0 1 0 10.56 3.74zM1560.66 51.67a5.6 5.6 0 1 0-10.56-3.74 5.6 5.6 0 1 0 10.56 3.74zM1545.58 46.33a5.6 5.6 0 1 0-10.56-3.74 5.6 5.6 0 1 0 10.56 3.74zM1530.49 40.99a5.6 5.6 0 1 0-10.55-3.74 5.6 5.6 0 1 0 10.55 3.74zM1611.25 52.61a5.6 5.6 0 1 0-10.56-3.74 5.6 5.6 0 1 0 10.56 3.74zM1596.16 47.27a5.6 5.6 0 1 0-10.55-3.74 5.6 5.6 0 1 0 10.55 3.74zM1581.08 41.93a5.6 5.6 0 1 0-10.56-3.74 5.6 5.6 0 1 0 10.56 3.74zM1566 36.59a5.6 5.6 0 1 0-10.56-3.74 5.6 5.6 0 1 0 10.56 3.74z' stroke='rgba(89%2c 228%2c 251%2c 1)' stroke-width='1' stroke-dasharray='4%2c 4'%3e%3c/path%3e%3cpath d='M530.86 36.17a5.6 5.6 0 1 0 9.87 5.3 5.6 5.6 0 1 0-9.87-5.3zM544.96 43.75a5.6 5.6 0 1 0 9.86 5.3 5.6 5.6 0 1 0-9.86-5.3zM559.05 51.32a5.6 5.6 0 1 0 9.86 5.3 5.6 5.6 0 1 0-9.86-5.3zM573.14 58.9a5.6 5.6 0 1 0 9.87 5.3 5.6 5.6 0 1 0-9.87-5.3zM495.1 35.11a5.6 5.6 0 1 0 9.87 5.3 5.6 5.6 0 1 0-9.87-5.3zM509.19 42.69a5.6 5.6 0 1 0 9.87 5.3 5.6 5.6 0 1 0-9.87-5.3zM523.29 50.26a5.6 5.6 0 1 0 9.86 5.31 5.6 5.6 0 1 0-9.86-5.31zM537.38 57.84a5.6 5.6 0 1 0 9.87 5.3 5.6 5.6 0 1 0-9.87-5.3zM459.34 34.05a5.6 5.6 0 1 0 9.86 5.31 5.6 5.6 0 1 0-9.86-5.31zM473.43 41.63a5.6 5.6 0 1 0 9.87 5.3 5.6 5.6 0 1 0-9.87-5.3zM487.53 49.2a5.6 5.6 0 1 0 9.86 5.31 5.6 5.6 0 1 0-9.86-5.31zM501.62 56.78a5.6 5.6 0 1 0 9.86 5.3 5.6 5.6 0 1 0-9.86-5.3z' fill='rgba(23%2c 103%2c 205%2c 1)'%3e%3c/path%3e%3cpath d='M618.29 318.98L625.71 329.42 617.16 338.95 624.58 349.38 616.03 358.92 623.45 369.35 614.9 378.88M610.3 318.53L617.72 328.96 609.17 338.5 616.59 348.93 608.04 358.46 615.46 368.9 606.91 378.43M602.31 318.08L609.74 328.51 601.18 338.04 608.61 348.48 600.05 358.01 607.48 368.45 598.92 377.98' stroke='rgba(251%2c 255%2c 158%2c 1)' stroke-width='1' stroke-dasharray='4%2c 4'%3e%3c/path%3e%3crect width='308' height='308' clip-path='url(%26quot%3b%23SvgjsClipPath18924%26quot%3b)' x='1462.7' y='166.4' fill='url(%23SvgjsPattern18925)' transform='rotate(284.97%2c 1616.7%2c 320.4)'%3e%3c/rect%3e%3cpath d='M851.21 37.2L857.28 25.92 869.61 29.37 875.69 18.1 888.02 21.55 894.09 10.28 906.43 13.73M854.34 44.56L860.41 33.29 872.74 36.74 878.82 25.46 891.15 28.91 897.22 17.64 909.55 21.09M857.47 51.92L863.54 40.65 875.87 44.1 881.95 32.82 894.28 36.28 900.35 25 912.68 28.45' stroke='rgba(251%2c 255%2c 158%2c 1)' stroke-width='1' stroke-dasharray='4%2c 4'%3e%3c/path%3e%3crect width='288' height='288' clip-path='url(%26quot%3b%23SvgjsClipPath18926%26quot%3b)' x='604.14' y='26.46' fill='url(%23SvgjsPattern18927)' transform='rotate(35.8%2c 748.14%2c 170.46)'%3e%3c/rect%3e%3ccircle r='41.666666666666664' cx='996.54' cy='123.36' stroke='rgba(154%2c 255%2c 166%2c 1)' stroke-width='1.87' stroke-dasharray='2%2c 2'%3e%3c/circle%3e%3ccircle r='41.666666666666664' cx='1632.9' cy='338.14' stroke='rgba(23%2c 103%2c 205%2c 1)' stroke-width='1.92' stroke-dasharray='3%2c 2'%3e%3c/circle%3e%3crect width='306' height='306' clip-path='url(%26quot%3b%23SvgjsClipPath18928%26quot%3b)' x='1695.87' y='216.71' fill='url(%23SvgjsPattern18929)' transform='rotate(21.79%2c 1848.87%2c 369.71)'%3e%3c/rect%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask18913'%3e%3crect width='1920' height='500' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='10.16' height='10.16' patternUnits='userSpaceOnUse' id='SvgjsPattern18915'%3e%3cpath d='M5.08 1L5.08 9.16M1 5.08L9.16 5.08' stroke='rgba(255%2c 255%2c 255%2c 1)' fill='none' stroke-width='1.79'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath18914'%3e%3ccircle r='25.4' cx='403.75' cy='200.09'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern18917'%3e%3cpath d='M3 1L3 5M1 3L5 3' stroke='rgba(251%2c 255%2c 158%2c 1)' fill='none' stroke-width='1'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath18916'%3e%3ccircle r='60' cx='975.14' cy='126.52'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern18919'%3e%3cpath d='M3 1L3 5M1 3L5 3' stroke='rgba(247%2c 86%2c 123%2c 1)' fill='none' stroke-width='1.01'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath18918'%3e%3ccircle r='33' cx='244.68' cy='441.03'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern18921'%3e%3cpath d='M0 6L3 0L6 6' stroke='rgba(251%2c 255%2c 158%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath18920'%3e%3ccircle r='15' cx='1442.18' cy='251.15'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='9.02' height='9.02' patternUnits='userSpaceOnUse' id='SvgjsPattern18923'%3e%3cpath d='M0 9.02L4.51 0L9.02 9.02' stroke='rgba(154%2c 255%2c 166%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath18922'%3e%3ccircle r='27.06' cx='1684.99' cy='208.32'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='11' height='11' patternUnits='userSpaceOnUse' id='SvgjsPattern18925'%3e%3cpath d='M5.5 1L5.5 10M1 5.5L10 5.5' stroke='rgba(251%2c 255%2c 158%2c 1)' fill='none' stroke-width='1.78'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath18924'%3e%3ccircle r='77' cx='1616.7' cy='320.4'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern18927'%3e%3cpath d='M0 6L3 0L6 6' stroke='rgba(23%2c 103%2c 205%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath18926'%3e%3ccircle r='72' cx='748.14' cy='170.46'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='10.2' height='10.2' patternUnits='userSpaceOnUse' id='SvgjsPattern18929'%3e%3cpath d='M5.1 1L5.1 9.2M1 5.1L9.2 5.1' stroke='rgba(251%2c 255%2c 158%2c 1)' fill='none' stroke-width='3.7'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath18928'%3e%3ccircle r='76.5' cx='1848.87' cy='369.71'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
}

.gghP{
  background-color: #85FFBD;
  background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);

}
</style>
