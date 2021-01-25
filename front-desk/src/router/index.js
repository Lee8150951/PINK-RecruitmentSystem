import Vue from 'vue'
import Router from 'vue-router'

// 登录注册模块
const Premise = () => import("../views/premise/main")

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/premise'
  },
  {
    path: '/premise',
    component: Premise
  }
]

const router = new Router({
  routes,
  mode: "history"
})

export default router
