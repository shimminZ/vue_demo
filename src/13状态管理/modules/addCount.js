const addcount = {
  namespaced: true, // 加上这一行！！
  state() {
    return {
      carNum: 100,
    }
  },
  mutations: {
    // 添加商品到购物车
    addCarCount(state, payload) {
      state.carNum = state.carNum + payload
    },
  },
}
export default addcount