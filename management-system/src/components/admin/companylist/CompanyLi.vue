<template>
  <li class="company-col" @mouseover="mouseOver" @mouseout="mouseOut">
    <el-row class="company-content">
      <el-col :span="3">
        <img :src="company.e_logo" alt="" class="cc-logo">
      </el-col>
      <el-col :span="16">
        <div class="cc-panel">
          <span class="cc-name">{{company.e_name}}</span>
          <span class="cc-boss">{{company.e_legalrepresentative}}</span>
          <span class="cc-type">{{company.e_businessscope}}</span>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="cc-time">
          <i class="el-icon-time"></i>
          {{company.e_establishtime}}
        </div>
      </el-col>
    </el-row>
  </li>
</template>

<script>
export default {
  name: "CompanyLi",
  props: {
    company: Object,
    index: Number
  },
  methods: {
    mouseOver() {
      const dom = document.getElementsByClassName("company-col")
      dom[this.index].style.backgroundColor = "#f7f8fc"
      dom[this.index].style.borderLeft = "5px solid #67C23A"
    },
    mouseOut() {
      const dom = document.getElementsByClassName("company-col")
      dom[this.index].style.backgroundColor = "#ffffff"
      dom[this.index].style.borderLeft = ""
    }
  }
}
</script>

<style scoped>
@import "../../../assets/css/admin/components/companyli.css";
</style>
