

<template>
  <div>
    setup模式：组合模式 （之前没有setup是选项式模式）
    <br>
    {{ msg }} - {{ count }}
    <button @click="add">add</button>
    <br>

    <div> 姓名: {{ info.name }}</div>
    <div> 年龄: {{ info.age }}</div>
    <div> 爱好: {{ info.hobby }}</div>

    <br>
    <button @click="btnLoading">loading</button>

  </div>
</template>

<script >
import { reactive, readonly, ref } from 'vue';

export default {
  setup() {
    // setup函数是组合式API的入口
    // 1. setup函数的参数
    // props: 组件传入的属性
    // context: 上下文对象，包含attrs, slots, emit等属性
    // 2. setup函数的返回值
    // 返回值会被暴露到模板中，可以直接使用
    let count = ref(0) // ref是一个响应式对象，类似于data中的属性;
    
    const info = reactive({
      name: "zhangsan",
      age: 18,
      hobby: 'wear'
    })

    const readonlyInfo = readonly({name:"zhangsan", age: 18, hobby: 'wear'}) // 只读的响应式对象，不能修改

    const add = () => {
      count.value = count.value + 1
      info.age = info.age + 1
    }
   
    let loading = false
    const btnLoading = () => {
      loading = true
      setTimeout(() => {
        loading = false
      }, 2000);

    }

    return {
      msg: "hello",
      count,
      add,
      info,
      loading,
      btnLoading,
      readonlyInfo
    }
  }
}

</script>