<template>
  <div class="edit-body">
    <page-title>
      对象详情 Attract Detail
    </page-title>
    <el-row class="main-row">
      <el-col :span="8">
        <div class="left-content">
          <div class="avatar-col">
            <ul class="profile-bg">
              <li class="relative">
                <img src="../../../assets/img/avatar/avatar02.png" alt="" class="avatar">
              </li>
              <li class="user-name">{{user.name}}</li>
              <li class="school-name">{{user.education[0].c_school}} | {{user.education[0].c_qualification}}</li>
            </ul>
          </div>
          <div class="base-info">
            <div class="base-info-li">
              <ul>
                <li class="info-li">
                  <span class="info-title">性别：</span>
                  <span class="info-body">{{user.sex}}</span>
                </li>
                <li class="info-li">
                  <span class="info-title">邮箱：</span>
                  <span class="info-body">{{user.email}}</span>
                </li>
                <li class="info-li">
                  <span class="info-title">电话：</span>
                  <span class="info-body">{{user.phone}}</span>
                </li>
                <li class="info-li">
                  <span class="info-title">期望城市：</span>
                  <span class="info-body">{{user.demand.c_excity}}</span>
                </li>
                <li class="info-li">
                  <span class="info-title">期望薪资：</span>
                  <span class="info-body">{{user.demand.c_exsalary}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="right-content">
          <div class="right-top">
            <div class="rt-title">学历信息 Education-Information</div>
            <el-row class="rt-body">
              <el-col :span="12" class="ei-left">
                <div class="ei-title">第一学历</div>
                <div>
                  <el-row>
                    <el-col :span="5">
                      <div class="ei-content">
                        <ul class="ei-ul">
                          <li class="ei-li">学校：</li>
                          <li class="ei-li">学历：</li>
                          <li class="ei-li">专业：</li>
                          <li class="ei-li">时间：</li>
                        </ul>
                      </div>
                    </el-col>
                    <el-col :span="19">
                      <div class="ei-content">
                        <ul class="ei-ul">
                          <li class="ei-li">{{user.education[0].c_school}}</li>
                          <li class="ei-li">{{user.education[0].c_qualification}}</li>
                          <li class="ei-li">{{user.education[0].c_major}}</li>
                          <li class="ei-li">{{user.education[0].c_schooling}}</li>
                        </ul>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
              <el-col :span="12" class="ei-right">
                <div class="ei-title">第二学历</div>
                <div>
                  <el-row>
                    <el-col :span="5">
                      <div class="ei-content">
                        <ul class="ei-ul">
                          <li class="ei-li">学校：</li>
                          <li class="ei-li">学历：</li>
                          <li class="ei-li">专业：</li>
                          <li class="ei-li">时间：</li>
                        </ul>
                      </div>
                    </el-col>
                    <el-col :span="19">
                      <div class="ei-content">
                        <ul class="ei-ul">
                          <li class="ei-li">{{user.education[1].c_school}}</li>
                          <li class="ei-li">{{user.education[1].c_qualification}}</li>
                          <li class="ei-li">{{user.education[1].c_major}}</li>
                          <li class="ei-li">{{user.education[1].c_schooling}}</li>
                        </ul>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="right-bottom">
            <div class="rt-title rb-special">实习经历 Internship-Experience</div>
            <el-row class="rb-body">
              <el-col :span="12" class="ie-left">
                <div class="ei-title">第一实习经历</div>
                <div>
                  <el-row>
                    <el-col :span="5">
                      <div class="ie-content">
                        <ul class="ie-ul">
                          <li class="ie-li">实习企业：</li>
                          <li class="ie-li">企业ID：</li>
                          <li class="ie-li">担任职务：</li>
                          <li class="ie-li">实习时间：</li>
                        </ul>
                      </div>
                    </el-col>
                    <el-col :span="19">
                      <div class="ie-content">
                        <ul class="ie-ul">
                          <li class="ie-li">{{user.internship[0].c_iscompany}}</li>
                          <li class="ie-li">{{user.internship[0].c_cid}}</li>
                          <li class="ie-li">{{user.internship[0].c_ispost}}</li>
                          <li class="ie-li">{{user.internship[0].c_istime}}</li>
                        </ul>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
              <el-col :span="12" class="ie-right">
                <div class="ei-title">第二实习经历</div>
                <div>
                  <el-row>
                    <el-col :span="5">
                      <div class="ie-content">
                        <ul class="ie-ul">
                          <li class="ie-li">实习企业：</li>
                          <li class="ie-li">企业ID：</li>
                          <li class="ie-li">担任职务：</li>
                          <li class="ie-li">实习时间：</li>
                        </ul>
                      </div>
                    </el-col>
                    <el-col :span="19">
                      <div class="ie-content">
                        <ul class="ie-ul">
                          <li class="ie-li">{{user.internship[1].c_iscompany}}</li>
                          <li class="ie-li">{{user.internship[1].c_cid}}</li>
                          <li class="ie-li">{{user.internship[1].c_ispost}}</li>
                          <li class="ie-li">{{user.internship[1].c_istime}}</li>
                        </ul>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="annex-col">
            <el-button type="danger" class="annex-btn" @click="resumeDownload">简历下载</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import PageTitle from "../../../components/hire-system/title/PageTitle";
  export default {
    name: "attract_detail",
    components: {PageTitle},
    data() {
      return {
        user: {
          // 基本信息
          id: '100001',
          name: '马小超',
          age: '22',
          sex: '男',
          email: '73625948@qq.com',
          phone: '15173859302',
          // 期望信息
          demand: {
            c_excity: '深圳',
            c_exsalary: '20K-25K',
          },
          // 教育经历
          education: [
            // 第一学历
            {
              c_school: '华中科技大学',
              c_qualification: '硕士',
              c_major: '电子信息',
              c_schooling: '2020年9月-2023年7月'
            },
            // 第二学历
            {
              c_school: '华中科技大学',
              c_qualification: '本科',
              c_major: '软件工程',
              c_schooling: '2016年9月-2020年7月'
            }
          ],
          // 实习经历
          internship: [
            // 第一经历
            {
              c_iscompany: '华为(深圳)科技有限公司',
              c_cid: 'SZ223312321',
              c_ispost: 'Java软件开发师',
              c_istime: '2015年9月-2016年3月'
            },
            // 第二经历
            {
              c_iscompany: '腾讯(深圳)科技有限公司',
              c_cid: 'SZ223312423',
              c_ispost: 'Java软件开发师',
              c_istime: '2020年9月-2023年3月'
            },
          ]
        }
      }
    },
    methods: {
      resumeDownload() {
        alert("success!")
      }
    }
  }
</script>

<style scoped>
@import "../../../assets/css/hire-system/attract-detail.css";
</style>
