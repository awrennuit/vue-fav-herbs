<template>
  <div class="content-grid">
    <span class="content-label">{{ label }}</span>
    <span class="content-description">{{ description }}</span>
  </div>
</template>

<script>
export default {
  name: 'HerbContent',
  props: ['label', 'description'],
};
</script>

<style scoped>
.content-grid {
  display: grid;
  grid-template-columns: 1fr 3.5fr;
}

.content-label {
  color: #dfc800;
  justify-self: end;
  padding-right: 5px;
}

.content-description {
  color: #ffffffc2;
}

.content-grid span {
  padding-bottom: 10px;
}
</style>
