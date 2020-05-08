import axios from "axios";

const state = {
  notes: [],
  onEditMode: false,
};
const getters = {
  allNotes: (state) => state.notes,
  onEditMode: (state) => state.onEditMode,
};
const actions = {
  setEditMode({ commit }) {
    commit("setEditMode");
  },

  async fetchNotes({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=20"
    );

    commit("setNotes", response.data);
  },

  async addNote({ commit }, newNote) {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      newNote
    );

    commit("addNote", response.data);
  },

  async deleteNote({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

    commit("deleteNote", id);
  },

  async filterNotes({ commit }, filter) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${filter}`
    );

    commit("setNotes", response.data);
  },

  async updateNote({ commit }, updatedNote) {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${updatedNote.id}`,
      updatedNote
    );

    commit("updateNote", response.data);
  },
};
const mutations = {
  setEditMode: (state) => (state.onEditMode = !state.onEditMode),

  setNotes: (state, notes) => (state.notes = notes),

  addNote: (state, note) => state.notes.unshift(note),

  deleteNote: (state, id) =>
    (state.notes = state.notes.filter((note) => note.id !== id)),

  updateNote: (state, updatedNote) => {
    const index = state.notes.findIndex((note) => note.id === updatedNote.id);

    if (index !== -1) {
      state.notes.splice(index, 1, updatedNote);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
