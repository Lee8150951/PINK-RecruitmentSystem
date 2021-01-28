<template>
  <div class="main">
    <header class="header" style="z-index: 1">
      <nav-menu>
        <el-menu-item index="1" style="margin-left: 10%">首页</el-menu-item>
        <el-menu-item index="2">职位</el-menu-item>
        <el-menu-item index="3">公司</el-menu-item>
        <el-menu-item index="4">论坛</el-menu-item>
        <el-menu-item index="5">APP</el-menu-item>
        <el-menu-item index="6">资讯</el-menu-item>
        <el-submenu index="7" style="float: right">
          <template slot="title">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          </template>
          <el-menu-item index="7-1">个人信息</el-menu-item>
          <el-menu-item index="7-2">账号设置</el-menu-item>
          <el-menu-item index="7-3">切换账号</el-menu-item>
        </el-submenu>
      </nav-menu>
    </header>
    <section class="main">
      <nav-bar style="z-index: 1"></nav-bar>
      <section class="route">
        <section style="z-index: 0">
          <router-view></router-view>
        </section>
        <footer-bar></footer-bar>
      </section>
    </section>
  </div>
</template>

<script>
// NavMenu组件
import NavMenu from "../../components/navmenu/NavMenu";
// NavBar组件
import NavBar from "../../components/navbar/NavBar";
// Footer组件
import FooterBar from "../../components/footer/Footer";
export default {
  name: "main",
  components: {FooterBar, NavBar, NavMenu},
  data() {
    return {
      activeIndex: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/apply-system/main.css";
</style>
