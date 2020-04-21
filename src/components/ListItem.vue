<template>
  <b-list-group-item button >
    {{data.title}}
    <deleteButton v-on:del-todo="$emit('del-todo', data.id)"></deleteButton>
  </b-list-group-item>
</template>

<script>
import DeleteButton from "@/components/DeleteButton.vue";
export default {
  name: "ListItem",
  props: {
    data: {
      id: String,
      title: String
    }
  },
  components: {
    DeleteButton
  }
};
</script>

<style scoped>
</style>
