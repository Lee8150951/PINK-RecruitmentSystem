<template>
  <div class="post-item">
    <el-row>
      <el-col :span="12">
        <div class="header-content">
          <li class="job-name"><slot name="job-name"></slot></li>
          <li class="job-info">
            <span class="salary"><slot name="job-salary"></slot></span>
            <span class="experience"><slot name="job-experience"></slot></span>
            <span class="degree"><slot name="job-degree"></slot></span>
            <span class="address"><slot name="job-address"></slot></span>
          </li>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="header-content">
          <li class="company-name"><slot name="company-name"></slot></li>
          <li class="company-info">
            <span class="type"><slot name="company-type"></slot></span>
            <span class="state"><slot name="company-state"></slot></span>
            <span class="employees"><slot name="company-employees"></slot></span>
          </li>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="header-content">
          <div class="company-logo">
            <slot name="company-logo"></slot>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="bottom-content">
      <el-col :span="12">
        <div class="footer-content">
          <slot name="items"></slot>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="footer-content">
          <span class="welfare">
            <slot name="welfare"></slot>
          </span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "PostItem"
  }
</script>

<style scoped>
@import "../../assets/css/components/postitem.css";
</style>
