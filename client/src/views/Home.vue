<template>
  <div>
    <Card v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import { mapActions, mapState } from "pinia";
import { useRootStore } from "../stores/root";
import Card from "../components/Card.vue";

export default {
  computed: {
    ...mapState(useRootStore, ["posts"]),
  },
  methods: {
    ...mapActions(useRootStore, ["fetchPosts"]),
  },
  components: { RouterLink, Card },
  created() {
    this.fetchPosts();
  },
};
</script>

<style lang="scss" scoped></style>
