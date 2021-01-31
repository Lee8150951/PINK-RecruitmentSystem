<template>
  <div class="post-item">
    <el-row>
      <el-col :span="12">
        <div class="header-content">
          <li class="job-name">Java开发工程师</li>
          <li class="job-info">
            <span class="salary">20K-30K</span>
            <span class="experience">5-10年</span>
            <span class="degree">硕士</span>
            <span class="address">上海黄浦区</span>
          </li>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="header-content">
          <li class="company-name">腾讯</li>
          <li class="company-info">
            <span class="type">互联网</span>
            <span class="state">已上市</span>
            <span class="employees">10000人</span>
          </li>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="header-content">
          <div class="company-logo">
            <img src="../../assets/img/company/huawei.jpg" alt="">
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="bottom-content">
      <el-col :span="12">
        <div class="footer-content">
          <el-tag v-for="item in items" :key="item" type="info" size="mini">
            {{item}}
          </el-tag>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="footer-content">
          <span class="welfare">员工旅游，带薪年假，定期体检，通讯补贴，交通补助...</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "PostItem",
    data() {
      return {
        items: ['标签一', '标签二', '标签三', '标签四', '标签五']
      }
    }
  }
</script>

<style scoped>
@import "../../assets/css/components/postitem.css";
</style>
