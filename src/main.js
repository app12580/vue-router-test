import Vue from 'vue'
import App from './App.vue'
import routers from './routers'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routers: routers
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})


