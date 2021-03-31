import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('./pages/home')
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: routes
})
