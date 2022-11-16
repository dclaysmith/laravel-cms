import { createApp } from "vue";

import App from "./js/index.vue";
import router from "./js/routes.js";
import notifications from "@kyvg/vue3-notification";

const app = createApp(App).use(router).use(notifications);

// look for laravel-cms-admin or default to body
if (document.getElementById("laravel-cms-admin")) {
    app.mount("#laravel-cms-admin");
} else {
    app.mount("body");
}
