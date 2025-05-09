<template>
  <div>
    <div>路由</div>

    <div>
      <router-link style="margin-right: 10px;" to="/home">首页</router-link>
      <router-link to="/personal">个人中心</router-link>
      <router-link to="/user/:234">用户</router-link>
      <router-link to="/user/:789">用户</router-link>
    </div>

    <!-- 路由组件的展示位置，不需要import。因为在main.js中已经全局注册了routeView组件和routeLink组件 -->
    <router-view />
    
  </div>
</template>

<script setup>
// 自我是镜子阶段中经由镜像认同二形成的一种构造，因而，它是主体变得异化其自身，并将其自身转变成相似者的位置。自我所给予的此种异化，在结构上同偏执狂相类似。这就是为什么拉康写道，自我具有一种偏执狂的结构
</script>

<style scoped>
.router-link-active {
  color: red;
}
</style>