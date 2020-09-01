import Vue from "vue";
import Vuex from "vuex";
import UsersInfo from "./src/store/modules/UsersInfo.js";
import PhotosInfo from "./src/store/modules/PhotosInfo.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    UsersInfo: UsersInfo,
    PhotosInfo: PhotosInfo,
  },
});
