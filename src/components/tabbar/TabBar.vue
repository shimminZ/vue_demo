<template>
  <div class="tabbar">
    <div v-for="(item,index) in tabbarData" @click="clickBarItem(item.path,index)" :key="item.path" >
      <div class="bar-item">
        <!-- <img :src="tabIndex === index ? item.activeIcon : item.icon" alt=""> -->
        <img  :src="getAssetURL(item.image)" alt="" v-if="tabIndex !== index">
        <img  :src="getAssetURL(item.imageActive)" alt="" v-else>
        <span :class="{ active: tabIndex == index }">{{ item.text }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAssetURL } from '@/utils/load_asset.js';
import tabbarData from '@/assets/tabbar';

import tabFavor from '@/assets/img/tabbar/tab_favor.png' // 注意 @ 代表 src 目录
import tabActiveFavor from '@/assets/img/tabbar/tab_favor_active.png' // 注意 @ 代表 src 目录

import tabHome from '@/assets/img/tabbar/tab_home.png' // 注意 @ 代表 src 目录
import tabActiveHome from '@/assets/img/tabbar/tab_home_active.png' // 注意 @ 代表 src 目录

import tabOrder from '@/assets/img/tabbar/tab_order.png' // 注意 @ 代表 src 目录
import tabActiveOrder from '@/assets/img/tabbar/tab_order_active.png' // 注意 @ 代表 src 目录

const router = useRouter();
const tabIndex = ref(0);

const routes = [
  {
    path: '/home',
    title: '首页',
    icon: tabHome,
    activeIcon: tabActiveHome
  },
  {
    path: '/favor',
    title: '偏好',
    icon: tabFavor,
    activeIcon: tabActiveFavor
  },
  {
    path: '/profile',
    title: '个人档案',
    icon: tabOrder,
    activeIcon: tabActiveOrder
  }
] 

const clickBarItem = (path,index) => {
  // 使用 router.push() 方法进行路由跳转
  console.log(router,path)
  router.push(path);
  tabIndex.value = index
}

</script>

<style scoped>
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  background-color: #eee;
  padding: 10px 0;
  border-top: 1px solid #ccc;
  z-index: 100; 
  /* height: 50px;
  line-height: 50px; */
}

.active {
  color: orange;
}

.bar-item {
  flex: 1;
  text-align: center;
  color: #333;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.bar-item img {
  width: 24px;
}
 
.bar-item span {
  margin-top: 10px;
}


</style>