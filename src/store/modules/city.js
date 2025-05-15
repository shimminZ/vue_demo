import { defineStore } from "pinia";
import { getCityAll } from "@/service/modules/city";

const useCityStore = defineStore('useCityStore',{
  state: ()=>{
    return {
      allCity:{},
      currentCityName:''
    }
  },
  actions:{
    async fetchAllCityData() {
      const res = await getCityAll()
      this.allCity = res.data
    }
  }
})

export default useCityStore