<template>
  <div>
    <el-row class="welcome">
      <el-col :span="2">
        <img src="../../../assets/img/components/welcome.svg" alt="welcome" class="wel_logo">
      </el-col>
      <el-col :span="15">
        <h2>你好, Admin！</h2>
        <p>Welcome to <strong>PINK</strong>Panel. Please enjoy your working hours.</p>
      </el-col>
    </el-row>
    <el-row class="tips">
      <el-col :span="5">
        <div class="grid-content bg-green">
          <el-row>
            <el-col :span="3"><div class="grid-content"></div></el-col>
            <el-col :span="4">
              <i class="el-icon-s-promotion tips_icon"></i>
            </el-col>
            <el-col :span="3"><div class="grid-content"></div></el-col>
            <el-col :span="14" class="tips_right">
              <h3>12121名</h3>
              <p>用户</p>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-red">
          <el-row>
            <el-col :span="3"><div class="grid-content"></div></el-col>
            <el-col :span="4">
              <i class="el-icon-s-shop tips_icon"></i>
            </el-col>
            <el-col :span="3"><div class="grid-content"></div></el-col>
            <el-col :span="14" class="tips_right">
              <h3>75家</h3>
              <p>企业</p>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-blue">
          <el-row>
            <el-col :span="3"><div class="grid-content"></div></el-col>
            <el-col :span="4">
              <i class="el-icon-s-finance tips_icon"></i>
            </el-col>
            <el-col :span="3"><div class="grid-content"></div></el-col>
            <el-col :span="14" class="tips_right">
              <h3>$2562134</h3>
              <p>盈利</p>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-orange">
          <el-row>
            <el-col :span="3"><div class="grid-content"></div></el-col>
            <el-col :span="4">
              <i class="el-icon-s-custom tips_icon"></i>
            </el-col>
            <el-col :span="3"><div class="grid-content"></div></el-col>
            <el-col :span="14" class="tips_right">
              <h3>23名</h3>
              <p>管理员</p>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row class="progress">
      <div class="progress-style">
        <el-col :span="10">
          <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
          <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
          <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
          <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "admin_index"
}
</script>

<style scoped>
@import "../../../assets/css/admin_index/admin_index.css";
</style>
