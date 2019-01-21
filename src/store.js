import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    roomCode: null,
    username: null,
    next: false
  },
  mutations: {
    setRoomCode(state, payload) {
      state.roomCode = payload;
    },
    setUsername(state, payload) {
      state.username = payload;
    },
    setNext(state, payload) {
      state.next = payload;
    }
  },
  actions: {
    setRoomCodeAndUsername({commit}, payload) {
      commit('setRoomCode', payload.roomCode)
      commit('setUsername', payload.username)
      console.log('roomCode set to: ' + payload.roomCode);
    },
    setRoomCode({commit}, payload){
      commit('setRoomCode', payload.roomCode)
    },
    setNext({commit}, payload){
      commit('setNext', payload.next)
    }
  },
  getters: {
    roomCode: (state) => {
      return state.roomCode;
    },
    username: (state) => {
      return state.username;
    },
    next: (state) => {
      return state.next;
    }
  }
})
