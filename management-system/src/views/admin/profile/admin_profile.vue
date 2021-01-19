<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="grid-content">
          <div class="left-content">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            <h2>Admin</h2>
            <div class="info">
              <el-col :span="10">
                <div class="left-info">
                  <ul>
                    <li>工号：</li>
                    <li>部门：</li>
                    <li>职位：</li>
                  </ul>
                </div>
              </el-col>
              <el-col :span="14">
                <div class="right-info">
                  <ul>
                    <li>15170090705</li>
                    <li>人事部</li>
                    <li>干事</li>
                  </ul>
                </div>
              </el-col>
            </div>
          </div>
          <div class="right-content">
            <el-row class="tips">
              <el-col :span="7">
                <div class="tip-content bg-red">
                  <el-row>
                    <el-col :span="3"><div class="tip-content"></div></el-col>
                    <el-col :span="4">
                      <i class="el-icon-s-shop tips_icon"></i>
                    </el-col>
                    <el-col :span="3"><div class="tip-content"></div></el-col>
                    <el-col :span="14" class="tips_right">
                      <h3>75</h3>
                      <p>已处理</p>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
              <el-col :span="7">
                <div class="tip-content bg-blue">
                  <el-row>
                    <el-col :span="3"><div class="tip-content"></div></el-col>
                    <el-col :span="4">
                      <i class="el-icon-s-finance tips_icon"></i>
                    </el-col>
                    <el-col :span="3"><div class="tip-content"></div></el-col>
                    <el-col :span="14" class="tips_right">
                      <h3>24</h3>
                      <p>待办</p>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
              <el-col :span="7">
                <div class="tip-content bg-orange">
                  <el-row>
                    <el-col :span="3"><div class="tip-content"></div></el-col>
                    <el-col :span="4">
                      <i class="el-icon-s-custom tips_icon"></i>
                    </el-col>
                    <el-col :span="3"><div class="tip-content"></div></el-col>
                    <el-col :span="14" class="tips_right">
                      <h3>1</h3>
                      <p>信息</p>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>
            <el-row class="form">
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="昵称：">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="密码：">
                  <el-input v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item label="备注：">
                  <el-input v-model="form.note"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="warning" class="edit-btn">修改</el-button>
                </el-form-item>
              </el-form>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  // 导入面包屑组件
  import BreadCrumb from "../../../components/main/public/BreadCrumb";
  export default {
    name: "admin_profile",
    components: {BreadCrumb},
    data() {
      return {
        form: {
          name: '',
          password: '',
          note: ''
        }
      }
    }
  }
</script>

<style scoped>
@import "../../../assets/css/profile/profile.css";
</style>
