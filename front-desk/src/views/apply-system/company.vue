<template>
  <div class="company-body">
    <el-row></el-row>
    <el-row class="search">
      <el-col :span="24">
        <div class="search-content">
          <el-row class="province-search">
            <el-col :span="3"><div class="grid-content"></div></el-col>
            <el-col :span="18">
              <div class="screen-content">
                <span>公司地点：</span>
                <span v-for="city in cities" class="city">
                  <el-button type="text" class="screen-btn">{{city}}</el-button>
                </span>
                <span class="more-city">
                  <el-button type="text" class="screen-btn">全部城市</el-button>
                </span>
              </div>
            </el-col>
          </el-row>
          <el-row class="province-search">
            <el-col :span="3"><div class="grid-content"></div></el-col>
            <el-col :span="18">
              <div class="screen-content">
                <span>行业类型：</span>
                <span v-for="type in types" class="screen">
                  <el-button type="text" class="screen-btn">{{type}}</el-button>
                </span>
              </div>
            </el-col>
          </el-row>
          <el-row class="province-search">
            <el-col :span="3"><div class="grid-content"></div></el-col>
            <el-col :span="18">
              <div class="screen-content">
                <span>公司规模：</span>
                <span v-for="scale in scales" class="screen">
                  <el-button type="text" class="screen-btn">{{scale}}</el-button>
                </span>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row class="position-main">
      <el-col :span="3"><div class="grid-content"></div></el-col>
      <el-col :span="17">
        <div class="grid-content">
          <div class="post-li">
            <el-row>
              <company-item-box v-for="company in companies" :key="company.index">
                <img :src="company.logo" alt="" class="c-logo" slot="c-logo">
                <div slot="c-name">{{company.name}}</div>
                <span slot="c-state">{{company.state}}</span>
                <span slot="c-type">{{company.type}}</span>
                <span slot="c-num">{{company.num}}</span>
                <span slot="c-salary">{{company.salary}}</span>
              </company-item-box>
            </el-row>
          </div>
          <div class="post-pagination">
            <el-pagination background :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000"></el-pagination>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 导入CompanyItemBox组件
import CompanyItemBox from "../../components/company/CompanyItemBox";
// 导入UsedItem组件
import UsedItem from "../../components/used/UsedItem";
export default {
  name: "company",
  components: {CompanyItemBox, UsedItem},
  data() {
    return {
      search: '',
      cities: [
        '上海', '北京', '广州', '深圳', '武汉', '南京', '杭州',
        '成都', '重庆', '青岛', '厦门', '天津', '宁波', '郑州',
        '长沙', '南昌', '昆明'
      ],
      types: [
        '不限', '电子商务', '互联网', '计算机', '媒体', '医疗',
        '生活服务', '地产', '教育', '广告', '农牧业',
        '物流', '建筑', '汽车', '贸易', '其他行业'
      ],
      scales: [
        '不限', '0-20人', '20-99人', '100-499人',
        '500-999人', '1000-9999人', '10000人以上'
      ],
      companies: [
        {
          index: 1,
          logo: require('../../assets/img/company/huawei.jpg'),
          name: '华为技术有限公司',
          state: '已上市',
          type: '通讯',
          num: '5632',
          salary: '10-15K'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/apply-system/company.css";
</style>
