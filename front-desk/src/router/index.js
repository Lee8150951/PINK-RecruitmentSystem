import Vue from 'vue'
import Router from 'vue-router'

// 登录注册模块
const Premise = () => import("../views/premise/main")
// 系统主体模块
const System = () => import("../views/system/main")

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/premise'
  },
  {
    path: '/premise',
    component: Premise
  },
  {
    path: '/index',
    component: System
  }
]

const router = new Router({
  routes,
  mode: "history"
})

export default router
