// import LaravelCmsAdminVueComponent from "./js/index.vue";

// export default LaravelCmsAdminVueComponent;

import { createApp } from "vue";

import App from "./js/index.vue";
import router from "./js/routes.js";
import notifications from "@kyvg/vue3-notification";
import VueCookies from "vue-cookies";
import "./css/styles.scss";

const app = createApp(App).use(router).use(notifications).use(VueCookies);

export default app;
