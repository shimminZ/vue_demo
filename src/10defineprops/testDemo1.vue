<template>
  <div>
    <p>{{ props.helloModel.special }}</p>
    <button @click="clickChangeSpecialValue">点击</button>
  </div>
  
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  helloModel: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['update:helloModel'])
const clickChangeSpecialValue = () => {
  emit('update:helloModel', {
    ...props.helloModel,
    special: '爱学习'
  })
}




</script>