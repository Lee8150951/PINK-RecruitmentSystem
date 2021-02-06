<template>
  <div class="position-body">
    <el-row></el-row>
    <el-row class="search">
      <el-col :span="24">
        <div class="search-content">
          <el-row>
            <el-col :span="3"><div class="grid-content"></div></el-col>
            <el-col :span="13">
              <div class="grid-content">
                <el-input placeholder="搜索职位" v-model="search" class="input-with-select">
                  <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row class="province-search">
            <el-col :span="3"><div class="grid-content"></div></el-col>
            <el-col :span="18">
              <div class="province-content">
                <span>热门城市：</span>
                <span v-for="city in cities" class="city">
                  <el-button type="text" class="city-btn">{{city}}</el-button>
                </span>
                <span class="more-city">
                  <el-button type="text" class="city-btn">全部城市</el-button>
                </span>
              </div>
            </el-col>
          </el-row>
          <el-row class="sort-search">
            <el-col :span="3"><div class="grid-content"></div></el-col>
            <el-col :span="18">
              <div class="sort-content">
                <el-dropdown>
                  <span class="el-dropdown-link">
                    工作经验<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>不限</el-dropdown-item>
                    <el-dropdown-item>在校生</el-dropdown-item>
                    <el-dropdown-item>应届生</el-dropdown-item>
                    <el-dropdown-item>1年以内</el-dropdown-item>
                    <el-dropdown-item>1-3年</el-dropdown-item>
                    <el-dropdown-item>3-5年</el-dropdown-item>
                    <el-dropdown-item>5-10年</el-dropdown-item>
                    <el-dropdown-item>10年以上</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown class="dropdown">
                  <span class="el-dropdown-link">
                    学历要求<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>不限</el-dropdown-item>
                    <el-dropdown-item>初中及以下</el-dropdown-item>
                    <el-dropdown-item>中专/技校</el-dropdown-item>
                    <el-dropdown-item>高中</el-dropdown-item>
                    <el-dropdown-item>大专</el-dropdown-item>
                    <el-dropdown-item>本科</el-dropdown-item>
                    <el-dropdown-item>硕士</el-dropdown-item>
                    <el-dropdown-item>博士</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown class="dropdown">
                  <span class="el-dropdown-link">
                    薪资要求<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>不限</el-dropdown-item>
                    <el-dropdown-item>3K以下</el-dropdown-item>
                    <el-dropdown-item>3-5K</el-dropdown-item>
                    <el-dropdown-item>5-10K</el-dropdown-item>
                    <el-dropdown-item>10-15K</el-dropdown-item>
                    <el-dropdown-item>15-20K</el-dropdown-item>
                    <el-dropdown-item>20-30K</el-dropdown-item>
                    <el-dropdown-item>30-50K</el-dropdown-item>
                    <el-dropdown-item>50K以上</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown class="dropdown">
                  <span class="el-dropdown-link">
                    发布时间<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>不限</el-dropdown-item>
                    <el-dropdown-item>一天以内</el-dropdown-item>
                    <el-dropdown-item>三天以内</el-dropdown-item>
                    <el-dropdown-item>七天以内</el-dropdown-item>
                    <el-dropdown-item>十五天以内</el-dropdown-item>
                    <el-dropdown-item>一个月以内</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row class="position-main">
      <el-col :span="3"><div class="grid-content"></div></el-col>
      <el-col :span="13">
        <div class="grid-content">
          <div class="post-li">
            <post-item v-for="post in posts" :key="post.index" :post="post"></post-item>
          </div>
          <div class="post-pagination">
            <el-pagination background :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000"></el-pagination>
          </div>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="right-content">
          <el-row>
            <el-col :span="24">
              <div class="btn-content">
                <el-button type="warning" class="upload-btn">上传简历</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row class="used-li">
            <el-col :span="24">
              <div class="used-header">
                看过的职位
              </div>
              <div class="used-body">
                <ul>
                  <used-item></used-item>
                  <used-item></used-item>
                  <used-item></used-item>
                  <used-item></used-item>
                  <used-item></used-item>
                </ul>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 导入PostItem组件
import PostItem from "../../components/post/PostItem";
// 导入UsedItem组件
import UsedItem from "../../components/used/UsedItem";
export default {
  name: "position",
  components: {UsedItem, PostItem},
  data() {
    return {
      search: '',
      cities: [
        '上海', '北京', '广州', '深圳', '武汉', '南京', '杭州',
        '成都', '重庆', '青岛', '厦门', '天津', '宁波', '郑州',
        '长沙', '南昌', '昆明'
      ],
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
      ]
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/apply-system/position.css";
</style>
