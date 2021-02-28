<template>
  <div class="back-body">
    <el-row class="main">
      <el-col :span="9">
        <div class="left-content-register">
          <img src="../../../assets/img/background/premise/apply/apply_register.png" alt="bg" class="left-bg">
        </div>
      </el-col>
      <el-col :span="15">
        <div class="right-content">
          <div class="form1" v-if="pageActive === 1">
            <div class="title">
              <span class="left-title">Sign up</span>
              <span class="right-title green">'PINK'</span>
            </div>
            <div class="form">
              <el-form ref="form" :model="signup" label-width="80px">
                <div class="form-item">
                  <el-input v-model="signup.phone" placeholder="请输入手机号"></el-input>
                </div>
                <div class="form-item">
                  <el-input v-model="signup.password" placeholder="请输入密码" show-password></el-input>
                </div>
                <div class="form-item">
                  <el-input v-model="signup.re_password" placeholder="确认密码" show-password></el-input>
                </div>
                <div class="form-item">
                  <el-button type="success" @click="formSubmit_1" class="sub-btn">注册</el-button>
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
              <span class="left-title">基本</span>
              <span class="right-title green">信息</span>
            </div>
            <div class="form">
              <el-form ref="form" :model="base" label-width="80px">
                <div class="form-item">
                  <el-input v-model="base.name" placeholder="请输入姓名"></el-input>
                </div>
                <div class="form-item">
                  <el-radio v-model="base.sex" label="male" border>先生</el-radio>
                  <el-radio v-model="base.sex" label="female" border>女士</el-radio>
                </div>
                <div class="form-item">
                  <el-date-picker v-model="base.birthday" type="date" placeholder="选择出生日期"></el-date-picker>
                </div>
                <div class="form-item">
                  <el-radio v-model="base.state" label="随时到岗" border>随时到岗</el-radio>
                  <el-radio v-model="base.state" label="月内到岗" border>月内到岗</el-radio>
                </div>
                <div class="form-item">
                  <el-radio v-model="base.state" label="考虑机会" border>考虑机会</el-radio>
                  <el-radio v-model="base.state" label="暂不考虑" border>暂不考虑</el-radio>
                </div>
                <div class="form-item">
                  <el-button type="success" @click="formSubmit_2" class="sub-btn r-btn">下一步</el-button>
                </div>
              </el-form>
            </div>
          </div>
          <div class="form3" v-if="pageActive === 3">
            <div class="title">
              <span class="left-title">Sign up</span>
              <span class="right-title green">'PINK'</span>
            </div>
            <div class="form">
              <el-form ref="form" :model="form" label-width="80px">
                <div class="form-item">
                  <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
                </div>
                <div class="form-item">
                  <el-input v-model="form.password" placeholder="请输入密码" show-password></el-input>
                </div>
                <div class="form-item">
                  <el-input v-model="form.re_password" placeholder="确认密码" show-password></el-input>
                </div>
                <div class="form-item">
                  <el-button type="success" @click="onSubmit" class="sub-btn">注册</el-button>
                </div>
              </el-form>
            </div>
            <div class="another-log">
            <span class="right-span">
              <el-button type="text" class="another-btn" @click="turnLogin">已有帐号登录...</el-button>
            </span>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "apply_register",
  data() {
    return {
      pageActive: 1,
      signup: {
        phone: '',
        password: '',
        re_password: ''
      },
      base: {
        name: '',
        sex: '',
        birthday: '',
        email: '',
        state: ''
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
      this.pageActive = this.pageActive + 1
      // 信息上传
      console.log(this.base)
    },
    turnLogin() {
      this.$router.push({
        path: '/premise/apply_login'
      })
    }
  }
}
</script>

<style scoped>
@import "../../../assets/css/premise/premise-main.css";
@import "../../../assets/css/premise/premise-register.css";
</style>
