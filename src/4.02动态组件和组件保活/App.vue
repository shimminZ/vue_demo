<template>
  <div>
    <h1>组件间通信</h1>
    <TabControll :tabs = 'tabs' @tabClick="tabItemClick"></TabControll>
    <keep-alive>
      <component :is="currentComponent" />
    </keep-alive>
    <div>hello</div>

  </div>
</template>

<script>
import TabControll from './TabControll.vue';
import BasketBall from './BasketBall.vue';
import FootBall from './FootBall.vue';
import TaiQiu from './TaiQiu.vue';

export default {
  components: {
    TabControll,
    BasketBall,
    FootBall,
    TaiQiu
  },
  data() {
    return {
      tabs: ["台球", "篮球", "足球"],
      currentComponent: 'TaiQiu',
      components: [
        {
          name: '台球',
          component: TaiQiu
        },
        {
          name: '篮球',
          component: BasketBall
        },
        {
          name: '足球',
          component: FootBall
        }]
    }
  },
  methods: {
    tabItemClick(index) {
      console.log("点击了第" + index + "个tab");
      this.currentComponent = this.components[index].component;
    }
  }
}
</script>