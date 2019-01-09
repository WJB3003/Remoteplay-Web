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
      name: 'join',
      component: () => import('./views/user/Join.vue')
    },
    {
      path: '/lobby',
      name: 'lobby',
      component: () => import('./views/user/Lobby.vue')
    },
    {
      path: '/judge',
      name: 'judge',
      component: () => import('./views/user/Judge.vue')
    },
    {
      path: '/player',
      name: 'player',
      component: () => import('./views/user/Player.vue')
    },
    {
      path: '/round',
      name: 'next-round',
      component: () => import('./views/user/NextRound.vue')
    },
    {
      path: '/host',
      name: 'host',
      component: () => import('./views/host/Room.vue')
    }
  ]
})
