const app = Vue.createApp({
  data() {
    return {
      books: [
        {
          author: "Robert Kiosaki",
          name: "Boy ota kambag'al ota",
          image: "./images/robert.png",
          isFavourite: true,
        },
        {
          author: "Abdulla Qodiriy",
          name: "O'tgan kunlar",
          image: "./images/abdulla.png",
          isFavourite: true,
        },
        {
          author: "Shayx Ioz",
          name: "Baxtli bo'lmo uchun",
          image: "./images/baxtli.png",
          isFavourite: false,
        },
      ],
    };
  },

  methods: {},
});

app.mount("#app");
