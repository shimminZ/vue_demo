<template>
  <div >
    <span>{{ helloMsg }}</span>
     <button @click="tapModelDemo" >点击子组件</button>
  </div>
</template>

<script>
export default {
  props: {
    helloMsg: {
      type: String,
      default: "hello"
    }
  },
  methods: {
    tapModelDemo() {
      // 通过$emit向父组件传递数据
      console.log("执行了tapModelDemo方法")
      this.$emit("update:helloMsg", "子组件消息")
    }
  }
}
</script>