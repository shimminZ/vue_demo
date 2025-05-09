
<template>
  <div>
    <h2>状态管理 pinia </h2>
    <div>
      <span>数量: {{ store.count }}</span>
      <span>姓名: {{ store.name }}</span>
      <p>--------</p>
      <span>数量: {{ count }}</span>
      <span>姓名: {{ name }}</span>  
      <p>--------</p>
      <span>数量: {{ count1 }}</span>
      <span>姓名: {{ name1 }}</span>
      <p>--------</p>
      <span>年龄: {{ store.age }}</span>
    </div>
    <button @click="addNum">add数量</button>
    <button @click="changeName">更新姓名</button>
    <button @click="changeAge">改变年龄</button>
  </div>
</template>


<script setup>
import useStore from './modules/store'
import { storeToRefs } from 'pinia'

const store = useStore()

//如果单独结构出来，不具有响应式的属性，需要使用toRefs
const { count, name } = store
const { count: count1, name: name1 } = storeToRefs(store)


const addNum = () => {
  store.addNum(1)
}
const changeName = () => {
  store.changeName('小明1')
}
const changeAge = () => {
  store.changeAge(18)
}

store.$subscribe((mutation, state) => {
  console.log("mutation:", mutation) // { type: 'action', storeId: 'counter' }
  console.log('Mutation type:', mutation.type) // 'direct' or 'action'
  console.log('Changed store key:', mutation.storeId) // 'counter'
  console.log('New state:', state.count)

  // Optional: Save to localStorage, sync to backend, etc.
  localStorage.setItem('counter', JSON.stringify(state.count))
})

</script>