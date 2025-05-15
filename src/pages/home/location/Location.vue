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

      <div class="swith_city">
        <van-tabs v-model:active="active" color="orange">
          <van-tab v-for = "(value,key,index) in userCityStore.allCity" :title="value.title ">
            <div class="flow-city">
            <CityGroup :cityGroup="value"></CityGroup>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    
    
  </div>
</template>

<script setup>
import { useRouter, onBeforeRouteLeave } from 'vue-router'
import { getCityAll } from '@/service/modules/city.js'
import { ref } from 'vue'
import store from '@/store'
// import useCityStore from '@store/modules/city.js'
import useCityStore from '../../../store/modules/city'
import CityGroup from './cpns/CityGroup.vue'

const router = useRouter()
const tabBarStore = store()
const cityGroupData = ref()
const userCityStore = useCityStore()

function onCancel() {
  router.back()
}

userCityStore.fetchAllCityData().then(()=>{
  console.log('网络请求完毕',userCityStore.allCity)
})

getCityAll().then((res) => {
  cityGroupData.value = res.data
})

// 或者监听返回时自动恢复 tabBar 状态
onBeforeRouteLeave(() => {
  tabBarStore.setTabBarStatus(true)
})

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
