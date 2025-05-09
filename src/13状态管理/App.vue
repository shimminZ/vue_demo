<template>
  <div>
    <h2>状态管理</h2>
    <span>{{ carCount }}</span>

    <div>
      <button @click="addBtn">add测试1</button>
      <button @click="addBtn2">add方法名抽取静态字符串</button>
      <button @click="addAsync">action动作异步add</button>
    </div>

    <div>
      <h2>getter</h2>
      <span>{{ item }}</span>
    </div>

    <div style="border: 1px salmon solid;">
      <h2>状态管理modules测试</h2>
      <span>{{  $store.state.addcount.carNum}}</span>
      <button @click="carModulesNum">add状态管理modules——num</button>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

import { SOME_MUTATION } from "./store/staticChar"

const store = useStore();
const addBtn = () => {
  store.commit('updateCartCount',1);
}

const addBtn2 = () => {
  store.commit(SOME_MUTATION);
}

const addAsync = () => {
  store.dispatch('asyncAddCount', 1);
}

//此处vue的官文档建议要使用computerd来获取store中的数据，否则直接获取值addbtn执行可能没有响应式（cartCount的值可能不会改变）
const carCount = computed(() =>{
  return store.state.cartCount
})

const item = computed(() => {
  return store.getters.getTodoById(2);
});

const carModulesNum = () => {
  console.log("modules ")
  store.commit('addcount/addCarCount', 1);
}

</script>