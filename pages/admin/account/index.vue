<template>
<div>
    <!-- <h1 class="text-xl">Account</h1> -->
    <div class="flex flex-col justify-center items-center p-8 ccx">
        <v-avatar size="150">
            <v-img src="https://image-service-cdn.seek.com.au/273ca43145e5622f410685098e689617a3b497f2/ee4dce1061f3f616224767ad58cb2fc751b8d2dc" alt="">
            </v-img>
        </v-avatar>
        <h2 class="font-semibold text-xl mt-2">THAI UNION GROUP PCL.</h2>
        <br> <br> <br> <br>
    </div>
    <div class="p-4 -mt-28">
        <v-card>
            <v-card-text>
                <div>
                    <v-tabs>
                        <v-tab>
                            ข้อมูลหน่วยงาน
                        </v-tab>
                        <v-tab-item>
                            <div class="p-4">
                                <v-toolbar color="transparent" dense flat>
                                    <h2>ข้อมูลบริษัท หน่วยงาน</h2>
                                    <v-spacer></v-spacer>
                                </v-toolbar>
                                <v-text-field close dense readonly outlined value="นางสาวเอ" label="ชื่อบริษัท หน่วยงาน" id="id"></v-text-field>
                                <v-text-field dense outlined value="445 ม.14 ต.แม่กา อ.เมืองพะเยา จ.พะเยา" label="ที่อยู่" id="id"></v-text-field>
                                <v-file-input dense outlined label="ภาพโลโก้"></v-file-input>
                                <v-textarea dense outlined label="รายละเอียดเกี่ยวกับหน่วยงานของคุณ"></v-textarea>
                                <v-btn depressed block color="success">แก้ไขข้อมูล</v-btn>

                            </div>
                        </v-tab-item>
                        <v-tab>
                            การติดต่อ
                        </v-tab>
                        <v-tab-item>
                            <div>
                                <v-toolbar color="transparent" dense flat>
                                    <h2>ข้อมูลการติดต่อ</h2>
                                    <v-spacer></v-spacer>
                                    <v-btn small depressed color="success">เพิ่มข้อมูล</v-btn>
                                </v-toolbar>
                                <v-dialog v-model="dialog" scrollable fullscreen persistent :overlay="false" max-width="500px" transition="dialog-transition">
                                    <v-card>
                                        <v-card-title class="headline">เพิ่มข้อมูลการติดต่อ</v-card-title>
                                        <v-card-text>
                                            <v-select :items="['เบอร์โทร','อีเมล','Line','Facebook','อื่นๆ']" label="ประเภท"></v-select>
                                            <v-text-field dense outlined value="ฝ่าย HR" label="ชื่อผู้ติดต่อ" id="id"></v-text-field>
                                            <v-text-field dense outlined value="0988103974" label="รายละเอียดการติดต่อ" id="id"></v-text-field>
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                                            <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                                <v-divider class="mt-4"> </v-divider>
                                <div @click="dialog=true">
                                    <Core-ListMenu head=" เบอร์โทร" txt="02555444"></Core-ListMenu>
                                </div>
                                <v-divider></v-divider>
                                <div @click="dialog=true">
                                    <Core-ListMenu head="Line" txt="@ddas"></Core-ListMenu>
                                </div>
                                <v-divider></v-divider>
                            </div>
                        </v-tab-item>
                        <v-tab>
                            แอปพลิเคชั่น
                        </v-tab>
                        <v-tab-item>
                            <div>
                                <v-divider></v-divider>
                                <div @click="dialog=true">
                                    <Core-ListMenu head="ข้อกำหนดและเงื่อนไข" txt=" " icon="mdi-arrow-right"></Core-ListMenu>
                                </div>
                                <v-divider></v-divider>
                                <div @click="dialog2=true">
                                    <Core-ListMenu head="นโยบายความเป็นส่วนตัว" txt=" " icon="mdi-arrow-right"></Core-ListMenu>
                                </div>
                                <v-divider></v-divider>
                                <div @click="dialog5=true">
                                    <Core-ListMenu head="ติดต่อเรา" txt=" " icon="mdi-arrow-right"></Core-ListMenu>
                                </div>
                                <v-divider></v-divider>
                                <Core-ListMenu head="เวอร์ชัน" txt="0.1a"></Core-ListMenu>
                                <v-divider></v-divider>
                                <div class="p-2">
                                    <v-btn depressed block color="error" large class="mt-6 " @click="$router.push('/auth/login/')">ออกจากระบบ</v-btn>
                                </div>
                            </div>
                        </v-tab-item>
                    </v-tabs>

                    <v-dialog v-model="dialog" scrollable :overlay="false" max-width="500px" transition="dialog-transition">
                        <v-card>
                            <v-card-title primary-title>
                                ข้อกำหนดและเงื่อนไข <v-spacer></v-spacer>
                                <v-btn icon @click="dialog=false">
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                            </v-card-title>
                            <v-card-text>
                                <div class="p-2">
                                    <p>ข้อกำหนดและเงื่อนไข
                                        บริการต่าง ๆ ที่ประเทศไทย แสดงผ่านเว็บไซต์ของเรา (“เว็บไซต์”) จะมีไว้สำหรับผู้หางาน หรือ ผู้ใช้งานอื่น อาทิเช่น ผู้ลงโฆษณา การเข้าสู่เนื้อหาที่ปรากฎในเว็บไซต์ดังกล่าวและการใช้เนื้อหารวมถึงบริการต่าง ๆ ที่แสดงผ่านเว็บไซต์ดังกล่าว อยู่ภายใต้บังคับแห่งข้อกำหนดและเงื่อนไขที่ระบุไว้ต่อจากนี้ (“ข้อกำหนดและเงื่อนไขของเว็บไซต์“) และ ภายใต้บังคับแห่งมาตรการการดูแลรักษาข้อมูลส่วนบุคคลของเรา (“มาตรการด้านข้อมูลส่วนบุคคล“) หากท่านต้องการรายละเอียดเพิ่มเติม เกี่ยวกับมาตรการด้านข้อมูลส่วนบุคคลของประเทศไทย ให้ท่านคลิกที่ ลิงก์นี้

                                        หากท่านไม่ยินยอมปฏิบัติตามข้อกำหนดและเงื่อนไขของเว็บไซต์ และ/หรือ ไม่ยินยอมปฏิบัติตามมาตรการด้านข้อมูลส่วนบุคคล โปรดกรุณาอย่าเข้าร่วม เกี่ยวข้อง เข้าสู่เนื้อหาของเว็บไซต์ ดู ดาวน์โหลด หรือใช้บริการใด ที่ประเทศไทย นำเสนอผ่านเว็บไซต์ของเรา การที่ท่านยังคงใช้เว็บไซต์ของเรา แสดงว่าท่านได้ยอมรับแล้วว่า ท่านรับทราบ อ่านและเข้าใจข้อกำหนดและเงื่อนไขของเว็บไซต์ และมาตรการด้านข้อมูลส่วนบุคคลของเรา และท่านตกลงผูกพันตนตามบทบัญญัติทั้งปวงทั้งในข้อกำหนดและเงื่อนไขของเว็บไซต์ และมาตรการด้านข้อมูลส่วนบุคคลดังกล่าวนั้น ประเทศไทยขอสงวนสิทธิ์ที่จะแก้ไข เพิ่มเติม ลบทิ้ง หรือ ปรับแก้มาตรการด้านข้อมูลส่วนบุคคล รวมถึงข้อกำหนดและเงื่อนไขต่าง ๆ ในเว็บไซต์เมื่อใดก็ได้ โดยไม่ต้องแจ้งให้ทราบล่วงหน้า ทั้งนี้ ขอแนะนำให้ท่านทบทวนข้อกำหนดและเงื่อนไขของเว็บไซต์ และ มาตรการด้านข้อมูลส่วนบุคคลเป็นระยะ อนึ่ง สิทธิของท่านในการเข้าสู่เว็บไซต์และการให้บริการของประเทศไทย จะสิ้นสุดลงเมื่อท่านได้แจ้งต่อ ประเทศไทย ถึงการบอกกล่าวของท่านต่อการเปลี่ยนแปลงใดที่ไม่เป็นที่ยอมรับ มิฉะนั้นการที่ท่านยังคงใช้งาน จะถือเป็นการตกลงยอมรับของท่านต่อการเปลี่ยนแปลงทั้งปวง และการเปลี่ยนแปลงทั้งปวงเหล่านั้นจะมีผลผูกพันต่อท่าน

                                        เว็บไซต์นี้ไม่ได้จัดทำขึ้นสำหรับเด็กอายุต่ำกว่า 10 ปี ดังนั้น บุคคลอายุต่ำกว่า 10 ปี ไม่อาจใช้หรือลงทะเบียนบนเว็บไซต์นี้ หรือให้ข้อมูลใด ๆ ซึ่งรวมถึงข้อมูลส่วนบุคคลแก่ประเทศไทย

                                        สำหรับเด็กที่มีอายุอย่างน้อย 10 ปี แต่ไม่ถึง 20 ปี หรือยังไม่บรรลุนิติภาวะโดยประการอื่นตามกฎหมายไทย ท่านต้องรับรองและรับประกันว่าบิดา/มารดาหรือผู้ปกครองตามกฎหมายของท่านได้รับแจ้งโดยชอบถึงข้อกำหนดและเงื่อนไขฉบับนี้และนโยบายความเป็นส่วนตัว และตกลงตามข้อกำหนดของเอกสารดังกล่าวแล้ว อีกทั้งท่านต้องรับรองและรับประกันว่า ในกรณีที่กฎหมายกำหนดให้ต้องได้รับความยินยอมสำหรับการใช้เว็บไซต์นี้ ท่านมีหน้าที่รับผิดชอบในการดำเนินการให้ได้มาซึ่งความยินยอมโดยชอบจากบิดา/มารดาหรือผู้ปกครองตามกฎหมายของท่าน (“ความยินยอมของบิดา/มารดา”) โดยท่านมีหน้าที่ต้องแสดงหลักฐานการให้ความยินยอมของบิดา/มารดาดังกล่าวแก่ประเทศไทย โดยทันทีเมื่อได้รับการร้องขอ ประเทศไทย ขอสงวนสิทธิในการระงับหรือยกเลิกบัญชีของท่านหากท่านไม่แสดงหลักฐานการให้ความยินยอมของบิดา/มารดาภายในระยะเวลาที่กำหนด ทั้งนี้ โดยจะบอกกล่าวหรือไม่บอกกล่าวก็ได้ และประเทศไทย ไม่ต้องรับผิดหรือรับผิดชอบใด ๆ สำหรับการระงับหรือยกเลิกบัญชีนั้น</p>

                                </div>
                            </v-card-text>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="dialog2" scrollable :overlay="false" max-width="500px" transition="dialog-transition">
                        <v-card>
                            <v-card-title primary-title>
                                นโยบายความเป็นส่วนตัว<v-spacer></v-spacer>
                                <v-btn icon @click="dialog2=false">
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                            </v-card-title>
                            <v-card-text>
                                <div class="p-2">
                                    <p>
                                        ประกาศเกี่ยวกับความเป็นส่วนตัว
                                        บริษัท จัดหางาน จ๊อบส์ ดีบี (ประเทศไทย) จำกัด (“ประเทศไทย” หรือ “เรา”) เคารพความเป็นส่วนตัวของข้อมูลส่วนบุคคลของผู้ใช้ และจะดูแลให้เจ้าหน้าที่ของเราปฏิบัติตามมาตรฐานการรักษาความปลอดภัยและการรักษาความลับที่เคร่งครัดที่สุดในเรื่องเกี่ยวกับข้อมูลส่วนบุคคลทั้งปวงที่ท่านในฐานะของผู้ใช้ ไม่ว่าจะเป็นผู้ใช้ที่ไม่ลงทะเบียนหรือผู้ใช้ที่ลงทะเบียนก็ตาม (เรียกรวมกันว่า “ผู้ใช้” หรือ “ท่าน”) ได้มอบให้แก่ประเทศไทย ผ่านทางเว็บไซต์ของเรา

                                        ประเทศไทย ขอแจ้งให้ท่านทราบว่า ประกาศเกี่ยวกับความเป็นส่วนตัวฉบับนี้ (“ประกาศเกี่ยวกับความเป็นส่วนตัว”) มีความสำคัญอย่างยิ่งต่อผู้ใช้ และดังนั้นเราขอแนะนำเป็นอย่างยิ่งให้ท่านอ่านประกาศเกี่ยวกับความเป็นส่วนตัวฉบับนี้อย่างละเอียดครบถ้วน เพื่อที่ท่านจะเข้าใจนโยบายและแนวปฏิบัติของประเทศไทย เกี่ยวกับการเก็บรวบรวม ใช้ เปิดเผย และประมวลผลข้อมูลส่วนบุคคล (เรียกรวมกันว่า “ประมวลผล”) ซึ่งผู้ใช้ได้มอบให้ในเว็บไซต์ รวมทั้งสิทธิในข้อมูลส่วนบุคคลของท่าน ประกาศเกี่ยวกับความเป็นส่วนตัวฉบับนี้ใช้บังคับกับทั้งผู้ใช้ที่ลงทะเบียนและผู้ใช้ที่ไม่ลงทะเบียน

                                        โดยการลงทะเบียนหรือใช้บริการ/เว็บไซต์ หรือคลิกปุ่ม “ลงทะเบียน” ผู้ใช้รับรองและยืนยันว่าผู้ใช้ได้รับทราบเกี่ยวกับประกาศเกี่ยวกับความเป็นส่วนตัวฉบับนี้แล้ว และผู้ใช้ยอมรับและตกลงตามข้อกำหนดของประกาศเกี่ยวกับความเป็นส่วนตัวดังกล่าว
                                    </p>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-dialog>

                    <v-dialog v-model="dialog5" scrollable :overlay="false" max-width="500px" transition="dialog-transition">
                        <v-card>
                            <v-card-title primary-title>
                                ติดต่อเรา<v-spacer></v-spacer>
                                <v-btn icon @click="dialog5=false">
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                            </v-card-title>
                            <v-card-text>

                                <Core-list head="ศูนย์จังหวัดพะเยา" txt="0988203975" icon="mdi-phone"></Core-list>
                                <Core-list head="ศูนย์จังหวัดเชียงใหม่" txt="0988203975" icon="mdi-phone"> </Core-list>
                            </v-card-text>
                        </v-card>
                    </v-dialog>
                </div>
            </v-card-text>
        </v-card>
    </div>

