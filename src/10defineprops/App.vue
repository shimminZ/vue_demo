<template>
  <div>
    <p>使用defineProps来定义props</p>
    <InfoDetail :name="name" :data="data" @changeName="tapChangeName"></InfoDetail>
    <InfoDetail2 v-model="vmodel"></InfoDetail2>
    <p>{{ vmodel.special }}</p>

    <div>
      <testDemo></testDemo>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InfoDetail from './InfoDetail.vue';
import InfoDetail2 from './InfoDetail2.vue';
import testDemo from './testDemo.vue';
const data = {
  height: "188",
  age: 18
}
let dicObj = {hobby: "earn money", special: "handsome"}
const vmodel = ref(dicObj)

let name = ref("装逼")
const tapChangeName = (paload) => {
  name.value = paload
  console.log('子组件传递过来的name', paload)
}

</script>