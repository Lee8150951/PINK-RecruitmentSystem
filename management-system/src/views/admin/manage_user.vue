<template>
  <div class="main-body">
    <div class="header-title">
      <i class="el-icon-document-copy"></i>
      用户管理 User
    </div>
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
        <el-dialog title="用户详情" :visible.sync="detailVisible">
          <el-form :model="detail">
            <el-form-item label="ID：" :label-width="formLabelWidth">
              <el-input v-model="detail.id" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="姓名：" :label-width="formLabelWidth">
              <el-input v-model="detail.name" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="性别：" :label-width="formLabelWidth">
              <el-input v-model="detail.sex" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="求职者类别：" :label-width="formLabelWidth">
              <el-input v-model="detail.type" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="年龄：" :label-width="formLabelWidth">
              <el-input v-model="detail.age" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="电话：" :label-width="formLabelWidth">
              <el-input v-model="detail.phone" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="邮箱：" :label-width="formLabelWidth">
              <el-input v-model="detail.email" :disabled="true"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="detailVisible = false">关 闭</el-button>
          </div>
        </el-dialog>
      </div>
    </el-main>
  </div>
</template>

<script>
export default {
  name: "manage_user",
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
@import "../../assets/css/admin/admin_public.css";
@import "../../assets/css/admin/manage_admin.css";
</style>
