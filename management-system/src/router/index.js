import Vue from 'vue'
import Router from 'vue-router'

const AdminIndex = () => import("../views/admin/index/admin_index")
const ManageAdmin = () => import("../views/admin/management/admin/manage_admin")
const ManageCompany = () => import("../views/admin/management/company/manage_company")
const ManageUser = () => import("../views/admin/management/user/manage_user")

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/admin_home'
  },
  {
    path: '/admin_home',
    component: AdminIndex
  },
  {
    path: '/manage_admin',
    component: ManageAdmin
  },
  {
    path: '/manage_company',
    component: ManageCompany
  },
  {
    path: '/manage_user',
    component: ManageUser
  }
]

const router = new Router({
  routes,
  mode: "history"
})

export default router
