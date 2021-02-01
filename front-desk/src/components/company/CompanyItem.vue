<template>
  <div class="company-content">
    <li class="c-logo">
      <img src="../../assets/img/company/tencent.jpg" alt="">
    </li>
    <li class="c-name">
      腾讯
    </li>
    <li class="c-info">
      <span class="c-info-left">已上市</span>
      <span class="c-info-right">互联网</span>
    </li>
    <li class="c-post">
      <el-button plain class="c-post-btn">
        23123个招聘岗位
      </el-button>
    </li>
  </div>
</template>

<script>
export default {
  name: "CompanyItem"
}
</script>

<style scoped>
@import "../../assets/css/components/companyitem.css";
</style>
