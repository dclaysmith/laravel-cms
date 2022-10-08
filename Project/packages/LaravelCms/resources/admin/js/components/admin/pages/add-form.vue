<template>
    <form @submit.prevent="onSubmit">
        <fieldset>
            <p>
                <label for="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    v-model="newPage.name"
                />
            </p>
            <p>
                <label for="slug">Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    v-model="newPage.title"
                />
            </p>
            <p>
                <label for="path">Path</label>
                <input
                    type="text"
                    name="path"
                    id="path"
                    v-model="newPage.path"
                />
            </p>
            <p><button :disabled="!valid">Add Page</button></p>
        </fieldset>
    </form>
</template>


<script>
import { ref, computed } from "vue";

export default {
    name: "LaravelCmsAdminPageAddForm",
    components: {},
    emits: ["add"],
    setup(props, { emit }) {
        const newPage = ref({});

        async function onSubmit() {
            if (!this.valid) {
                return;
            }
            emit("add", newPage.value);
            newPage.value = {};
        }

        /**
         * Updated
         */
        const valid = computed(() => {
            return (
                newPage.value.name != null &&
                newPage.value.title != null &&
                newPage.value.path != null
            );
        });

        return { newPage, onSubmit, valid };
    },
};
</script>