<template>
  <div class="home-body">
    <div class="index-background">
      <span class="mask"></span>
      <div class="main-title_1">Hi, {{user.name}}</div>
      <div class="main-title_2">欢迎使用「PINK」</div>
    </div>
<!--    <el-row class="search">-->
<!--      <el-col :span="4"><div class="grid-content"></div></el-col>-->
<!--      <el-col :span="15">-->
<!--        <el-input placeholder="搜索职位" v-model="search" class="input-with-select">-->
<!--          <el-button slot="append" icon="el-icon-search"></el-button>-->
<!--        </el-input>-->
<!--      </el-col>-->
<!--    </el-row>-->
<!--    <el-row class="preview">-->
<!--      <el-col :span="3"><div class="grid-content"></div></el-col>-->
<!--      <el-col :span="6" class="left-preview">-->
<!--        <div class="left-preview-content overview">-->
<!--          <ul>-->
<!--            <li>-->
<!--              <span class="left-item">技术</span>-->
<!--              <span class="right-item">-->
<!--                <el-button type="text">Java</el-button>-->
<!--              </span>-->
<!--              <span class="right-item">-->
<!--                <el-button type="text">PHP</el-button>-->
<!--              </span>-->
<!--              <span class="right-item">-->
<!--                <el-button type="text">Web前端</el-button>-->
<!--              </span>-->
<!--              <span class="right-item">-->
<!--                <el-button type="text">算法工程师</el-button>-->
<!--              </span>-->
<!--            </li>-->
<!--            <li>-->
<!--              <span class="left-item">产品</span>-->
<!--              <span class="right-item">-->
<!--                <el-button type="text">Java</el-button>-->
<!--              </span>-->
<!--              <span class="right-item">-->
<!--                <el-button type="text">PHP</el-button>-->
<!--              </span>-->
<!--              <span class="right-item">-->
<!--                <el-button type="text">Web前端</el-button>-->
<!--              </span>-->
<!--              <span class="right-item">-->
<!--                <el-button type="text">算法工程师</el-button>-->
<!--              </span>-->
<!--            </li>-->
<!--            <li>-->
<!--              <span class="left-item">设计</span>-->
<!--              <span class="right-item">-->
<!--                <el-button type="text">Java</el-button>-->
<!--              </span>-->
<!--              <span class="right-item">-->
<!--                <el-button type="text">PHP</el-button>-->
<!--              </span>-->
<!--              <span class="right-item">-->
<!--                <el-button type="text">Web前端</el-button>-->
<!--              </span>-->
<!--              <span class="right-item">-->
<!--                <el-button type="text">算法工程师</el-button>-->
<!--              </span>-->
<!--            </li>-->
<!--            <li>-->
<!--              <span class="left-item">运营</span>-->
<!--              <span class="right-item">-->
<!--                <el-button type="text">Java</el-button>-->
<!--              </span>-->
<!--              <span class="right-item">-->
<!--                <el-button type="text">PHP</el-button>-->
<!--              </span>-->
<!--              <span class="right-item">-->
<!--                <el-button type="text">Web前端</el-button>-->
<!--              </span>-->
<!--              <span class="right-item">-->
<!--                <el-button type="text">算法工程师</el-button>-->
<!--              </span>-->
<!--            </li>-->
<!--            <li>-->
<!--              <span class="left-item">市场</span>-->
<!--              <span class="right-item">-->
<!--                <el-button type="text">Java</el-button>-->
<!--              </span>-->
<!--              <span class="right-item">-->
<!--                <el-button type="text">PHP</el-button>-->
<!--              </span>-->
<!--              <span class="right-item">-->
<!--                <el-button type="text">Web前端</el-button>-->
<!--              </span>-->
<!--              <span class="right-item">-->
<!--                <el-button type="text">算法工程师</el-button>-->
<!--              </span>-->
<!--            </li>-->
<!--            <li>-->
<!--              <span class="left-item">人事</span>-->
<!--              <span class="right-item">-->
<!--                <el-button type="text">Java</el-button>-->
<!--              </span>-->
<!--              <span class="right-item">-->
<!--                <el-button type="text">PHP</el-button>-->
<!--              </span>-->
<!--              <span class="right-item">-->
<!--                <el-button type="text">Web前端</el-button>-->
<!--              </span>-->
<!--              <span class="right-item">-->
<!--                <el-button type="text">算法工程师</el-button>-->
<!--              </span>-->
<!--            </li>-->
<!--            <li>-->
<!--              <el-button type="warning" class="preview-btn">查看全部</el-button>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->
<!--      </el-col>-->
<!--      <el-col :span="11" class="right-preview">-->
<!--        <div class="grid-content overview">-->
<!--          <el-carousel height="302px">-->
<!--            <el-carousel-item style="z-index: 0">-->
<!--              <img src="../../assets/img/carousel/demo.jpg" alt="" class="carousel-img">-->
<!--            </el-carousel-item>-->
<!--            <el-carousel-item>-->
<!--              <img src="../../assets/img/carousel/demo.jpg" alt="" class="carousel-img">-->
<!--            </el-carousel-item>-->
<!--            <el-carousel-item>-->
<!--              <img src="../../assets/img/carousel/demo.jpg" alt="" class="carousel-img">-->
<!--            </el-carousel-item>-->
<!--            <el-carousel-item>-->
<!--              <img src="../../assets/img/carousel/demo.jpg" alt="" class="carousel-img">-->
<!--            </el-carousel-item>-->
<!--          </el-carousel>-->
<!--        </div>-->
<!--      </el-col>-->
<!--    </el-row>-->
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
        <post-item v-for="post in posts" :key="post.index" :post="post"></post-item>
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
          <company-item v-for="company in companies" :key="company.index" :company="company">
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
    <el-row>
      <el-col :span="24"><div class="occupied-content"></div></el-col>
    </el-row>
  </div>
</template>

<script>
// 导入PostItem组件
import PostItem from "../../components/apply-system/post/PostItem";
// 导入CompanyItem组件
import CompanyItem from "../../components/apply-system/company/CompanyItem";
export default {
  name: "home",
  components: {CompanyItem, PostItem},
  data() {
    return {
      search: '',
      user: {
        name: '马小超'
      },
      posts: [
        {
          index: 1,
          name: 'Java开发工程师',
          salary: '10K-20K',
          experience: '5-10年',
          degree: '硕士',
          address: '上海浦东区',
          company_name: '华为',
          company_type: '通讯',
          company_state: '已上市',
          company_employees: '1200人',
          logo: require('../../assets/img/company/huawei.jpg'),
          items: ['标签一', '标签二', '标签三', '标签四', '标签五'],
          welfare: '员工旅游，带薪年假，定期体检，通讯补贴，交通补助...'
        }
      ],
      companies: [
        {
          index: 1,
          logo: require('../../assets/img/company/alibaba.jpg'),
          name: '阿里巴巴',
          state: '已上市',
          type: '金融',
          num: 3412
        },
        {
          index: 2,
          logo: require('../../assets/img/company/bytedance.jpg'),
          name: '字节跳动',
          state: '已上市',
          type: '互联网',
          num: 1873
        }
      ]
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/apply-system/home.css";
</style>
