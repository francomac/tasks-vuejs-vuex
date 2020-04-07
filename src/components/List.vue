<template>
  <div class="row">
    <div class="col-8 mx-auto">
      <b-list-group v-bind:key="item.id" v-for="item in items">
        <ListItem v-bind:data="item"></ListItem>
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
  }
};
</script>

<style scoped>
</style>
