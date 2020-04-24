<template>
  <div>
    <b-form-input v-model="text" placeholder="Ingrese una nota"></b-form-input>
  </div>
</template>

<script>
  export default {
    props: {
        text: String
    // },
    // data() {
    //   return {
    //     text: ''
    //   }
    }
  }
</script>