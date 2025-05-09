import Vuex from 'vuex'
import sport from '../modules/sport'
import life from '../modules/life'

const store = Vuex.createStore({
  modules: {
    sport: sport,
    life: life
  }

})

export default store