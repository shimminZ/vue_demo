<template>
  <div >足球内容</div>
</template>

<script >
export default {
  name: 'FootBall',
  data() {
    return {
      message: '足球内容'
    }
  },
  created() {
    console.log('足球组件已创建,做网络请求');
  },
  mounted() {
    console.log('足球组件已挂载');
  },
  unmounted() {
    console.log('足球组件已卸载');
  },
}
</script>

<style scoped>
</style>
