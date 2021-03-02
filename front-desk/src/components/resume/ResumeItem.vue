<template>
  <div class="resume-item">
    <el-row class="resume-body">
      <el-col :span="3">
        <div class="img-content">
          <img src="../../assets/img/resume/resume_view1.jpg" alt="" class="resume-li-img">
        </div>
      </el-col>
      <el-col :span="8">
        <div class="title-content">
          <ul>
            <li class="resume-name">
              未命名-01
            </li>
            <li class="resume-operate">
              <span>
                <el-button type="text" class="resume-btn">
                  <i class="el-icon-circle-check"></i>下载
                </el-button>
              </span>
              <span>
                <el-button type="text" class="resume-btn">
                  <i class="el-icon-refresh"></i>重命名
                </el-button>
              </span>
              <span>
                <el-button type="text" class="resume-btn">
                  <i class="el-icon-delete"></i>删除
                </el-button>
              </span>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="13">
        <div class="time-content">
          2020.10.10
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "ResumeItem"
}
</script>

<style scoped>
@import "../../assets/css/components/resumeitem.css";
</style>
