import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  accounts: [
    {
      key: 1,
      name: 'CO-BANK',
      balance: 30000
    },
    {
      key: 2,
      name: 'AC_B',
      balance: 0
    }
  ]
}
export default new Vuex.Store({
  state,
  mutations: {
    updateAccount (state, account) {
      state.accounts.push(account)
    }
  },
  actions: {
    addAccount (context, account) {
      context.commit('updateAccount', account)
    }
  }
})
