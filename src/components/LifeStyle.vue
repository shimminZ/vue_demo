<template>
  <div>
    生活是一种态度
    <LifeSub :hobby="hobby"></LifeSub>
  </div>
</template>

<script>
import LifeSub from './LifeSub.vue';
export default {
  components:{
    LifeSub
  },
  data() {
    return {
      hobby: "wear"
    }
  }
}
</script>