<template>
  <div class="resume-body">
    <div class="resume-list">
      <div class="top-title">
        <el-row>
          <el-col :span="12">
            <div class="top-left">
              简历列表
            </div>
          </el-col>
          <el-col :span="12">
            <div class="top-right">
              <el-button type="text" class="top-btn">
                <i class="el-icon-upload"></i>导入简历
              </el-button>
              <el-button type="text" class="top-btn">
                <i class="el-icon-circle-plus"></i>新建简历
              </el-button>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="top-body">
        <resume-item></resume-item>
      </div>
    </div>
    <div class="style-list">
      <div class="bottom-title">
        从模板添加新简历
      </div>
      <div class="bottom-body">
        <el-row>
          <resume-box v-for="(list, index) in modelList" :key="index">
            <img :src="list.url" alt="" class="resume-img" slot="resume-img" @mouseover="mouseOver(index)" @mouseout="mouseOut(index)">
            <span slot="resume-name">{{list.title}}</span>
          </resume-box>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
// 导入ResumeItem模块
import ResumeItem from "../../components/resume/ResumeItem";
// 导入ResumeBox模块
import ResumeBox from "../../components/resume/ResumeBox";
export default {
  name: "resume",
  components: {ResumeBox, ResumeItem},
  data() {
    return {
      modelList: [
        {
          url: require('../../assets/img/resume/resume_view1.jpg'),
          title: '学生求职模板'
        },
        {
          url: require('../../assets/img/resume/resume_view3.jpg'),
          title: '商务通用模板'
        },
        {
          url: require('../../assets/img/resume/resume_view2.jpg'),
          title: '程序员/技术模板'
        },
        {
          url: require('../../assets/img/resume/resume_view4.jpg'),
          title: '产品/运营模板'
        },
        {
          url: require('../../assets/img/resume/resume_view5.jpg'),
          title: '人事/行政模板'
        },
        {
          url: require('../../assets/img/resume/resume_view6.jpg'),
          title: '其他产业模板'
        },
      ]
    }
  },
  methods: {
    mouseOver(index) {
      const dom = document.getElementsByClassName("resume-img")
      dom[index].style.opacity = 0.7
    },
    mouseOut(index) {
      const dom = document.getElementsByClassName("resume-img")
      dom[index].style.opacity = 1
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/apply-system/resume.css";
</style>
