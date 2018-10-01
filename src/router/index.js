import Vue from 'vue'
import Router from 'vue-router'
import Budgets from '@/components/BudgetsList'
import AccountList from '@/components/AccountList'
import BudgetCreate from '@/components/BudgetAdd'
import AccountAdd from '@/components/AccountAdd'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'AccountList',
      component: AccountList
    },
    {
      path: '/budget',
      name: 'Budgets',
      component: Budgets
    },
    {
      path: '/create',
      name: 'BudgetCreate',
      component: BudgetCreate
    },
    {
      path: '/accounts/create',
      name: 'AccountAdd',
      component: AccountAdd
    }
  ]
})
