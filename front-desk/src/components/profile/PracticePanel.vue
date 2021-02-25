<template>
  <el-card shadow="hover" class="message-card practice-card">
    <ul class="practice">
      <li>
        <span class="practice-name">{{practice.c_iscompany}}</span>
        <span class="practice-time">{{practice.c_istime}}</span>
      </li>
      <li>
        <span class="practice-work">{{practice.c_ispost}}</span>
      </li>
    </ul>
  </el-card>
</template>

<script>
  export default {
    name: "PracticePanel",
    props: {
      practice: Object
    }
  }
</script>

<style scoped>
@import "../../assets/css/components/practicepanel.css";
</style>
