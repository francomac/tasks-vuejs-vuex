<template>
  <b-list-group-item button class="mb-2">
    <AddNote class="col-12" v-if="editModeOn" v-on:update-note="editNote" />

    <p>{{data.title}}</p>

    <editButton v-on:edit-mode="changeEditMode" />

    <deleteButton v-on:del-todo="$emit('del-todo', data.id)" />
  </b-list-group-item>
</template>

<script>
// This approach to register base components
// is more effective and clean
import BaseListItem from "../components/BaseListItem";
import AddNote from "@/components/AddNote.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ListItem",
  computed: mapGetters(["onEditMode"]),
  props: {
    data: {
      id: String,
      title: String,
      completed: Boolean
    }
  },
  components: {
    ...BaseListItem,
    AddNote
  },
  data() {
    return {
      text: "",
      editModeOn: false
    };
  },
  methods: {
    ...mapActions(["setEditMode", "updateNote"]),
    changeEditMode() {
      this.editModeOn = !this.editModeOn; // show text input for this item only
      this.setEditMode(); // change state also
    },
    editNote(newTitle) {
      const newNote = {
        id: this.data.id,
        title: newTitle,
        completed: this.data.completed
      };
      this.updateNote(newNote);
      this.editModeOn = !this.editModeOn; // show text input for this item only
    }
  }
};
</script>

<style scoped>
</style>
