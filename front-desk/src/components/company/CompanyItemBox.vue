<template>
  <el-col :span="6">
    <div class="box-content">
      <el-row class="box-head">
        <el-col :span="8">
          <div class="company-box-content">
            <slot name="c-logo"></slot>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content">
            <div class="company-title"><slot name="c-name"></slot></div>
            <div class="company-info">
              <slot name="c-state"></slot> | <slot name="c-type"></slot></div>
          </div>
        </el-col>
      </el-row>
      <el-row class="box-footer">
        <el-col :span="24">
          <div class="position-content">
            热招岗位<span class="position-info"><slot name="c-num"></slot></span>个 | <slot name="c-salary"></slot>
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
