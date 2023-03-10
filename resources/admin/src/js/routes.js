import { createWebHashHistory, createRouter } from "vue-router";

import Index from "./index.vue";
import Components from "./components/components/index.vue";
import Media from "./components/media/index.vue";
import Pages from "./components/pages/index.vue";
import Page from "./components/pages/item/index.vue";
import Paths from "./components/paths/index.vue";
import Templates from "./components/templates/index.vue";
import Template from "./components/templates/item/index.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Pages,
    },
    {
        path: "/components",
        name: "Components",
        component: Components,
    },
    {
        path: "/pages",
        name: "Pages",
        component: Pages,
    },
    {
        path: "/pages/:id",
        name: "Page",
        component: Page,
        props: (route) => ({ id: parseInt(route.params.id) }),
    },
    {
        path: "/paths",
        name: "Paths",
        component: Paths,
    },
    {
        path: "/media",
        name: "Media",
        component: Media,
    },
    {
        path: "/templates",
        name: "Templates",
        component: Templates,
    },
    {
        path: "/templates/:id",
        name: "Template",
        component: Template,
        props: (route) => ({ id: parseInt(route.params.id) }),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
