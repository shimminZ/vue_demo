import { defineStore } from 'pinia'
const store =  defineStore("tabBarStatus",{
  state: () => {
    return {
      tabBarStatus: true,
    }
  },
  actions: {
    setTabBarStatus(status) {
      this.tabBarStatus = status
    },
    
  }
})
export default store