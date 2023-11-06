<template>
    <h2>Add User</h2>
    <add-form @add="onAdd"></add-form>
    <h2>Existing Users</h2>
    <table class="table" v-if="loaded && usersSorted.length">
        <list-item
            v-for="user in usersSorted"
            :key="user.id"
            :user="user"
            @delete="onDelete"
        ></list-item>
    </table>
    <p v-else-if="loaded">There are no users.</p>
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
    name: "LaravelCmsAdminUsers",
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
        const users = ref([]);
        const loaded = ref(false);

        /**
         * Methods
         */
        async function fetchUserList() {
            const response = await fetch("/api/cms-users");
            const json = await response.json();
            users.value = json.data;
            loaded.value = true;
        }

        async function onAdd(user) {
            const response = await fetch("/api/cms-users", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "X-XSRF-TOKEN": $cookies.get("XSRF-TOKEN"),
                },
                method: "POST",
                body: JSON.stringify(user),
            });

            const json = await response.json();

            if (!response.ok) {
                notify({
                    title: json.message,
                    type: "error",
                });
                return;
            }

            users.value.push(json.data);

            notify({
                title: "New user created.",
                type: "success",
            });

            router.push("/users/" + json.data.id);
        }

        async function onDelete(id) {
            const response = await fetch("/api/cms-users/" + id, {
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
                title: "User deleted.",
                type: "warn",
            });

            var indexToRemove = users.value.map((item) => item.id).indexOf(id);
            ~indexToRemove && users.value.splice(indexToRemove, 1);
        }

        fetchUserList();

        /**
         * Updated
         */
        const usersSorted = computed(() => {
            return _sortBy(users.value || [], (user) => {
                return user.name;
            });
        });

        return {
            usersSorted,
            loaded,
            onAdd,
            onDelete,
        };
    },
};
</script>

<style></style>
