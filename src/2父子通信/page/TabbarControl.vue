<template>
  <div class="tabbarContent" >
    <span 
      class="item" 
      :class="{ active: currentTabIndex === index }" 
      v-for="(item, index) in datas" 
      :key="item.id"  
      @click="handleTabClick(index)"
    >
      {{ item.name }}
    </span>

    <div>父组件传递的值 {{ info.name }}  {{ info.age }}</div>
  </div>
</template>

<script>

export default {
  name: 'TabbarControl',
  data() {
    return {
      currentTabIndex: 0,
    };
  },
  props: {
    datas: {
      type: Array,
      default: () => [],
    },
    info: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    handleTabClick(index) {
      this.currentTabIndex = index;
      console.log('当前选中的tab索引:', index);
      this.$emit('tabClick', index);
    },
  },
}
</script>

<style scoped>
.tabbarContent {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.active {
  color: red;
}
/* .item {
  flex: 1;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  border: 1px solid red;
}
.active-indicator {
  background-color: salmon;
} */
</style>