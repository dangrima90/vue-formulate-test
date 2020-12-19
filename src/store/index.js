import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    formData: {},
    populatedFormData: {
      firstName: 'John',
      lastName: 'Doe',
      age: 55
    }
  },
  mutations: {
    setFormData(state, data) {
      Vue.set(state, 'formData', data);
    },
    setPopulatedFormData(state, data) {
      Vue.set(state, 'populatedFormData', data);
    }
  },
  actions: {
    saveFormData({ commit }, data) {
      commit('setFormData', data);
    },
    savePopuldatedFormData({ commit }, data) {
      commit('setPopulatedFormData', data);
    }
  },
  getters: {
    formData(state) {
      return state.formData;
    },
    populatedFormData(state) {
      return state.populatedFormData;
    }
  },
  modules: {
  }
})
