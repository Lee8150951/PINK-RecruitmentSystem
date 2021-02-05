<template>
  <el-col :span="8">
    <div class="company-content">
      <li class="c-logo">
        <slot name="c-logo"></slot>
      </li>
      <li class="c-name">
        <slot name="c-name"></slot>
      </li>
      <li class="c-info">
        <span class="c-info-left"><slot name="c-state"></slot></span>
        <span class="c-info-right"><slot name="c-type"></slot></span>
      </li>
      <li class="c-post">
        <el-button plain class="c-post-btn">
          <slot name="c-num"></slot>个招聘岗位
        </el-button>
      </li>
    </div>
  </el-col>
</template>

<script>
export default {
  name: "CompanyItem"
}
</script>

<style scoped>
@import "../../assets/css/components/companyitem.css";
</style>
