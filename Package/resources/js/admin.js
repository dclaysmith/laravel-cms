import { createApp } from "vue";

import App from "./components/admin/index.vue";

import router from "./routes.js";

const app = createApp(App).use(router);

// look for laravel-cms-admin or default to body
if (document.getElementById("laravel-cms-admin")) {
    app.mount("#laravel-cms-admin");
} else {
    app.mount("body");
}
