<template>
  <div class="noti" @click="notifyBanner">发送消息组件</div>
</template>

<script setup>
import { useMyStore } from './store';

const store = useMyStore();

const notifyBanner = () => {
  console.log('通知信息');
  store.message = '来自组件NotiPage的消息';
}
</script>

<style scoped>
.noti {
  background-color: tomato;
  height: 50px;
}
</style>
