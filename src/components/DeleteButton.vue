<template>
  <b-button class="ml-3" @click="$emit('del-todo')" variant="danger">
    Delete
    <i class="far fa-trash-alt"></i>
  </b-button>
</template>

<script>
export default {
  name: "DeleteButton",

  data() {
    return {
      id: String
    };
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