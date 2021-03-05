import Vue from 'vue'
import Router from 'vue-router'

// 登录注册模块
const Premise = () => import("../views/premise/main")
const ApplyLogin = () => import("../views/premise/login/apply_login")
const ApplyRegister = () => import("../views/premise/register/apply_register")
const HireLogin = () => import("../views/premise/login/hire_login")
const HireRegister = () => import("../views/premise/register/hire_register")
// 应聘系统主体模块
const ApplySystem = () => import("../views/apply-system/main")
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
const ApplyResume = () => import("../views/apply-system/resume")
const ApplyResumeExport = () => import("../views/apply-system/export")
// 招聘系统主体模块
const HireSystem = () => import("../views/hire-system/main")
const HireMain = () => import("../views/hire-system/home")
const HireAttract = () => import("../views/hire-system/attract")
const HireRelease = () => import("../views/hire-system/release")
const HireProfile = () => import("../views/hire-system/profile")
const HireChat = () => import("../views/hire-system/chats")
const HireEdit = () => import("../views/hire-system/edit")

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/premise/apply_login'
  },
  {
    path: '/premise',
    component: Premise,
    // 配置子路由
    children: [
      {
        path: 'apply_login',
        component: ApplyLogin
      },
      {
        path: 'hire_login',
        component: HireLogin
      },
      {
        path: 'apply_register',
        component: ApplyRegister
      },
      {
        path: 'hire_register',
        component: HireRegister
      }
    ]
  },
  {
    path: '/index',
    component: ApplySystem,
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
      },
      {
        path: "apply_resume",
        component: ApplyResume
      },
      {
        path: "apply_export",
        component: ApplyResumeExport
      }
    ]
  },
  {
    path: '/hire',
    component: HireSystem,
    // 配置子路由
    children: [
      {
        path: "hire_home",
        component: HireMain
      },
      {
        path: "hire_attract",
        component: HireAttract
      },
      {
        path: "hire_release",
        component: HireRelease
      },
      {
        path: "hire_profile",
        component: HireProfile
      },
      {
        path: "hire_chat",
        component: HireChat
      },
      {
        path: "hire_edit",
        component: HireEdit
      }
    ]
  }
]

const router = new Router({
  routes,
  mode: "history"
})

export default router
