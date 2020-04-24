<template>
  <b-button class="ml-3" @click="$emit('edit-todo')" variant="warning">Edit</b-button>
</template>

<script>
export default {
  name: "EditButton",

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