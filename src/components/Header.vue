<template>
    <div class="header">
        <div class="header-body">{{ msg }}</div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: null
  }
}
</script>

<style scoped>
.header-body{
    background-color: #FFB700;
    color: white;
    font-weight: bold;
}
</style>
