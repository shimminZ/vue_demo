<template>
  <div>
    <h2>这是一个导航</h2>

    <div class="nav-content">
      <div class="left">
        <slot name="left"></slot>
      </div>

      <div class="center">
        <slot name="center"></slot>
      </div>

      <div class="right">
        <slot :rightText="rightText" name="right">
          <span>{{ rightText }}</span>
        </slot>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      rightText: '导航栏',
    };
  },
}
</script>

<style scoped>
.nav-content {
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  background-color: #f0f0f0;
}
.left {
  flex: 0.2;
  background-color: yellow;
}
.center {
  flex: 0.8;
  text-align: center;
  background-color: lightblue;
}
.right {
  flex: 0.2;
  background-color: lightgreen;
}
</style>