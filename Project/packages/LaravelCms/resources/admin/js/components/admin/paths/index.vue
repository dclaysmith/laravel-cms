<template>
    <h2>Paths</h2>
    <table class="table" v-if="loaded && pathsSorted.length">
        <tr>
            <th>Id</th>
            <th>Page Id</th>
            <th>Path</th>
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

export default {
    name: "LaravelCmsAdminPaths",
    components: {
        ListItem,
    },
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
            const response = await fetch("/api/cms-paths");
            const json = await response.json();
            paths.value = json.data;
            loaded.value = true;
        }

        async function onDelete(id) {
            const response = await fetch("/api/cms-paths/" + id, {
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
            onDelete,
        };
    },
};
</script>

<style>
</style>