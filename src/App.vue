<template>
  <div id="app">
    <HerbList />
  </div>
</template>

<script>
import HerbList from "./components/HerbList.vue";

export default {
  name: "App",
  components: {
    HerbList,
  },
};
</script>

<style>
body {
  background-color: #222;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
