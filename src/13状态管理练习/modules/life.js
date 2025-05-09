const life = {
  namespaced: true,
  state: ()=> {
    return {
      planName: ""
    }
  },
  mutations: {
    read(state, payload) {
      state.planName = payload
    },
    clickBall(state, payload) {
      state.planName = payload
    },
    goTravel(state, payload) {
      state.planName = payload
    }
  },
  
}

export default life 