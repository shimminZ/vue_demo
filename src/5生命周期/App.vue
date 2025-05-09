<template>
  <div>生命周期</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      message: 'Hello Vue!'
    }
  },
  
  beforeCreate() {
    console.log('组件即将创建');
  },
  created() {
    console.log('组件已创建,做网络请求');
  },
  beforeMount() {
    console.log('组件即将挂载，可以获取dom元素');
  },
  mounted() {
    console.log('组件已挂载');
  },
  beforeUpdate() {
    console.log('组件即将更新');
  },


}
</script>