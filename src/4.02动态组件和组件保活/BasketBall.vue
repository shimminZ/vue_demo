<template>
  <div class="banner"> 篮球内容 </div>
</template>

<script >

export default {
  name: 'BasketBall',
  props: {
    hobby: {
      type: String,
      default: 'basketball'
    }
  },
  data() {
    return {
      message: '篮球'
    }
  },
  mounted () {
    console.log('篮球组件已挂载');
  },
  unmounted() {
    console.log('篮球组件已卸载');
  },
}

</script>

<style scoped>

</style>