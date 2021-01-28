import Vue from 'vue'
import Router from 'vue-router'

// 登录注册模块
const Premise = () => import("../views/premise/main")
// 应聘系统主体模块
const System = () => import("../views/apply-system/main")
const ApplyMain = () => import("../views/apply-system/home")

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
    component: System,
    // 配置子路由
    children: [
      {
        path: 'apply_home',
        component: ApplyMain
      }
    ]
  }
]

const router = new Router({
  routes,
  mode: "history"
})

export default router