</div>
</template>

<script>
export default {
    layout: 'admin',
    data: () => ({
        dialog: false,
        dialog2: false,
        dialog3: false,
        dialog4: false,
        dialog5: false,
    }),
}
</script>

<style>
.ccx {
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='800' height='500' preserveAspectRatio='none' viewBox='0 0 800 500'%3e%3cg mask='url(%26quot%3b%23SvgjsMask4219%26quot%3b)' fill='none'%3e%3crect width='338.4' height='338.4' clip-path='url(%26quot%3b%23SvgjsClipPath4220%26quot%3b)' x='475.8' y='145.71' fill='url(%23SvgjsPattern4221)' transform='rotate(284.53%2c 645%2c 314.91)'%3e%3c/rect%3e%3ccircle r='41.666666666666664' cx='89.13' cy='453.16' stroke='rgba(172%2c 179%2c 255%2c 0.47)' stroke-width='1' stroke-dasharray='4%2c 4'%3e%3c/circle%3e%3crect width='91.56' height='91.56' clip-path='url(%26quot%3b%23SvgjsClipPath4222%26quot%3b)' x='277.19' y='333.57' fill='url(%23SvgjsPattern4223)' transform='rotate(3.68%2c 322.97%2c 379.35)'%3e%3c/rect%3e%3ccircle r='62.72552660815657' cx='239.87' cy='373.09' fill='rgba(172%2c 179%2c 255%2c 0.47)'%3e%3c/circle%3e%3crect width='288' height='288' clip-path='url(%26quot%3b%23SvgjsClipPath4224%26quot%3b)' x='282.52' y='132.52' fill='url(%23SvgjsPattern4225)' transform='rotate(303.78%2c 426.52%2c 276.52)'%3e%3c/rect%3e%3cpath d='M32.27-2.5a5.6 5.6 0 1 0-5.03 10.01 5.6 5.6 0 1 0 5.03-10.01zM25.08 11.8a5.6 5.6 0 1 0-5.03 10 5.6 5.6 0 1 0 5.03-10zM17.89 26.09a5.6 5.6 0 1 0-5.03 10.01 5.6 5.6 0 1 0 5.03-10.01zM10.7 40.39a5.6 5.6 0 1 0-5.03 10 5.6 5.6 0 1 0 5.03-10zM32.35-38.27a5.6 5.6 0 1 0-5.03 10 5.6 5.6 0 1 0 5.03-10zM25.16-23.98a5.6 5.6 0 1 0-5.03 10.01 5.6 5.6 0 1 0 5.03-10.01zM17.97-9.68a5.6 5.6 0 1 0-5.03 10 5.6 5.6 0 1 0 5.03-10zM10.79 4.61a5.6 5.6 0 1 0-5.04 10.01 5.6 5.6 0 1 0 5.04-10.01zM32.44-74.05a5.6 5.6 0 1 0-5.04 10.01 5.6 5.6 0 1 0 5.04-10.01zM25.25-59.76a5.6 5.6 0 1 0-5.03 10.01 5.6 5.6 0 1 0 5.03-10.01zM18.06-45.46a5.6 5.6 0 1 0-5.03 10 5.6 5.6 0 1 0 5.03-10zM10.87-31.17a5.6 5.6 0 1 0-5.03 10.01 5.6 5.6 0 1 0 5.03-10.01z' stroke='rgba(211%2c 183%2c 20%2c 0.42)' stroke-width='1' stroke-dasharray='4%2c 4'%3e%3c/path%3e%3crect width='222.72' height='222.72' clip-path='url(%26quot%3b%23SvgjsClipPath4226%26quot%3b)' x='-15.57' y='17.16' fill='url(%23SvgjsPattern4227)' transform='rotate(77.57%2c 95.79%2c 128.52)'%3e%3c/rect%3e%3crect width='232.4' height='232.4' clip-path='url(%26quot%3b%23SvgjsClipPath4228%26quot%3b)' x='-75.32' y='40.56' fill='url(%23SvgjsPattern4229)' transform='rotate(88.12%2c 40.88%2c 156.76)'%3e%3c/rect%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask4219'%3e%3crect width='800' height='500' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='11.28' height='11.28' patternUnits='userSpaceOnUse' id='SvgjsPattern4221'%3e%3cpath d='M0 11.28L5.64 0L11.28 11.28' stroke='rgba(172%2c 179%2c 255%2c 0.47)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath4220'%3e%3ccircle r='84.6' cx='645' cy='314.91'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='91.56' height='6.54' patternUnits='userSpaceOnUse' id='SvgjsPattern4223'%3e%3crect width='91.56' height='3.27' x='0' y='0' fill='rgba(170%2c 174%2c 224%2c 1)'%3e%3c/rect%3e%3crect width='91.56' height='3.27' x='0' y='3.27' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath4222'%3e%3ccircle r='22.89' cx='322.97' cy='379.35'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern4225'%3e%3cpath d='M3 1L3 5M1 3L5 3' stroke='rgba(255%2c 255%2c 255%2c 0.41)' fill='none' stroke-width='1'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath4224'%3e%3ccircle r='72' cx='426.52' cy='276.52'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='13.92' height='13.92' patternUnits='userSpaceOnUse' id='SvgjsPattern4227'%3e%3cpath d='M0 13.92L6.96 0L13.92 13.92' stroke='rgba(232%2c 218%2c 63%2c 0.3)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath4226'%3e%3ccircle r='55.68' cx='95.79' cy='128.52'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='232.4' height='8.3' patternUnits='userSpaceOnUse' id='SvgjsPattern4229'%3e%3crect width='232.4' height='4.15' x='0' y='0' fill='rgba(231%2c 54%2c 53%2c 0.38)'%3e%3c/rect%3e%3crect width='232.4' height='4.15' x='0' y='4.15' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath4228'%3e%3ccircle r='58.1' cx='40.88' cy='156.76'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
 background-attachment: fixed;
background-size: cover;
}
</style>
