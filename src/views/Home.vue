<template>
  <div class="col-12">
    <h3 class="m-2">{{title}}</h3>
    <List />
  </div>
</template>

<script>
import List from "@/components/List"
export default {
  name: 'Home',
  data() {
    return {
      title: 'Notas'
    }
  },
  components: {
    List
  }
}
</script>
