<template>
  <div>
    <h2>user，动态获取id </h2>
    <span>{{ $route.params }}</span>
  </div>
</template>

<script setup>

import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import { watch } from 'vue'

const searchPath = useRoute()

console.log("searchPath", searchPath.params)

// 监听路由变化
onBeforeRouteUpdate(async (to, from) => {
  console.log("离开路由了")
  console.log("to", to)
  console.log("from", from)
})

watch(() => searchPath.params.id, (newId, oldId) => {
  console.log("路由参数变化了")
  console.log("newId", newId)
  console.log("oldId", oldId)
  // 这里可以进行一些操作，比如重新请求数据等
})

</script>