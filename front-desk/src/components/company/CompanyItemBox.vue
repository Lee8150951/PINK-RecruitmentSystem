<template>
  <el-col :span="6">
    <div class="box-content">
      <el-row class="box-head">
        <el-col :span="8">
          <div class="company-box-content">
            <img src="../../assets/img/company/huawei.jpg" alt="logo">
          </div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content">
            <div class="company-title">华为技术有限公司</div>
            <div class="company-info">已上市 | 互联网</div>
          </div>
        </el-col>
      </el-row>
      <el-row class="box-footer">
        <el-col :span="24">
          <div class="position-content">
            热招岗位<span class="position-info">2999</span>个 | 15-20K
          </div>
        </el-col>
      </el-row>
    </div>
  </el-col>
</template>

<script>
export default {
  name: "CompanyItemBox"
}
</script>

<style scoped>
@import "../../assets/css/components/companyitembox.css";
</style>
