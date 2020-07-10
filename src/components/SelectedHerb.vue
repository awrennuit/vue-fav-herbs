<template>
  <div id="main-container">
    <div id="embellishment"></div>
    <img :src="herb.image" alt="" height="300" width="300" />
    <p id="back" @click="goBack(herb.id)">&#8592;</p>
    <p id="forward" @click="goForward(herb.id)">&#8594;</p>
    <h2 style="color: #ddd;">
      {{ herb.name }}
    </h2>
    <div id="content-container">
      <div>
        <span style="color: #dfc800;">Other Names: </span>
        <span>{{ herb.otherNames }}</span>
      </div>
      <div>
        <span style="color: #dfc800;">Description: </span>
        <span>{{ herb.description }}</span>
      </div>
      <div>
        <span style="color: #dfc800;">Found In: </span>
        <span>{{ herb.location }}</span>
      </div>
      <div>
        <span style="color: #dfc800;">Uses: </span>
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
      if (id - 2 < 0) {
        this.$router.push(`/${herbList[herbList.length - 1].name}`);
      } else {
        this.$router.push(`/${this.$store.state.herbList[id - 2].name}`);
      }
    },
    goForward(id) {
      const herbList = this.$store.state.herbList;
      if (id > 5) {
        this.$router.push(`/${herbList[0].name}`);
      } else {
        this.$router.push(`/${this.$store.state.herbList[id].name}`);
      }
    },
  },
};
</script>

<style scoped>
img {
  object-fit: cover;
}

#back,
#forward {
  color: #dfc800;
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  position: absolute;
  z-index: 1;
}

#back {
  left: 335px;
  bottom: 183px;
}

#forward {
  left: 604px;
  bottom: 183px;
}

#content-container {
  color: #ddd;
  margin: 0 auto;
  text-align: left;
  width: 500px;
}

#embellishment::before,
#embellishment::after {
  content: "";
  height: 200px;
  position: absolute;
  width: 130px;
}

#embellishment::before {
  border-top: 3px solid #dfc800;
  border-left: 3px solid #dfc800;
  left: 180px;
  top: -50px;
}

#embellishment::after {
  border-right: 3px solid #dfc800;
  border-bottom: 3px solid #dfc800;
  bottom: -50px;
  right: 180px;
}

#main-container {
  position: relative;
}

#main-container::before,
#main-container::after {
  content: "";
  height: 410px;
  position: absolute;
  width: 270px;
}

#main-container::before {
  border-top: 10px solid #dfc800;
  border-left: 10px solid #dfc800;
  left: 200px;
  top: -30px;
}

#main-container::after {
  border-right: 10px solid #dfc800;
  border-bottom: 10px solid #dfc800;
  bottom: -30px;
  right: 200px;
}
</style>
