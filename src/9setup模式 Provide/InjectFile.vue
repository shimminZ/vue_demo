<template>
  <div>{{ name }}</div>
</template>

<script>
import { inject,onMounted } from 'vue';
export default {
  setup() {

    onMounted(() => {
      console.log('setup mounted');
    });
    const name = inject('name');
    return { name };
  }
};
</script>