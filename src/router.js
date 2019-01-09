import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'user',
      component: () => import('./views/user/Join.vue')
    },
    {
      path: '/host',
      name: 'host',
      component: () => import('./views/host/Room.vue')
    }
  ]
})
