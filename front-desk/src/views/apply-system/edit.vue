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
                        <el-input v-model="base_info.name" placeholder="请输入内容" class="info-btn"></el-input>
                      </li>
                    </div>
                    <div class="info-panel">
                      <li class="info-title">性别</li>
                      <li class="info-btn-panel">
                        <el-radio v-model="base_info.sex" label="0" border class="info-radio">男</el-radio>
                        <el-radio v-model="base_info.sex" label="1" border class="info-radio">女</el-radio>
                      </li>
                    </div>
                    <div class="info-panel">
                      <li class="info-title">生日</li>
                      <li class="info-btn-panel">
                        <el-date-picker type="date" placeholder="选择日期" v-model="base_info.birthday" style="width: 100%;"></el-date-picker>
                      </li>
                    </div>
                    <div class="info-panel">
                      <li class="info-title">微信号(选填)</li>
                      <li class="info-btn-panel">
                        <el-input v-model="base_info.wechat" placeholder="请输入内容" class="info-btn"></el-input>
                      </li>
                    </div>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="right-info">
                    <div class="info-panel">
                      <li class="info-title">注册时间</li>
                      <li class="info-btn-panel">
                        <el-date-picker type="date" placeholder="选择日期" v-model="base_info.created_time" :disabled="true" style="width: 100%;"></el-date-picker>
                      </li>
                    </div>
                    <div class="info-panel">
                      <li class="info-title">身份</li>
                      <li class="info-btn-panel">
                        <el-input placeholder="请输入内容" v-model="base_info.type" :disabled="true" class="info-btn"></el-input>
                      </li>
                    </div>
                    <div class="info-panel">
                      <li class="info-title">电话</li>
                      <li class="info-btn-panel">
                        <el-input v-model="base_info.phone" placeholder="请输入内容" class="info-btn"></el-input>
                      </li>
                    </div>
                    <div class="info-panel">
                      <li class="info-title">邮箱</li>
                      <li class="info-btn-panel">
                        <el-input v-model="base_info.email" placeholder="请输入内容" class="info-btn"></el-input>
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
            <div class="message-body" @click="messageVisible = true">
              <el-card shadow="hover" class="message-card">
                {{resume.personalInfo}}
              </el-card>
            </div>
          </div>
          <el-dialog title="个人简介修改" :visible.sync="messageVisible">
            <el-form :model="resume">
              <el-form-item>
                <el-input type="textarea" :autosize="{minRows: 6, maxRows: 6}" placeholder="请输入修改内容" v-model="resume.personalInfo"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="warning" class="info-btn-sub" style="float: right">修改</el-button>
              </el-form-item>
            </el-form>
          </el-dialog>
          <div class="message-panel">
            <div class="message-title">
              期望职位
            </div>
            <div class="message-body" @click="expectVisible = true">
              <el-card shadow="hover" class="message-card">
                <span class="message-span">
                  <i class="el-icon-suitcase"></i>{{demand.c_exposition}}
                </span>
                <span class="message-span">
                  <i class="el-icon-bank-card"></i>{{demand.c_exsalary}}
                </span>
                <span class="message-span">
                  <i class="el-icon-office-building"></i>{{demand.c_exindustry}}
                </span>
                <span class="message-span_2">
                  <i class="el-icon-location-outline"></i>{{demand.c_excity}}
                </span>
              </el-card>
            </div>
          </div>
          <el-dialog title="期望修改" :visible.sync="expectVisible">
            <el-form :model="demand">
              <div class="info-panel">
                <li class="info-title">期望岗位</li>
                <li class="info-btn-panel">
                  <el-input v-model="demand.c_exposition" placeholder="请输入内容" class="info-btn"></el-input>
                </li>
              </div>
              <div class="info-panel">
                <li class="info-title">期望薪资</li>
                <li class="info-btn-panel">
                  <el-input v-model="demand.c_exsalary" placeholder="请输入内容" class="info-btn"></el-input>
                </li>
              </div>
              <div class="info-panel">
                <li class="info-title">期望行业</li>
                <li class="info-btn-panel">
                  <el-input v-model="demand.c_exindustry" placeholder="请输入内容" class="info-btn"></el-input>
                </li>
              </div>
              <div class="info-panel">
                <li class="info-title">期望城市</li>
                <li class="info-btn-panel">
                  <el-cascader v-model="demand.c_excity" :options="cities" :props="{expandTrigger: 'hover'}" placeholder="请选择期望城市" class="cascader-col"></el-cascader>
                </li>
              </div>
              <div class="info-panel info-sub">
                <el-button type="warning" class="info-btn-sub">完成</el-button>
              </div>
            </el-form>
          </el-dialog>
          <div class="message-panel">
            <div class="message-title">
              实习经历
              <el-button type="text" class="add-btn" @click="practiceVisible = true">
                <i class="el-icon-circle-plus"></i> 添加
              </el-button>
            </div>
            <div class="message-body">
              <practice-panel v-for="practice in practices" :key="practice.c_index" :practice="practice"></practice-panel>
            </div>
          </div>
          <el-dialog title="添加实习经历" :visible.sync="practiceVisible">
            <el-form :model="practice_form">
              <div class="info-panel">
                <li class="info-title">实习单位</li>
                <li class="info-btn-panel">
                  <el-input v-model="practice_form.c_iscompany" placeholder="请输入内容" class="info-btn"></el-input>
                </li>
              </div>
              <div class="info-panel">
                <li class="info-title">担任职务</li>
                <li class="info-btn-panel">
                  <el-input v-model="practice_form.c_ispost" placeholder="请输入内容" class="info-btn"></el-input>
                </li>
              </div>
              <div class="info-panel">
                <li class="info-title">实习开始时间</li>
                <li class="info-btn-panel">
                  <el-date-picker type="date" placeholder="选择日期" v-model="practice_form.c_istime" style="width: 100%;"></el-date-picker>
                </li>
              </div>
              <div class="info-panel info-sub">
                <el-button type="warning" class="info-btn-sub">完成</el-button>
              </div>
            </el-form>
          </el-dialog>
          <div class="message-panel">
            <div class="message-title">
              教育经历
              <el-button type="text" class="add-btn" @click="eduVisible = true">
                <i class="el-icon-circle-plus"></i> 添加
              </el-button>
            </div>
            <div class="message-body">
              <educate-panel v-for="edu in edus" :key="edu.c_index" :edu="edu"></educate-panel>
            </div>
          </div>
        </div>
        <el-dialog title="添加教育经历" :visible.sync="eduVisible">
          <el-form :model="edu_form">
            <div class="info-panel">
              <li class="info-title">毕业院校</li>
              <li class="info-btn-panel">
                <el-input v-model="edu_form.c_school" placeholder="请输入内容" class="info-btn"></el-input>
              </li>
            </div>
            <div class="info-panel">
              <li class="info-title">专业</li>
              <li class="info-btn-panel">
                <el-input v-model="edu_form.c_major" placeholder="请输入内容" class="info-btn"></el-input>
              </li>
            </div>
            <div class="info-panel">
              <li class="info-title">学历</li>
              <li class="info-btn-panel">
                <el-input v-model="edu_form.c_qualification" placeholder="请输入内容" class="info-btn"></el-input>
              </li>
            </div>
            <div class="info-panel">
              <li class="info-title">在校时间</li>
              <li class="info-btn-panel">
                <el-date-picker type="date" placeholder="选择日期" v-model="edu_form.c_schooling" style="width: 100%;"></el-date-picker>
              </li>
            </div>
            <div class="info-panel info-sub">
              <el-button type="warning" class="info-btn-sub">完成</el-button>
            </div>
          </el-form>
        </el-dialog>
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
  // 导入城市信息
  import {provinceAndCityDataPlus} from 'element-china-area-data'
  // 导入PracticePanel
  import PracticePanel from "../../components/profile/PracticePanel";
  // 导入ProjectPanel
  import ProjectPanel from "../../components/profile/ProjectPanel";
  // 导入EducatePanel
  import EducatePanel from "../../components/profile/EducatePanel";
  // 导入AnnexPanel
  import AnnexPanel from "../../components/profile/AnnexPanel";
  export default {
    name: "edit",
    components: {AnnexPanel, EducatePanel, ProjectPanel, PracticePanel},
    data() {
      return {
        // 中国城市推荐List
        cities: provinceAndCityDataPlus,
        messageVisible: false,
        expectVisible: false,
        practiceVisible: false,
        projectVisible: false,
        eduVisible: false,
        // 基本信息
        base_info: {
          id: '1',
          birthday: '1998.07.05',
          created_time: '2020.12.04',
          phone: '15169970596',
          name: '马小超',
          sex: '1',
          age: '22',
          email: '62738473@qq.com',
          wechat: 'mxc62738473',
          type: '求职者'
        },
        // 简历信息
        resume: {
          personalInfo: '个人开发能力较强; 待人热情，性格外向; 有较为丰富的项目开发经验; 自学能力强; 有上进心'
        },
        // 期望职位
        demand: {
          c_id: '1',
          c_exindustry: '金融业',
          c_exposition: 'Web前端',
          c_excity: '上海',
          c_exsalary: '10K-12K'
        },
        // 实习信息
        practices: [
          {
            c_id: '1',
            c_index: '1',
            c_iscompany: '上海腾讯研发中心',
            c_ispost: '前端开发',
            c_istime: '2019.10.09'
          },
          {
            c_id: '1',
            c_index: '2',
            c_iscompany: '杭州阿里研发中心',
            c_ispost: '大数据开发',
            c_istime: '2020.10.09'
          }
        ],
        practice_form: {
          c_id: '',
          c_index: '',
          c_iscompany: '',
          c_ispost: '',
          c_istime: ''
        },
        // 项目信息
        // project_form: {},
        // 教育信息
        edus: [
          {
            c_id: '1',
            c_index: '1',
            c_school: '华中科技大学',
            c_qualification: '硕士',
            c_major: '电子信息',
            c_schooling: '2020.09'
          },
          {
            c_id: '1',
            c_index: '2',
            c_school: '麻省理工大学',
            c_qualification: '博士',
            c_major: '信息安全',
            c_schooling: '2023.09'
          },
        ],
        edu_form: {
          c_id: '',
          c_school: '',
          c_qualification: '',
          c_major: '',
          c_schooling: ''
        }
      }
    }
  }
</script>

<style scoped>
@import "../../assets/css/apply-system/edit.css";
</style>
