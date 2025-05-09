<template>
  <div>
    v-mode测试
    <p>爱好:{{ props.modelValue.hobby }}</p>
    <p>嗜好:{{ props.modelValue.special }}</p>

    <button @click="clickChangeSpecialValue">改变special的值</button>
  </div>
</template>

<script setup>

import { defineProps, defineEmits } from 'vue';
const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])
const clickChangeSpecialValue = ()=>{
  emit('update:modelValue', {
    ...props.modelValue,
    special: '爱学习'
  })
}

</script>