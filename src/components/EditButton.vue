<template>
  <b-button class="ml-3" @click="$emit('edit-mode')" variant="warning">
    Edit
    <i class="far fa-edit"></i>
  </b-button>
</template>

<script>
export default {
  name: "EditButton",

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