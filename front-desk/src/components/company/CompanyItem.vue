<template>
  <div @click="companyClick">
    <el-col :span="8">
      <div class="company-content">
        <li class="c-logo">
          <img :src="company.logo" alt="" class="c-logo-img">
        </li>
        <li class="c-name">{{company.name}}</li>
        <li class="c-info">
          <span class="c-info-left">{{company.state}}</span>
          <span class="c-info-right">{{company.type}}</span>
        </li>
        <li class="c-post">
          <el-button plain class="c-post-btn">
            {{company.num}}个招聘岗位
          </el-button>
        </li>
      </div>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "CompanyItem",
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
@import "../../assets/css/components/companyitem.css";
</style>
