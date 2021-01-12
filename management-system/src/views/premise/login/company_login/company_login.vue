<template>
  <login-body>
    <img src="../../../../assets/img/back/company_back.jpg" alt="" class="login-back" slot="background">
    <div class="form-base" slot="form-base">
      <form action="">
        <el-input placeholder="工号" v-model="number" clearable></el-input>
        <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
        <el-button type="success" class="form-button">登录</el-button>
      </form>
    </div>
    <el-button type="text" class="tips" slot="tips">没有账号？请联系我们</el-button>
  </login-body>
</template>

<script>
import LoginBody from "../../../../components/login&register/LoginBody";
export default {
  name: "company_login",
  components: {LoginBody},
  data() {
    return {
      number: '',
      password: ''
    }
  }
}
</script>

<style scoped>
@import "../../../../assets/css/premise/login/loginbody.css";
</style>
