<template>
  <div class="location">

    <div class="search">
      <form action="/">
      <van-search
        v-model="value"
        show-action
        shape="round"
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
      </form>
    </div>

    <div class="swith_city" >
        <van-tabs v-model:active="active" color="orange" @click-tab="onClickTab">
          <van-tab v-for = "(value,key) in allCity" :title="value.title"
          :name="key"
          >
          </van-tab>
        </van-tabs>
      </div>
    
    <div class="flow-city">
      <div v-for="(value,key,index) in allCity" :key="index">
        <div v-show="active===key">
          <HotCity :hot-citys="value"></HotCity>
          <CityGroup :cityGroup="value"></CityGroup>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { useRouter, onBeforeRouteLeave } from 'vue-router'
import { getCityAll } from '@/service/modules/city.js'
import { ref } from 'vue'
import store from '@/store'
import useCityStore from '../../../store/modules/city'
import CityGroup from './cpns/CityGroup.vue'
import HotCity from './cpns/HotCity.vue'
import { storeToRefs } from 'pinia'

const active = ref()

const router = useRouter()
function onCancel() {
  router.back()
}

const tabBarStore = store()
// 或者监听返回时自动恢复 tabBar 状态
onBeforeRouteLeave(() => {
  tabBarStore.setTabBarStatus(true)
})

// const cityGroupData = ref()
// getCityAll().then((res) => {
//   cityGroupData.value = res.data
// })

const userCityStore = useCityStore()
userCityStore.fetchAllCityData()
// userCityStore.fetchAllCityData().then(()=>{
//   console.log('网络请求完毕',userCityStore.allCity)
// })
const { allCity } = storeToRefs(userCityStore)

const onClickTab = (value)=> {
  const cityGroup = userCityStore.allCity[value.name]
  console.log(cityGroup)
}


const onSearch = ()=> {

}

</script>

<style lang="less"  scoped> 

.location {

  height: 100vh;
  overflow: hidden; /* 禁止 location 自己滚动 */
  background-color: white; 

  .search {
    --van-search-left-icon-color: orange;
    background: white; /* 需要背景色，不然会透明压住下面内容 */
  }

  .flow-city {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }

}


</style>
