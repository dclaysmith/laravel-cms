<template>
    <p><router-link to="/pages">&lt; Back</router-link></p>
    <h2>Edit Page</h2>
    <form @submit.prevent="onSubmit">
        <fieldset v-if="page">
            <p>
                <label for="name">Name</label>
                <input type="text" name="name" id="name" v-model="page.name" />
            </p>
            <p>
                <label for="title">Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    v-model="page.title"
                />
            </p>
            <p>
                <label for="keywords">Meta Keywords</label>
                <input
                    type="text"
                    name="meta_keywords"
                    id="meta_keywords"
                    v-model="page.meta_keywords"
                />
            </p>
            <p>
                <label for="keywords">Meta Description</label>
                <textarea
                    name="meta_description"
                    id="meta_description"
                    v-model="page.meta_description"
                />
            </p>
            <p v-if="templates.length">
                <label for="template">Template</label>
                <select
                    name="template"
                    id="template"
                    v-model.number="page.cms_template_id"
                >
                    <option></option>
                    <option
                        v-for="template in templates"
                        :key="template.id"
                        :value="template.id"
                    >
                        {{ template.name }}
                    </option>
                </select>
            </p>
            <p v-if="saveEnabled"><button>Update</button></p>
        </fieldset>
    </form>
    <add-component-form
        :template-sections="page?.template?.template_sections"
        :global-components="components"
    ></add-component-form>
    <template-sections
        v-if="displayTemplate"
        :template-sections="page?.template?.template_sections"
    ></template-sections>
</template>

<script>
import { ref, computed } from "vue";
import { notify } from "@kyvg/vue3-notification";

import TemplateSections from "./template-sections/index.vue";
import AddComponentForm from "./add-component-form.vue";

export default {
    name: "LaravelCmsAdminPage",
    components: { TemplateSections, AddComponentForm },
    props: ["id"],
    setup(props) {
        /**
         * Reactive Properties
         */
        const page = ref(null);
        const pageOriginal = ref(null);
        const templates = ref([]);
        const components = ref([]);

        /**
         * Methods
         */
        async function fetchTemplateList() {
            const response = await fetch("/api/cms-templates");
            const json = await response.json();
            templates.value = json.data;
        }

        async function fetchPage() {
            const response = await fetch("/api/cms-pages/" + props.id);
            const json = await response.json();
            page.value = json.data;
            pageOriginal.value = Object.assign({}, page.value);
        }

        async function onSubmit() {
            const response = await fetch("/api/cms-pages/" + props.id, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "PUT",
                body: JSON.stringify(page.value),
            });

            const json = await response.json();

            if (!response.ok) {
                notify({
                    title: json.message,
                    type: "error",
                });
                return;
            }

            page.value = json.data;
            pageOriginal.value = Object.assign({}, page.value);

            notify({
                title: "Page updated.",
                type: "success",
            });
        }

        Promise.all([fetchPage(), fetchTemplateList()]);

        /**
         * Updated
         */
        const saveEnabled = computed(() => {
            return (
                JSON.stringify(pageOriginal.value) != JSON.stringify(page.value)
            );
        });

        const displayTemplate = computed(() => {
            return (
                pageOriginal.value.cms_template_id != null &&
                page.value.cms_template_id == pageOriginal.value.cms_template_id
            );
        });

        return {
            page,
            templates,
            components,
            saveEnabled,
            displayTemplate,
            onSubmit,
        };
    },
};
</script>

<style>
</style>