<template>
  <div class="edit-body">
    <el-row>
      <el-col :span="18">
        <div class="left-content">
          <div class="left-header">
            <span class="left-header-title">我的在线简历</span>
            <span class="left-header-btn">
              <el-button type="text" class="header-btn">在线预览</el-button>
            </span>
          </div>
          <div class="base-info">
            <h4>编辑个人信息</h4>
            <el-form ref="form" :model="base_info">
              <el-row class="info-body">
                <el-col :span="12">
                  <div class="left-info">
                    <div class="info-panel">
                      <li class="info-title">姓名</li>
                      <li class="info-btn-panel">
                        <el-input v-model="input" placeholder="请输入内容" class="info-btn"></el-input>
                      </li>
                    </div>
                    <div class="info-panel">
                      <li class="info-title">性别</li>
                      <li class="info-btn-panel">
                        <el-radio v-model="radio1" label="1" border class="info-radio">男</el-radio>
                        <el-radio v-model="radio1" label="2" border class="info-radio">女</el-radio>
                      </li>
                    </div>
                    <div class="info-panel">
                      <li class="info-title">生日</li>
                      <li class="info-btn-panel">
                        <el-input v-model="input" placeholder="请输入内容" class="info-btn"></el-input>
                      </li>
                    </div>
                    <div class="info-panel">
                      <li class="info-title">微信号(选填)</li>
                      <li class="info-btn-panel">
                        <el-input v-model="input" placeholder="请输入内容" class="info-btn"></el-input>
                      </li>
                    </div>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="right-info">
                    <div class="info-panel">
                      <li class="info-title">所属行业</li>
                      <li class="info-btn-panel">
                        <template>
                          <el-select v-model="value" placeholder="请选择">
                            <el-option
                              v-for="item in options"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value" class="info-option">
                            </el-option>
                          </el-select>
                        </template>
                      </li>
                    </div>
                    <div class="info-panel">
                      <li class="info-title">身份</li>
                      <li class="info-btn-panel">
                        <el-input placeholder="学生" v-model="input" :disabled="true" class="info-btn"></el-input>
                      </li>
                    </div>
                    <div class="info-panel">
                      <li class="info-title">电话</li>
                      <li class="info-btn-panel">
                        <el-input v-model="input" placeholder="请输入内容" class="info-btn"></el-input>
                      </li>
                    </div>
                    <div class="info-panel">
                      <li class="info-title">邮箱</li>
                      <li class="info-btn-panel">
                        <el-input v-model="input" placeholder="请输入内容" class="info-btn"></el-input>
                      </li>
                    </div>
                    <div class="info-panel info-sub">
                      <el-button type="warning" class="info-btn-sub">完成</el-button>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </el-form>
          </div>
          <div class="message-panel message-panel_1">
            <div class="message-title">
              个人简介
            </div>
            <div class="message-body">
              <el-card shadow="hover" class="message-card">
                个人开发能力较强; 待人热情，性格外向; 有较为丰富的项目开发经验; 自学能力强; 有上进心
                个人开发能力较强; 待人热情，性格外向; 有较为丰富的项目开发经验; 自学能力强; 有上进心
                个人开发能力较强; 待人热情，性格外向; 有较为丰富的项目开发经验; 自学能力强; 有上进心
              </el-card>
            </div>
          </div>
          <div class="message-panel">
            <div class="message-title">
              期望职位
            </div>
            <div class="message-body">
              <el-card shadow="hover" class="message-card">
                <span class="message-span">
                  <i class="el-icon-suitcase"></i>web前端
                </span>
                <span class="message-span">
                  <i class="el-icon-bank-card"></i>面议
                </span>
                <span class="message-span">
                  <i class="el-icon-office-building"></i>行业不限
                </span>
                <span class="message-span_2">
                  <i class="el-icon-location-outline"></i>上海
                </span>
              </el-card>
            </div>
          </div>
          <div class="message-panel">
            <div class="message-title">
              实习经历
              <el-button type="text" class="add-btn">
                <i class="el-icon-circle-plus"></i> 添加
              </el-button>
            </div>
            <div class="message-body">
              <practice-panel></practice-panel>
              <practice-panel></practice-panel>
            </div>
          </div>
          <div class="message-panel">
            <div class="message-title">
              项目经历
              <el-button type="text" class="add-btn">
                <i class="el-icon-circle-plus"></i> 添加
              </el-button>
            </div>
            <div class="message-body">
              <project-panel></project-panel>
              <project-panel></project-panel>
            </div>
          </div>
          <div class="message-panel">
            <div class="message-title">
              教育经历
              <el-button type="text" class="add-btn">
                <i class="el-icon-circle-plus"></i> 添加
              </el-button>
            </div>
            <div class="message-body">
              <educate-panel></educate-panel>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <annex-panel></annex-panel>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import PracticePanel from "../../components/profile/PracticePanel";
  import ProjectPanel from "../../components/profile/ProjectPanel";
  import EducatePanel from "../../components/profile/EducatePanel";
  import AnnexPanel from "../../components/profile/AnnexPanel";
  export default {
    name: "edit",
    components: {AnnexPanel, EducatePanel, ProjectPanel, PracticePanel},
    data() {
      return {
        base_info: {}
      }
    }
  }
</script>

<style scoped>
@import "../../assets/css/apply-system/edit.css";
</style>
