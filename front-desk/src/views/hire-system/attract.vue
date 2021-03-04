<template>
  <div class="attract-body">
    <page-title>
      招揽 Attract
    </page-title>
    <div class="main-body">
      <div class="info-table">
        <el-table ref="multipleTable" :data="table_data"
          tooltip-effect="dark" style="width: 100%"
          highlight-current-row :default-sort = "{prop: 'date', order: 'descending'}">
          <el-table-column type="selection" width="60"/>
          <el-table-column prop="id" label="ID" width="100"/>
          <el-table-column prop="name" label="姓名" width="120" sortable/>
          <el-table-column prop="date" label="申请时间" width="150" sortable/>
          <el-table-column prop="school" label="毕业院校" width="160" sortable/>
          <el-table-column prop="degree" label="学历" width="120" sortable/>
          <el-table-column prop="p_id" label="岗位代号" width="130" sortable/>
          <el-table-column prop="position" label="申请岗位" width="130" sortable/>
          <el-table-column fixed="right" label="操作" width="130">
            <template slot-scope="scope">
              <el-button @click="editClick(scope.row)" type="text" size="small">编辑</el-button>
              <el-button @click="deleteClick(scope.row)" type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="table-foot">
        <el-pagination
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../../components/hire-system/title/PageTitle";
export default {
  name: "attract",
  components: {PageTitle},
  data() {
    return {
      table_data: [
        {
          // 申请id
          id: '20101',
          // 申请人姓名
          name: '王大虎',
          // 申请时间
          date: '2020-10-03',
          // 申请人学历
          school: '华中科技大学',
          // 申请人学历
          degree: '硕士',
          // 兴趣岗位
          position: 'Java开发工程师',
          // 岗位代号
          p_id: '10001',
          // 期望薪资
          salary: '20K-30K'
        },
        {
          id: '20102',
          name: '马小超',
          date: '2020-09-03',
          school: '贾利顿大学',
          degree: '本科',
          position: 'Java开发工程师',
          p_id: '10001',
          salary: '30K-40K'
        },
        {
          id: '20103',
          name: '马小超',
          date: '2021-02-02',
          school: '贾利顿大学',
          degree: '本科',
          position: 'Java开发工程师',
          p_id: '10001',
          salary: '30K-40K'
        },
        {
          id: '20104',
          name: '马小超',
          date: '2021-02-02',
          school: '贾利顿大学',
          degree: '本科',
          position: 'Java开发工程师',
          p_id: '10001',
          salary: '30K-40K'
        },
        {
          id: '20105',
          name: '马小超',
          date: '2021-02-02',
          school: '贾利顿大学',
          degree: '本科',
          position: 'Java开发工程师',
          p_id: '10001',
          salary: '30K-40K'
        }
      ]
    }
  },
  methods: {
    editClick(index) {
      console.log(index)
    },
    deleteClick(index) {
      console.log(index)
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/hire-system/table-common.css";
</style>
