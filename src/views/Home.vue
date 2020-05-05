<template>
  <div class="col-12">
    <h3 class="m-2">{{title}}</h3>
    <TextInput/>
    <List />
  </div>
</template>

<script>
import TextInput from '@/components/TextInput.vue';
import List from "@/components/List";

export default {
  name: 'Home',
  data() {
    return {
      title: 'Notas'
    }
  },
  components: {
    TextInput,
    List
  }
}
</script>
