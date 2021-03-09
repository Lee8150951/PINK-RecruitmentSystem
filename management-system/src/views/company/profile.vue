<template>
  <div class="profile-main">
    <main-title>
      <i class="el-icon-set-up"></i> 公司 Profile
    </main-title>
    <div class="profile-body">
      <el-row>
        <el-col :span="8">
          <div class="left-content">
            <div class="lt-content">
              <div class="company-logo-col">
                <span class="occupy" @mouseover="mouseOver" @mouseout="mouseOut" @click="editAvatarDialog = true">修改</span>
                <img :src="company.e_logo" alt="" class="logo-img">
              </div>
              <li class="company-name">{{company.e_name}}</li>
            </div>
            <div class="lb-content">
              <ul>
                <li class="info-tips">
                  <el-row>
                    <el-col :span="6" class="tip-title">公司法人:</el-col>
                    <el-col :span="18" class="tip-content">{{company.e_legalrepresentative}}</el-col>
                  </el-row>
                </li>
                <li class="info-tips">
                  <el-row>
                    <el-col :span="6" class="tip-title">企业类型:</el-col>
                    <el-col :span="18" class="tip-content">{{company.e_type}}</el-col>
                  </el-row>
                </li>
                <li class="info-tips">
                  <el-row>
                    <el-col :span="6" class="tip-title">经营范围:</el-col>
                    <el-col :span="18" class="tip-content">{{company.e_businessscope}}</el-col>
                  </el-row>
                </li>
                <li class="info-tips">
                  <el-row>
                    <el-col :span="6" class="tip-title">总部地址:</el-col>
                    <el-col :span="18" class="tip-content">{{company.e_address}}</el-col>
                  </el-row>
                </li>
              </ul>
            </div>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="right-content">
            <div class="right-title">信息表单 Info-Form</div>
            <el-form ref="form" :model="form" label-width="80px">
              <el-row>
                <el-col :span="12">
                  <div class="left-form-content">
                    <el-form-item label="公司ID">
                      <el-input v-model="form.e_id" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="公司名称">
                      <el-input v-model="form.e_name"></el-input>
                    </el-form-item>
                    <el-form-item label="公司法人">
                      <el-input v-model="form.e_legalrepresentative"></el-input>
                    </el-form-item>
                    <el-form-item label="注册资本">
                      <el-input placeholder="请输入内容" v-model="form.e_registeredcapital">
                        <template slot="append">万元</template>
                      </el-input>
                    </el-form-item>
                    <el-form-item label="注册时间">
                      <el-date-picker v-model="form.e_establishtime" type="date" placeholder="选择日期" style="width: 100%"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="企业类型">
                      <el-select v-model="form.e_type" placeholder="请选择企业类型" style="width: 100%">
                        <el-option label="无限责任公司" value="无限责任公司"></el-option>
                        <el-option label="有限责任公司" value="有限责任公司"></el-option>
                        <el-option label="两合公司" value="两合公司"></el-option>
                        <el-option label="股份有限公司" value="股份有限公司"></el-option>
                        <el-option label="股份两合公司" value="股份两合公司"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="企业状态">
                      <el-select v-model="form.e_operationstatus" placeholder="请选择企业状态" style="width: 100%">
                        <el-option label="在业" value="在业"></el-option>
                        <el-option label="停业" value="停业"></el-option>
                        <el-option label="存续" value="存续"></el-option>
                        <el-option label="吊销" value="吊销"></el-option>
                        <el-option label="清算" value="清算"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="信用代码">
                      <el-input v-model="form.e_unifiedcreditcode"></el-input>
                    </el-form-item>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="right-form-content">
                    <el-form-item label="人数规模">
                      <el-input placeholder="请输入内容" v-model="form.e_size">
                        <template slot="append">人</template>
                      </el-input>
                    </el-form-item>
                    <el-form-item label="公司许可">
                      <el-upload class="upload-demo" action="" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="1">
                        <el-button size="small" type="primary" class="upload-btn">点击上传</el-button>
                      </el-upload>
                    </el-form-item>
                    <el-form-item label="经营范围">
                      <el-select v-model="form.e_businessscope" placeholder="请选择经营范围" style="width: 100%">
                        <el-option label="农林牧渔业" value="农林牧渔业"></el-option>
                        <el-option label="制造业" value="制造业"></el-option>
                        <el-option label="能源业" value="能源业"></el-option>
                        <el-option label="交通业" value="交通业"></el-option>
                        <el-option label="服务业" value="服务业"></el-option>
                        <el-option label="IT业" value="IT业"></el-option>
                        <el-option label="零售业" value="零售业"></el-option>
                        <el-option label="地产业" value="地产业"></el-option>
                        <el-option label="餐饮业" value="餐饮业"></el-option>
                        <el-option label="其他" value="其他"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="注册地址">
                      <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 2}" v-model="form.e_registeredaddress"></el-input>
                    </el-form-item>
                    <el-form-item label="总部地址">
                      <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 2}" v-model="form.e_address"></el-input>
                    </el-form-item>
                    <el-form-item label="公司简介">
                      <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 3}" v-model="form.e_introduction"></el-input>
                    </el-form-item>
                    <el-button type="success" class="edit-btn">修改</el-button>
                  </div>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </el-col>
      </el-row>
      <el-dialog title="修改公司图标" :visible.sync="editAvatarDialog" width="30%">
        <div class="upload-div">
          <el-upload action="" :before-upload="beforeAvatarUpload" list-type="picture-card" :on-remove="avatarRemove" :limit="1">
            <i class="el-icon-plus"></i>
          </el-upload>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="editAvatarDialog = false">取 消</el-button>
          <el-button type="primary" @click="editAvatarDialog = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import MainTitle from "../../components/company/body/MainTitle";
  export default {
    name: "profile",
    components: {MainTitle},
    data() {
      return {
        editAvatarDialog: false,
        form: {
          e_id: '100001',
          e_name: '腾讯(深圳)科技有限公司',
          e_introduction: '',
          e_legalrepresentative: '马化腾',
          e_registeredcapital: '3000',
          e_establishtime: '2007-07-09',
          e_type: '有限责任公司',
          e_operationstatus: '清算',
          e_registeredaddress: '',
          e_unifiedcreditcode: 'M202076625',
          e_size: '2000',
          e_businessscope: 'IT业',
          e_licenseimg: '',
          e_address: '中国广东省深圳市南山区滨海大道腾讯大厦',
          is_delete: '',
          upload_userid: '',
          created_time: '',
          e_logo: require('../../assets/img/company/tencent.jpg')
        },
        company: {
          e_id: '100001',
          e_name: '腾讯(深圳)科技有限公司',
          e_introduction: '',
          e_legalrepresentative: '马化腾',
          e_registeredcapital: '3000',
          e_establishtime: '2007-07-09',
          e_type: '有限责任公司',
          e_operationstatus: '清算',
          e_registeredaddress: '',
          e_unifiedcreditcode: 'M202076625',
          e_size: '',
          e_businessscope: 'IT业',
          e_licenseimg: '',
          e_address: '中国广东省深圳市南山区滨海大道腾讯大厦',
          is_delete: '',
          upload_userid: '',
          created_time: '',
          e_logo: require('../../assets/img/company/tencent.jpg')
        }
      }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
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
      avatarRemove(file, fileList) {
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
@import "../../assets/css/company/profile.css";
</style>
