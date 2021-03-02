<template>
  <div class="post-item" @click="postClick">
    <el-row>
      <el-col :span="12">
        <div class="header-content">
          <li class="job-name" id="name">{{post.name}}</li>
          <li class="job-info">
            <span class="salary">{{post.salary}}</span>
            <span class="experience">{{post.experience}}</span>
            <span class="degree">{{post.degree}}</span>
            <span class="address">{{post.address}}</span>
          </li>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="header-content">
          <li class="company-name">{{post.company_name}}</li>
          <li class="company-info">
            <span class="type">{{post.company_type}}</span>
            <span class="state">{{post.company_state}}</span>
            <span class="employees">{{post.company_employees}}</span>
          </li>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="header-content">
          <div class="company-logo">
            <img :src="post.logo" alt="logo" class="company-logo-img">
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="bottom-content">
      <el-col :span="12">
        <div class="footer-content">
          <el-tag v-for="item in post.items" :key="item" type="info" size="mini" style="margin-left: 12px">
            {{item}}
          </el-tag>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="footer-content">
          <span class="welfare">
            {{post.welfare}}
          </span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "PostItem",
    props: {
      post: {
        type: Object
      }
    },
    methods: {
      postClick() {
        // 携带索引跳转
        this.$router.push({
          path: '/index/position_detail',
          query: {
            index: this.post.index,
            name: this.post.name,
            company_name: this.post.company_name
          }
        })
      }
    }
  }
</script>

<style scoped>
@import "../../../assets/css/apply-system/components/postitem.css";
</style>
