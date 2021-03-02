<template>
  <div class="position-detail-body">
    <el-row></el-row>
    <el-row class="header">
      <el-col :span="16">
        <div class="grid-content">
          <div class="p-basic">
            <span class="p-name">{{position.name}}</span>
            <span class="p-salary">{{position.salary}}</span>
          </div>
          <div class="p-info">{{position.address}} · {{position.experience}} · {{position.degree}}</div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content">
          <el-button type="warning" class="communicate-btn" @click="dialogFormVisible = true">立即沟通</el-button>
        </div>
      </el-col>
      <el-dialog :title="position.contact" :visible.sync="dialogFormVisible">
        <el-row>
          <el-col :span="16">
            <div class="left-content">
              <el-row>
                <el-col :span="24">
                  <ul class="dialogue-ul">
                    <communicate-li v-for="chat in chats" :key="chat.index" :chat="chat"></communicate-li>
                  </ul>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="enter-box">
                    <el-form ref="form" :model="communication" label-width="80px">
                      <div class="enter-text">
                        <el-input :rows="3" type="textarea" v-model="communication.text"></el-input>
                      </div>
                      <el-button @click="onSubmit" size="mini" type="warning" class="communicate-sub">发送</el-button>
                    </el-form>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="right-content">
              <div class="top-tip">使用微信APP</div>
              <div class="bottom-tip">沟通更便利!</div>
              <img src="../../../assets/img/QR/code.jpg" alt="qr-code" class="qr-code">
              <div class="bottom-tip">微信扫码使用</div>
            </div>
          </el-col>
        </el-row>
      </el-dialog>
    </el-row>
    <el-row class="p-main">
      <el-col :span="16">
        <div class="left-main-content">
          <el-row>
            <el-col :span="24">
              <div class="grid-content">
                <el-row>
                  <el-col :span="2">
                    <div class="grid-content">
                      <img src="../../../assets/img/avatar/avatar01.png" alt="avatar" class="p-avatar">
                    </div>
                  </el-col>
                  <el-col :span="15">
                    <div class="hr-content">
                      <li class="hr-name">{{position.contact}}</li>
                      <li class="hr-info">HR·刚刚在线</li>
                    </div>
                  </el-col>
                  <el-col :span="7">
                    <div class="btn-content">
                      <el-popover placement="bottom" width="160" v-model="visible">
                        <div>
                          <img src="../../../assets/img/QR/code.jpg" alt="code">
                        </div>
                        <el-button slot="reference" type="text">
                          <i class="el-icon-ice-cream-round"></i>微信一下
                        </el-button>
                      </el-popover>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
            <el-col :span="24">
              <div class="intro-content">
                <div class="p-intro">
                  <h3>技能需求</h3>
                  <p class="p-intro-main">
                    {{position.skill}}
                  </p>
                </div>
              </div>
              <div class="intro-content">
                <div class="p-intro">
                  <h3>福利待遇</h3>
                  <p class="p-intro-main">
                    {{position.welfare_detail}}
                  </p>
                </div>
              </div>
              <div class="intro-content">
                <div class="p-intro">
                  <h3>公司简介</h3>
                  <p class="p-intro-main">
                    {{company.intro}}
                  </p>
                  <el-button type="text" class="p-more" @click="jumpCompany">了解更多</el-button>
                </div>
              </div>
              <div class="business-content">
                <div class="p-business">
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
              </div>
              <div class="intro-content">
                <div class="p-intro">
                  <h3>更多推荐</h3>
                  <post-app v-for="post in posts" :key="post.index" :post="post"></post-app>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="right-main-content">
          <div class="intro-content">
            <div class="p-intro">
              <h3>公司基本信息</h3>
              <ul class="r-company">
                <li>
                  <span>
                    <img :src="position.logo" alt="" class="r-company-logo">
                  </span>
                  <span class="r-company-name">
                    {{company.name}}
                  </span>
                </li>
                <li class="r-company-info">
                  <span>
                    <i class="el-icon-s-data"></i>
                  </span>
                  <span class="r-company-intro">
                    {{company.state}}
                  </span>
                </li>
                <li class="r-company-info">
                  <span>
                    <i class="el-icon-s-custom"></i>
                  </span>
                  <span class="r-company-intro">
                    {{company.num}}人
                  </span>
                </li>
                <li class="r-company-info">
                  <span>
                    <i class="el-icon-menu"></i>
                  </span>
                  <span class="r-company-intro">
                    {{company.range}}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="intro-content">
            <div class="p-intro">
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
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 导入CommunicateLi组件
import CommunicateLi from "../../../components/apply-system/communicate/CommunicateLi";
// 导入PostApp组件
import PostApp from "../../../components/apply-system/post/PostApp";
export default {
  name: "position-detail",
  components: {PostApp, CommunicateLi},
  data() {
    return {
      dialogFormVisible: false,
      communication: {
        text: '',
      },
      visible: false,
      formLabelWidth: '120px',
      chats: [
        {
          index: 1,
          type: '已发送',
          content: '您好，我对java软件开发实习生很感兴趣，希望和您聊聊，谢谢！'
        },
        {
          index: 2,
          type: '已接受',
          content: '不可能，你太菜了'
        }
      ],
      position: {
        index: 1,
        name: 'Java开发工程师',
        salary: '20K-30K',
        experience: '5-10年',
        degree: '硕士',
        address: '上海黄浦区',
        contact: '马小超',
        company_name: '腾讯',
        company_type: '互联网',
        company_state: '已上市',
        company_employees: '10000人',
        logo: require('../../../assets/img/company/huawei.jpg'),
        items: ['标签一', '标签二', '标签三', '标签四', '标签五'],
        welfare: '员工旅游，带薪年假，定期体检，通讯补贴，交通补助...',
        skill: `
          1.HTML5,CSS3,ES6,DOM,协议,等前端开发技术； 2.使用各种脚本调试器，DOM查看其等定位问题，熟练使用各种工具检测web服务性能和定位平静； 3.对主流框架（Angular4+ \\Vue\\React ）至少一种有深入应用并深入理解其设计原理； 4.熟悉小程序开发及相关框架Uni-app，有支付宝小程序平台开发经验优先。
        `,
        welfare_detail: `
          固定的基本薪资、岗位技能/管理津贴、年终奖、绩效奖金、年度调薪； 法定年假、福利年假、法定节假日、带薪病假； 五险一金、商业保险（补充医疗险、意外伤害险）； 午餐补贴、通讯补贴、自备机补贴、出差补贴； 生日礼金、节假日福利、婚丧喜庆福利、定期体检； 健全完善的培训体系（新人训、专业训、部门内训、新人带教制度等）； 宽广的晋升发展平台
        `,
      },
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
          logo: require('../../../assets/img/company/huawei.jpg'),
          items: ['标签一', '标签二', '标签三', '标签四', '标签五'],
          welfare: '员工旅游，带薪年假，定期体检，通讯补贴，交通补助...'
        },
        {
          index: 2,
          name: 'Java开发工程师',
          salary: '20K-30K',
          experience: '5-10年',
          degree: '硕士',
          address: '上海黄浦区',
          company_name: '腾讯',
          company_type: '互联网',
          company_state: '已上市',
          company_employees: '10000人',
          logo: require('../../../assets/img/company/huawei.jpg'),
          items: ['标签一', '标签二', '标签三', '标签四', '标签五'],
          welfare: '员工旅游，带薪年假，定期体检，通讯补贴，交通补助...'
        },
        {
          index: 3,
          name: 'Java开发工程师',
          salary: '20K-30K',
          experience: '5-10年',
          degree: '硕士',
          address: '上海黄浦区',
          company_name: '腾讯',
          company_type: '互联网',
          company_state: '已上市',
          company_employees: '10000人',
          logo: require('../../../assets/img/company/huawei.jpg'),
          items: ['标签一', '标签二', '标签三', '标签四', '标签五'],
          welfare: '员工旅游，带薪年假，定期体检，通讯补贴，交通补助...'
        }
      ]
    }
  },
  methods: {
    onSubmit() {
      alert(this.communication.text)
    },
    jumpCompany() {
      // 携带索引跳转公司
      this.$router.push({
        path: "/index/company_detail",
        query: {
          index: this.company.index
        }
      })
    }
  }
}
</script>

<style scoped>
@import "../../../assets/css/apply-system/position-detail.css";
</style>
