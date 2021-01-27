<template>
  <div class="main">
    <header class="header">
      <nav-menu></nav-menu>
    </header>
    <section class="main">
      <nav-bar></nav-bar>
      <section class="body">
        <footer class="footer">footer</footer>
      </section>
    </section>
  </div>
</template>

<script>
// NavMenu组件
import NavMenu from "../../components/navmenu/NavMenu";
// NavBar组件
import NavBar from "../../components/navbar/NavBar";
export default {
  name: "main",
  components: {NavBar, NavMenu},
  data() {
    return {
      activeIndex: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/system/main.css";
</style>
