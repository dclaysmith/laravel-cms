<template>
    <table>
        <Suspense>
            <list-item
                v-for="page in pages"
                :key="page.id"
                :page="page"
            ></list-item>
            <template #fallback> Loading... </template>
        </Suspense>
    </table>
</template>

<script>
import { ref } from "vue";

import ListItem from "./list-item.vue";

export default {
    name: "LaravelCmsAdminPages",
    components: {
        ListItem: ListItem,
    },
    setup() {
        /**
         * Reactive Properties
         */
        const pages = ref([]);

        /**
         * Methods
         */
        async function fetchPageList() {
            const response = await fetch("/api/cms-pages");
            pages.value = await response.json();
        }

        fetchPageList();

        return {
            pages,
        };
    },
};
</script>

<style>
</style>