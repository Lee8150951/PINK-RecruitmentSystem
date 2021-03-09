<template>
  <div class="list-main">
    <main-title>
      <i class="el-icon-document-copy"></i> 管理 Manage
      <div class="feature-bar">
        <el-button type="success" class="feature-btn" @click="addVisible = true">
          <i class="el-icon-plus"></i>新增
        </el-button>
      </div>
    </main-title>
    <div class="list-col">
      <el-table :data="tableData" style="width: 100%" :default-sort = "{prop: 'date', order: 'descending'}">
        <el-table-column prop="id" label="ID" width="100"></el-table-column>
        <el-table-column prop="name" label="姓名" width="110"></el-table-column>
        <el-table-column prop="ehr_position" label="职位" width="180"></el-table-column>
        <el-table-column prop="phone" label="电话" width="180"></el-table-column>
        <el-table-column prop="ehr_applyaccount" label="可发布岗位" sortable width="130"></el-table-column>
        <el-table-column prop="ehr_currentaccount" label="已发布岗位" sortable width="130"></el-table-column>
        <el-table-column prop="created_time" label="创建日期" sortable width="180"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="detailClick(scope.row)" type="text" size="small">详情</el-button>
            <el-button @click="deleteClick(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="page-peddle">
        <el-pagination :page-size="8" :pager-count="7" layout="prev, pager, next" :total="200"></el-pagination>
      </div>
    </div>
    <el-dialog title="新增HR" :visible.sync="addVisible">
      <el-form :model="form">
        <el-row>
          <el-col :span="12" class="left-form">
            <div class="input-li">
              <el-row>
                <el-col :span="4" class="input-name">姓名：</el-col>
                <el-col :span="20" class="input-col">
                  <el-input v-model="form.name" placeholder="请输入内容"></el-input>
                </el-col>
              </el-row>
            </div>
            <div class="input-li">
              <el-row>
                <el-col :span="4" class="input-name">电话：</el-col>
                <el-col :span="20" class="input-col">
                  <el-input v-model="form.phone" placeholder="请输入内容"></el-input>
                </el-col>
              </el-row>
            </div>
            <div class="input-li">
              <el-row>
                <el-col :span="4" class="input-name">密码：</el-col>
                <el-col :span="20" class="input-col">
                  <el-input v-model="form.password" placeholder="请输入内容" show-password></el-input>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="12" class="right-form">
            <div class="input-li">
              <el-row>
                <el-col :span="5" class="input-name">性别：</el-col>
                <el-col :span="19" class="input-col">
                  <el-select v-model="form.sex" placeholder="请选择" class="select-input">
                    <el-option label="男" value="0"></el-option>
                    <el-option label="女" value="1"></el-option>
                  </el-select>
                </el-col>
              </el-row>
            </div>
            <div class="input-li">
              <el-row>
                <el-col :span="5" class="input-name">岗位：</el-col>
                <el-col :span="19" class="input-col">
                  <el-input v-model="form.ehr_position" placeholder="请输入内容" show-password></el-input>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
        <div class="sub-col">
          <el-button type="primary" @click="submit"><i class="el-icon-plus"></i>新建</el-button>
        </div>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import MainTitle from "../../components/company/body/MainTitle";
export default {
  name: "list",
  components: {MainTitle},
  data() {
    return {
      addVisible: false,
      form: {
        id: '',
        name: '',
        phone: '',
        password: '',
        sex: '',
        ehr_position: ''
      },
      tableData: [
        {
          id: 100001,
          name: '马小超',
          phone: '15174638394',
          email: '736528394@qq.com',
          created_time: '2020-09-20',
          ehr_applyaccount: '18',
          ehr_currentaccount: '10',
          ehr_position: 'Java高级工程师'
        },
        {
          id: 100002,
          name: '张三',
          phone: '15174638394',
          email: '736528394@qq.com',
          created_time: '2020-10-20',
          ehr_applyaccount: '40',
          ehr_currentaccount: '23',
          ehr_position: 'Java高级工程师'
        },
        {
          id: 100003,
          name: '李四',
          phone: '15174638394',
          email: '736528394@qq.com',
          created_time: '2019-09-20',
          ehr_applyaccount: '10',
          ehr_currentaccount: '9',
          ehr_position: 'Java高级工程师'
        },
        {
          id: 100004,
          name: '王二',
          phone: '15174638394',
          email: '736528394@qq.com',
          created_time: '2016-02-14',
          ehr_applyaccount: '24',
          ehr_currentaccount: '12',
          ehr_position: 'Java高级工程师'
        },
        {
          id: 100005,
          name: '马小超',
          phone: '15174638394',
          email: '736528394@qq.com',
          created_time: '2020-09-20',
          ehr_applyaccount: '18',
          ehr_currentaccount: '10',
          ehr_position: 'Java高级工程师'
        },
        {
          id: 100006,
          name: '马小超',
          phone: '15174638394',
          email: '736528394@qq.com',
          created_time: '2020-09-20',
          ehr_applyaccount: '18',
          ehr_currentaccount: '10',
          ehr_position: 'Java高级工程师'
        },
        {
          id: 100007,
          name: '马小超',
          phone: '15174638394',
          email: '736528394@qq.com',
          created_time: '2020-09-20',
          ehr_applyaccount: '18',
          ehr_currentaccount: '10',
          ehr_position: 'Java高级工程师'
        },
        {
          id: 100008,
          name: '马小超',
          phone: '15174638394',
          email: '736528394@qq.com',
          created_time: '2020-09-20',
          ehr_applyaccount: '18',
          ehr_currentaccount: '10',
          ehr_position: 'Java高级工程师'
        }
      ]
    }
  },
  methods: {
    detailClick(row) {
      this.$router.push({
        path: '/company/hr_detail',
        query: {
          id: row.id,
          phone: row.phone,
          name: row.name
        }
      })
    },
    deleteClick(row) {
      console.log(row);
    },
    submit() {
      console.log(this.form)
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/company/list.css";
</style>
