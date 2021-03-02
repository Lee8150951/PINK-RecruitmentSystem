<template>
  <div class="export-body">
    <el-row class="export-title">
      <el-col :span="24">
        <div class="top-left-content">
          我的简历 - {{resume.name}}
          <el-button type="text" class="top-left-btn" @click="renameVisible = true">
            <i class="el-icon-copy-document"></i>
          </el-button>
        </div>
      </el-col>
    </el-row>
    <el-dialog title="重新命名简历名称" :visible.sync="renameVisible">
      <el-form :model="rename_form">
        <el-form-item>
          <el-input v-model="rename_form.name" placeholder="重命名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="rename-btn" type="primary" @click="renameVisible = false">确 定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-row class="pdf-col">
      <el-col :span="18">
        <div class="pdf-content">
          <pdf ref="pdf" :src="resume.url" class="pdf"></pdf>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="btn-content">
          <ul>
            <li>
              <el-button type="primary" plain class="right-btn_1" @click="download">下载</el-button>
            </li>
            <li>
              <el-button type="primary" class="right-btn_2" @click="turnEdit">修改</el-button>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 导入pdf组件
import pdf from 'vue-pdf'
export default {
  name: "export",
  components: {pdf},
  data() {
    return {
      renameVisible: false,
      rename_form: {
        uid: '',
        name: ''
      },
      resume: {
        uid: '',
        resume_id: '',
        name: '马超超简历',
        url: 'http://image.cache.timepack.cn/nodejs.pdf'
      }
    }
  },
  methods: {
    turnEdit() {
      this.$router.push({
        path: '/index/apply_edit'
      })
    },
    download() {
      alert("Download")
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/apply-system/export.css";
</style>
