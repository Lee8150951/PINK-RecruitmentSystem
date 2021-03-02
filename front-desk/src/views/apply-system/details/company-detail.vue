<template>
  <div class="company-detail-body">
    <el-row></el-row>
    <el-row class="detail-header">
      <el-col :span="12">
        <div class="header-content">
          <img :src="company.logo" alt="logo" class="company-logo">
          <div class="c-info">
            <h2>{{company.name}}</h2>
            <p>{{company.state}} · {{company.num}}人以上 · {{company.range}}</p>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="header-content">
          <div class="p-info">
            <el-row class="p-info-top">
              <el-col :span="18">
                <div class="grid-content">
                  <h2>{{company.positionNum}}</h2>
                  <p>在招岗位</p>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <h2>{{company.hrNum}}</h2>
                  <p>位HR</p>
                </div>
              </el-col>
            </el-row>
            <el-row class="p-resume">
              <el-col :span="24">
                <div class="grid-content">
                  <el-button type="warning" class="resume-btn">上传简历</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="c-main">
      <el-col :span="17">
        <div class="left-content">
          <div class="c-intro">
            <h3>{{company.name}}简介</h3>
            <p class="c-intro-main">{{company.intro}}</p>
          </div>
          <div class="c-business">
            <h3>工商信息</h3>
            <el-collapse accordion class="collapse">
              <el-collapse-item title="法人 Corporate" name="1">
                <div>{{company.corporate}}</div>
              </el-collapse-item>
              <el-collapse-item title="企业类型 Type" name="2">
                <div>{{company.type}}</div>
              </el-collapse-item>
              <el-collapse-item title="经营状态 State" name="3">
                <div>{{company.state}}</div>
              </el-collapse-item>
              <el-collapse-item title="注册地址 Address" name="4">
                <div>{{company.address}}</div>
              </el-collapse-item>
              <el-collapse-item title="经营范围 Range" name="5">
                <div>{{company.range}}</div>
              </el-collapse-item>
            </el-collapse>
          </div>
          <div class="c-position">
            <h3>在招岗位</h3>
            <el-row class="p-items">
              <post-item-simple v-for="post in posts" :key="post.index" :post="post"></post-item-simple>
            </el-row>
          </div>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="right-content">
          <div class="c-intro">
            <h3>公司高管</h3>
            <el-row>
              <el-col :span="6">
                <div class="exe-content">
                  <img :src="executive.logo" alt="" class="executive">
                </div>
              </el-col>
              <el-col :span="18">
                <div class="boss-info-content">
                  <div class="boss-name">{{executive.name}}</div>
                  <div class="boss-job">{{executive.job}}</div>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24" class="boss-info">
                {{executive.intro}}
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="right-content">
          <div class="c-intro">
            <h3>公司环境</h3>
            <div class="environ-block">
              <el-carousel height="180px" style="z-index: 0">
                <el-carousel-item style="z-index: 0">
                  <img src="../../../assets/img/environment/ali01.jpg" alt="" class="environ-img">
                </el-carousel-item>
                <el-carousel-item>
                  <img src="../../../assets/img/environment/ali02.jpg" alt="" class="environ-img">
                </el-carousel-item>
                <el-carousel-item>
                  <img src="../../../assets/img/environment/ali03.jpg" alt="" class="environ-img">
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
        </div>
        <div class="right-content">
          <div class="c-intro">
            <h3>{{company.name}}招聘HR</h3>
          </div>
          <hr-item v-for="hr in hrs" :key="hr.index" :hr="hr"></hr-item>
        </div>
        <el-row>
          <el-col :span="24">
            <div class="avatar-btn-content">
              <el-button type="warning" plain class="avatar-btn">查看所有在招岗位</el-button>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 导入PostItemSimple组件
import PostItemSimple from "../../../components/apply-system/post/PostItemSimple";
// 导入HrItem组件
import HrItem from "../../../components/apply-system/hr/HrItem";
export default {
  name: "company-detail",
  components: {HrItem, PostItemSimple},
  data() {
    return {
      company: {
        name: '阿里巴巴集团',
        state: '已上市',
        range: '金融',
        num: 3412,
        positionNum: 12834,
        hrNum: 890,
        type: '有限责任公司（台港澳法人独资）',
        corporate: '马云',
        address: '浙江省杭州市滨江区长河街道网商路699号4号楼5楼508室',
        logo: require('../../../assets/img/company/alibaba.jpg'),
        intro: `
          阿里巴巴集团的使命是让天下没有难做的生意。
          我们旨在赋能企业改变营销、销售和经营的方式。
          我们为商家、品牌及其他企业提供基本的互联网基础设施以及营销平台，
          让其可借助互联网的力量与用户和客户互动。我们的业务包括核心电商、
          云计算、数字媒体和娱乐以及创新项目和其他业务。
          我们并通过子公司菜鸟网络及所投资的关联公司口碑，参与物流和本地服务行业，
          同时与蚂蚁金融服务集团有战略合作，该金融服务集团主要通过中国领先的第三方网上支付平台支付宝运营。
        `
      },
      executive: {
        name: '马云',
        logo: require('../../../assets/img/executive/jackma.jpg'),
        job: '创始人',
        intro: `
            马云，1964年9月10日出生于浙江省杭州市，祖籍浙江绍兴嵊州（原嵊县）谷来镇，
            中国著名企业家，阿里巴巴集团、淘宝网、支付宝创始人。2013年5月10日，
            马云卸任阿里巴巴集团CEO，但兼任阿里巴巴集团董事局主席、中国雅虎董事局主席、
            杭州师范大学阿里巴巴商学院院长、华谊兄弟传媒集团董事、菜鸟网络董事长等职务，
            是中国IT企业的代表性人物。
        `
      },
      hrs: [
        {
          index: 1,
          name: '尹小姐',
          job: '高级技术开发',
          num: 20,
          place: '阿里巴巴（北京）有限公司',
          avatar: require('../../../assets/img/avatar/avatar01.png'),
        },
        {
          index: 2,
          name: '马先生',
          job: 'HRBP',
          num: 7,
          place: '阿里巴巴（武汉）有限公司',
          avatar: require('../../../assets/img/avatar/avatar02.png'),
        }
      ],
      posts: [
        {
          index: 1,
          name: '前端开发工程师',
          city: '上海',
          salary: '200-300元/天',
          workTime: '5天/周',
          degree: '硕士',
          hr: '柴女士',
          job: '高级后端专家'
        },
        {
          index: 2,
          name: 'Web工程师',
          city: '北京',
          salary: '400-600元/天',
          workTime: '7天/周',
          degree: '硕士',
          hr: '马女士',
          job: 'Hr'
        },
        {
          index: 3,
          name: '大数据工程师',
          city: '武汉',
          salary: '200-300元/天',
          workTime: '5天/周',
          degree: '硕士',
          hr: '王先生',
          job: '高级前端专家'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import "../../../assets/css/apply-system/company-detail.css";
</style>
