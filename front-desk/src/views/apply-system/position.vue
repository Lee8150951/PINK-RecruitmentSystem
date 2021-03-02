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
                    <el-dropdown-item v-for="(exp, index) in exp_interval" :key="index">
                      <div @click="expSearch(exp)">{{exp.exp}}</div>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown class="dropdown">
                  <span class="el-dropdown-link">
                    学历要求<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-for="(degree, index) in degree_interval" :key="index">
                      <div @click="degreeSearch(degree)">{{degree.degree}}</div>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown class="dropdown">
                  <span class="el-dropdown-link">
                    薪资要求<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-for="(salary, index) in salary_interval" :key="index">
                      <div @click="salarySearch(salary)">{{salary.salary}}</div>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown class="dropdown">
                  <span class="el-dropdown-link">
                    发布时间<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-for="(time, index) in time_interval" :key="index">
                      <div @click="timeSearch(time)">{{time.time}}</div>
                    </el-dropdown-item>
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
    <el-row>
      <el-col :span="24"><div class="occupied-content"></div></el-col>
    </el-row>
  </div>
</template>

<script>
// 导入PostItem组件
import PostItem from "../../components/apply-system/post/PostItem";
// 导入UsedItem组件
import UsedItem from "../../components/apply-system/used/UsedItem";
export default {
  name: "position",
  components: {UsedItem, PostItem},
  data() {
    return {
      search: '',
      exp_interval: [
        {
          key: 'exp_1',
          exp: '不限'
        },
        {
          key: 'exp_2',
          exp: '在校生'
        },
        {
          key: 'exp_3',
          exp: '应届生'
        },
        {
          key: 'exp_4',
          exp: '1年以内'
        },
        {
          key: 'exp_5',
          exp: '1-3年'
        },
        {
          key: 'exp_6',
          exp: '3-5年'
        },
        {
          key: 'exp_7',
          exp: '5-10年'
        },
        {
          key: 'exp_8',
          exp: '10年以上'
        }
      ],
      degree_interval: [
        {
          key: 'degree_1',
          degree: '不限'
        },
        {
          key: 'degree_2',
          degree: '初中及以下'
        },
        {
          key: 'degree_3',
          degree: '中专/技校'
        },
        {
          key: 'degree_4',
          degree: '高中'
        },
        {
          key: 'degree_5',
          degree: '大专'
        },
        {
          key: 'degree_6',
          degree: '本科'
        },
        {
          key: 'degree_7',
          degree: '硕士'
        },
        {
          key: 'degree_8',
          degree: '博士'
        }
      ],
      salary_interval: [
        {
          key: 'salary_1',
          salary: '不限'
        },
        {
          key: 'salary_2',
          salary: '3K以下'
        },
        {
          key: 'salary_3',
          salary: '3-5K'
        },
        {
          key: 'salary_4',
          salary: '5-10K'
        },
        {
          key: 'salary_5',
          salary: '10-15K'
        },
        {
          key: 'salary_6',
          salary: '15-20K'
        },
        {
          key: 'salary_7',
          salary: '20-30K'
        },
        {
          key: 'salary_8',
          salary: '30-50K'
        },
        {
          key: 'salary_9',
          salary: '50K以上'
        }
      ],
      time_interval: [
        {
          key: 'time_1',
          time: '不限'
        },
        {
          key: 'time_2',
          time: '一天以内'
        },
        {
          key: 'time_3',
          time: '三天以内'
        },
        {
          key: 'time_4',
          time: '七天以内'
        },
        {
          key: 'time_5',
          time: '十五天以内'
        },
        {
          key: 'time_6',
          time: '一个月以内'
        }
      ],
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
  },
  methods: {
    expSearch(exp) {
      this.$router.push({
        path: '/index/apply_position',
        query: {
          key: exp.key,
          exp: exp.exp
        }
      })
    },
    degreeSearch(degree) {
      this.$router.push({
        path: '/index/apply_position',
        query: {
          key: degree.key,
          degree: degree.degree
        }
      })
    },
    salarySearch(salary) {
      this.$router.push({
        path: '/index/apply_position',
        query: {
          key: salary.key,
          salary: salary.salary
        }
      })
    },
    timeSearch(time) {
      this.$router.push({
        path: '/index/apply_position',
        query: {
          key: time.key,
          time: time.time
        }
      })
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/apply-system/position.css";
</style>
