<template>
    <add-form @add="onAdd"></add-form>
    <table class="table" v-if="loaded && pathsSorted.length">
        <tr>
            <th>Id</th>
            <th colspan="2">Path</th>
        </tr>
        <list-item
            v-for="path in pathsSorted"
            :key="path.id"
            :path="path"
            @delete="onDelete"
        ></list-item>
    </table>
    <p v-else-if="loaded">There are no paths.</p>
    <p v-else>Loading...</p>
</template>

<script>
import { ref, computed } from "vue";
import { notify } from "@kyvg/vue3-notification";
import { sortBy as _sortBy } from "lodash";

import ListItem from "./list-item.vue";
import AddForm from "./add-form.vue";

export default {
    name: "LaravelCmsAdminPaths",
    components: {
        ListItem,
        AddForm,
    },
    props: ["page"],
    setup(props, { emit }) {
        /**
         * Reactive Properties
         */
        const paths = ref([]);
        const loaded = ref(false);

        /**
         * Methods
         */
        async function fetchPathList() {
            const response = await fetch(
                "/api/cms-paths?cms_page_id=" + props.page.id
            );
            const json = await response.json();
            paths.value = json.data;
            loaded.value = true;
        }

        async function onAdd(path) {
            path.cms_page_id = props.page.id;

            const response = await fetch("/api/cms-paths", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "X-XSRF-TOKEN": $cookies.get("XSRF-TOKEN"),
                },
                method: "POST",
                body: JSON.stringify(path),
            });

            const json = await response.json();

            if (!response.ok) {
                notify({
                    title: json.message,
                    type: "error",
                });
                return;
            }

            notify({
                title: "New path added.",
                type: "success",
            });

            paths.value.push(Object.assign(path, json.data));
        }

        async function onDelete(id) {
            const response = await fetch("/api/cms-paths/" + id, {
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
                title: "Path deleted.",
                type: "warn",
            });

            var indexToRemove = paths.value.map((item) => item.id).indexOf(id);
            ~indexToRemove && paths.value.splice(indexToRemove, 1);
        }

        fetchPathList();

        /**
         * Updated
         */
        const pathsSorted = computed(() => {
            return _sortBy(paths.value || [], (path) => {
                return path.path;
            });
        });

        return {
            pathsSorted,
            loaded,
            onAdd,
            onDelete,
        };
    },
};
</script>

<style>
</style>