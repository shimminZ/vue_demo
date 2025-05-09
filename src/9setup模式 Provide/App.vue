

<template>
  <div>
    setup模式：组合模式 （之前没有setup是选项式模式）
    {{ name}}

    <InjectFile></InjectFile>

   <button @click="changeName">改变name</button>

  </div>
</template>

<script >
import { provide, ref, watch } from 'vue';
import InjectFile from './InjectFile.vue';

export default {
  components: {
    InjectFile
  },
  setup() {
     let  name = ref("张三") // ref是一个响应式对象，类似于data中的属性;
     const changeName = () => {
      name.value = "李四"
     }
     provide('name', name);

     watch(name, (newValue, oldValue) => {
      console.log('name changed:', newValue,oldValue);
     });
     
    return {
      name,
      changeName
    }
  }
    
}

</script>