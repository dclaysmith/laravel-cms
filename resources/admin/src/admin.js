import { createApp } from "vue";

import App from "./js/index.vue";
import router from "./js/routes.js";
import notifications from "@kyvg/vue3-notification";
import VueCookies from "vue-cookies";

// Import full Spectre source code
import "spectre.css";
import "./css/admin.scss";

const app = createApp(App).use(router).use(notifications).use(VueCookies);

// look for laravel-cms-admin or default to body
if (document.getElementById("laravel-cms-admin")) {
    app.mount("#laravel-cms-admin");
} else {
    app.mount("body");
}
