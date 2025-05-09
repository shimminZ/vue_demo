<template>
  <div>
    <h2>个人中心</h2>
    <button @click="logout">退出登录</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const logout = () => {
  // 退出登录
  console.log('退出登录');
  localStorage.removeItem('token');
  router.push('/login');
};
</script>