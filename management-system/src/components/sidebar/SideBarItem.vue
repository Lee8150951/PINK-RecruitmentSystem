<template>
  <el-menu-item path="/admin_home" @click="itemClick">
    <slot name="item-icon"></slot>
    <slot name="item-title"></slot>
  </el-menu-item>
</template>

<script>
export default {
  name: "SideBarItem",
  props: {
    path: String
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>

</style>
