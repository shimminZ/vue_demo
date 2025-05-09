<template>
  <div class="tabs"> 
    <div v-for="(item,index) in tabs" :key="item" @click="changeTab(item,index)" class="item" >
      <span :class="{active: currentTabIndex === index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControll',
  data() {
    return {
      currentTabIndex: 0,
    };
  },
  props: {
    tabs: {
      type: Array,
      required: true,
    },
  },
  methods: {
    changeTab(tab,index) {
      this.currentTabIndex = index;
      this.$emit('tabClick', index);
    },
  },
};
</script>

<style scoped>
.tabs {
  display: flex;
  justify-content: space-around;
  background-color: #f0f0f0;
  padding: 10px;
}

.item {
  flex: 1;
  text-align:  center;
}

.active {
  color: tomato;
  border-bottom: 1px solid red;

}
</style>