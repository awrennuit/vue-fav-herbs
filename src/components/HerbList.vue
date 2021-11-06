<template>
  <div class="main-container">
    <div class="card" v-for="herb in herbList" :key="herb.id">
      <h1 class="name">{{ herb.name }}</h1>
      <p class="summary">{{ herb.summary }}</p>
      <button class="btn" @click="viewHerb(herb)">LEARN MORE</button>
    </div>
  </div>
</template>

<script>
import router from "../router";

export default {
  data() {
    return {
      herbList: this.$store.state.herbList,
    };
  },
  methods: {
    viewHerb(herb) {
      this.$store.commit("thisHerb", herb);
      router.push({ name: "SelectedHerb", params: { id: herb.name } });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 1.5rem;
}

.main-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 1200px;
}

.card {
  background-color: #222;
  border-radius: 10%;
  box-shadow:
    inset 5px 5px 5px #aaa,
    inset -5px -5px 5px #666,
    -5px -5px 10px #000;
  color: #ddd;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  min-height: 350px;
  transition: 0.3s;
  width: 280px;
}

.card:hover {
  box-shadow:
    inset 5px 5px 5px #aaa,
    inset -5px -5px 5px #666,
    -5px -5px 10px #000,
    5px 5px 10px -8px #ffe600;
}

.card:hover .name {
  text-shadow: 0 6px 6px #ffe60066;
}

.name {
  font-size: 1.8rem;
  transition: 0.3s;
}

.summary {
  flex-grow: 1;
  margin: 0 auto;
  width: 200px;
}

.btn {
  background-color: #ffe600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  height: 40px;
  margin: 0 auto;
  margin-bottom: 30px;
  transition: 0.3s;
  width: 80%;
}

.btn:hover,
.btn:focus {
  background-color: #e6cf00;
  font-size: 1.3rem;
}

.btn:active {
  background-color: #cdb800;
  font-size: 1.2rem;
}
</style>
