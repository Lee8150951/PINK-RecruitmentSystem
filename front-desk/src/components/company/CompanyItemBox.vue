<template>
  <div @click="companyClick">
    <el-col :span="6">
      <div class="box-content">
        <el-row class="box-head">
          <el-col :span="8">
            <div class="company-box-content">
              <img :src="company.logo" alt="logo" class="c-logo">
            </div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content">
              <div class="company-title">{{company.name}}</div>
              <div class="company-info">
                {{company.state}} | {{company.type}}</div>
            </div>
          </el-col>
        </el-row>
        <el-row class="box-footer">
          <el-col :span="24">
            <div class="position-content">
              热招岗位<span class="position-info">{{company.num}}</span>个 | {{company.salary}}
            </div>
          </el-col>
        </el-row>
      </div>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "CompanyItemBox",
  props: {
    company: {
      type: Object
    }
  },
  methods: {
    companyClick() {
      // 携带索引跳转
      this.$router.push({
        path: "/index/company_detail",
        query: {
          index: this.company.index,
          name: this.company.name,
          type: this.company.type
        }
      })
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/components/companyitembox.css";
</style>
