<template>
  <div>
    <el-header>
      <bread-crumb>
        <el-breadcrumb-item><a href="/admin/manage_company">公司管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>公司列表</el-breadcrumb-item>
      </bread-crumb>
    </el-header>
    <el-main class="main">
      <div>
        <el-header>
          <div class="left-buttons">
            <el-button type="success" icon="el-icon-edit">新增</el-button>
            <el-button type="danger" icon="el-icon-delete">删除</el-button>
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
            <el-table-column prop="name" label="单位名称" width="170"></el-table-column>
            <el-table-column prop="address" label="总部地址" width="250"></el-table-column>
            <el-table-column prop="type" label="企业类型" width="170"></el-table-column>
            <el-table-column prop="post" label="提供岗位" width="170"></el-table-column>
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
  name: "manage_company",
  components: {BreadCrumb},
  data() {
    return {
      tableData: [{
        num: 1001,
        name: '腾讯',
        address: '广东省深圳市南山区腾讯大厦',
        type: '互联网',
        post: 200
      },{
        num: 1002,
        name: '大疆',
        address: '广东省深圳市天空之城',
        type: '科技',
        post: 400
      },{
        num: 1003,
        name: '美林证券',
        address: '美国纽约',
        type: '金融',
        post: 50
      },{
        num: 1004,
        name: '无印良品',
        address: '日本东京都',
        type: '零售',
        post: 200
      },{
        num: 1005,
        name: '万达',
        address: '北京市万达总部大厦',
        type: '地产',
        post: 150
      },{
        num: 1006,
        name: '中国石油',
        address: '北京市',
        type: '能源',
        post: 150
      },{
        num: 1007,
        name: '迈瑞',
        address: '广东省深圳市',
        type: '医疗',
        post: 10
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
    }
  }
}
</script>

<style scoped>
@import "../../../../assets/css/admin/manage_admin/manage_admin.css";
</style>
