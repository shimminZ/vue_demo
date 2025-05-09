<template>
  <div>
    <span>  {{ modelValue}} </span>
    <button @click="tapMmodelValue">点击测试</button>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: 'default value'
    }
  },
  methods: {
    tapMmodelValue() {
      // 通过$emit向父组件传递数据
      console.log('执行了tapMmodelValue方法')
      this.$emit('update:modelValue', '子组件消息')
    }
  }
}
</script>