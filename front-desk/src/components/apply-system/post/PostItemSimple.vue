<template>
  <el-col :span="24">
    <div class="item-content">
      <el-row>
        <el-col :span="12">
          <div class="left-item-content">
            <h4>{{post.name}}[{{post.city}}]</h4>
            <p>
              <span class="salary">{{post.salary}}</span>
              <span class="p-info-detail">{{post.workTime}}</span>
              <span class="p-info-detail">{{post.degree}}</span>
            </p>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="right-item-content">
            <span class="p-boss">{{post.hr}}</span>
            <span class="p-job">{{post.job}}</span>
          </div>
        </el-col>
      </el-row>
    </div>
  </el-col>
</template>

<script>
export default {
  name: "PostItemSimple",
  props: {
    post: {
      type: Object
    }
  }
}
</script>

<style scoped>
@import "../../../assets/css/apply-system/components/postitemsimple.css";
</style>
