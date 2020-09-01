<template>
  <div class="main">
    <Header />
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/common/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>
<style>
* {
  margin: 0px;
}
.main {
  background-color: rgba(var(--b3f, 250, 250, 250), 1);
}
.main-content {
  width: 935px;
  margin: 0 auto;
  padding-top: 30px;
}
</style>
