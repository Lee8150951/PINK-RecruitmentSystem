<template>
  <div class="annex-panel">
    <ul>
      <li class="annex-title">附件管理</li>
      <li class="annex-buttons">
        <el-button type="warning" class="annex-btn">上传简历</el-button>
        <el-button type="warning" plain class="annex-btn">在线简历</el-button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AnnexPanel"
}
</script>

<style scoped>
@import "../../assets/css/components/annexpanel.css";
</style>
