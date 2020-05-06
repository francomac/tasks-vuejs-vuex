<template>
  <div class="mb-2">
    <b-form v-on:submit.prevent="addNote">
      <b-form-input
        type="text"
        v-model="text"
        placeholder="Ingrese una nota"
      ></b-form-input>
    </b-form>
  </div>
</template>

<script>
import {v4 as uuidv4} from "uuid";

export default {
  data() {
    return {
      text: ""
    };
  },
  methods: {
    addNote() {
      const newNote = {
        id: uuidv4(),
        title: this.text,
        complete: false
      };

      // send up to parent
      this.$emit("add-note", newNote);

      this.text = '';
    }
  }
};
</script>