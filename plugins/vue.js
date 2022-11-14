import Vue from 'vue' 
import env from '@/plugins/env'  
import moment from 'moment'
import _ from 'lodash'
import { Core } from '@/vuexes/core'
import { Auth } from '@/vuexes/auth'
import { Web } from '@/vuexes/web'
import { Kit } from '@/vuexes/kit'
import vBlur from 'v-blur'  
Vue.prototype.$url  = env.host 
Vue.prototype.$furl =  env.web 
Vue.use(vBlur) 

Vue.prototype.$moment = moment
Vue.prototype.$_ = _
Vue.prototype.$core = Core
Vue.prototype.$auth = Auth
Vue.prototype.$web = Web
Vue.prototype.$kit = Kit
Vue.prototype.$env = env
Vue.prototype.$go = async (path)=> {
   // await router.push(path)
   await $nuxt.$router.push(path) 
}
Vue.prototype.$re = async (path)=> {
    // await router.push(path)
    await $nuxt.$router.replace(path) 
 }

 Vue.prototype.$currentPath = ()=> {
    // await router.push(path)
    return $nuxt.$route.path
 }
 Vue.prototype.$currentPathName = ()=> {
   // await router.push(path)
   return $nuxt.$route.name
}

Vue.prototype.$v ={
    req: (v) => !!v || 'This field is required',
    req2: (v) => !!v || '',
    email: (v) => /.+@.+/.test(v) || 'E-mail must be valid',  
    mm13: (v) => (v && v.length == 13) || 'Max 13 characters', 
    number: (v) => (v && (!isNaN(parseFloat(v)))) || 'Number Only',
    
}


import data from '@/assets/data/job.json'
import detail from '@/assets/data/detail.json'
Vue.prototype.$jobs = _.map(data.jobs, (r, ondex) => { 
   let obj = r
   obj.com_name = r.companyMeta.name
   obj.com_logo = r.companyMeta.logoUrl
   return obj
  })
let cats = _.map(data.jobs, 'categories') 
Vue.prototype.$categories = _.uniq(_.flatten(cats))
Vue.prototype.$job = detail.detail