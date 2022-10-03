<template>
    <template v-if="templates">
        <add-form @created="onCreated"></add-form>
        <table v-if="loaded && templates.length">
            <list-item
                v-for="template in templates"
                :key="template.id"
                :template="template"
            ></list-item>
        </table>
        <p v-else-if="loaded">There are no templates.</p>
        <p v-else>Loading...</p>
    </template>
</template>

<script>
import { ref } from "vue";
import { notify } from "@kyvg/vue3-notification";

import ListItem from "./list-item.vue";
import AddForm from "./add-form.vue";

export default {
    name: "LaravelCmsAdminTemplates",
    components: {
        ListItem,
        AddForm,
    },
    setup(props, { emit }) {
        /**
         * Reactive Properties
         */
        const templates = ref([]);
        const loaded = ref(false);

        /**
         * Methods
         */
        async function fetchTemplateList() {
            const response = await fetch("/api/cms-templates");
            const json = await response.json();
            templates.value = json.data;
            loaded.value = true;
        }
        async function onCreated(template) {
            templates.value.push(template);
            notify({
                title: "New template created.",
            });
        }

        fetchTemplateList();

        return {
            loaded,
            templates,
            onCreated,
        };
    },
};
</script>

<style>
</style>