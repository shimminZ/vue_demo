<template>
<div>
 <NavBar>
  <template #left>
    <span>导航左</span>
  </template>
  <template #center>导航</template>
  <template #right="props">
    <a href="" >{{ props.rightText}}</a>
  </template>
 </NavBar>

 <!-- <NavBar>
  <a href="">google一下</a>
 </NavBar>

 <NavBar>
  <img src="@/image/icon.jpg" alt="">
 </NavBar> -->
</div>
</template>

<script>
// 快乐原则，拉康说的快乐'原则'，指的是快乐原则下讨论的快乐，而不是日常所指的快乐感觉。（佛洛依德提出的： 快乐原则的唯一目的是获得快乐，避免不快乐）
// 快乐原则与享乐。快乐是一种对内稳切恒定状态的保护，而'享乐'则不断威胁要对其进行破坏并使其受到创伤，拉康这里快乐原则和享乐是对立的
// 快乐原则有点类似超我 

import NavBar from './page/NavBar.vue';
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      title: '导航栏',
    };
  },
  mounted() {
    console.log('NavBar mounted');
  },
};
</script>