<template>
    <table>
        <list-item
            v-for="template in templates"
            :key="template.id"
            :template="template"
        ></list-item>
    </table>
</template>

<script>
import { ref } from "vue";

import ListItem from "./list-item.vue";

export default {
    name: "LaravelCmsAdminTemplates",
    components: {
        ListItem: ListItem,
    },
    setup() {
        /**
         * Reactive Properties
         */
        const templates = ref([]);

        /**
         * Methods
         */
        async function fetchTemplateList() {
            const response = await fetch("/api/cms-templates");
            templates.value = await response.json();
        }

        fetchTemplateList();

        return {
            templates,
        };
    },
};
</script>

<style>
</style>