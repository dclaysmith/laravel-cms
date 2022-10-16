<template>
    <h2>Add Page</h2>
    <add-form @add="onAdd"></add-form>
    <h2>Existing Pages</h2>
    <table class="table" v-if="loaded && pagesSorted.length">
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Title</th>
            <th>Path</th>
            <th>Template</th>
            <th></th>
        </tr>
        <list-item
            v-for="page in pagesSorted"
            :key="page.id"
            :page="page"
            @delete="onDelete"
        ></list-item>
    </table>
    <p v-else-if="loaded">There are no pages.</p>
    <p v-else>Loading...</p>
</template>

<script>
import { ref, computed } from "vue";
import { notify } from "@kyvg/vue3-notification";
import { useRouter } from "vue-router";
import { sortBy as _sortBy } from "lodash";

import ListItem from "./list-item.vue";
import AddForm from "./add-form.vue";

export default {
    name: "LaravelCmsAdminPages",
    components: {
        ListItem,
        AddForm,
    },
    setup() {
        const router = useRouter();

        /**
         * Reactive Properties
         */
        const pages = ref([]);
        const loaded = ref(false);

        /**
         * Methods
         */
        async function fetchPageList() {
            let url =
                "/api/cms-pages?" +
                new URLSearchParams({
                    "include[]": ["template"],
                }).toString();
            const response = await fetch(url);
            const json = await response.json();
            pages.value = json.data;
            loaded.value = true;
        }

        async function onAdd(page) {
            const response = await fetch("/api/cms-pages", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(page),
            });

            const json = await response.json();

            if (!response.ok) {
                notify({
                    title: json.message,
                    type: "error",
                });
                return;
            }

            pages.value.push(json.data);

            notify({
                title: "New page created.",
                type: "success",
            });

            router.push("/pages/" + json.data.id);
        }

        async function onDelete(id) {
            const response = await fetch("/api/cms-pages/" + id, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
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
                title: "Page deleted.",
                type: "warn",
            });

            var indexToRemove = pages.value.map((item) => item.id).indexOf(id);
            ~indexToRemove && pages.value.splice(indexToRemove, 1);
        }

        fetchPageList();

        /**
         * Computed
         */
        const pagesSorted = computed(() => {
            return _sortBy(pages.value || [], (page) => {
                return page.name;
            });
        });

        return {
            pagesSorted,
            loaded,
            onAdd,
            onDelete,
        };
    },
};
</script>

<style>
</style>