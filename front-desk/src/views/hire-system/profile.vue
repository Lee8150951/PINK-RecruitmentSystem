<template>
  <div class="profile-body">
    <page-title>
      个人 Profile
    </page-title>
    <el-row class="main-row">
      <el-col :span="8">
        <div class="left-content">
          <div class="avatar-col">
            <ul class="profile-bg">
              <li class="relative">
                <span class="occupy" @mouseover="mouseOver" @mouseout="mouseOut" @click="editAvatarDialog = true">修改</span>
                <img src="../../assets/img/avatar/avatar02.png" alt="" class="avatar">
              </li>
              <li class="user-name">{{user.name}}</li>
              <li class="company-name">{{company.e_name}}</li>
              <li class="edit-col">
                <span style="cursor: pointer" @click="editVisible = true">编辑</span>
              </li>
            </ul>
          </div>
          <div class="base-info">
            <div class="base-info-box">
              <el-row>
                <el-col :span="8">
                  <div class="box-content">
                    <ul>
                      <li class="box-num">{{user.release_num}}</li>
                      <li class="box-title">已发布</li>
                    </ul>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="box-content">
                    <ul>
                      <li class="box-num">{{user.attract_num}}</li>
                      <li class="box-title">已招募</li>
                    </ul>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="box-content" style="border-right: 0">
                    <ul>
                      <li class="box-num">{{user.collection_num}}</li>
                      <li class="box-title">已收藏</li>
                    </ul>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="base-info-li">
              <ul>
                <li class="info-li">
                  <span class="info-title">工号：</span>
                  <span class="info-body">{{user.id}}</span>
                </li>
                <li class="info-li">
                  <span class="info-title">职位：</span>
                  <span class="info-body">{{user.position}}</span>
                </li>
                <li class="info-li">
                  <span class="info-title">微信：</span>
                  <span class="info-body">{{user.wechat}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="right-content">
          <div class="right-top">
            <div class="rt-title">公司信息 Company-Information</div>
            <el-row class="rt-body">
              <el-col :span="10">
                <div class="company-info">
                  <ul>
                    <li>
                      <el-row>
                        <el-col :span="6">
                          <img src="../../assets/img/company/alibaba.jpg" alt="" class="company-logo">
                        </el-col>
                        <el-col :span="18">
                          <ul class="company-title">
                            <li class="company-title-cn">{{company.e_name}}</li>
                          </ul>
                        </el-col>
                      </el-row>
                    </li>
                    <li class="info-li">
                      <span class="info-title">工商注册号：</span>
                      <span class="info-body" style="margin-left: 5px">{{company.e_id}}</span>
                    </li>
                    <li class="info-li">
                      <span class="info-title">人事部电话：</span>
                      <span class="info-body" style="margin-left: 5px">{{company.e_phone}}</span>
                    </li>
                  </ul>
                </div>
              </el-col>
              <el-col :span="14">
                <div class="info-boxes">
                  <el-row>
                    <el-col :span="12">
                      <div class="info-box">
                        <el-row>
                          <el-col :span="12">
                            <div class="left-box-content">
                              <ul>
                                <li><i class="el-icon-s-claim icon"></i>在招岗位</li>
                                <li class="box-en">Position</li>
                              </ul>
                            </div>
                          </el-col>
                          <el-col :span="8">
                            <div class="box-num_1">{{company.post_num}}</div>
                          </el-col>
                        </el-row>
                      </div>
                    </el-col>
                    <el-col :span="12">
                      <div class="info-box">
                        <el-row>
                          <el-col :span="12">
                            <div class="left-box-content">
                              <ul>
                                <li><i class="el-icon-s-custom icon"></i>HR总数</li>
                                <li class="box-en">Hire</li>
                              </ul>
                            </div>
                          </el-col>
                          <el-col :span="8">
                            <div class="box-num_1">{{company.hr_num}}</div>
                          </el-col>
                        </el-row>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="right-bottom">
            <div class="rt-title rb-special">招募折线 Recruitment-Line</div>
            <div id="myChart" :style="{width: '800px', height: '300px'}"></div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-dialog title="修改头像" :visible.sync="editAvatarDialog" width="30%">
      <div class="upload-div">
        <el-upload action="" :before-upload="beforeAvatarUpload" list-type="picture-card" :on-remove="handleRemove" :limit="1">
          <i class="el-icon-plus"></i>
        </el-upload>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editAvatarDialog = false">取 消</el-button>
        <el-button type="primary" @click="editAvatarDialog = false">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="基本信息编辑" :visible.sync="editVisible">
      <el-form :model="user">
        <el-row>
          <el-col :span="12">
            <div class="left-form">
              <div class="form-li">
                <el-row>
                  <el-col :span="5" class="form-title">工号：</el-col>
                  <el-col :span="19" class="form-body">
                    <el-input v-model="user.id" placeholder="请输入姓名" disabled></el-input>
                  </el-col>
                </el-row>
              </div>
              <div class="form-li">
                <el-row>
                  <el-col :span="5" class="form-title">姓名：</el-col>
                  <el-col :span="19" class="form-body">
                    <el-input v-model="user.name" placeholder="请输入姓名"></el-input>
                  </el-col>
                </el-row>
              </div>
              <div class="form-li">
                <el-row>
                  <el-col :span="5" class="form-title">电话：</el-col>
                  <el-col :span="19" class="form-body">
                    <el-input v-model="user.phone" placeholder="请输入电话"></el-input>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="right-form">
              <div class="form-li">
                <el-row>
                  <el-col :span="5" class="form-title">微信：</el-col>
                  <el-col :span="19" class="form-body">
                    <el-input v-model="user.wechat" placeholder="请输入微信"></el-input>
                  </el-col>
                </el-row>
              </div>
              <div class="form-li">
                <el-row>
                  <el-col :span="5" class="form-title">职位：</el-col>
                  <el-col :span="19" class="form-body">
                    <el-input v-model="user.position" placeholder="请输入职位"></el-input>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitEdit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import PageTitle from "../../components/hire-system/title/PageTitle";
export default {
  name: "profile",
  components: {PageTitle},
  data() {
    return {
      // 近10天日期
      dates: [],
      // 近10天招聘人数
      nums: [20, 12, 24, 50, 12, 3, 1, 10, 14, 30],
      editAvatarDialog: false,
      editVisible: false,
      imageUrl: '',
      user: {
        id: 'M202076625',
        phone: '15176685934',
        name: '马小超',
        wechat: 'Mxc15176685934',
        position: '高级Java技术总监',
        attract_num: '23',
        collection_num: '46',
        release_num: '51'
      },
      company: {
        e_id: '粤B2-20090059-1',
        e_name: '腾讯(深圳)技术有限公司',
        e_phone: '400-88128493',
        post_num: '1430',
        hr_num: '32'
      }
    }
  },
  methods: {
    drawLine(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        tooltip: {},
        xAxis: {
          type: 'category',
          data: this.dates
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: this.nums,
          type: 'line',
          smooth: true
        }]
      });
    },
    mouseOver: function () {
      const dom = document.getElementsByClassName("occupy")
      dom[0].style.opacity = 1
    },
    mouseOut: function () {
      const dom = document.getElementsByClassName("occupy")
      dom[0].style.opacity = 0
    },
    // 更新头像相关
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    beforeAvatarUpload(file) {
      // 判断大小
      const isLt2M = file.size / 1024 / 1024 < 1;
      // 判断文件类型
      const fileSuffix = file.name.substring(file.name.lastIndexOf(".") + 1);
      const whiteList = ["png", "jpg", "jpeg", "PNG", "JPG", "JPEG"];
      // 判断大小
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过1MB!');
      }
      // 判断文件类型
      if (whiteList.indexOf(fileSuffix) === -1) {
        this.$message.error("上传文件只能是png, jpg, jpeg格式");
        return false;
      }
    },
    // 获取近15日时间
    doHandleMonth(month){
      let m = month;
      if(month.toString().length === 1){
        m = "0" + month;
      }
      return m;
    },
    getDay(day){
      const today = new Date();
      const target_milliseconds=today.getTime() + 1000*60*60*24*day;
      today.setTime(target_milliseconds);
      let tMonth = today.getMonth();
      let tDate = today.getDate();
      tMonth = this.doHandleMonth(tMonth + 1);
      tDate = this.doHandleMonth(tDate);
      return tMonth + "-" + tDate;
    },
    submitEdit() {
      this.editVisible = false
      console.log(this.user)
    }
  },
  mounted() {
    for (let i = -9; i <= 0; i ++) {
      this.dates.push(this.getDay(i))
    }
    this.drawLine();
  }
}
</script>

<style scoped>
@import "../../assets/css/hire-system/profile.css";
</style>
