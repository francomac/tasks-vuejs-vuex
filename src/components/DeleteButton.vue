<template>
  <b-button @click="$emit('del-todo')" variant="danger">Button</b-button>
</template>

<script>
export default {
  name: "DeleteButton",

    data() {
      return {
        id: String
      }
    }
};
</script>

<style scoped>
img {
  display: block;
  margin: 0 auto;
  width: 50px;
  height: 50px;
  background-color: red;
  color: seashell;
}
</style>