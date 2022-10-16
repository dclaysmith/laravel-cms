<template>
    <p><router-link to="/templates">&lt; Back</router-link></p>
    <h2>Edit Template</h2>
    <form @submit.prevent="onSubmit">
        <fieldset v-if="template">
            <div class="form-group form-inline mx-2">
                <label class="form-label" for="name">Name</label>
                <input
                    class="form-input"
                    type="text"
                    name="name"
                    id="name"
                    v-model="template.name"
                />
            </div>
            <div class="form-group form-inline mx-2">
                <label class="form-label" for="identifier">Identifier</label>
                <input
                    class="form-input"
                    type="text"
                    name="identifier"
                    id="identifier"
                    v-model="template.identifier"
                />
            </div>
            <div class="form-group form-inline mx-2">
                <label class="form-label" for="description">Description</label>
                <input
                    class="form-input"
                    type="text"
                    name="description"
                    id="description"
                    v-model="template.description"
                />
            </div>
            <button class="btn btn-link mx-2" :disabled="!saveEnabled">
                Update
            </button>
        </fieldset>
    </form>
    <h2>Template Sections</h2>
    <form>
        <template-sections :template-id="id"></template-sections>
    </form>
</template>

<script>
import { ref, computed } from "vue";
import { notify } from "@kyvg/vue3-notification";

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

            if (!response.ok) {
                notify({
                    title: json.message,
                    type: "error",
                });
                return;
            }

            template.value = json.data;
            templateOriginal.value = Object.assign({}, template.value);

            notify({
                title: "Template updated.",
                type: "success",
            });
        }

        fetchTemplate();

        /**
         * Computed Properties
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