<template>
  <el-card shadow="hover" class="message-card edu-card">
    <ul class="edu">
      <li>
        <span class="edu-name">{{edu.c_school}}</span>
        <span class="edu-time">{{edu.c_schooling}}</span>
      </li>
      <li>
        <span class="edu-depart">{{edu.c_major}}</span>
        <span class="edu-work">{{edu.c_qualification}}</span>
      </li>
    </ul>
  </el-card>
</template>

<script>
export default {
  name: "EducatePanel",
  props: {
    edu: Object
  }
}
</script>

<style scoped>
@import "../../assets/css/components/educatepanel.css";
</style>
