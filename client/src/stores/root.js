import axios from "axios";
import { defineStore } from "pinia";
// import { toast } from "vue3-toastify";
// import "vue3-toastify/dist/index.css";

export const useRootStore = defineStore("root", {
  state: () => ({
    posts: [],

    // { postId: comment data[] }
    comments: {},
    captionGenerated: "",
    isLoggedIn: false,
  }),
  getters: {},
  actions: {
    async handleSignup(form) {
      try {
        const response = await axios.post(
          // "https://server.kresnawijaya.tech/signup",
          "https://server.kresnawijaya.tech/signup",
          form
        );
        this.$router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },
    async handleLogin(form) {
      try {
        const response = await axios.post(
          "https://server.kresnawijaya.tech/login",
          form
        );
        localStorage.setItem("access_token", response.data.access_token);
        this.isLoggedIn = true;
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    async handleLogout() {
      try {
        localStorage.removeItem("access_token");
        this.isLoggedIn = false;
        this.$router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },
    async fetchPosts() {
      try {
        const response = await axios.get(
          "https://server.kresnawijaya.tech/posts",
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        this.posts = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async handleNewPost(form) {
      try {
        const response = await axios.post(
          "https://server.kresnawijaya.tech/posts",
          form,
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        this.$router.push("/");
        this.captionGenerated = "";
      } catch (error) {
        console.log(error);
      }
    },
    async handleGenerateCaption(prompt) {
      try {
        const response = await axios.post(
          "https://server.kresnawijaya.tech/caption",
          { prompt },
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        console.log(response, "ada apa disiniiii");
        this.captionGenerated = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchComments(id) {
      try {
        const response = await axios.get(
          "https://server.kresnawijaya.tech/comment/" + id,
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        /**
         * {
         *  asdfasdiadfid: [],
         *  aadsoijewuojnewjo: []
         *
         * }
         */
        this.comments[id] = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async handleNewComment(text, id) {
      try {
        const response = await axios.post(
          "https://server.kresnawijaya.tech/comment/" + id,
          { text },
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
      } catch (error) {
        console.log(error);
      }
    },
  },
});
