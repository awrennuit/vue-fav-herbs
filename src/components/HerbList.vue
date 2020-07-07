<template>
  <div class="main-grid">
    <div class="card" v-for="herb in herbList" :key="herb.id">
      <h2 class="name">{{ herb.name }}</h2>
      <p class="summary">{{ herb.summary }}</p>
      <button class="btn" @click="viewHerb(herb.name)">LEARN MORE</button>
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
    viewHerb(name) {
      router.push({ name: "SelectedHerb", params: { id: name } });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  background-color: #ffe600;
  border: none;
  border-radius: 4px;
  bottom: 30px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  height: 40px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  transition: font-size 0.3s;
  width: 80%;
}

.btn:hover {
  font-size: 1.3rem;
}

.btn:active {
  background-color: #dfc800;
}

.card {
  background-color: #222;
  border-radius: 10%;
  box-shadow: inset 5px 5px 5px #aaa, inset -5px -5px 5px #666,
    -5px -5px 10px #000;
  color: #ddd;
  height: 350px;
  position: relative;
  width: 280px;
}

.summary {
  margin: 0 auto;
  width: 200px;
}

.main-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(50px, auto);
}

.name {
  font-size: 1.8rem;
}
</style>
