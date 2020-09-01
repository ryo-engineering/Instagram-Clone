import axios from "axios";

const state = {
  photos: [],
  userInfoList: [],
};

const getters = {
  photos: (state) => state.photos,
  userInfoList: (state) => state.userInfoList,
};

const mutations = {
  setPhotosInfo(state, payload) {
    const data = payload.data.photos;
    if (data) {
      state.photos = data;
    } else {
      state.photos = [];
    }
  },
  setUserInfoList(state, payload) {
    const data = payload.data.userInfoList;
    if (data) {
      state.userInfoList = data;
    } else {
      state.userInfoList = [];
    }
  },
  setPhoto(state, payload) {
    const newArr = []
    newArr.push(payload)
    state.photos.forEach((item) => {
      newArr.push(item)
    })
    state.photos = []
    state.photos = newArr
  },
};

const actions = {
  async getPhotos(context) {
    const endPoint = "getPhotos";
    const res = await axios(endPoint);
    context.commit("setPhotosInfo", res);
  },
  async getOffers(context) {
    const endPoint = "getOffers";
    const res = await axios(endPoint);
    context.commit("setUserInfoList", res);
  },
  postPhoto(context, payload) {
    context.commit('setPhoto', payload)
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
