<template>
  <div>
    <el-button @click="drawer = true" type="primary" icon="el-icon-s-operation" circle class="drawer-btn"></el-button>
    <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false">
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: "DrawerBox",
  data() {
    return {
      drawer: false,
    };
  }
}
</script>

<style scoped>
@import "../../../assets/css/hire-system/components/drawerbox.css";
</style>
