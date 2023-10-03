<template>
  <div class="mx-auto px-4 py-4 ml-[180px]">
    <div class="grid grid-cols-10 gap-8 mt-4 ml-4">
      <div class="col-span-6">
        <div class="flex mb-4">
          <img
            :src="post?.user?.profile_pict"
            class="h-[40px] w-[40px] object-cover rounded-full flex-none"
          />
          <h2 class="text-lg font-medium text-gray-800 flex-none my-auto ml-2">
            {{ post?.user?.username }}
          </h2>
        </div>

        <h2 class="text-xl font-bold text-gray-800 mt-4 mb-1">
          {{ post.title }}
        </h2>

        <p class="text-gray-600 leading-6 text-sm mb-4">
          {{ post.caption }}
        </p>

        <div class="flex max-w-full justify-between">
          <img
            alt="Party"
            :src="post.image_url[0]"
            class="inset-0 h-[280px] w-[328px] object-cover rounded-lg flex-none"
          />
          <img
            alt="Party"
            :src="post.image_url[1]"
            class="inset-0 h-[280px] w-[328px] object-cover rounded-lg flex-none"
          />
        </div>

        <div class="flex mt-4 max-w-full justify-around">
          <button class="flex">
            <svg
              class="w-4 h-4 text-gray-800 dark:text-indigo-800 inline-block mr-2 my-auto"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 14"
            >
              <g
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                <path
                  d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z"
                />
              </g>
            </svg>
            <p class="text-indigo-800 text-sm text-bold leading-6 my-auto">
              1.167 views
            </p>
          </button>

          <button class="flex">
            <svg
              class="w-4 h-4 text-gray-800 dark:text-indigo-800 inline-block mr-2 my-auto"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.008 8.714c1-.097 1.96-.45 2.792-1.028a25.112 25.112 0 0 0 4.454-5.72 1.8 1.8 0 0 1 .654-.706 1.742 1.742 0 0 1 1.65-.098 1.82 1.82 0 0 1 .97 1.128c.075.248.097.51.065.767l-1.562 4.629M4.008 8.714H1v9.257c0 .273.106.535.294.728a.99.99 0 0 0 .709.301h1.002a.99.99 0 0 0 .71-.301c.187-.193.293-.455.293-.728V8.714Zm8.02-1.028h4.968c.322 0 .64.08.925.232.286.153.531.374.716.645a2.108 2.108 0 0 1 .242 1.883l-2.36 7.2c-.288.813-.48 1.354-1.884 1.354-2.59 0-5.39-1.06-7.504-1.66"
              />
            </svg>
            <p class="text-indigo-800 text-sm text-bold leading-6 my-auto">
              112 likes
            </p>
          </button>

          <button class="flex">
            <svg
              class="w-4 h-4 text-gray-800 dark:text-indigo-800 inline-block mr-2 my-auto"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 5h9M5 9h5m8-8H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4l3.5 4 3.5-4h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
              />
            </svg>
            <p class="text-indigo-800 text-sm text-bold leading-6">
              24 comments
            </p>
          </button>

          <button class="flex">
            <svg
              class="w-4 h-4 text-gray-800 dark:text-indigo-800 inline-block mr-2 my-auto"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m5.953 7.467 6.094-2.612m.096 8.114L5.857 9.676m.305-1.192a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0ZM17 3.84a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0Zm0 10.322a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0Z"
              />
            </svg>
            <p class="text-indigo-800 text-sm text-bold leading-6">
              share post
            </p>
          </button>
        </div>

        <br />
        <!-- <div>
          <label for="OrderNotes" class="sr-only">Prompt</label>

          <div class="">
            <textarea
              v-model="text"
              id="Prompt"
              class="p-2 focus:ring-2 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md ring-1 ring-slate-200"
              rows="2"
              placeholder="Add comment..."
            ></textarea>

            <div class="flex items-center justify-end gap-2 bg-white py-3">
              <button
                @click.prevent="doComment"
                type="button"
                class="rounded bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
              >
                Add Comment
              </button>
            </div>
          </div>
        </div>
        <div>
          <div v-for="comment in comments[post.id]" :key="comment.id">
            <span class="mt-8 text-sm font-small text-gray-600">
              => {{ comment.text }}</span
            >
          </div>
        </div> -->
      </div>

      <div class="col-span-4 mt-4 px-8">
        <div class="group relative block h-[460px]">
          <span
            class="absolute inset-0 border-[2px] rounded-lg border-dashed border-gray-400"
          ></span>

          <div
            class="relative flex h-full transform border-[2px] rounded-lg border-gray-400 bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
          >
            <div
              class="transition-opacity group-hover:absolute group-hover:opacity-0 p-4"
            >
              <div v-if="post.place_photos && post.place_photos.length > 0">
                <img
                  :src="post.place_photos[0]"
                  class="object-cover w-[340px] h-[180px]"
                />
                <div class="flex mt-2 gap-2">
                  <img
                    :src="post.place_photos[1]"
                    class="object-cover w-[105px] h-[100px]"
                  />
                  <img
                    :src="post.place_photos[2]"
                    class="object-cover w-[105px] h-[100px]"
                  />
                  <img
                    :src="post.place_photos[3]"
                    class="object-cover w-[105px] h-[100px]"
                  />
                </div>
              </div>
              <div v-else>
                <img
                  src="https://placehold.co/600x320?text=image+will+appear+here"
                  alt=""
                />
                <div class="flex mt-2 gap-2">
                  <img
                    src="https://placehold.co/105x100?text=image+will+appear+here"
                    alt=""
                  />
                  <img
                    src="https://placehold.co/105x100?text=image+will+appear+here"
                    alt=""
                  />
                  <img
                    src="https://placehold.co/105x100?text=image+will+appear+here"
                    alt=""
                  />
                </div>
              </div>
              <h2 class="text-xl font-bold text-indigo-800 mt-4">
                {{ post.place_name }}
              </h2>
              <p class="mt-2 text-gray-600 text-xs leading-6">
                {{ post.place_address }}
              </p>
            </div>

            <div
              class="absolute p-8 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100"
            >
              <h2 class="text-lg font-bold text-gray-800 mb-3">
                Opening Hours
              </h2>

              <ul
                v-for="item in post.place_opening_hours"
                :key="item.id"
                class="pb-3"
              >
                <li>
                  <span class="text-sm text-gray-700">
                    {{ item }}
                  </span>
                </li>
              </ul>

              <a
                class="mt-8 text-sm font-semibold my-auto text-indigo-800"
                target="_blank"
                :href="post.place_url"
              >
                View detail in Google Maps
                <svg
                  class="w-3 h-3 text-indigo-800 inline-block ml-1 mb-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <!-- disini -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useRootStore } from "../stores/root";

export default {
  data() {
    return {
      text: "",
    };
  },
  props: ["post"],
  computed: {
    ...mapState(useRootStore, ["comments"]),
  },
  methods: {
    ...mapActions(useRootStore, ["fetchComments", "handleNewComment"]),
    async doComment() {
      await this.handleNewComment(this.text, this.post.id);
      await this.fetchComments(this.post.id);
      this.text = "";
    },
  },
  created() {
    this.fetchComments(this.post.id);
  },
};
</script>

<style lang="scss" scoped></style>
