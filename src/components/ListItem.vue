<template>
  <b-list-group-item button >
    <TextInput v-if="onEditMode" v-bind:text="data.title"></TextInput>
    <p>{{data.title}}</p>
    <editButton v-on:edit-todo="setEditMode"></editButton>
    <deleteButton v-on:del-todo="$emit('del-todo', data.id)"></deleteButton>
  </b-list-group-item>
</template>

<script>
// import DeleteButton from "@/components/DeleteButton.vue";
// import EditButton from "@/components/EditButton.vue";

// This approach to register base components 
// is more effective and clean
import BaseListItem from "../components/BaseListItem";

export default {
  name: "ListItem",
  props: {
    data: {
      id: String,
      title: String
    }
  },
  components: {
    // DeleteButton,
    // EditButton
    ...BaseListItem
  },
  data() {
    return {
      onEditMode: false
    }
  },
    methods: {
    setEditMode() {
      this.onEditMode = !this.onEditMode;
    }
  }
};
</script>

<style scoped>
</style>
