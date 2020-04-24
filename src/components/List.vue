<template>
  <div class="row">
    <div class="col-12 mx-auto">
      <b-list-group v-bind:key="item.id" v-for="item in items">
        <ListItem v-bind:data="item" v-on:del-todo="deleteItem"></ListItem>
      </b-list-group>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import ListItem from "@/components/ListItem.vue";

export default {
  name: "List",
  data() {
    return {
      items: []
    };
  },
  components: {
    ListItem
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(res => (this.items = res.data))
      .catch(err => console.log(err));
  },
  methods: {
    deleteItem(id) {
      this.items = this.items.filter(todo => todo.id !== id)
    }
  }

};
</script>

<style scoped>
</style>
