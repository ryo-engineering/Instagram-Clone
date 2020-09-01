<template>
  <div class="offerWrapper">
    <div>
      <Icon :height="32" :width="32" :source="'http://placeimg.com/630/400/people'" />
    </div>
    <div class="userInfo">
      <span>{{ userInfo.account }}</span>
      <span>{{ userInfo.accountName }}</span>
    </div>
    <div class="follow">
      <a>フォローする</a>
    </div>
  </div>
</template>
<script>
import Icon from "../common/Icon.vue";
export default {
  props: {
    userInfo: {
      type: Object,
      required: true,
    },
  },
  components: {
    Icon,
  },
};
</script>
<style scoped>
.offerWrapper {
  height: 48px;
  display: flex;
  flex-direction: row;
}
.offerWrapper div:nth-child(1) {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3px;
}
.userInfo {
  display: flex;
  flex-direction: column;
  width: 90px;
  margin-left: 15px;
  justify-content: center;
}
.userInfo span {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.userInfo span:nth-child(1) {
  font-weight: bold;
  font-size: 13px;
}
.userInfo span:nth-child(2) {
  font-size: 15px;
  color: darkgray;
}
.follow {
  display: flex;
  align-items: center;
  margin-left: 70px;
}
.follow a {
  font-size: 12px;
  font-weight: bold;
  color: #0095f6;
}
</style>