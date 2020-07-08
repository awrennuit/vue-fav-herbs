<template>
  <div id="main-container">
    <div id="embellishment"></div>
    <img :src="herb.image" alt="" height="300" width="300" />
    <h2>{{ herb.name }}</h2>
    <div id="content-container">
      <div>
        <span>Other Names: </span>
        <span>{{ herb.otherNames }}</span>
      </div>
      <div>
        <span>Description: </span>
        <span>{{ herb.description }}</span>
      </div>
      <div>
        <span>Found In: </span>
        <span>{{ herb.location }}</span>
      </div>
      <div>
        <span>Uses: </span>
        <span>{{ herb.uses }}</span>
      </div>
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

#embellishment::before,
#embellishment::after {
  content: '';
  height: 200px;
  position: absolute;
  width: 130px;
}

#embellishment::before {
  border-top: 3px solid yellow;
  border-left: 3px solid yellow;
  left: 180px;
  top: -50px;
}

#embellishment::after {
  border-right: 3px solid yellow;
  border-bottom: 3px solid yellow;
  bottom: -50px;
  right: 180px;
}

#main-container {
  position: relative;
}

#main-container::before,
#main-container::after {
  content: '';
  height: 410px;
  position: absolute;
  width: 270px;
}

#main-container::before {
  border-top: 10px solid yellow;
  border-left: 10px solid yellow;
  left: 200px;
  top: -30px;
}

#main-container::after {
  border-right: 10px solid yellow;
  border-bottom: 10px solid yellow;
  bottom: -30px;
  right: 200px;
}
</style>
