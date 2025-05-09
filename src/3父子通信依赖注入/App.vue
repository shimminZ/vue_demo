<template>
  <div>
    <h1>父子通信</h1>
    <button @click="handleNoticeClick">给子组件传值</button>
    <HomeList></HomeList> 
  </div>
</template>

<script>
import HomeList from './page/HomeList.vue';
import { computed } from 'vue';
export default {
  components: {
    HomeList,
  },
  data() {
    return {
      bannerMessage: '原始 Banner 内容',
    }
  },
  methods: {
    handleNoticeClick() {
      this.bannerMessage = '子组件触发更新 Banner 🎉'
    }
  },
  provide() {
    return {
      age:18,
      name: "涨涨涨",
      // computed为了让mesage值变成响应式，箭头函数改变this的指向，是的this.bannerMessage 等于点击按钮改变的值
      message: computed(() => this.bannerMessage),
    }
  }
};
</script>