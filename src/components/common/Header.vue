<template>
  <div class="header-wrapper">
    <div class="navigation">
      <span @click="gotoDetail" id="title">Instagram</span>
      <div class="input-wrapper">
        <input
          v-if="showSearchWord"
          @focus="showSearchWord = false"
          class="search placeholder"
          type="text"
          :placeholder="searchWord"
        />
        <input v-else v-model="searchWord" @blur="showSearchWord = true" class="search" type="text" />
      </div>
      <div v-if="!showSearchWord" class="suggest">
        <SuggestCards :usersInfo="usersInfo" />
      </div>
      <ul class="icon-wrapper">
        <li @click="showModal = true" class="icon">投稿する</li>
      </ul>
    </div>
    <Modal v-if="showModal" @postPhoto="addNewPhoto" @closeModal="showModal = false" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import SuggestCards from "./SuggestCards.vue";
import Modal from "../common/Modal.vue";

export default {
  components: {
    SuggestCards,
    Modal,
  },
  data() {
    return {
      searchWord: "",
      showSearchWord: false,
      showModal: false,
    };
  },
  computed: {
    ...mapGetters({
      usersInfo: "UsersInfo/usersInfo",
    }),
  },
  beforeCreate() {
    this.$store.dispatch("UsersInfo/getUsers");
  },
  methods: {
    gotoDetail() {
      this.$router.push({ path: "detail" });
    },
    addNewPhoto(payload) {
      this.$store.dispatch('PhotosInfo/postPhoto', payload)
      this.showModal = false
    }
  },
};
</script>
<style scoped>
.header-wrapper {
  height: 54px;
  width: 100%;
  border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  background-color: rgba(var(--d87, 255, 255, 255), 1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  margin-bottom: 30px;
}
.navigation {
  width: 935px;
  margin: auto;
  display: flex;
}
.navigation span {
  height: 54px;
  line-height: 54px;
  width: 360px;
}
.navigation div {
  display: inline-block;
  height: 54px;
  line-height: 54px;
  width: 218px;
}
.search {
  padding: 5px;
  height: 28px;
  width: 100%;
  border: solid 1px rgba(var(--b6a, 219, 219, 219), 1);
}
.search:focus {
  outline: none;
}
.placeholder {
  text-align: center;
}
.icon-wrapper {
  width: 360px;
  height: 54px;
  line-height: 54px;
}
.input-wrapper {
  position: relative;
}
.suggest {
  position: absolute;
  top: 55px;
  right: 638px;
}
.icon {
  margin-right: 15px;
  float: right;
  list-style: none;
  cursor: pointer;
}
#title {
  cursor: pointer;
  cursor: hand;
}
</style>
