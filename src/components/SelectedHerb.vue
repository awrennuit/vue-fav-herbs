<template>
  <div class="main-container">
    <div class="embellishment"></div>
    <img :src="herb.image" alt="" height="300" width="300" />
    <div class="nav-container">
      <button class="back" @click="goBack(herb.id)">&#8592;</button>
      <h1 style="color: #ddd;">{{ herb.name }}</h1>
      <button class="forward" @click="goForward(herb.id)">&#8594;</button>
    </div>
    <div class="content-container">
      <herb-content label="Other Names: " :description="herb.otherNames" />
      <herb-content label="Description: " :description="herb.description" />
      <herb-content label="Found In: " :description="herb.location" />
      <herb-content label="Uses: " :description="herb.uses" />
    </div>
  </div>
</template>

<script>
import HerbContent from './HerbContent.vue';

export default {
  components: { HerbContent },
  data() {
    return {
      herb: this.$store.state.selectedHerb,
    };
  },
  watch: {
    "$route.params": {
      handler() {
        for (let herb of this.$store.state.herbList) {
          if (herb.name === this.$route.params.id) {
            this.$store.commit("thisHerb", herb);
            this.$data.herb = this.$store.state.selectedHerb;
          }
        }

        if (this.$store.state.selectedHerb.name !== this.$route.params.id) {
          this.$router.push("/");
        }
      },
      immediate: true,
    },
  },
  methods: {
    goBack(id) {
      const herbList = this.$store.state.herbList;

      if (id - 2 < 0) this.$router.push(`/${herbList[herbList.length - 1].name}`);
      if (id - 2 >= 0) this.$router.push(`/${this.$store.state.herbList[id - 2].name}`);
    },
    goForward(id) {
      const herbList = this.$store.state.herbList;

      if (id > 5) this.$router.push(`/${herbList[0].name}`);
      if (id < 6) this.$router.push(`/${this.$store.state.herbList[id].name}`);
    },
  }
};
</script>

<style scoped>
img {
  object-fit: cover;
}

h1 {
  font-size: 1.5em;
}

.main-container {
  margin: 60px auto;
  position: relative;
  width: max-content;
}

.main-container::before,
.main-container::after {
  content: "";
  height: 410px;
  pointer-events: none;
  position: absolute;
  width: 270px;
}

.main-container::before {
  border-top: 10px solid #dfc800;
  border-left: 10px solid #dfc800;
  left: -20px;
  top: -30px;
}

.main-container::after {
  border-right: 10px solid #dfc800;
  border-bottom: 10px solid #dfc800;
  bottom: -20px;
  right: -20px;
}

.embellishment::before,
.embellishment::after {
  content: "";
  height: 200px;
  position: absolute;
  width: 130px;
}

.embellishment::before {
  border-top: 3px solid #dfc800;
  border-left: 3px solid #dfc800;
  left: -35px;
  top: -45px;
}

.embellishment::after {
  border-right: 3px solid #dfc800;
  border-bottom: 3px solid #dfc800;
  bottom: -35px;
  right: -35px;
}

.nav-container {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 300px;
}

.back,
.forward {
  background: none;
  border: none;
  color: #dfc800;
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  transition: 0.3s;
  z-index: 1;
}

.back {
  left: 335px;
}

.back:hover {
  transform: translateX(-5px);
}

.forward {
  left: 604px;
}

.forward:hover {
  transform: translateX(5px);
}

.content-container {
  margin: 0 auto;
  text-align: left;
  width: 500px;
}

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
