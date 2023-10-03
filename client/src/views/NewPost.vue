<template>
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ml-[180px]">
    <div class="mx-auto max-w-lg">
      <h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
        Share your experience
      </h1>

      <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt
        dolores deleniti inventore quaerat mollitia?
      </p>

      <form
        @submit.prevent="doCreatePost"
        action=""
        class="mb-0 m- mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
      >
        <div>
          <label for="email" class="sr-only">Title</label>

          <div class="relative">
            <input
              v-model="form.title"
              type="text"
              class="focus:ring-2 focus:ring-indigo-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 px-2 ring-1 ring-slate-200 shadow-sm"
              placeholder="Enter title"
            />
          </div>
        </div>

        <div>
          <label for="password" class="sr-only">Image</label>

          <div class="relative">
            <input
              v-model="form.image_url"
              type="text"
              class="focus:ring-2 focus:ring-indigo-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 px-2 ring-1 ring-slate-200 shadow-sm"
              placeholder="Enter image url"
            />
          </div>
        </div>

        <GMapAutocomplete
          class="focus:ring-2 focus:ring-indigo-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 px-2 ring-1 ring-slate-200 shadow-sm"
          @place_changed="setPlace"
        >
        </GMapAutocomplete>

        <div>
          <label for="OrderNotes" class="sr-only">Prompt</label>

          <div class="">
            <textarea
              v-model="prompt"
              id="Prompt"
              class="p-2 focus:ring-2 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md ring-1 ring-slate-200"
              rows="4"
              placeholder="Enter prompt to generate caption with AI..."
            ></textarea>

            <div class="flex items-center justify-end gap-2 bg-white py-3">
              <button
                @click.prevent="doGenerateCaption"
                type="button"
                class="rounded bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
              >
                Generate Caption
              </button>
            </div>
          </div>
        </div>

        <div>
          <label for="password" class="sr-only">Caption</label>

          <div class="relative">
            <textarea
              v-model="captionGenerated"
              id="OrderNotes"
              class="p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md ring-1 ring-slate-200 shadow-sm"
              rows="4"
              placeholder="Generated caption will display here..."
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
        >
          Create Post
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useRootStore } from "../stores/root";

export default {
  data() {
    return {
      prompt: "",
      form: {
        title: "",
        image_url: "",
        place_name: "",
        place_address: "",
        place_opening_hours: [],
        place_url: "",
        place_photos: [],
        caption: "",
      },
    };
  },
  computed: {
    ...mapState(useRootStore, ["captionGenerated"]),
  },
  methods: {
    setPlace(place) {
      if (place.photos) {
        place.photos.map((el) => {
          this.form.place_photos.push(el.getUrl());
        });
      }
      if (place.name) {
        this.form.place_name = place.name;
      }
      if (place.formatted_address) {
        this.form.place_address = place.formatted_address;
      }
      if (place.opening_hours.weekday_text) {
        this.form.place_opening_hours = place.opening_hours.weekday_text;
      }
      if (place.url) {
        this.form.place_url = place.url;
      }
    },
    ...mapActions(useRootStore, ["handleNewPost", "handleGenerateCaption"]),
    doGenerateCaption() {
      this.handleGenerateCaption(this.prompt);
    },
    doCreatePost() {
      this.form.caption = this.captionGenerated;
      this.handleNewPost(this.form);
    },
  },
};
</script>

<style lang="scss" scoped></style>
