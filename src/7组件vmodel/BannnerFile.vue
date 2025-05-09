<template>
  <div>
    <span>{{ msg }}</span>
    <button @click="tapBanner">点击banner</button>
  </div>
</template>

<script>
export default {
  name: 'BannnerFile',
  props: {
    msg: {
      type: String,
      default: 'Hello World'
    }
  },
  methods: {
    tapBanner() {
      // 通过$emit向父组件传递数据
      console.log('执行了banner组件的tap方法')
      this.$emit('update:msg', '子组件消息')
    }
  }
}
</script>