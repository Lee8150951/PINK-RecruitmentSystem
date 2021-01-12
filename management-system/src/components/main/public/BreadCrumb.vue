<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <slot></slot>
  </el-breadcrumb>
</template>

<script>
  export default {
    name: "BreadCrumb"
  }
</script>

<style scoped>

</style>
