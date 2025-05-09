<template>
  <div>
    <h1>父子通信</h1>

    <TabbarControl :datas="datas" :info="info" @tabClick="handleTabClick"></TabbarControl>
    <div>{{ content }}</div>
    
  </div>
</template>

<script>
import TabbarControl from './page/TabbarControl.vue';
export default {
  components: {
    TabbarControl,
  },
  data() {
    return {
      content: "首页",
      datas:[
        { id: 1, name: '首页', icon: 'home' },
        { id: 2, name: '分类', icon: 'category' },
        { id: 3, name: '购物车', icon: 'cart' },
        { id: 4, name: '我的', icon: 'user' },
      ],
      info: {
        name: '父组件',
        age: 18,
      },
    }
  },
  methods: {
    handleTabClick(index) {
      this.content = this.datas[index].name;
      console.log('当前选中的tab索引:', index);
    },
  },
};
</script>