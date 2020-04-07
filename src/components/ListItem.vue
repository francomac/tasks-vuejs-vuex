<template>
  <b-list-group-item button>{{data.title}}</b-list-group-item>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    data: {
      id: String,
      title: String
    }
  }
};
</script>

<style scoped>
</style>
