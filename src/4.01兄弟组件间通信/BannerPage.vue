<template>
  <div class="banner">接受消息组件: {{ store.message }}</div>
</template>

<script setup>
import { useMyStore } from './store'
const store = useMyStore()

// 如果你想监听 message 的变化，可以用 watch
import { watch } from 'vue'

watch(() => store.message, (newVal) => {
  if (newVal) {
    console.log('组件B收到了新消息：', newVal)
  }
})
</script>

<style scoped>
.banner {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  font-size: 20px;
}

</style>