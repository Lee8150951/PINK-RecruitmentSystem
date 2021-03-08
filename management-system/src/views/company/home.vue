<template>
  <div class="home-main">
    <main-title>
      <i class="el-icon-odometer"></i> 总览 Dashboard
    </main-title>
    <div class="main-body">
      <el-row class="top-info">
        <el-col :span="12">
          <div class="tl-panel">
            <div class="greet">
              <span class="greet-time">{{greet}}，</span>
              <span class="greet-target">马小超</span>
            </div>
            <div class="diagram">
              <div id="myChart" :style="{width: '100%', height: '380px'}"></div>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="tr-panel">
            <el-row>
              <el-col :span="12" class="hr-num">
                <div>
                  <div class="tips-title">旗下HR</div>
                  <div class="tips-num">26</div>
                  <div class="tips-other">
                    <span>Total number of hr</span>
                    <div class="more-btn_1">
                      <el-button type="text">more...</el-button>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="11" class="post-num">
                <div>
                  <div class="tips-title">岗位总数</div>
                  <div class="tips-num">14</div>
                  <div class="tips-other">
                    <span>Total number of hr</span>
                    <div class="more-btn_2">
                      <el-button type="text">more...</el-button>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
            <div class="company-info">
              <div class="tips-title">公司信息</div>
              <div class="info-tips">
                <el-row>
                  <el-col :span="12">
                    <div class="left-tips">
                      <ul>
                        <li class="tip-li">
                          <i class="el-icon-s-goods"></i>
                          腾讯(深圳)科技有限公司
                        </li>
                        <li class="tip-li">
                          <i class="el-icon-user-solid"></i>
                          马化腾
                        </li>
                        <li class="tip-li">
                          <i class="el-icon-phone"></i>
                          400-23039420
                        </li>
                      </ul>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="right-tips">
                      <ul>
                        <li class="tip-li">
                          <i class="el-icon-s-cooperation"></i>
                          IT互联网
                        </li>
                        <li class="tip-li">
                          <i class="el-icon-s-shop"></i>
                          股份责任公司
                        </li>
                        <li class="tip-li">
                          <i class="el-icon-s-opportunity"></i>
                          中国广东省深圳市
                        </li>
                      </ul>
                    </div>
                  </el-col>
                </el-row>
              </div>
              <div class="more-col">
                <el-button type="primary" class="more-btn">查看详情</el-button>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import MainTitle from "../../components/company/body/MainTitle";
export default {
  name: "home",
  components: {MainTitle},
  data() {
    return {
      greet: ''
    }
  },
  methods: {
    // 判断时间
    greetJudge() {
      const now = new Date(),hour = now.getHours()
      if(hour < 6) {
        this.greet = '凌晨好'
      } else if (hour < 9) {
        this.greet = '早上好'
      } else if (hour < 12) {
        this.greet = '上午好'
      } else if (hour < 14) {
        this.greet = '中午好'
      } else if (hour < 17) {
        this.greet = '下午好'
      } else if (hour < 19) {
        this.greet = '早傍晚好'
      } else if (hour < 22) {
        this.greet = '晚上好'
      } else {
        this.greet = '深夜好'
      }
    },
    // echarts
    drawLine(){
      let myChart = this.$echarts.init(document.getElementById('myChart'), "style")
      myChart.setOption({
        xAxis: {
          type: 'category',
          data: ['3月', '4月', '5月', '6月', '7月', '3月', '4月', '5月', '6月', '7月'],
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#d8d8d8',
              width:'1'
            }
          },
          axisLabel: {
            textStyle: {
              color: '#d8d8d8',
            }
          },
        },
        yAxis: {
          type: 'value',
          axisLine: {//线
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#b9c8f1',
            }
          },
          splitLine: {
            lineStyle: {
              color: ['#b9c8f1'],
            }
          }
        },
        series: [{
          data: [20, 20, 22, 18, 22, 20, 20, 22, 18, 22],
          type: 'bar',
          itemStyle: {
            normal: {
              color: '#518ee8',
              label: {
                show: true,
                position: 'top',
                textStyle: {
                  color: '#518ee8'
                }
              }
            }
          },
          barWidth: 10
        }]
      });
    }
  },
  mounted() {
    this.drawLine();
    this.greetJudge();
  }
}
</script>

<style scoped>
@import "../../assets/css/company/home.css";
</style>
