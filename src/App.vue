<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-2">
          <Logo />  
        </div>
        <div class="col-8">
          <Title :msg=welcome_msg />
        </div>
        <MainNavbar />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title.vue";
import Logo from "@/components/Logo.vue";
import MainNavbar from "@/components/MainNavbar.vue";

export default {
  data() {
    return {
      welcome_msg: 'mi Bloc'
    }
  },
  components: {
    Title,
    Logo,
    MainNavbar
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.border-top-bottom {
  border-top: solid black 1px;
  border-bottom: solid black 1px;
}
</style>
