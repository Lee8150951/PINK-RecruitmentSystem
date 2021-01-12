<template>
  <div id="app">
    <el-container>
      <el-header>
        <nav-menu></nav-menu>
      </el-header>
      <el-container>
        <el-aside width="270px">
          <side-bar>
            <side-bar-item path="/admin_home">
              <i class="el-icon-s-home" slot="item-icon"></i>
              <span slot="item-title">总览</span>
            </side-bar-item>
            <side-bar-item path="/manage_company">
              <i class="el-icon-s-cooperation" slot="item-icon"></i>
              <span slot="item-title">公司管理</span>
            </side-bar-item>
            <side-bar-item path="/manage_user">
              <i class="el-icon-s-custom" slot="item-icon"></i>
              <span slot="item-title">用户管理</span>
            </side-bar-item>
            <side-bar-item path="/manage_admin">
              <i class="el-icon-user-solid" slot="item-icon"></i>
              <span slot="item-title">管理员</span>
            </side-bar-item>
          </side-bar>
        </el-aside>
        <el-main class="app_main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// 导入NavMenu组件
import NavMenu from "./components/navmenu/NavMenu";
// 导入SideBar组件
import SideBar from "./components/sidebar/SideBar";
// 导入SideBarItem组件
import SideBarItem from "./components/sidebar/SideBarItem";
export default {
  name: 'App',
  components: {SideBarItem, SideBar, NavMenu}
}
</script>

<style>
@import "./assets/css/app.css";
</style>
