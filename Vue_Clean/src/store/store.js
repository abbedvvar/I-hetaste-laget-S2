import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  loadingStatus:"not loading"
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
    Loading_Status (state,Status) {
        state.loadingStatus = Status;
      },
  
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
      LoadingStatus: ({ commit },Status) => {
       
        commit('Loading_Status',Status);
      },

}

// getters are functions
const getters = {
  loadingStatus: state => state.loadingStatus,
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})