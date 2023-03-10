<template>
    <h2>Add Template</h2>
    <add-form @add="onAdd"></add-form>
    <h2>Existing Templates</h2>
    <table class="table" v-if="loaded && templatesSorted.length">
        <list-item
            v-for="template in templatesSorted"
            :key="template.id"
            :template="template"
            @delete="onDelete"
        ></list-item>
    </table>
    <p v-else-if="loaded">There are no templates.</p>
    <p v-else>Loading...</p>
</template>

<script>
import { ref, computed, inject } from "vue";
import { notify } from "@kyvg/vue3-notification";
import { useRouter } from "vue-router";
import { sortBy as _sortBy } from "lodash";

import ListItem from "./list-item.vue";
import AddForm from "./add-form.vue";

export default {
    name: "LaravelCmsAdminTemplates",
    components: {
        ListItem,
        AddForm,
    },
    setup(props, { emit }) {
        const router = useRouter();
        const $cookies = inject("$cookies");

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

        async function onAdd(template) {
            const response = await fetch("/api/cms-templates", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "X-XSRF-TOKEN": $cookies.get("XSRF-TOKEN"),
                },
                method: "POST",
                body: JSON.stringify(template),
            });

            const json = await response.json();

            if (!response.ok) {
                notify({
                    title: json.message,
                    type: "error",
                });
                return;
            }

            templates.value.push(json.data);

            notify({
                title: "New template created.",
                type: "success",
            });

            router.push("/templates/" + json.data.id);
        }

        async function onDelete(id) {
            const response = await fetch("/api/cms-templates/" + id, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "X-XSRF-TOKEN": $cookies.get("XSRF-TOKEN"),
                },
                method: "DELETE",
            });
            if (!response.ok) {
                notify({
                    title: json.message,
                    type: "error",
                });
                return;
            }

            notify({
                title: "Template deleted.",
                type: "warn",
            });

            var indexToRemove = templates.value
                .map((item) => item.id)
                .indexOf(id);
            ~indexToRemove && templates.value.splice(indexToRemove, 1);
        }

        fetchTemplateList();

        /**
         * Updated
         */
        const templatesSorted = computed(() => {
            return _sortBy(templates.value || [], (template) => {
                return template.name;
            });
        });

        return {
            templatesSorted,
            loaded,
            onAdd,
            onDelete,
        };
    },
};
</script>

<style>
</style>