<template>
  <div class="test">
    <span>{{ vModel.special }}</span>
    <testDemo1 v-model:helloModel="vModel"></testDemo1>
  </div>
</template>

<script setup> 
import { ref } from 'vue';
import testDemo1 from './testDemo1.vue';

const vModel = ref({
  hobby: "earn money",
  special: "handsome"
})

</script>


<style scoped>
.test {
  border: 1px solid red;
}
</style>