<template>
  <div>
    <el-header>
      <bread-crumb>
        <el-breadcrumb-item><a href="/admin/manage_admin">管理员</a></el-breadcrumb-item>
        <el-breadcrumb-item>人员列表</el-breadcrumb-item>
      </bread-crumb>
    </el-header>
    <el-main class="main">
      <div>
        <el-header>
          <div class="left-buttons">
            <button class="el-button el-button--success" path="/admin/add_admin" @click="addClick($event)">
              <i class="el-icon-edit"></i>
              新增
            </button>
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
            <el-table-column prop="num" label="编号" width="120"></el-table-column>
            <el-table-column prop="name" label="用户名" width="170"></el-table-column>
            <el-table-column label="上次登录时间" width="200">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="apartment" label="部门" width="170"></el-table-column>
            <el-table-column prop="position" label="职位" width="170"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button size="mini" type="warning" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div style="margin-top: 20px">
            <el-button @click="toggleSelection()" class="foot-button">取消选择</el-button>
            <el-pagination small layout="prev, pager, next" :total="50"></el-pagination>
          </div>
        </el-main>
      </div>
    </el-main>
  </div>
</template>

<script>
// 导入面包屑组件
import BreadCrumb from "../../../../components/main/public/BreadCrumb";
export default {
  name: "manage_admin",
  components: {BreadCrumb},
  data() {
    return {
      tableData: [{
        num: 1001,
        date: '2016-05-03',
        name: '马逸超',
        apartment: '市场管理部',
        position: '普通管理员'
      },{
        num: 1002,
        date: '2016-05-03',
        name: '马逸超',
        apartment: '市场管理部',
        position: '普通管理员'
      },{
        num: 1003,
        date: '2016-05-03',
        name: '马逸超',
        apartment: '市场管理部',
        position: '普通管理员'
      },{
        num: 1004,
        date: '2016-05-03',
        name: '马逸超',
        apartment: '市场管理部',
        position: '普通管理员'
      },{
        num: 1005,
        date: '2016-05-03',
        name: '马逸超',
        apartment: '市场管理部',
        position: '普通管理员'
      },{
        num: 1006,
        date: '2016-05-03',
        name: '马逸超',
        apartment: '市场管理部',
        position: '普通管理员'
      },{
        num: 1007,
        date: '2016-05-03',
        name: '马逸超',
        apartment: '市场管理部',
        position: '普通管理员'
      }],
      multipleSelection: []
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
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    addClick(e) {
      let path = e.target.getAttribute("path")
      this.$router.push(path)
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
