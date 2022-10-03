<template>
    <p><router-link to="/templates">Back</router-link></p>
    <form @submit.prevent="onSubmit">
        <fieldset v-if="template">
            <legend>
                Edit Template: {{ template.name }} #{{ template.id }}
            </legend>
            <p>
                <label for="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    v-model="template.name"
                />
            </p>
            <p>
                <label for="slug">Slug</label>
                <input
                    type="text"
                    name="slug"
                    id="slug"
                    v-model="template.slug"
                />
            </p>
            <p>
                <label for="body">Body</label>
                <input
                    type="text"
                    name="body"
                    id="body"
                    v-model="template.body"
                />
            </p>
            <p v-if="saveEnabled"><button>Update</button></p>
        </fieldset>
    </form>
    <template-sections></template-sections>
</template>

<script>
import { ref, computed } from "vue";
import TemplateSections from "./sections/index.vue";

export default {
    name: "LaravelCmsAdminTemplate",
    components: { TemplateSections },
    props: ["id"],
    setup(props) {
        /**
         * Reactive Properties
         */
        const template = ref(null);
        const templateOriginal = ref(null);

        /**
         * Methods
         */
        async function fetchTemplate() {
            const response = await fetch("/api/cms-templates/" + props.id);
            const json = await response.json();
            template.value = json.data;
            templateOriginal.value = Object.assign({}, template.value);
        }
        async function onSubmit() {
            const response = await fetch("/api/cms-templates/" + props.id, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "PUT",
                body: JSON.stringify(template.value),
            });
            const json = await response.json();
            template.value = json.data;
            templateOriginal.value = Object.assign({}, template.value);
        }

        fetchTemplate();

        /**
         * Updated
         */
        const saveEnabled = computed(() => {
            return (
                JSON.stringify(templateOriginal.value) !=
                JSON.stringify(template.value)
            );
        });

        return { template, onSubmit, saveEnabled };
    },
};
</script>

<style>
</style>