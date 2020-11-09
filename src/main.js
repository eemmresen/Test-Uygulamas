import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import anasayfa from './components/anasayfa.vue'
import postdetail from './components/post_detail.vue'
import profildetail from './components/profil_detail.vue'


Vue.config.productionTip = false

const router =new VueRouter({

  routes:[
    { path: '/', component:anasayfa},
    {path: '/post/:id',component:postdetail},
    {path: '/profile/:id',component:profildetail}
  ],
  mode:'history'

})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
