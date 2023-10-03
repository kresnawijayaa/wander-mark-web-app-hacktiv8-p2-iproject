<template>
  <Navbar />
  <RouterView />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import { RouterView } from "vue-router";
import { mapWritableState } from "pinia";
import { useRootStore } from "./stores/root";

export default {
  components: {
    Navbar,
  },
  computed: {
    ...mapWritableState(useRootStore, ["isLoggedIn"]),
  },
  created() {
    if (localStorage.access_token) {
      this.isLoggedIn = true;
    }
  },
};
</script>

<style lang="scss" scoped></style>
