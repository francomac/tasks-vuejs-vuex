import { mapActions } from 'vuex';
<template>
  <div class="row">
    <p class="mt-1 col-2">Filter Notes:</p>
    <b-form-select
      v-model="selected"
      :options="options"
      class="mb-3 col-4"
      @change="filterNotes($event)"
    >
      <!-- This slot appears above the options from 'options' prop -->
      <template v-slot:first>
        <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
      </template>

      <!-- These options will appear after the ones from 'options' prop -->
      <b-form-select-option value="0">Nothing here for you</b-form-select-option>
    </b-form-select>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FilterNotes",
  data() {
    return {
      selected: null,
      options: [
        { value: "200", text: "200" },
        { value: "100", text: "100" },
        { value: "50", text: "50" },
        { value: "20", text: "20" },
        { value: "10", text: "10" },
        { value: "5", text: "5" }
      ]
    };
  },
  methods: {
    ...mapActions(["filterNotes"])
  }
};
</script>

<style scoped>
</style>