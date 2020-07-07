<template>
  <div>
    <img :src="herb.image" alt="" height="300" width="300"/>
    <h2>{{ herb.name }}</h2>
    <div id="content-container">
      <p>Other Names: {{ herb.otherNames }}</p>
      <p>Description: {{ herb.description }}</p>
      <p>Found In: {{ herb.location }}</p>
      <p>Uses: {{ herb.uses }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      herb: this.$store.state.selectedHerb,
    };
  },
  mounted() {
    if (!this.$store.state.selectedHerb.name) {
      this.$router.push("/");
    }
  },
};
</script>

<style scoped>
img {
  object-fit: cover;
}

#content-container {
  margin: 0 auto;
  text-align: left;
  width: 500px;
}
</style>
