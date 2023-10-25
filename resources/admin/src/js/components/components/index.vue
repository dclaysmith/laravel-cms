<template>
    <h2>Components</h2>
    <add-form @add="onAdd"></add-form>
    <table class="table" v-if="loaded && componentsSorted.length">
        <list-item
            v-for="component in componentsSorted"
            :key="component.id"
            :component="component"
            @delete="onDelete"
        ></list-item>
    </table>
    <p v-else-if="loaded">There are no components.</p>
    <p v-else>Loading...</p>
</template>

<script>
import { ref, computed } from "vue";
import { notify } from "@kyvg/vue3-notification";
import { sortBy as _sortBy } from "lodash";

import ListItem from "./list-item.vue";
import AddForm from "./add-form.vue";

export default {
    name: "LaravelCmsAdminComponents",
    components: {
        ListItem,
        AddForm,
    },
    setup(props, { emit }) {
        /**
         * Reactive Properties
         */
        const components = ref([]);
        const loaded = ref(false);

        /**
         * Methods
         */
        async function fetchComponentList() {
            let url =
                "/api/cms-components?" +
                new URLSearchParams({
                    "q[]": ["is_global[eq]=TRUE"],
                }).toString();
            const response = await fetch(url);
            const json = await response.json();
            components.value = json.data;
            loaded.value = true;
        }

        async function onAdd(component) {
            debugger;
            const response = await fetch("/api/cms-components", {
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

            components.value.push(json.data);

            notify({
                title: "New component added.",
                type: "success",
            });

            components.value.push(Object.assign(component, json.data));
        }

        async function onDelete(id) {
            const response = await fetch("/api/cms-components/" + id, {
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

            var indexToRemove = components.value
                .map((item) => item.id)
                .indexOf(id);
            ~indexToRemove && components.value.splice(indexToRemove, 1);
        }

        fetchComponentList();

        /**
         * Updated
         */
        const componentsSorted = computed(() => {
            return _sortBy(components.value || [], (component) => {
                return component.component;
            });
        });

        return {
            componentsSorted,
            loaded,
            onAdd,
            onDelete,
        };
    },
};
</script>

<style>
</style>