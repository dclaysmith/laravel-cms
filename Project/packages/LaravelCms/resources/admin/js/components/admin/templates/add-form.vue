<template>
    <form @submit.prevent="onSubmit">
        <fieldset>
            <legend>Add Template</legend>
            <p>
                <label for="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    v-model="newTemplate.name"
                />
            </p>
            <p>
                <label for="slug">Slug</label>
                <input
                    type="text"
                    name="slug"
                    id="slug"
                    v-model="newTemplate.slug"
                />
            </p>
            <p v-if="valid"><button>Add Template</button></p>
        </fieldset>
    </form>
</template>


<script>
import { ref, computed } from "vue";

export default {
    name: "LaravelCmsAdminTemplateAddForm",
    components: {},
    emits: ["created"],
    setup(props, { emit }) {
        const newTemplate = ref({});

        async function onSubmit() {
            if (!this.valid) {
                return;
            }
            const response = await fetch("/api/cms-templates", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(newTemplate.value),
            });
            const json = await response.json();
            emit("created", json.data);
        }

        /**
         * Updated
         */
        const valid = computed(() => {
            return (
                newTemplate.value.name != null && newTemplate.value.slug != null
            );
        });

        return { newTemplate, onSubmit, valid };
    },
};
</script>