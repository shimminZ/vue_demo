<template>
  <div>
    <h1>这是banner</h1>
    <div @click="tapBanner">内容</div>
  </div>
</template>

<script>
export default {
  methods: {
    tapBanner() {
      // 通过$emit向父组件传递数据
      console.log('执行了banner组件的tap方法')
    }
  }
}
</script>