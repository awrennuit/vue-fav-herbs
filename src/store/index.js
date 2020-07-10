import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    herbList: [
      {
        id: 1,
        name: "Goldenrod",
        summary: "Goldenrod stands tall and shines like the sun.",
        description:
          "Goldenrod is tall, thin, and grows in clusters. The leaves are thin, pointed ovals with three veins. The tiny yellow flowers grow in tendrils at the top.",
        image: "/images/goldenrod.jpg",
        location: "Prairie & waste areas across North America",
        otherNames: "Solidago, Aaron's Rod",
        uses: "Aid digestion, quell allergy & hay feer symptoms, boost immune system",
      },
      {
        id: 2,
        name: "Yarrow",
        summary: "Yarrow's delicate leaves look like a zipper or stitches.",
        description:
          "Yarrow is a generally small, unassuming plant. Its small leaves remind many people of seaweed, ferns, or zippers. In the wild, its flowers are generally white. They are very small and grow in round clusters.",
        image: "/images/yarrow.jpg",
        location:
          "Prairie & waste areas across Asia, Europe, and North America",
        otherNames: "Achillea, Nosebleed",
        uses: "Coagulate blood, relieve muscle tension & soreness, induce sweating",
      },
      {
        id: 3,
        name: "Plantain",
        summary: "Plantian is broad and tough.",
        description:
          "Plantain is an almost invisible plant that seems to be everywhere once you know what to look for. The leaves are broad, and many children use them as make-believe bandages, which isn't too far from the truth. In its second year, plantain sends up a stalk and goes to seed.",
        image: "/images/plantain.jpg",
        location: "Compact soils across Asia, Europe, and North America",
        otherNames: "Plantago, Doorweed, Whiteman's Footprint",
        uses: "Relieve itch from bug bites, treat wounds, ease eczema",
      },
      {
        id: 4,
        name: "Elderberry",
        summary: "Elderberry has kept humans alive for generations.",
        description:
          "Elderberries grow on elder trees. Elder trees are usually bushy, but can grow quite tall. The branches are hollow. If an herbalist shows you an elder tree it means they like you :)",
        image: "/images/elderberry.jpg",
        location: "Wooded & waste areas mostly in the Northern Hemisphere",
        otherNames: "Sambucus",
        uses: "Boost immune system, fight influenza, help with chronic fatigue",
      },
      {
        id: 5,
        name: "Mugwort",
        summary:
          "Mugwort's silvery leaves allow us to travel through the veil.",
        description:
          "Mugwort is an unassuming 'weed' that grows everywhere. It can grow over six feet tall. The leaves remind people of seaweed and have silvery undersides. The flowers are quite small and ordinary looking. Mugwort will quickly overtake a garden bed or even the whole yard if given the chance.",
        image: "/images/mugwort.jpg",
        location: "Waste areas mostly in the Northern Hemisphere",
        otherNames: "Artemisia",
        uses: "Relieve sore muscles, calm an anxious mind, keep period regular",
      },
      {
        id: 6,
        name: "Bee Balm",
        summary:
          "Bee Balm looks like purple spider legs when they're blooming.",
        description:
          "Bee Balm loves sunny plains areas, especially near a water source. It's most easily recognized by its unique flowers, and the abundance of bees they attract. Rubbing a Bee Balm leaf produces the best smell in the world <3",
        image: "/images/monarda.jpg",
        location: "Rich, moist soils across North America",
        otherNames: "Monarda, Wild Bergamot",
        uses: "Heal sores, treat colds & flu, ease nausea",
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
  mutations: {
    thisHerb(state, payload) {
      state.selectedHerb = payload;
    },
  },
  actions: {},
  plugins: [createPersistedState()],
});
