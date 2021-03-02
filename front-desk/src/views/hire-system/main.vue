<template>
  <el-row class="height-all">
    <el-col :span="4" class="height-all">
      <div class="left-content height-all">
        <div class="logo-col">
          <img src="../../assets/img/logo/logo_03.png" alt="logo" class="logo">
          <span class="logo-title">PINK</span>
        </div>
        <div class="feature-col">
          <ul>
            <nav-menu-item v-for="(item, index) in navMenuItems" :key="item.index" :item="item"></nav-menu-item>
          </ul>
        </div>
      </div>
    </el-col>
    <el-col :span="20">
      <div class="right-content">
        <el-row class="top-menu">
          <el-col :span="12">
            <div class="left-search-content">
              <el-input placeholder="Search..." v-model="search">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="right-search-content">
              <span>
                <el-badge :value="23" :max="99" class="item-badge">
                  <el-button type="text" class="top-btn">
                    <i class="el-icon-chat-dot-round"></i>
                  </el-button>
                </el-badge>
              </span>
              <span>
                <el-badge :value="10" :max="99" class="item-badge" type="warning">
                  <el-button type="text" class="top-btn">
                    <i class="el-icon-mobile"></i>
                  </el-button>
                </el-badge>
              </span>
              <avatar-item></avatar-item>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import NavMenuItem from "../../components/hire-system/navmenu/NavMenuItem";
import AvatarItem from "../../components/hire-system/navmenu/AvatarItem";
export default {
  name: "main",
  components: {AvatarItem, NavMenuItem},
  data() {
    return {
      search: '',
      navMenuItems: [
        {
          index: '0',
          title: '总览 Dashboard',
          icon: 'el-icon-odometer',
          path: ''
        },
        {
          index: '1',
          title: '招揽 Attract',
          icon: 'el-icon-attract',
          path: ''
        },
        {
          index: '2',
          title: '发布 Release',
          icon: 'el-icon-position',
          path: ''
        },
        {
          index: '3',
          title: '个人 Profile',
          icon: 'el-icon-user',
          path: ''
        },
      ]
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/hire-system/main.css";
</style>
