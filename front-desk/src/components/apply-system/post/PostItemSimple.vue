<template>
  <el-col :span="24">
    <div class="item-content" @mouseout="mouseOut" @mouseover="mouseOver" @click="turnTo">
      <el-row>
        <el-col :span="12">
          <div class="left-item-content">
            <h4>{{post.name}}[{{post.city}}]</h4>
            <p>
              <span class="salary">{{post.salary}}</span>
              <span class="p-info-detail">{{post.workTime}}</span>
              <span class="p-info-detail">{{post.degree}}</span>
            </p>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="right-item-content">
            <span class="p-boss">{{post.hr}}</span>
            <span class="p-job">{{post.job}}</span>
          </div>
        </el-col>
      </el-row>
    </div>
  </el-col>
</template>

<script>
export default {
  name: "PostItemSimple",
  props: {
    post: {
      type: Object
    },
    index: Number
  },
  methods: {
    mouseOver() {
      const dom = document.getElementsByClassName("item-content");
      dom[this.index].style.backgroundColor = "#e8e8e8"
    },
    mouseOut() {
      const dom = document.getElementsByClassName("item-content");
      dom[this.index].style.backgroundColor = "#ffffff"
    },
    turnTo() {
      this.$router.push({
        path: '/index/position_detail',
        query: {
          index: this.post.index,
          name: this.post.name
        }
      })
    }
  }
}
</script>

<style scoped>
@import "../../../assets/css/apply-system/components/postitemsimple.css";
</style>
