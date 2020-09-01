<template>
  <div>
    <div class="something"></div>
    <div class="layout">
      <div>
        <PhotoCard v-for="(photoInfo, idx) in photoInfo" :key="idx" :photoInfo="photoInfo" />
      </div>
      <div class="sideMenuWrapper">
        <SideMenu />
      </div>
    </div>
  </div>
</template>
<script>
import PhotoCard from "../components/common/PhotoCard.vue";
import SideMenu from "../components/common/SideMenu.vue";
import { mapGetters } from "vuex";
export default {
  name: "home",
  components: {
    PhotoCard,
    SideMenu,
  },
  beforeCreate() {
    this.$store.dispatch("PhotosInfo/getPhotos");
  },
  computed: {
    ...mapGetters({
      photoInfo: "PhotosInfo/photos",
    }),
  },
};
</script>

<style scoped>
.something {
  width: 618px;
  height: 118px;
  background: #fff;
  background: rgba(var(--d87, 255, 255, 255), 1);
  border: 1px solid #dbdbdb;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  border-radius: 3px;
  margin-bottom: 24px;
  margin-top: 48px;
  padding: 16px 0;
}
.layout {
  display: flex;
  flex-direction: row;
}
.sideMenuWrapper {
  position: fixed;
  margin-left: 28px;
  top: 100px;
  right: 230px;
}
</style>