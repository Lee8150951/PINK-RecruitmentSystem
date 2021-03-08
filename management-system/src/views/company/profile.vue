<template>
  <div class="profile-main">
    <main-title>
      <i class="el-icon-set-up"></i> 我的 Profile
    </main-title>
  </div>
</template>

<script>
  import MainTitle from "../../components/company/body/MainTitle";
  export default {
    name: "profile",
    components: {MainTitle}
  }
</script>

<style scoped>
@import "../../assets/css/company/profile.css";
</style>
