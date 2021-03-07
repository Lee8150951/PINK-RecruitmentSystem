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
              <li class="user-name">马小超</li>
              <li class="school-name">华中科技大学 | 硕士</li>
            </ul>
          </div>
          <div class="base-info">
            <div class="base-info-li">
              <ul>
                <li class="info-li">
                  <span class="info-title">性别：</span>
                  <span class="info-body">男</span>
                </li>
                <li class="info-li">
                  <span class="info-title">邮箱：</span>
                  <span class="info-body">762538172@qq.com</span>
                </li>
                <li class="info-li">
                  <span class="info-title">电话：</span>
                  <span class="info-body">15179384736</span>
                </li>
                <li class="info-li">
                  <span class="info-title">期望城市：</span>
                  <span class="info-body">上海</span>
                </li>
                <li class="info-li">
                  <span class="info-title">期望薪资：</span>
                  <span class="info-body">20K-25K</span>
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
                          <li class="ei-li">华中科技大学</li>
                          <li class="ei-li">硕士</li>
                          <li class="ei-li">电子信息</li>
                          <li class="ei-li">2020年9月-2023年3月</li>
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
                          <li class="ei-li">华中科技大学</li>
                          <li class="ei-li">本科</li>
                          <li class="ei-li">软件工程</li>
                          <li class="ei-li">2016年9月-2020年7月</li>
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
                          <li class="ie-li">华为(深圳)科技有限公司</li>
                          <li class="ie-li">M238490394</li>
                          <li class="ie-li">Java软件开发师</li>
                          <li class="ie-li">2020年9月-2023年3月</li>
                        </ul>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
              <el-col :span="12" class="ie-right">
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
                          <li class="ie-li">腾讯(深圳)科技有限公司</li>
                          <li class="ie-li">M248491394</li>
                          <li class="ie-li">Java软件开发师</li>
                          <li class="ie-li">2021年9月-2021年12月</li>
                        </ul>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="annex-col">
            <el-button type="danger" class="annex-btn">简历查看</el-button>
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
      }
    }
  }
</script>

<style scoped>
@import "../../../assets/css/hire-system/attract-detail.css";
</style>
