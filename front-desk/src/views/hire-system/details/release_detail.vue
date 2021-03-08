<template>
  <div class="edit-body">
    <page-title>
      岗位详情 Release Detail
    </page-title>
    <el-row class="main-row">
      <el-form ref="form" :model="position" label-width="80px">
        <el-col :span="8">
          <div class="left-content">
            <div class="left-title">基本信息 Basic-Information</div>
            <div class="form">
              <el-form-item label="岗位名称">
                <el-input v-model="position.r_name"></el-input>
              </el-form-item>
              <el-form-item label="薪资范围">
                <el-select v-model="position.r_salary" placeholder="请选择薪资范围" style="width: 100%">
                  <el-option label="3K以下" value="3K以下"></el-option>
                  <el-option label="3-5K" value="3-5K"></el-option>
                  <el-option label="5-10K" value="5-10K"></el-option>
                  <el-option label="10-15K" value="10-15K"></el-option>
                  <el-option label="15-20K" value="15-20K"></el-option>
                  <el-option label="20-30K" value="20-30K"></el-option>
                  <el-option label="30-50K" value="30-50K"></el-option>
                  <el-option label="50K以上" value="50K以上"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="岗位地址">
                <el-cascader v-model="position.r_address" :options="cities" :props="{expandTrigger: 'hover'}" :placeholder="position.r_address" class="cascader-col"></el-cascader>
              </el-form-item>
              <el-form-item label="工作经验">
                <el-select v-model="position.r_experience" placeholder="请选择工作经验" style="width: 100%">
                  <el-option label="在校生" value="在校生"></el-option>
                  <el-option label="应届生" value="应届生"></el-option>
                  <el-option label="1年以内" value="1年以内"></el-option>
                  <el-option label="1-3年" value="1-3年"></el-option>
                  <el-option label="3-5年" value="3-5年"></el-option>
                  <el-option label="5-10年" value="5-10年"></el-option>
                  <el-option label="10年以上" value="10年以上"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="学历要求">
                <el-select v-model="position.r_education" placeholder="请选择学历要求" style="width: 100%">
                  <el-option label="初中及以下" value="初中及以下"></el-option>
                  <el-option label="中专/技校" value="中专/技校"></el-option>
                  <el-option label="高中" value="高中"></el-option>
                  <el-option label="大专" value="大专"></el-option>
                  <el-option label="本科" value="本科"></el-option>
                  <el-option label="硕士" value="硕士"></el-option>
                  <el-option label="博士" value="博士"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="创建时间">
                <el-date-picker type="date" placeholder="选择日期" v-model="position.created_time" style="width: 100%;" disabled></el-date-picker>
              </el-form-item>
              <el-form-item label="其他介绍">
                <el-input type="textarea" :autosize="{ minRows: 4, maxRows: 4}" placeholder="请输入内容" v-model="position.r_introduction"></el-input>
              </el-form-item>
              <div class="submit-col">
                <el-button type="primary" @click="editForm">修改</el-button>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="right-content">
            <div class="right-top">
              <el-row>
                <el-col :span="14">
                  <div class="rt-left-content">
                    <div class="rt-title">福利 Welfare</div>
                    <el-input type="textarea" :autosize="{ minRows: 4, maxRows: 4}" placeholder="请输入内容" v-model="position.r_tag"></el-input>
                  </div>
                </el-col>
                <el-col :span="10">
                  <div class="rt-right-content">
                    <div class="rt-title">求职者 Job-Seeker</div>
                    <el-row class="js-row">
                      <el-col :span="12">
                        <div class="js-left-content">
                          <ul @click="deliveriesList">
                            <li class="num">{{num.deliveries}}</li>
                            <li class="tips">投递人数</li>
                          </ul>
                        </div>
                      </el-col>
                      <el-col :span="12">
                        <div class="js-right-content" @click="collectionList">
                          <ul>
                            <li class="num">{{num.collection}}</li>
                            <li class="tips">收藏人数</li>
                          </ul>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="right-bottom">
              <div class="rt-title rb-special">投递曲线 Deliveries-Line</div>
              <div id="myChart" :style="{width: '780px', height: '370px'}"></div>
            </div>
          </div>
        </el-col>
      </el-form>
    </el-row>
  </div>
</template>

<script>
  // 导入城市信息
  import {provinceAndCityDataPlus} from 'element-china-area-data'
  // 导入PageTitle模块
  import PageTitle from "../../../components/hire-system/title/PageTitle";
  export default {
    name: "release_detail",
    components: {PageTitle},
    data() {
      return {
        // 中国城市推荐List
        cities: provinceAndCityDataPlus,
        // 近10天日期
        dates: [],
        // 近10天招聘人数
        nums: [10, 12, 2, 5, 12, 6, 10, 12, 14, 20],
        // 岗位信息
        position: {
          r_id: 'M02029184',
          r_name: "Java开发工程师",
          r_salary: "20K-25K",
          r_address: "上海",
          r_experience: "3-5年",
          r_education: "硕士",
          r_introduction: "1.HTML5,CSS3,ES6,DOM,协议,等前端开发技术； 2.使用各种脚本调试器，DOM查看其等定位问题，熟练使用各种工具检测web服务性能和定位平静； 3.对主流框架（Angular4+ \\Vue\\React ）至少一种有深入应用并深入理解其设计原理； 4.熟悉小程序开发及相关框架Uni-app，有支付宝小程序平台开发经验优先。",
          r_tag: "996",
          created_time: "2020-10-09"
        },
        // 求职者数量
        num: {
          deliveries: 27,
          collection: 12
        }
      }
    },
    methods: {
      editForm() {
        console.log(this.position)
      },
      deliveriesList() {
        this.$router.push({
          path: '/hire/hire_attract',
          query: {
            r_id: this.position.r_id,
            r_name: this.position.r_name,
          }
        })
      },
      collectionList() {
        this.$router.push({
          path: '/hire/hire_attract',
          query: {
            r_id: this.position.r_id,
            r_name: this.position.r_name,
          }
        })
      },
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          tooltip: {},
          xAxis: {
            type: 'category',
            data: this.dates
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: this.nums,
            type: 'line',
            smooth: true
          }]
        });
      },
      // 获取近15日时间
      doHandleMonth(month){
        let m = month;
        if(month.toString().length === 1){
          m = "0" + month;
        }
        return m;
      },
      getDay(day){
        const today = new Date();
        const target_milliseconds=today.getTime() + 1000*60*60*24*day;
        today.setTime(target_milliseconds);
        let tMonth = today.getMonth();
        let tDate = today.getDate();
        tMonth = this.doHandleMonth(tMonth + 1);
        tDate = this.doHandleMonth(tDate);
        return tMonth + "-" + tDate;
      },
    },
    mounted() {
      for (let i = -9; i <= 0; i ++) {
        this.dates.push(this.getDay(i))
      }
      this.drawLine();
    }
  }
</script>

<style scoped>
@import "../../../assets/css/hire-system/release-detail.css";
</style>
