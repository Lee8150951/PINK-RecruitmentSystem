import Vue from 'vue'
import Router from 'vue-router'

// 登录注册模块
const Initialization = () => import("../views/premise/Initialization")
const LoginMain = () => import("../views/premise/login/main")
const LoginAdmin = () => import("../views/premise/login/admin_login/admin_login")
const LoginCompany = () => import("../views/premise/login/company_login/company_login")
const RegisterMain = () => import("../views/premise/register/main")
const RegisterAdmin = () => import("../views/premise/register/admin_register/admin_register")
const RegisterCompany = () => import("../views/premise/register/company_register/company_register")
// 管理员模块
const AdminMain = () => import("../views/admin/main")
const AdminIndex = () => import("../views/admin/index/admin_index")
const AdminProfile = () => import("../views/admin/profile/admin_profile")
const ManageAdmin = () => import("../views/admin/management/admin/manage_admin")
const ManageCompany = () => import("../views/admin/management/company/manage_company")
const ManageUser = () => import("../views/admin/management/user/manage_user")
const AddCompany = () => import("../views/admin/management/company/add_company")
const AddUser = () => import("../views/admin/management/user/add_user")
const EditCompany = () => import("../views/admin/management/company/edit_company")
const EditUser = () => import("../views/admin/management/user/edit_user")

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/UserShunt'
  },
  {
    path: '/UserShunt',
    component: Initialization
  },
  {
    path: '/login',
    component: LoginMain,
    // 配置子路由
    children: [
      {
        path: 'admin_login',
        component: LoginAdmin
      },
      {
        path: 'company_login',
        component: LoginCompany
      }
    ]
  },
  {
    path: '/register',
    component: RegisterMain,
    // 配置子路由
    children: [
      {
        path: 'admin_register',
        component: RegisterAdmin
      },
      {
        path: 'company_register',
        component: RegisterCompany
      }
    ]
  },
  {
    path: '/admin',
    component: AdminMain,
    // 配置子路由
    children: [
      {
        path: 'admin_home',
        component: AdminIndex
      },
      {
        path: 'manage_admin',
        component: ManageAdmin
      },
      {
        path: 'manage_company',
        component: ManageCompany
      },
      {
        path: 'add_company',
        component: AddCompany
      },
      {
        path: 'edit_company',
        component: EditCompany
      },
      {
        path: 'manage_user',
        component: ManageUser
      },
      {
        path: 'add_user',
        component: AddUser
      },
      {
        path: 'edit_user',
        component: EditUser
      },
      {
        path: 'admin_profile',
        component: AdminProfile
      }
    ]
  }
]

const router = new Router({
  routes,
  mode: "history"
})

export default router
