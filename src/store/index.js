import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    herbList: [
      {
        id: 1,
        name: "Goldenrod",
        summary: "Goldenrod stands tall and shines like the sun.",
        description: "",
        image: "",
        location: "",
        otherNames: "",
        uses: "",
      },
      {
        id: 2,
        name: "Yarrow",
        summary: "Yarrow's delicate leaves look like a zipper or stitches.",
        description: "",
        image: "",
        location: "",
        otherNames: "",
        uses: "",
      },
      {
        id: 3,
        name: "Plantain",
        summary: "Plantian is broad and tough.",
        description: "",
        image: "",
        location: "",
        otherNames: "",
        uses: "",
      },
      {
        id: 4,
        name: "Elderberry",
        summary: "Elderberry has kept humans alive for generations.",
        description: "",
        image: "",
        location: "",
        otherNames: "",
        uses: "",
      },
      {
        id: 5,
        name: "Mugwort",
        summary:
          "Mugwort's silvery leaves allow us to travel through the veil.",
        description: "",
        image: "",
        location: "",
        otherNames: "",
        uses: "",
      },
      {
        id: 6,
        name: "Bee Balm",
        summary:
          "Bee Balm looks like purple spider legs when they're blooming.",
        description: "",
        image: "",
        location: "",
        otherNames: "",
        uses: "",
      },
    ],
    selectedHerb: {
      id: "",
      name: "",
      summary: "",
      description: "",
      image: "",
      location: "",
      otherNames: "",
      uses: "",
    },
  },
  getters: {},
  mutations: {},
  actions: {},
});
