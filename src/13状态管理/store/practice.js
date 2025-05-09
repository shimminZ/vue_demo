import vuex from 'vuex'

const store = vuex.createStore({
  state() {
    return {
      carCount: 100,
      shopName: '',
      price: 0,
      shopList: [],
    }
  },
  mutations: {
    addCarCount(state, payload) {
      state.carCount = state.carCount + payload
    },
    updateShopData(state, payload) {
      state.shopName = payload.shopName
      state.price = payload.price
    }
  }
})

export default store