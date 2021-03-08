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
              <span class="greet-time">早安，</span>
              <span class="greet-target">马小超</span>
            </div>
            <div class="diagram">
              <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="tr-panel"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import MainTitle from "../../components/company/body/MainTitle";
import style from "../../assets/js/ecahrts-style"
export default {
  name: "home",
  components: {MainTitle},
  data() {
    return {

    }
  },
  methods: {
    drawLine(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'), "style")
      // 绘制图表
      myChart.setOption({
        tooltip: {},
        xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });
    }
  },
  mounted() {
    this.drawLine();
  }
}
</script>

<style scoped>
@import "../../assets/css/company/home.css";
</style>
