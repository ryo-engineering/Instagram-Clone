<template>
  <div class="wrapper">
    <li v-for="(userInfo, idx) in usersInfo" :key="idx" class="card">
      <div class="card-wrapper">
        <div class="image-icon"></div>
        <div class="account-name-wrapper">
          <div>
            <span>{{ userInfo.accountName }}</span>
          </div>
        </div>
      </div>
    </li>
  </div>
</template>
<script>
export default {
  props: {
    usersInfo: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
.wrapper {
  cursor: pointer;
}
.card-wrapper {
  display: flex;
  flex-direction: row;
}
.card {
  width: 241px;
  height: 61px;
  border: solid 1px rgba(var(--b6a, 219, 219, 219), 1);
  border-radius: 3px;
  box-shadow: 0 0 5px rgba(var(--jb7, 0, 0, 0), 0.0975);
  list-style: none;
}
.image-icon {
  height: 35px;
  width: 35px;
  background-color: blue;
  border-radius: 100px;
  margin-top: 15px;
  margin-left: 5px;
}
.account-name-wrapper {
  font-size: 15px;
  margin-left: 10px;
  height: 100%;
}
.account-name-wrapper div {
  width: 100px;
}
.account-name-wrapper div span {
  text-overflow: ellipsis;
}
</style>
