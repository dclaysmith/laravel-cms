<template>
    <h2>Media</h2>
    <add-form @add="onAdd"></add-form>
    <table class="table" v-if="loaded && mediaSorted.length">
        <list-item
            v-for="media in mediaSorted"
            :key="media.id"
            :media="media"
            @delete="onDelete"
        ></list-item>
    </table>
    <p v-else-if="loaded">There is no uploaded media.</p>
    <p v-else>Loading...</p>
</template>

<script>
import { ref, computed } from "vue";
import { notify } from "@kyvg/vue3-notification";
import { sortBy as _sortBy } from "lodash";

import ListItem from "./list-item.vue";
import AddForm from "./add-form.vue";

export default {
    name: "LaravelCmsAdminMedia",
    components: {
        ListItem,
        AddForm,
    },
    setup(props, { emit }) {
        /**
         * Reactive Properties
         */
        const media = ref([]);
        const loaded = ref(false);

        /**
         * Methods
         */
        async function fetchMediaList() {
            const response = await fetch("/api/cms-media");
            const json = await response.json();
            media.value = json.data;
            loaded.value = true;
        }

        async function onAdd(item) {
            const formData = new FormData();
            formData.append("media", item.file);
            formData.append("caption", item.caption);
            const response = await fetch("/api/cms-media", {
                headers: {
                    // Accept: "application/json",
                    // "Content-Type": "application/json",
                    "X-XSRF-TOKEN": $cookies.get("XSRF-TOKEN"),
                },
                method: "POST",
                body: formData,
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
                title: "New media added.",
                type: "success",
            });

            media.value.push(Object.assign(item, json.data));
        }

        async function onDelete(id) {
            const response = await fetch("/api/cms-media/" + id, {
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
                title: "Media deleted.",
                type: "warn",
            });

            var indexToRemove = media.value.map((item) => item.id).indexOf(id);
            ~indexToRemove && media.value.splice(indexToRemove, 1);
        }

        fetchMediaList();

        /**
         * Updated
         */
        const mediaSorted = computed(() => {
            return _sortBy(media.value || [], (item) => {
                return item.created_at;
            });
        });

        return {
            mediaSorted,
            loaded,
            onAdd,
            onDelete,
        };
    },
};
</script>

<style></style>
