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
        <post-item v-for="post in posts" :key="post.index">
          <div slot="job-name">{{post.name}}</div>
          <span slot="job-salary">{{post.salary}}</span>
          <span slot="job-experience">{{post.experience}}</span>
          <span slot="job-degree">{{post.degree}}</span>
          <span slot="job-address">{{post.address}}</span>
          <div slot="company-name">{{post.company_name}}</div>
          <span slot="company-type">{{post.company_type}}</span>
          <span slot="company-state">{{post.company_state}}</span>
          <span slot="company-employees">{{post.company_employees}}</span>
          <img :src="post.logo" alt="" slot="company-logo" class="company-logo-img">
          <el-tag v-for="item in post.items" :key="item" type="info" size="mini" slot="items" style="margin-left: 12px">{{item}}</el-tag>
          <span slot="welfare">{{post.welfare}}</span>
        </post-item>
      </el-col>
    </el-row>
    <el-row class="more-btn">
      <el-col :span="8"><div class="grid-content"></div></el-col>
      <el-col :span="8">
          <el-button type="warning" class="wide-button">查看更多</el-button>
      </el-col>
      <el-col :span="8"><div class="grid-content"></div></el-col>
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
          <company-item v-for="company in companies" :key="company.index">
            <img :src="company.logo" alt="" slot="c-logo" class="c-logo-img">
            <div slot="c-name">{{company.name}}</div>
            <span slot="c-state">{{company.state}}</span>
            <span slot="c-type">{{company.type}}</span>
            <span slot="c-num">{{company.num}}</span>
          </company-item>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="more-btn">
      <el-col :span="8"><div class="grid-content"></div></el-col>
      <el-col :span="8">
        <el-button type="warning" class="wide-button">查看更多</el-button>
      </el-col>
      <el-col :span="8"><div class="grid-content"></div></el-col>
    </el-row>
  </div>
</template>

<script>
// 导入PostItem组件
import PostItem from "../../components/post/PostItem";
// 导入CompanyItem组件
import CompanyItem from "../../components/company/CompanyItem";
export default {
  name: "home",
  components: {CompanyItem, PostItem},
  data() {
    return {
      search: '',
      posts: [
        {
          index: 1,
          name: 'Java开发工程师',
          salary: '20K-30K',
          experience: '5-10年',
          degree: '硕士',
          address: '上海黄浦区',
          company_name: '腾讯',
          company_type: '互联网',
          company_state: '已上市',
          company_employees: '10000人',
          logo: require('../../assets/img/company/huawei.jpg'),
          items: ['标签一', '标签二', '标签三', '标签四', '标签五'],
          welfare: '员工旅游，带薪年假，定期体检，通讯补贴，交通补助...'
        }
      ],
      companies: [
        {
          index: 1,
          logo: require('../../assets/img/company/alibaba.jpg'),
          name: '腾讯',
          state: '已上市',
          type: '互联网',
          num: 3412
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>
@import "../../assets/css/apply-system/home.css";
</style>
