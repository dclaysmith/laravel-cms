<template>
    <p><router-link to="/users">&lt; Back</router-link></p>
    <h2>Edit User</h2>
    <form @submit.prevent="onSubmit" v-if="user">
        <fieldset>
            <div class="form-group form-inline mx-2">
                <label class="form-label" for="name">Name</label>
                <input
                    class="form-input"
                    type="text"
                    name="name"
                    id="name"
                    v-model="user.name"
                />
            </div>
            <div class="form-group form-inline mx-2">
                <label class="form-label" for="title">Title</label>
                <input
                    class="form-input"
                    type="text"
                    name="title"
                    id="title"
                    v-model="user.title"
                />
            </div>
            <div class="form-group form-inline mx-2">
                <label class="form-label" for="avatar">Avatar</label>
                <input
                    class="form-input"
                    type="text"
                    name="avatar"
                    id="avatar"
                    v-model="user.avatar"
                />
            </div>
        </fieldset>
        <fieldset>
            <button class="btn btn-link mx-2" :disabled="!saveEnabled">
                Update
            </button>
        </fieldset>
    </form>
</template>

<script>
import { ref, computed } from "vue";
import { notify } from "@kyvg/vue3-notification";

export default {
    name: "LaravelCmsAdminUser",
    components: {},
    props: ["id"],
    setup(props) {
        /**
         * Reactive Properties
         */
        const user = ref(null);
        const userOriginal = ref(null);

        /**
         * Methods
         */
        async function fetchUser() {
            const response = await fetch("/api/cms-users/" + props.id);
            const json = await response.json();
            user.value = json.data;
            userOriginal.value = Object.assign({}, user.value);
        }

        async function onSubmit() {
            const response = await fetch("/api/cms-users/" + props.id, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "X-XSRF-TOKEN": $cookies.get("XSRF-TOKEN"),
                },
                method: "PUT",
                body: JSON.stringify(user.value),
            });

            const json = await response.json();

            if (!response.ok) {
                notify({
                    title: json.message,
                    type: "error",
                });
                return;
            }

            user.value = json.data;
            userOriginal.value = Object.assign({}, user.value);

            notify({
                title: "User updated.",
                type: "success",
            });
        }

        fetchUser();

        /**
         * Computed Properties
         */
        const saveEnabled = computed(() => {
            return (
                JSON.stringify(userOriginal.value) != JSON.stringify(user.value)
            );
        });

        return { user, onSubmit, saveEnabled };
    },
};
</script>

<style></style>
