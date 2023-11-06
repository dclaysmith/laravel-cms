<template>
    <form @submit.prevent="onSubmit">
        <fieldset>
            <div class="form-group form-inline mx-2">
                <label class="form-label" for="name">Name</label>
                <input
                    class="form-input"
                    type="text"
                    name="name"
                    id="name"
                    v-model="newUser.name"
                />
            </div>
            <div class="form-group form-inline mx-2">
                <label class="form-label" for="title">Title</label>
                <input
                    class="form-input"
                    type="text"
                    name="title"
                    id="title"
                    v-model="newUser.title"
                />
            </div>
            <button class="btn btn-primary mx-2" :disabled="!valid">
                Add User
            </button>
        </fieldset>
    </form>
</template>

<script>
import { ref, computed } from "vue";

export default {
    name: "LaravelCmsAdminUserAddForm",
    components: {},
    emits: ["add"],
    setup(props, { emit }) {
        const newUser = ref({});

        async function onSubmit() {
            if (!this.valid) {
                return;
            }
            emit("add", newUser.value);
            newUser.value = {};
        }

        /**
         * Updated
         */
        const valid = computed(() => {
            return newUser.value.name != null && newUser.value.title != null;
        });

        return { newUser, onSubmit, valid };
    },
};
</script>
