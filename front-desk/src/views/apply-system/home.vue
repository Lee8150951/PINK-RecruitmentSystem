<template>
  <div class="home-body">
    <el-row></el-row>
    <el-row class="search">
      <el-col :span="4"><div class="grid-content"></div></el-col>
      <el-col :span="15">
        <el-input placeholder="请输入内容" v-model="search" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      search: ''
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/apply-system/home.css";
</style>
