import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import EmpInfo from '../components/EmpInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/emp',
      name: 'EmpInfo',
      component: EmpInfo
    }
  ]
})
