import vuex from 'vuex'
import { SOME_MUTATION } from './staticChar.js'
import addcount from '../modules/addCount.js'
const store = vuex.createStore({
  state() {
    return {
      // 购物车数据
      cartList: [],
      // 购物车商品数量
      cartCount: 100,
      // 购物车商品总价
      cartTotalPrice: 0,

      todos: [
        { id: 1, text: '吃饭', done: true },
        { id: 2, text: '睡觉', done: false },
        { id: 3, text: '打游戏', done: true }
      ]
    }
  },
  mutations: {
    // 添加商品到购物车
    addToCart(state, payload) {
      state.cartList.push(payload)
    },
    // 更新购物车商品数量
    updateCartCount(state, payload) {
      console.log("updateCartCount = ",state,payload)
      state.cartCount = state.cartCount + payload
    },
    [SOME_MUTATION] (state) {
      state.cartCount = 888
    }
  },
  
  getters: {
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id);
    }
  },

  actions: {
    asyncAddCount(context, payload) {
      setTimeout(() => {
        context.commit('updateCartCount', payload)
      }, 1000);
    },
  },
  
  modules: {
    // 购物车模块
    addcount: addcount
  }

})

export default store