<!-- Detail.vue -->
<template>
  <div>
    <button @click="goBack">返回</button>
  </div>
</template>

<script setup>
import { useRouter, onBeforeRouteLeave } from 'vue-router'
import store from '@/store'

const router = useRouter()
const tabBarStore = store()

function goBack() {
  router.back()
}

// 或者监听返回时自动恢复 tabBar 状态
onBeforeRouteLeave(() => {
  tabBarStore.setTabBarStatus(true)
})
</script>
