<template>
  <div>
    <h2>{{ herb.name }}</h2>
    <p>Other Names: {{ herb.otherNames }}</p>
    <p>Description: {{ herb.description }}</p>
    <p>Found In: {{ herb.location }}</p>
    <p>Uses: {{ herb.uses }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      herb: this.$store.state.selectedHerb,
    };
  },
};
</script>

<style></style>
