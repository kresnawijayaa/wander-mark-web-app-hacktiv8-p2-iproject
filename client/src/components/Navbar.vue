<template>
  <div>
    <div
      v-if="isLoggedIn"
      class="flex h-screen flex-col justify-between border-e bg-white w-[180px]"
      style="position: fixed; z-index: 2"
    >
      <div class="px-4 py-6">
        <RouterLink to="/">
          <h1 class="text-md font-semibold text-indigo-600">WANDER MARK</h1>
        </RouterLink>

        <br />
        <hr />

        <ul class="mt-6 space-y-1">
          <li>
            <RouterLink to="/">
              <button
                class="block rounded-lg px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Home
              </button>
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/post">
              <button
                class="block rounded-lg px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Create Post
              </button>
            </RouterLink>
          </li>

          <li>
            <button
              v-if="isLoggedIn"
              @click.prevent="handleLogout()"
              class="block rounded-lg px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>

      <div class="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <a
          href="#"
          class="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
        >
          <img
            alt="Man"
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            class="h-10 w-10 rounded-full object-cover"
          />

          <div>
            <p class="text-xs">
              <strong class="block font-medium">kresnawijaya__</strong>
            </p>
          </div>
        </a>
      </div>
    </div>
    <div v-else></div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useRootStore } from "../stores/root";

export default {
  methods: {
    ...mapActions(useRootStore, ["handleLogout"]),
  },
  computed: {
    ...mapState(useRootStore, ["isLoggedIn"]),
  },
};
</script>

<style lang="scss" scoped></style>
