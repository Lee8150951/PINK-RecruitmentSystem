<template>
  <login-body>
    <img src="../../../assets/img/back/admin_back.jpg" alt="" class="login-back" slot="background">
    <div class="form-base" slot="form-base">
      <form action="">
        <el-input placeholder="用户名" v-model="username" clearable></el-input>
        <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
        <el-button type="success" class="form-button">登录</el-button>
      </form>
    </div>
    <el-button type="text" class="tips" slot="tips">还没注册？请点击</el-button>
  </login-body>
</template>

<script>
import LoginBody from "../../../components/premise/LoginBody";
export default {
  name: "admin_login",
  components: {LoginBody},
  data() {
    return {
      username: '',
      password: ''
    }
  }
}
</script>

<style scoped>
@import "../../../assets/css/premise/login/loginbody.css";
</style>
