<template>
  <div class="home-body">
    <el-row></el-row>
    <el-row class="search">
      <el-col :span="4"><div class="grid-content"></div></el-col>
      <el-col :span="15">
        <el-input placeholder="搜索职位" v-model="search" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
    </el-row>
    <el-row class="preview">
      <el-col :span="3"><div class="grid-content"></div></el-col>
      <el-col :span="6" class="left-preview">
        <div class="left-preview-content overview">
          <ul>
            <li>
              <span class="left-item">技术</span>
              <span class="right-item">
                <el-button type="text">Java</el-button>
              </span>
              <span class="right-item">
                <el-button type="text">PHP</el-button>
              </span>
              <span class="right-item">
                <el-button type="text">Web前端</el-button>
              </span>
              <span class="right-item">
                <el-button type="text">算法工程师</el-button>
              </span>
            </li>
            <li>
              <span class="left-item">产品</span>
              <span class="right-item">
                <el-button type="text">Java</el-button>
              </span>
              <span class="right-item">
                <el-button type="text">PHP</el-button>
              </span>
              <span class="right-item">
                <el-button type="text">Web前端</el-button>
              </span>
              <span class="right-item">
                <el-button type="text">算法工程师</el-button>
              </span>
            </li>
            <li>
              <span class="left-item">设计</span>
              <span class="right-item">
                <el-button type="text">Java</el-button>
              </span>
              <span class="right-item">
                <el-button type="text">PHP</el-button>
              </span>
              <span class="right-item">
                <el-button type="text">Web前端</el-button>
              </span>
              <span class="right-item">
                <el-button type="text">算法工程师</el-button>
              </span>
            </li>
            <li>
              <span class="left-item">运营</span>
              <span class="right-item">
                <el-button type="text">Java</el-button>
              </span>
              <span class="right-item">
                <el-button type="text">PHP</el-button>
              </span>
              <span class="right-item">
                <el-button type="text">Web前端</el-button>
              </span>
              <span class="right-item">
                <el-button type="text">算法工程师</el-button>
              </span>
            </li>
            <li>
              <span class="left-item">市场</span>
              <span class="right-item">
                <el-button type="text">Java</el-button>
              </span>
              <span class="right-item">
                <el-button type="text">PHP</el-button>
              </span>
              <span class="right-item">
                <el-button type="text">Web前端</el-button>
              </span>
              <span class="right-item">
                <el-button type="text">算法工程师</el-button>
              </span>
            </li>
            <li>
              <span class="left-item">人事</span>
              <span class="right-item">
                <el-button type="text">Java</el-button>
              </span>
              <span class="right-item">
                <el-button type="text">PHP</el-button>
              </span>
              <span class="right-item">
                <el-button type="text">Web前端</el-button>
              </span>
              <span class="right-item">
                <el-button type="text">算法工程师</el-button>
              </span>
            </li>
            <li>
              <el-button type="warning" class="preview-btn">查看全部</el-button>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="11" class="right-preview">
        <div class="grid-content overview">
          <el-carousel height="302px">
            <el-carousel-item style="z-index: 0">
              <img src="../../assets/img/carousel/demo.jpg" alt="" class="carousel-img">
            </el-carousel-item>
            <el-carousel-item>
              <img src="../../assets/img/carousel/demo.jpg" alt="" class="carousel-img">
            </el-carousel-item>
            <el-carousel-item>
              <img src="../../assets/img/carousel/demo.jpg" alt="" class="carousel-img">
            </el-carousel-item>
            <el-carousel-item>
              <img src="../../assets/img/carousel/demo.jpg" alt="" class="carousel-img">
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
    </el-row>
    <el-row class="title">
      <el-col :span="8"><div class="grid-content"></div></el-col>
      <el-col :span="8">
        <div class="title-content">
          - 热门岗位 -
        </div>
      </el-col>
      <el-col :span="8"><div class="grid-content"></div></el-col>
    </el-row>
    <el-row class="post">
      <el-col :span="3"><div class="grid-content"></div></el-col>
      <el-col :span="17">
        <post-item></post-item>
        <post-item></post-item>
        <post-item></post-item>
        <post-item></post-item>
      </el-col>
    </el-row>
    <el-row class="title">
      <el-col :span="8"><div class="grid-content"></div></el-col>
      <el-col :span="8">
        <div class="title-content">
          - 热门企业 -
        </div>
      </el-col>
      <el-col :span="8"><div class="grid-content"></div></el-col>
    </el-row>
    <el-row class="post">
      <el-col :span="3"><div class="grid-content"></div></el-col>
      <el-col :span="17">
        <el-row class="companies">
          <el-col :span="8"><div class="company-content"></div></el-col>
          <el-col :span="8"><div class="company-content"></div></el-col>
          <el-col :span="8"><div class="company-content"></div></el-col>
        </el-row>
        <el-row class="companies">
          <el-col :span="8"><div class="company-content"></div></el-col>
          <el-col :span="8"><div class="company-content"></div></el-col>
          <el-col :span="8"><div class="company-content"></div></el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 导入PostItem组件
import PostItem from "../../components/post/PostItem";
export default {
  name: "home",
  components: {PostItem},
  data() {
    return {
      search: ''
    }
  },
  methods: {

  }
}
</script>

<style scoped>
@import "../../assets/css/apply-system/home.css";
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
</style>
