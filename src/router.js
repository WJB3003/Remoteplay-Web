import Vue from 'vue'
import Router from 'vue-router'

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
      path: '/wait',
      name: 'wait',
      component: () => import('./views/user/Wait.vue')
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
    },
    {
      path: '/host/game/before',
      name: 'game-before',
      component: () => import('./views/host/Game.vue')
    },
    {
      path: '/host/game/after',
      name: 'game-after',
      component: () => import('./views/host/Judging.vue')
    },
    {
      path: '/host/winner',
      name: 'winner',
      component: () => import('./views/host/WinnerDisplay.vue')
    }
  ]
})
