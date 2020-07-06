<template>
  <div class="main-grid">
    <div v-for="herb in herbs" :key="herb">
      <h2>{{ herb.name }}</h2>
      <p>{{ herb.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      herbs: [
        { name: "Goldenrod", description: "Goldenrod is the best!" },
        { name: "Yarrow", description: "Yarrow is the best!" },
        { name: "Plantain", description: "Plantian is the best!" },
        { name: "Elderberry", description: "Elderberry is the best!" },
        { name: "Mugwort", description: "Mugwort is the best!" },
        { name: "Bee Balm", description: "Bee Balm is the best!" },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(50px, auto);
}
</style>
