<template>
  <div class="row">
    <div class="col-12">
      <FilterNotes />
      <div class="row mb-2">
        <AddNote v-if="!onEditMode" class="col-12" />
      </div>
      <div class="row mx-auto">
        <div class="legend col-12 mb-1">
          <span>Double Click to mark as complete</span>
          <span>
            <span class="legend-box incomplete-note"></span> = Incomplete
          </span>
          <span>
            <span class="legend-box complete-note"></span> = Complete
          </span>
        </div>

        <b-list-group
          v-bind:key="item.id"
          v-for="item in allNotes"
          class="col-6"
          @dblclick="onDblClick(item)"
        >
          <ListItem
            v-bind:data="item"
            v-on:del-todo="deleteItem"
            v-bind:class="{'complete-note':item.completed, 'incomplete-note':!item.completed}"
            class="note"
          />
        </b-list-group>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { mapGetters, mapActions } from "vuex";

import AddNote from "@/components/AddNote.vue";
import FilterNotes from "@/components/FilterNotes.vue";
import ListItem from "@/components/ListItem.vue";

export default {
  name: "List",
  computed: mapGetters(["allNotes", "onEditMode"]),
  data() {
    return {
      items: []
    };
  },
  components: {
    FilterNotes,
    AddNote,
    ListItem
  },
  methods: {
    ...mapActions(["fetchNotes", "deleteNote", "updateNote"]),
    deleteItem(id) {
      this.deleteNote(id);
    },
    addNote(newNote) {
      this.items = [newNote, ...this.items];
    },
    onDblClick(note) {
      const newNote = {
        id: note.id,
        completed: !note.completed,
        title: note.title
      };
      this.updateNote(newNote);
    }
  },
  created() {
    this.fetchNotes();
  }
};
</script>

<style scoped>
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}

.notes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.note:hover,
.note:focus {
  opacity: 1;
  box-shadow: none;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}

.legend-box {
  display: inline-block;
  width: 10px;
  height: 10px;
}

.complete-note {
  background: greenyellow;
  color: black;
}

.incomplete-note {
  background: rgb(66, 61, 61);
  color: white;
}
</style>
