<template>
  <div class="wapper">
    <h2>hello</h2>
    <router-view></router-view>
    <!-- <div class="tabbar" >
      <router-link v-for="route in routes" :key="route.path" class="bar-item" :class="{ active: $route.path === route.path }" :to="route.path">
        {{ route.title }}
      </router-link>
    </div> -->
    <TabBar></TabBar>
  </div>
</template>

<script setup>
import TabBar from './components/tabbar/TabBar.vue';

</script>

<style lang="less" scoped>

.wapper {
  padding-bottom: 60px; // 留出底部导航栏的高度
}

.bar-item {
  flex: 1;
  text-align: center;
  color: #333;
  text-decoration: none;
}

.active {
  color: red;
}

</style>