<template>
  <div class="sideWrapper">
    <div class="nameBelt">
      <Icon :height="56" :width="56" :source="'http://placeimg.com/630/400/people'" />
      <div class="userInfo">
        <span>account id</span>
        <span>account name</span>
      </div>
    </div>
    <div class="offers">
      <span>おすすめ</span>
      <span>すべて見る</span>
    </div>
    <div class="cards">
      <OfferCard v-for="(userInfo, idx) in userInfoList" :key="idx" :userInfo="userInfo" />
    </div>
  </div>
</template>
<script>
import Icon from "../common/Icon.vue";
import OfferCard from "../common/OfferCard.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Icon,
    OfferCard,
  },
  computed: {
    ...mapGetters({
      userInfoList: "PhotosInfo/userInfoList",
    }),
  },
  beforeCreate() {
    this.$store.dispatch("PhotosInfo/getOffers");
  },
};
</script>
<style scoped>
.sideWrapper {
  height: 463px;
  width: 293px;
  padding: 15px;
}
.nameBelt {
  display: flex;
  flex-direction: row;
}
.userInfo {
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.userInfo span:nth-child(1) {
  font-weight: bold;
  font-size: 15px;
}
.userInfo span:nth-child(2) {
  font-size: 15px;
  color: darkgray;
}
.offers {
  height: 30px;
  margin-top: 15px;
}
.offers span:nth-child(1) {
  color: darkgray;
  font-weight: bold;
}
.offers span:nth-child(2) {
  float: right;
  font-size: 12px;
  font-weight: bold;
}
.cards {
  margin-top: 25px;
}
</style>