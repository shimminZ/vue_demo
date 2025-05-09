<template>
  <div>
  详情
  <p>姓名：{{ name }}</p>
  <p>身高：{{ data.height }}</p>
  <p>年龄：{{ data.age }}</p>
  <button @click="changeNameVaule">改变name</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'; 

const props = defineProps(
  {
    name: {
      type: String,
      default: "小张"
    },
    data: {
      type: Object,
      default: () => {
        return {
          height: "188",
          age: 18
        }
      }
    }
  }
)
console.log(props)

const emit = defineEmits(['changeName'])

const changeNameVaule = () => {
  emit('changeName', '装大逼')
}

</script>