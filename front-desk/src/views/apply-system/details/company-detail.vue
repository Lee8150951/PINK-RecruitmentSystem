<template>
  <div class="company-detail-body">
    <el-row></el-row>
    <el-row class="detail-header">
      <el-col :span="12">
        <div class="header-content">
          <img src="../../../assets/img/company/alibaba.jpg" alt="logo" class="company-logo">
          <div class="c-info">
            <h2>阿里巴巴集团</h2>
            <p>已上市 · 10000人以上 · 互联网</p>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="header-content">
          <div class="p-info">
            <el-row class="p-info-top">
              <el-col :span="18">
                <div class="grid-content">
                  <h2>12834</h2>
                  <p>在招岗位</p>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <h2>890</h2>
                  <p>位BOSS</p>
                </div>
              </el-col>
            </el-row>
            <el-row class="p-resume">
              <el-col :span="24">
                <div class="grid-content">
                  <el-button type="warning" class="resume-btn">上传简历</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="c-main">
      <el-col :span="17">
        <div class="grid-content">
          <div class="c-intro">
            <h3>阿里巴巴集团简介</h3>
            <p>
              阿里巴巴集团的使命是让天下没有难做的生意。
              我们旨在赋能企业改变营销、销售和经营的方式。
              我们为商家、品牌及其他企业提供基本的互联网基础设施以及营销平台，
              让其可借助互联网的力量与用户和客户互动。我们的业务包括核心电商、
              云计算、数字媒体和娱乐以及创新项目和其他业务。
              我们并通过子公司菜鸟网络及所投资的关联公司口碑，参与物流和本地服务行业，
              同时与蚂蚁金融服务集团有战略合作，该金融服务集团主要通过中国领先的第三方网上支付平台支付宝运营。
            </p>
          </div>
          <div class="c-business"></div>
          <div class="c-address"></div>
          <div class="c-position"></div>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "company-detail"
}
</script>

<style scoped>
@import "../../../assets/css/apply-system/company-detail.css";
</style>
