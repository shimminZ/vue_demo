const sport = {
  namespaced: true,
  state:() => {
    return {
      sportCont:0,
      currentActName: '',
      actNames:[],  
      todos: [
        { id: 1, text: '吃饭', done: true },
        { id: 2, text: '睡觉', done: false },
        { id: 3, text: '打游戏', done: true }
      ]
    }
  },
  
  mutations: {
    run(state, payload){
      console.log("run === ")
      state.sportCont = state.sportCont + 1
      state.currentActName = payload
    },
    basketBall(state, payload){
      state.sportCont = state.sportCont + 1
      state.currentActName = payload
    },
    goHiking(state, payload){
      state.sportCont = state.sportCont + 1
      state.currentActName = payload
    },
    swim(state, payload){
      state.sportCont = state.sportCont + 1
      state.currentActName = payload
    },
  },
  actions: {
    swimMing(context, payload){
      return new Promise((resolve) => {
         setTimeout(() => {
           context.commit('swim', payload)
           resolve('游泳完成')
         }, 1000);
       })
     }
  },
  getters: {
    // 高阶函数写法
    sportGoalTime: (state) => (id)=>{
      return state.todos.find(item => item.id === id)
    }
  }

}

export default sport