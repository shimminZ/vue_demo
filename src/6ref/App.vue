<template>
  <div>
    <h1 ref="refTest">ref使用</h1>
    <button @click="tapBtn">点击</button>
    <Banner ref="banner"></Banner>
  </div>
</template>

<script>
import Banner from './Banner.vue';

export default {
  components: {
    Banner
  },
  name: 'App',
  methods: {
    tapBtn() {
      // 获取dom 
      console.log('点击了按钮',this.$refs.refTest);
      //打印banner组件对象，是一个proxy对象
      console.log('banner——ref',this.$refs.banner)
      // 木末芙蓉花 山中发红儿
    }
  }
  
}
</script>