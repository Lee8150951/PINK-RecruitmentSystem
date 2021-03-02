<template>
  <div class="back-body">
    <el-row class="main">
      <el-col :span="9">
        <div class="left-content">
          <img src="../../../assets/img/background/premise/hire/hire_register.png" alt="bg" class="left-bg" style="margin-top: 50px">
        </div>
      </el-col>
      <el-col :span="15">
        <div class="right-content">
          <div class="form1" v-if="pageActive === 1">
            <div class="title">
              <span class="left-title">Sign up</span>
              <span class="right-title blue">'PINK'</span>
            </div>
            <div class="form">
              <el-form ref="form" :model="signup" label-width="80px">
                <div class="form-item">
                  <el-input v-model="signup.phone" placeholder="请输入账号"></el-input>
                </div>
                <div class="form-item">
                  <el-input v-model="signup.password" placeholder="请输入密码" show-password></el-input>
                </div>
                <div class="form-item">
                  <el-input v-model="signup.re_password" placeholder="确认密码" show-password></el-input>
                </div>
                <div class="form-item">
                  <el-button type="primary" @click="formSubmit_1" class="sub-btn">注册</el-button>
                </div>
              </el-form>
            </div>
            <div class="another-log">
              <span class="right-span">
                <el-button type="text" class="another-btn" @click="turnLogin">已有帐号登录...</el-button>
              </span>
            </div>
          </div>
          <div class="form2" v-if="pageActive === 2">
            <div class="title">
              <span class="left-title">申请</span>
              <span class="right-title blue">组织</span>
            </div>
            <div class="form">
              <el-form ref="form" :model="application" label-width="80px">
                <div class="form-item">
                  <el-input v-model="application.name" placeholder="请输入真实姓名"></el-input>
                </div>
                <div class="form-item">
                  <el-input v-model="application.company" placeholder="请输入公司"></el-input>
                </div>
                <div class="form-item">
                  <el-input v-model="application.uid" placeholder="请输入工号"></el-input>
                </div>
                <div class="form-item">
                  <el-input v-model="application.position" placeholder="请输入职位"></el-input>
                </div>
                <div class="form-item">
                  <el-button type="primary" @click="formSubmit_2" class="sub-btn">完成上报</el-button>
                </div>
              </el-form>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "hire_register",
  data() {
    return {
      pageActive: 1,
      signup: {
        phone: '',
        password: '',
        re_password: ''
      },
      application: {
        name: '',
        uid: '',
        company: '',
        position: ''
      }
    }
  },
  methods: {
    formSubmit_1() {
      // 表单验证略
      this.pageActive = this.pageActive + 1
      // 信息上传
      console.log(this.signup)
    },
    formSubmit_2() {
      // 表单验证略
      this.$router.push({
        path: '/hire/hire_home',
        query: {
          phone: this.signup.phone
        }
      })
      console.log(this.application)
    },
    turnAnother() {
      this.$router.push({
        path: '/premise/apply_login'
      })
    },
    turnLogin() {
      this.$router.push({
        path: '/premise/hire_login'
      })
    }
  }
}
</script>

<style scoped>
@import "../../../assets/css/premise/premise-main.css";
</style>
