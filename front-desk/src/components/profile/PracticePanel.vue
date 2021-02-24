<template>
  <el-card shadow="hover" class="message-card practice-card">
    <ul class="practice">
      <li>
        <span class="practice-name">江西联微软件有限公司</span>
        <span class="practice-time">2019.10-2020.06</span>
      </li>
      <li>
        <span class="practice-depart">开发部</span>
        <span class="practice-work">前端开发</span>
      </li>
      <li class="practice-tag">
        <el-tag size="mini" type="info">HTML</el-tag>
      </li>
    </ul>
  </el-card>
</template>

<script>
  export default {
    name: "PracticePanel"
  }
</script>

<style scoped>
@import "../../assets/css/components/practicepanel.css";
</style>
