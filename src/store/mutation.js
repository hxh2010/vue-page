import * as types from './mutation-type'

const mutations = {
  [types.LOGIN_INFO] (state, loginInfo) {
    state.loginInfo = loginInfo
  }
}

export default mutations
