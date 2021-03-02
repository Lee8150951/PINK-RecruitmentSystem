<template>
  <div class="annex-panel">
    <ul>
      <li class="annex-title">附件管理</li>
      <li class="annex-buttons">
        <el-button type="warning" class="annex-btn" @click="dialogVisible = true">上传简历</el-button>
        <el-button type="warning" plain class="annex-btn" @click="turnResume">在线简历</el-button>
      </li>
    </ul>
    <el-dialog title="简历" :visible.sync="dialogVisible">
      <el-row>
        <el-col :span="12">
          <div class="left-content">
            <ul class="left-up">
              <li>
                <el-upload action="" class="upload-col" drag>
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                </el-upload>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="right-content">
            <ul class="right-up">
              <li>
                <img src="../../assets/img/background/profile_make.png" alt="" class="right-bg">
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="btn-content">
            <el-upload action="" class="upload-demo">
              <el-button size="small" type="primary" class="upload-btn" plain>上传附件简历</el-button>
            </el-upload>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="btn-content">
            <el-button size="small" type="primary" class="upload-btn" plain @click="turnResume">在线快速制作</el-button>
          </div>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "AnnexPanel",
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    turnResume() {
      this.$router.push({
        path: '/index/apply_resume'
      })
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/components/annexpanel.css";
</style>
