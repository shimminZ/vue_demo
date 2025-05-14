<template>
  <div class="wapper">
    <router-view></router-view>
    <TabBar v-if="userStore.tabBarStatus"></TabBar>
  </div>
</template>

<script setup>
import TabBar from './components/tabbar/TabBar.vue';
import store from './store/index.js';

const userStore = store();

</script>

<style lang="less" scoped>

.wapper {
  // padding-bottom: 60px; // 留出底部导航栏的高度
}

</style>