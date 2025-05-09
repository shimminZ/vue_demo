<template>
  <div>
    <div class="nav">
      <router-link to="/home">首页</router-link>
      <router-link to="/about">关于</router-link> 
      <router-link to="/user">用户</router-link>
    </div>
    <h2>子路由</h2>
    <router-view></router-view>
  </div>
</template>

<script setup>

</script>

<style>
.nav {
  padding-right: 10px;
}
</style>