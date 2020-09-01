import axios from "axios";

const state = {
  usersInfo: [],
};
const getters = {
  usersInfo: (state) => state.usersInfo,
};

const mutations = {
  setUsersInfo(state, payload) {
    console.log(payload.data.usersInfo, "payload");
    state.usersInfo = payload.data.usersInfo;
  },
};

const actions = {
  async getUsers(context) {
    const endPoint = "getUsers";
    const res = await axios.get(endPoint);
    context.commit("setUsersInfo", res);
  },
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
