<template>
  <div>
    <el-header>
      <bread-crumb>
        <el-breadcrumb-item><a href="/admin/manage_admin">管理员</a></el-breadcrumb-item>
        <el-breadcrumb-item><a href="/admin/manage_admin">人员列表</a></el-breadcrumb-item>
        <el-breadcrumb-item>添加管理员</el-breadcrumb-item>
      </bread-crumb>
    </el-header>
    <el-main class="main">
      <el-form ref="form" :model="form" label-width="80px">
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="活动名称">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light">
              <el-form-item label="活动名称">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </el-main>
  </div>
</template>

<script>
// 导入面包屑组件
import BreadCrumb from "../../../../components/main/public/BreadCrumb";
export default {
  name: "add_admin",
  components: {BreadCrumb},
  data() {
    return {
      form: {
        name: ''
      }
    }
  }
}
</script>

<style scoped>
@import "../../../../assets/css/admin/manage_admin/admin_public.css";
@import "../../../../assets/css/admin/manage_admin/admin_form.css";
</style>
