<template>
  <div>
    <h2>组件上的v-model</h2>

    <BannnerFile  :msg="msg" @update:msg="receiveMessage"></BannnerFile>

    <!-- v-model,组件默值modelValue -->
    <BannerModelValue v-model="messageModelValue"></BannerModelValue>

    <!-- v-model,组件定义参数helloMsg -->
    <BannnerModelDemo v-model:helloMsg="message"></BannnerModelDemo>


  </div>
</template>

<script>

import BannnerFile from './BannnerFile.vue';
import BannnerModelDemo from './BannnerModelDemo.vue';
import BannerModelValue from './BannerModelValue.vue';

export default {
  components: {
    BannnerFile,
    BannnerModelDemo,
    BannerModelValue
  },
  data() {
    return {
      name: "小明",
      age: 18,
      msg: "这是一条关于banner的消息（非v-model案例，正常子组件传值给父组件）",
      message: "正常的组件的v-model案例，自传props自定义",
      messageModelValue: "modelValue的v-model测试案例",
    }
  },
  methods: {
    receiveMessage(paload) {
      console.log('接收到了子组件传递过来的消息', paload)
      this.msg = paload
    }
  }
}

</script>