<template>
  <div>
    <h2>{{ herb.name }}</h2>
    <p>
      {{ herb.description }}
    </p>
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
