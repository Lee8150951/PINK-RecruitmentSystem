<template>
  <div class="release-body">
    <page-title>
      发布 Release
    </page-title>
    <div class="main-body">
      <div class="feature-cols">
        <span>
          <el-button type="success" size="small" class="feature-btn" @click="formVisible = true">
            <i class="el-icon-plus"></i>新增
          </el-button>
        </span>
        <span>
          <el-button type="danger" size="small" class="feature-btn">
            <i class="el-icon-close"></i>删除
          </el-button>
        </span>
      </div>
      <el-dialog title="发布新岗位" :visible.sync="formVisible">
        <el-row>
          <el-form ref="form" :model="new_position" label-width="80px">
            <el-col :span="12">
              <div class="left-sub-content">
                <el-form-item label="岗位名称">
                  <el-input v-model="new_position.r_name"></el-input>
                </el-form-item>
                <el-form-item label="薪资范围">
                  <el-select v-model="new_position.r_salary" placeholder="请选择薪资范围" class="select">
                    <el-option label="3K以下" value="3K以下"></el-option>
                    <el-option label="3-5K" value="3-5K"></el-option>
                    <el-option label="5-10K" value="5-10K"></el-option>
                    <el-option label="10-15K" value="10-15K"></el-option>
                    <el-option label="15-20K" value="15-20K"></el-option>
                    <el-option label="20-30K" value="20-30K"></el-option>
                    <el-option label="30-50K" value="30-50K"></el-option>
                    <el-option label="50K以上" value="50K以上"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="岗位地址">
                  <el-cascader v-model="new_position.r_address" :options="cities" :props="{expandTrigger: 'hover'}" placeholder="请选择岗位地址" class="cascader-col"></el-cascader>
                </el-form-item>
                <el-form-item label="工作经验">
                  <el-select v-model="new_position.r_experience" placeholder="请选择工作经验" class="select">
                    <el-option label="在校生" value="在校生"></el-option>
                    <el-option label="应届生" value="应届生"></el-option>
                    <el-option label="1年以内" value="1年以内"></el-option>
                    <el-option label="1-3年" value="1-3年"></el-option>
                    <el-option label="3-5年" value="3-5年"></el-option>
                    <el-option label="5-10年" value="5-10年"></el-option>
                    <el-option label="10年以上" value="10年以上"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="学历要求">
                  <el-select v-model="new_position.r_education" placeholder="请选择学历要求" class="select">
                    <el-option label="初中及以下" value="初中及以下"></el-option>
                    <el-option label="中专/技校" value="中专/技校"></el-option>
                    <el-option label="高中" value="高中"></el-option>
                    <el-option label="大专" value="大专"></el-option>
                    <el-option label="本科" value="本科"></el-option>
                    <el-option label="硕士" value="硕士"></el-option>
                    <el-option label="博士" value="博士"></el-option>
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="right-sub-content">
                <el-form-item label="岗位福利">
                  <el-input type="textarea" v-model="new_position.r_tag" :autosize="{ minRows: 3, maxRows: 3}"></el-input>
                </el-form-item>
                <el-form-item label="其他介绍">
                  <el-input type="textarea" v-model="new_position.r_introduction" :autosize="{ minRows: 3, maxRows: 3}"></el-input>
                </el-form-item>
                <el-form-item label="创建时间">
                  <el-date-picker v-model="new_position.created_time" type="date" placeholder="选择日期" disabled="true" class="date-picker"></el-date-picker>
                </el-form-item>
              </div>
            </el-col>
          </el-form>
        </el-row>
        <el-dialog width="30%" title="提示" :visible.sync="tipsVisible" append-to-body>
          <div class="tips">确定修改么?</div>
          <div class="tips-btn">
            <el-button @click="tipsVisible = false">取 消</el-button>
            <el-button type="primary" @click="tipsVisible = true">确定</el-button>
          </div>
        </el-dialog>
        <div slot="footer" class="dialog-footer">
          <el-button @click="formVisible = false">取 消</el-button>
          <el-button type="primary" @click="tipsVisible = true">确定</el-button>
        </div>
      </el-dialog>
      <div class="info-table">
        <el-table ref="multipleTable" :data="table_data"
                  tooltip-effect="dark" style="width: 100%"
                  highlight-current-row :default-sort = "{prop: 'r_name', order: 'descending'}">
          <el-table-column type="selection" width="60"/>
          <el-table-column prop="r_id" label="ID" width="80"/>
          <el-table-column prop="r_name" label="岗位名称" width="120" sortable/>
          <el-table-column prop="r_address" label="所在城市" width="120" sortable/>
          <el-table-column prop="r_experience" label="工作经验" width="120" sortable/>
          <el-table-column prop="r_education" label="学历要求" width="120" sortable/>
          <el-table-column prop="created_time" label="发布时间" width="150" sortable/>
          <el-table-column prop="r_introduction" label="备注" width="210" sortable/>
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
// 导入城市信息
import {provinceAndCityDataPlus} from 'element-china-area-data'
// 导入PageTitle模块
import PageTitle from "../../components/hire-system/title/PageTitle";
export default {
  name: "release",
  components: {PageTitle},
  data() {
    return {
      // 中国城市推荐List
      cities: provinceAndCityDataPlus,
      formVisible: false,
      tipsVisible: false,
      // 新建岗位
      new_position: {
        r_name: "",
        r_salary: "",
        r_address: "",
        r_experience: "",
        r_education: "",
        r_introduction: "",
        r_tag: "",
        created_time: ""
      },
      // 列表岗位信息
      table_data: [
        {
          ehrid: "1",
          r_id: "100001",
          r_name: "java工程师",
          r_salary: "8K-10K",
          r_address: "深圳",
          r_experience: "3年工作经验",
          r_education: "硕士",
          r_introduction: "需要丰富的开发经验",
          r_tag: "996",
          created_time: "2021-02-03"
        },
        {
          ehrid: "1",
          r_id: "100002",
          r_name: "java工程师",
          r_salary: "8K-10K",
          r_address: "深圳",
          r_experience: "3年工作经验",
          r_education: "硕士",
          r_introduction: "需要丰富的开发经验",
          r_tag: "996",
          created_time: "2021-02-03"
        },
        {
          ehrid: "1",
          r_id: "100003",
          r_name: "java工程师",
          r_salary: "8K-10K",
          r_address: "深圳",
          r_experience: "3年工作经验",
          r_education: "硕士",
          r_introduction: "需要丰富的开发经验",
          r_tag: "996",
          created_time: "2021-02-03"
        },
        {
          ehrid: "1",
          r_id: "100004",
          r_name: "java工程师",
          r_salary: "8K-10K",
          r_address: "深圳",
          r_experience: "3年工作经验",
          r_education: "硕士",
          r_introduction: "需要丰富的开发经验",
          r_tag: "996",
          created_time: "2021-02-03"
        },
        {
          ehrid: "1",
          r_id: "100004",
          r_name: "java工程师",
          r_salary: "8K-10K",
          r_address: "深圳",
          r_experience: "3年工作经验",
          r_education: "硕士",
          r_introduction: "需要丰富的开发经验",
          r_tag: "996",
          created_time: "2021-02-03"
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
  },
  mounted() {
    const date = new Date();
    const myDate = date.toLocaleDateString();
    this.new_position.created_time = myDate
  }
}
</script>

<style scoped>
@import "../../assets/css/hire-system/table-common.css";
</style>
