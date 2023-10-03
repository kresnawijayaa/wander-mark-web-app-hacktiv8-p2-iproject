import { markRaw } from "vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import VueGoogleMaps from "@fawmi/vue-google-maps";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  store.$router = markRaw(router);
});

app.use(pinia);
app.use(router);

app.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAGbMR0JMGpMMy6HmuFJ5YID7Ne0WSOOeM",
    // language: 'de',
    libraries: "places",
    autobindAllEvents: true,
  },
});

app.mount("#app");
