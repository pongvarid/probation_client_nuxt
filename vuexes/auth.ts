import { VuexModule, Module, Mutation, Action } from "vuex-class-modules";
import Vue from 'vue'
import _ from "lodash"
import { Core } from '@/vuexes/core'
import { Web } from '@/vuexes/web'
import axios from '@/plugins/axios'

@Module({ generateMutationSetters: true })
class AuthModule extends VuexModule {
    /**
    * @point Base Variable สำหรับเก็บข้อมูล user ลงใน store
    */
    private token: any = localStorage.getItem('token')
    public user: any = null

    public myOffice:any = null

    /**
    * @point Custom Variable สำหรับเก็บข้อมูล user ลงใน store
    */ 
    public data:any = {}
    public categories:any = []
    public subCategories:any = []

    public myBookMark:any = []

    /**
    * @point สำหรับรันเมื่อ login สำเร็จ และ สามารถโยนข้อมูล user เข้าไปใน method นี้ได้เลย
    */
    public async getThenLogin(user: any) {

        await this.getCategory()
        await this.getSubCategory()
        await this.getMyBookMark()

        if(this.user.is_employer) {
            await this.setOffice()
        }
    }

    /**
    * @point Base Function สำหรับเก็บข้อมูล user ลงใน store
    */
    public async setUser() {
        let user = await this.getUser();
        this.user = user
        return user
    }

    public async getUser() {
        try {
            let baseUser = await Core.getHttp(`/api/auth/v1/user/`)
            if (baseUser.pk) {
                let user = await Core.getHttp(`/api/account/userprofile/${baseUser.pk}/`)
                this.user = user
                await this.getThenLogin(user)
                return user;
            }
            return null
        } catch (error) {
            return null
        }
    }

    public async updateUser(form: any) {
        let res = await Core.putHttp(`/api/account/userprofile/${this.user.id}/`, form)
        if (res.id) {
            await Web.alert('Update profile success.', 'success', 'Update profile success.')
        } else {
            await Web.alert('Update profile fail.', 'error', 'Update profile fail.')
        }
        await this.setUser()
        return res
    }

    public async login(form: any) {
        await this.reToken();
        let user = await Core.postHttp(`/api/auth/v1/login/`, form)
        if (user.key) {
            await this.storeToken(user.key);
            await this.storeTokenToStorage(user.key);
            await this.setUser();
            await location.reload();
            return user
        } else {
            await Web.alertAuto(`Cannot Login`, 2000, `error`, `Username or Password is incorrect`)
        }
        return user
    }

    public async register(form: any) {
        await this.reToken();
        let user = await Core.postHttp(`/api/auth/v2/register/`, form)
        if(user.username){

        }
        return user
    }
 


    public async reToken() {
        axios.defaults.headers.common['Authorization'] = '';
    }

    public async storeToken(token: any) {
        // console.log("OK");
        axios.defaults.headers.common['Authorization'] = (token != null) ? `Token ${token}` : '';
    }

    public async storeTokenToStorage(token: any) {
        localStorage.setItem('token', token)
    }

    public async checkToken() {
        if (this.token != null) {
            await this.storeToken(this.token);
        }
    }
    public async checkUser() {
        if (this.token) {
            //  console.log(`TOKEN : ${this.token}`);
            await this.storeToken(this.token);
            let user = await this.getUser();
            if (!user) {
                // alert('Session หมดอายุ di')
                // await Web.alert(`Session หมดอายุ`, `info`,`กรุณา Login ใหม่อีกครั้ง`, )
                await this.reToken();
                await this.logout();
                await location.reload();
            } else {
                await this.setUser()
            }
        }
    }

    public async checkUserLogin() {

        if (this.token) {
            await this.storeToken(this.token);
            let user = await this.getUser();
            console.log(`[AUTH]`, `LOGIN-CHECK`, "INTOKEN");
            if (user) { 
                let path = Vue.prototype.$currentPathName() 
                if (path == 'auth-login' || path == 'auth-register' || path == 'auth-forgot' ||path == 'auth-adminlogin'  ) {
                    if(user.is_employer){
                        await Vue.prototype.$go(`/admin/`)
                    } else{
                        await Vue.prototype.$go(`/app/`)
                    }
                }
            } else {
                await this.logout()
                await location.reload()
            }
        } else {
            console.log(`[AUTH]`, `LOGIN-CHECK`, "NOTOKEN");
            await Vue.prototype.$go(`/auth/login/`)
        }

    }

    public async isLogin() {
        return (this.user) ? true : false
    }

    public async logout() {
        try {
            await localStorage.clear();
            await Core.postHttp('/api/auth/v1/logout/', {})
            await location.reload()
        } catch (error) {
            await location.reload()
        }
    }


    public async getCategory(){
       try {
           let res = await Core.getHttp(`/api/job/category/`)
           this.categories = res
           return res
       }catch (error) {
           console.log('getCategory',error);
           return []
       }
    }
    public async getSubCategory(){
      try {
          let res = await Core.getHttp(`/api/job/sub-category/`)
          this.subCategories = res
          return res
      }catch (error) {
          console.log('getSubCategory',error);
          return []
      }
    }
    public  getSubCategoryByCategory(category_id:any){
        try {
            let res = _.filter(this.subCategories, {category: category_id})
            return res
        }catch (error) {
            console.log('getSubCategoryByCategory',error);
            return []
        }
    }

    public async getMyBookMark(){
        try {
            let res = await Core.getHttp(`/api/account/user-bookmark/?user=${this.user.id}`)
            this.myBookMark = res
            return res
        }catch (error) {
            console.log('getBookMark',error);
            return []
        }
    }

    public async getExistBookMark(job_id:any){
        try {
            let check = _.find(this.myBookMark, {job:job_id})
            return (check.id)?false:true
        }catch (error) {
            console.log('getExistBookMark',error);
            return true
        }
    }


    public async setOffice(){
        if(this.user.office){
            this.myOffice = this.user.office
        }
    }




    
  

}

import store from "@/vuexes"
import moment from "moment";
import { AsyncComponent } from "vue";
export const Auth = new AuthModule({ store, name: "Auth" })

