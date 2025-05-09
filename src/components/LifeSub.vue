<template>
  <div>
    {{ '唯一能做的就是去行动,想象的困难无法克服，具体的问题才有结局途径' }}
  </div>
  <div>爱好: {{ hobby }}</div>
  <form >
    <label for="name" >姓名</label>
    <input id="name" v-model="inputText" type="text">
  </form>
  输入的姓名值: {{ inputText }}
</template>


<script>

export default {
  props: {
    hobby: String
  },
  data() {
    return {
      inputText: ""
    }
  }
}
</script>