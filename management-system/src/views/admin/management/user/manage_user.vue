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
            <button class="el-button el-button--success" path="/admin/add_user" @click="addClick($event)">
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
            <el-table-column prop="name" label="姓名" width="170"></el-table-column>>
            <el-table-column prop="expect" label="期望岗位" width="170"></el-table-column>
            <el-table-column prop="graduation" label="毕业院校" width="170"></el-table-column>
            <el-table-column prop="city" label="期望城市" width="170"></el-table-column>
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
  name: "manage_user",
  components: {BreadCrumb},
  data() {
    return {
      tableData: [{
        num: 1001,
        name: '马逸超',
        expect: '后端开发',
        graduation: '华中科技大学',
        city: '深圳'
      },{
        num: 1002,
        name: '李奕山',
        expect: '前端开发',
        graduation: '华中科技大学',
        city: '上海'
      },{
        num: 1003,
        name: '马化腾',
        expect: '市场管理',
        graduation: '深圳大学',
        city: '深圳'
      },{
        num: 1004,
        name: '马云',
        expect: '营销',
        graduation: '杭州电子科技大学',
        city: '杭州'
      },{
        num: 1005,
        name: '李彦宏',
        expect: '广告设计',
        graduation: '北京大学',
        city: '北京'
      },{
        num: 1006,
        name: '汪滔',
        expect: '财会',
        graduation: '香港科技大学',
        city: '深圳'
      },{
        num: 1007,
        name: '王健林',
        expect: '审计',
        graduation: '无',
        city: '成都'
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
