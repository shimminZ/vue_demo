<template>
  <div>
    <h2>登录-注册</h2>
    <button @click="login">登录</button>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const login = () => {
    // 登录
    console.log('登录');
    localStorage.setItem('token','123456')
    router.push('/home');
  }
</script>