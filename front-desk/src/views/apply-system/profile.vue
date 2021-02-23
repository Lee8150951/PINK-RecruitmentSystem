<template>
  <div class="profile-body">
    <el-row></el-row>
    <el-row>
      <el-col :span="18" class="left-col">
        <div class="grid-content">
          <el-row>
            <el-col :span="24">
              <div>
                <el-input placeholder="搜索职位，公司" v-model="research" class="input-with-select">
                  <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
              </div>
              <div class="recommend-content">
                <div class="recommend-title">
                  <span class="title_1">推荐职位</span>
                </div>
                <div class="recommend-list">
                  <post-item v-for="post in posts" :key="post.index" :post="post"></post-item>
                </div>
                <div class="recommend-pagination">
                  <el-pagination background :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000"></el-pagination>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="6" class="right-col">
        <div class="grid-content">
          <div class="personal-info">
            <ul>
              <li>
                <img src="../../assets/img/avatar/avatar02.png" alt="" class="personal-img">
              </li>
              <li>
                <span class="personal-name">王小明</span>
                <el-button @click="drawer=true" size="mini" type="warning" icon="el-icon-medal-1" circle class="vip-btn"></el-button>
              </li>
              <li class="personal-intro">
                <span class="span-left">22岁</span>
                <span>23届应届生</span>
                <span class="span-right">硕士</span>
              </li>
              <li>
                <el-button type="warning" plain class="personal-type">在校生-暂不考虑</el-button>
              </li>
              <li>
                <el-row>
                  <el-col :span="6">
                    <div class="grid-content">
                      <div class="personal-num">0</div>
                      <div class="personal-title">沟通过</div>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="grid-content">
                      <div class="personal-num">0</div>
                      <div class="personal-title">已投递</div>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="grid-content">
                      <div class="personal-num">0</div>
                      <div class="personal-title">面试</div>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="grid-content">
                      <div class="personal-num">0</div>
                      <div class="personal-title">感兴趣</div>
                    </div>
                  </el-col>
                </el-row>
              </li>
            </ul>
          </div>
          <el-drawer title="开通会员" :visible.sync="drawer">
          </el-drawer>
          <div class="annex-panel">
            <ul>
              <li class="annex-title">附件管理</li>
              <li>
                <el-button type="warning">警告按钮</el-button>
              </li>
              <li>
                <el-button type="warning" plain>警告按钮</el-button>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PostItem from "../../components/post/PostItem";
export default {
  name: "profile",
  components: {PostItem},
  data() {
    return {
      research: '',
      activeName: 'first',
      drawer: false,
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
          logo: require('../../assets/img/company/huawei.jpg'),
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
          logo: require('../../assets/img/company/huawei.jpg'),
          items: ['标签一', '标签二', '标签三', '标签四', '标签五'],
          welfare: '员工旅游，带薪年假，定期体检，通讯补贴，交通补助...'
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped>
@import "../../assets/css/apply-system/profile.css";
</style>
