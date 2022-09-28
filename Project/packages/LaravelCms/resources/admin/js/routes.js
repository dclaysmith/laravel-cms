import { createWebHashHistory, createRouter } from "vue-router";

import Index from "./components/admin/index.vue";
import Components from "./components/admin/components/index.vue";
import Media from "./components/admin/media/index.vue";
import Pages from "./components/admin/pages/index.vue";
import Page from "./components/admin/pages/item/index.vue";
import Paths from "./components/admin/paths/index.vue";
import Templates from "./components/admin/templates/index.vue";
import Template from "./components/admin/templates/item/index.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Index,
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
        props: true,
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
        props: true,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
