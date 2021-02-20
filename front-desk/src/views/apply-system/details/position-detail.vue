<template>
  <div class="position-detail-body">
    <el-row></el-row>
    <el-row class="header">
      <el-col :span="16">
        <div class="grid-content">
          <div class="p-basic">
            <span class="p-name">前端开发实习生</span>
            <span class="p-salary">350-700元/天</span>
          </div>
          <div class="p-info">上海 · 3天/周 · 本科</div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content">
          <el-button type="warning" class="communicate-btn" @click="dialogFormVisible = true">立即沟通</el-button>
        </div>
      </el-col>
      <el-dialog title="尹女士" :visible.sync="dialogFormVisible">
        <el-row>
          <el-col :span="16">
            <div class="left-content">
              <el-row>
                <el-col :span="24">
                  <ul class="dialogue-ul">
                    <communicate-li v-for="chat in chats" :key="chat.index" :chat="chat"></communicate-li>
                  </ul>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="enter-box">
                    <el-form ref="form" :model="communication" label-width="80px">
                      <div class="enter-text">
                        <el-input :rows="3" type="textarea" v-model="communication.text"></el-input>
                      </div>
                      <el-button @click="onSubmit" size="mini" type="warning" class="communicate-sub">发送</el-button>
                    </el-form>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="right-content">
              <div class="top-tip">使用微信APP</div>
              <div class="bottom-tip">沟通更便利!</div>
              <img src="../../../assets/img/QR/code.jpg" alt="qr-code" class="qr-code">
              <div class="bottom-tip">微信扫码使用</div>
            </div>
          </el-col>
        </el-row>
      </el-dialog>
    </el-row>
    <el-row class="p-main">
      <el-col :span="16">
        <div class="left-main-content">
          <el-row>
            <el-col :span="24">
              <div class="grid-content">
                <el-row>
                  <el-col :span="2">
                    <div class="grid-content">
                      <img src="../../../assets/img/avatar/avatar01.png" alt="avatar" class="p-avatar">
                    </div>
                  </el-col>
                  <el-col :span="18">
                    <div class="hr-content">
                      <li class="hr-name">马逸超</li>
                      <li class="hr-info">HR·刚刚在线</li>
                    </div>
                  </el-col>
                  <el-col :span="4">
                    <div class="collection-content">
                      <el-button type="text">
                        <i class="el-icon-star-on"></i>收藏
                      </el-button>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
            <el-col :span="24">
              <div class="grid-content"></div>
            </el-col>
            <el-col :span="24">
              <div class="grid-content"></div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="right-main-content">
          右部
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 导入CommunicateLi组件
import CommunicateLi from "../../../components/communicate/CommunicateLi";
export default {
  name: "position-detail",
  components: {CommunicateLi},
  data() {
    return {
      dialogFormVisible: false,
      communication: {
        text: '',
      },
      formLabelWidth: '120px',
      chats: [
        {
          index: 1,
          type: '已发送',
          content: '您好，我对java软件开发实习生很感兴趣，希望和您聊聊，谢谢！'
        },
        {
          index: 2,
          type: '已接受',
          content: '不可能，你太菜了'
        }
      ]
    }
  },
  methods: {
    onSubmit() {
      alert(this.communication.text)
    }
  }
}
</script>

<style scoped>
@import "../../../assets/css/apply-system/position-detail.css";
</style>
