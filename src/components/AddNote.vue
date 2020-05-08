import { mapActions } from 'vuex';
<template>
  <div>
    <b-form v-on:submit.prevent="submitNote">
      <b-form-input type="text" v-model="title" placeholder="Ingresar dato..." />
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      title: ""
    };
  },
  name: "AddNote",
  computed: mapGetters(["onEditMode"]),
  methods: {
    ...mapActions(["addNote"]),
    submitNote() {
      if (!this.onEditMode) {
        const newNote = {
          id: uuidv4(),
          title: this.title,
          completed: false
        };

        // add new element to state
        this.addNote(newNote);

        this.title = "";
      } else {
        this.$emit("update-note", this.title);
      }
    }
  },
  created() {}
};
</script>

<style scoped>
</style>