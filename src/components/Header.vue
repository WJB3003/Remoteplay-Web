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
    padding: 5px;
    font-weight: bold;
    margin-bottom: 10px;
}
</style>
