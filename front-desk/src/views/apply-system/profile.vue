<template>
  <div class="profile-body">
    <el-row></el-row>
    <el-row>
      <el-col :span="18" class="left-col">
        <div class="grid-content">
          <el-row>
            <el-col :span="24">
              <div>
                <el-input placeholder="搜索职位，公司" v-model="research" class="input-with-select">
                  <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
              </div>
              <div class="recommend-content">
                <div class="recommend-title">
                  <span class="title_1">推荐职位</span>
                </div>
                <div class="recommend-list">
                  <post-item v-for="post in posts" :key="post.index" :post="post"></post-item>
                </div>
                <div class="recommend-pagination">
                  <el-pagination background :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000"></el-pagination>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="6" class="right-col">
        <div class="grid-content">
          <div class="personal-info">
            <ul>
              <li class="relative">
                <img :src="user.avatar" alt="" class="personal-img">
                <span class="occupy" @mouseout="mouseOut" @mouseover="mouseOver" @click="editAvatarDialog = true">修改</span>
                <el-button type="text" class="personal-btn" @click="editInfo">编辑</el-button>
              </li>
              <li>
                <span class="personal-name">{{user.name}}</span>
                <el-button @click="drawer=true" size="mini" type="warning" icon="el-icon-medal-1" circle class="vip-btn"></el-button>
              </li>
              <li class="personal-intro">
                <span class="span-left">{{user.age}}岁</span>
                <span>{{user.c_school}}</span>
                <span class="span-right">{{user.c_qualification}}</span>
              </li>
              <li>
                <el-button type="warning" plain class="personal-type">{{user.c_excity}} - 暂不考虑</el-button>
              </li>
              <li>
                <el-row>
                  <el-col :span="6">
                    <div class="grid-content">
                      <div class="personal-num">0</div>
                      <div class="personal-title">沟通过</div>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="grid-content">
                      <div class="personal-num">0</div>
                      <div class="personal-title">已投递</div>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="grid-content">
                      <div class="personal-num">0</div>
                      <div class="personal-title">面试</div>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="grid-content">
                      <div class="personal-num">0</div>
                      <div class="personal-title">感兴趣</div>
                    </div>
                  </el-col>
                </el-row>
              </li>
            </ul>
          </div>
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
          <el-drawer title="开通会员" :visible.sync="drawer">
          </el-drawer>
          <annex-panel style="margin-top: 20px"></annex-panel>
          <div class="history-panel">
            <el-button plain class="history-btn">
              <li class="big-num">0</li>
              <li>对我感兴趣</li>
            </el-button>
            <el-button plain class="history-btn">
              <li class="big-num">0</li>
              <li>看过我</li>
            </el-button>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 导入PostItem模块
import PostItem from "../../components/apply-system/post/PostItem";
// 导入AnnexPanel模块
import AnnexPanel from "../../components/apply-system/profile/AnnexPanel";
export default {
  name: "profile",
  components: {AnnexPanel, PostItem},
  data() {
    return {
      research: '',
      activeName: 'first',
      drawer: false,
      editAvatarDialog: false,
      imageUrl: '',
      posts: [
        {
          index: 1,
          name: 'Java开发工程师',
          salary: '20K-30K',
          experience: '5-10年',
          degree: '硕士',
          address: '上海黄浦区',
          company_name: '腾讯',
          company_type: '互联网',
          company_state: '已上市',
          company_employees: '10000人',
          logo: require('../../assets/img/company/huawei.jpg'),
          items: ['标签一', '标签二', '标签三', '标签四', '标签五'],
          welfare: '员工旅游，带薪年假，定期体检，通讯补贴，交通补助...'
        },
        {
          index: 2,
          name: 'Java开发工程师',
          salary: '20K-30K',
          experience: '5-10年',
          degree: '硕士',
          address: '上海黄浦区',
          company_name: '腾讯',
          company_type: '互联网',
          company_state: '已上市',
          company_employees: '10000人',
          logo: require('../../assets/img/company/huawei.jpg'),
          items: ['标签一', '标签二', '标签三', '标签四', '标签五'],
          welfare: '员工旅游，带薪年假，定期体检，通讯补贴，交通补助...'
        },
        {
          index: 3,
          name: 'Java开发工程师',
          salary: '20K-30K',
          experience: '5-10年',
          degree: '硕士',
          address: '上海黄浦区',
          company_name: '腾讯',
          company_type: '互联网',
          company_state: '已上市',
          company_employees: '10000人',
          logo: require('../../assets/img/company/huawei.jpg'),
          items: ['标签一', '标签二', '标签三', '标签四', '标签五'],
          welfare: '员工旅游，带薪年假，定期体检，通讯补贴，交通补助...'
        }
      ],
      user: {
        c_id: "1",
        c_qualification: '硕士',
        c_excity: '深圳',
        c_school: '华中科技大学',
        name: '马小超',
        age: 23,
        avatar: require("../../assets/img/avatar/avatar02.png")
      }
    }
  },
  methods: {
    editInfo() {
      this.$router.push({
        path: '/index/apply_edit',
        query: {
          c_id: this.user.c_id,
          name: this.user.name
        }
      })
    },
    mouseOver() {
      const dom = document.getElementsByClassName("occupy");
      dom[0].style.opacity = 1;
    },
    mouseOut() {
      const dom = document.getElementsByClassName("occupy");
      dom[0].style.opacity = 0;
    },
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
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/apply-system/profile.css";
</style>
