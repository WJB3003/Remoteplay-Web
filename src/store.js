import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    roomCode: null,
    username: null
  },
  mutations: {
    setRoomCode(state, payload) {
      state.roomCode = payload;
    },
    setUsername(state, payload) {
      state.username = payload;
    }
  },
  actions: {
    setRoomCodeAndUsername({commit}, payload) {
      commit('setRoomCode', payload.roomCode)
    }
  },
  getters: {
    roomCode: (state) => {
      return state.roomCode;
    },
    username: (state) => {
      return state.username;
    }
  }
})
