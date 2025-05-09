<template>
  <div>
    {{ name }} - {{ age }} - {{ message }}
  </div>
</template>

<script>
export default {
  inject: ['name', 'age',"message"]
}

</script>