<template>
  <div>
    <el-header>
      <bread-crumb>
        <el-breadcrumb-item><a href="/admin/manage_user">用户管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
      </bread-crumb>
    </el-header>
    <el-main class="main">
      <div>
        <el-header>
          <div class="left-buttons">
            <button class="el-button el-button--danger" @click="deleteClick($event)">
              <i class="el-icon-delete"></i>
              删除
            </button>
          </div>
          <div class="right-research">
            <el-input placeholder="请输入内容" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </el-header>
        <el-main>
          <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange" stripe>
            <el-table-column type="selection" width="70"></el-table-column>
            <el-table-column prop="id" label="编号" width="120"></el-table-column>
            <el-table-column prop="name" label="姓名" width="200"></el-table-column>
            <el-table-column prop="sex" label="性别" width="200"></el-table-column>
            <el-table-column prop="type" label="类别" width="200"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button size="mini" type="primary" @click="handleDetail(scope.$index, scope.row)">详情</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div style="margin-top: 20px">
            <el-button @click="toggleSelection()" class="foot-button">取消选择</el-button>
            <el-pagination small layout="prev, pager, next" :total="50"></el-pagination>
          </div>
        </el-main>
        <el-dialog title="编辑管理员" :visible.sync="detailVisible">
          <el-form :model="detail">
            <el-form-item label="ID：" :label-width="formLabelWidth">
              <el-input v-model="detail.id" autocomplete="off" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="姓名：" :label-width="formLabelWidth">
              <el-input v-model="detail.name" autocomplete="off" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="性别：" :label-width="formLabelWidth">
              <el-input v-model="detail.sex" autocomplete="off" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="求职者类别：" :label-width="formLabelWidth">
              <el-input v-model="detail.type" autocomplete="off" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="年龄：" :label-width="formLabelWidth">
              <el-input v-model="detail.age" autocomplete="off" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="电话：" :label-width="formLabelWidth">
              <el-input v-model="detail.phone" autocomplete="off" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="邮箱：" :label-width="formLabelWidth">
              <el-input v-model="detail.email" autocomplete="off" :disabled="true"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="detailVisible = false">取 消</el-button>
            <el-button type="primary" @click="detailVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </div>
    </el-main>
  </div>
</template>

<script>
// 导入面包屑组件
import BreadCrumb from "../../../../components/main/public/BreadCrumb";
export default {
  name: "manage_user",
  components: {BreadCrumb},
  data() {
    return {
      tableData: [{
        id: 1001,
        name: '马逸超',
        sex: '男',
        type: '实习'
      },{
        id: 1002,
        name: '马逸超',
        sex: '男',
        type: '实习'
      },{
        id: 1003,
        name: '马逸超',
        sex: '男',
        type: '实习'
      },{
        id: 1004,
        name: '马逸超',
        sex: '男',
        type: '实习'
      },{
        id: 1005,
        name: '马逸超',
        sex: '男',
        type: '实习'
      },{
        id: 1006,
        name: '马逸超',
        sex: '男',
        type: '实习'
      },{
        id: 1007,
        name: '马逸超',
        sex: '男',
        type: '实习'
      }],
      multipleSelection: [],
      detailVisible: false,
      detail: {
        id: '',
        name: '',
        sex: '',
        type: '',
        age: '',
        phone: '',
        email: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleDetail(index, row) {
      this.detailVisible = true;
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    deleteClick(e) {
      console.log(e)
    }
  }
}
</script>

<style scoped>
@import "../../../../assets/css/admin/manage_admin/admin_public.css";
@import "../../../../assets/css/admin/manage_admin/manage_admin.css";
</style>
