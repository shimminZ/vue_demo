<template>
  <div>台球内容</div>
</template>

<script>
export default {
  name: 'TaiQiu',
  data() {
    return {
      message: '台球内容'
    }
  },
  created() {
    console.log('台球组件已创建,做网络请求');
  },
  mounted() {
    console.log('台球组件已挂载');
  },
  unmounted() {
    console.log('台球组件已卸载');
  },
}
</script>