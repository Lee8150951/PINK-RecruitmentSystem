import Vue from 'vue'
import Router from 'vue-router'

// 登录注册模块
const Premise = () => import("../views/premise/main")
// 应聘系统主体模块
const System = () => import("../views/apply-system/main")
const ApplyMain = () => import("../views/apply-system/home")
const ApplyProfile = () => import("../views/apply-system/profile")
const ApplyEdit = () => import("../views/apply-system/edit")
const ApplyPosition = () => import("../views/apply-system/position")
const ApplyApplication = () => import("../views/apply-system/application")
const ApplyCompany = () => import("../views/apply-system/company")
const ApplyForum = () => import("../views/apply-system/forum")
const ApplyNews = () => import("../views/apply-system/news")
const ApplyCompanyDetail = () => import("../views/apply-system/details/company-detail")
const ApplyPositionDetail = () => import("../views/apply-system/details/position-detail")

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
      },
      {
        path: "apply_profile",
        component: ApplyProfile
      },
      {
        path: "apply_edit",
        component: ApplyEdit
      },
      {
        path: "apply_company",
        component: ApplyCompany
      },
      {
        path: "apply_forum",
        component: ApplyForum
      },
      {
        path: "apply_position",
        component: ApplyPosition
      },
      {
        path: "apply_news",
        component: ApplyNews
      },
      {
        path: "apply_application",
        component: ApplyApplication
      },
      {
        path: "company_detail",
        component: ApplyCompanyDetail
      },
      {
        path: "position_detail",
        component: ApplyPositionDetail
      }
    ]
  }
]

const router = new Router({
  routes,
  mode: "history"
})

export default router
