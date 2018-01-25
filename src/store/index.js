import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutation from './mutation'
// import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutation
})
