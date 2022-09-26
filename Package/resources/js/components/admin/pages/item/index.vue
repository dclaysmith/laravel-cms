<template>
    <p><router-link to="/pages">Back</router-link></p>
    <form @submit.prevent="onSubmit">
        <Suspense>
            <fieldset v-if="page">
                <legend>Edit Page: {{ page.name }} #{{ page.id }}</legend>
                <p>
                    <label for="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        v-model="page.name"
                    />
                </p>
                <fieldset>
                    <legend>SEO</legend>
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
                </fieldset>
                <p>
                    <label for="template">Template</label>
                    <select
                        type="text"
                        name="template"
                        id="template"
                        v-model="page.template_id"
                    >
                        <option></option>
                        <option value="1">Blog Page</option>
                    </select>
                </p>
                <page-template
                    v-if="template"
                    :template="template"
                ></page-template>
                <p v-if="saveEnabled"><button>Update</button></p>
            </fieldset>
            <template #fallback> Loading... </template>
        </Suspense>
    </form>
</template>

<script>
import { ref, computed } from "vue";

import Template from "./template/index.vue";

export default {
    name: "LaravelCmsAdminPage",
    components: { PageTemplate: Template },
    props: ["id"],
    setup() {
        /**
         * Reactive Properties
         */
        const page = ref(null);
        const template = ref({ id: 1, name: "Blog Post" });
        const templates = ref(null);
        const pageOriginal = ref(null);

        /**
         * Updated
         */
        const saveEnabled = computed(() => {
            return JSON.stringify(pageOriginal) != JSON.stringify(page)
                ? true
                : false;
        });

        /**
         * Methods
         */
        async function fetchTemplateList() {
            const response = await fetch("/api/cms-templates");
            templates.value = await response.json();
        }
        async function fetchPage() {
            const response = await fetch("/api/cms-pages/" + this.id);
            page.value = await response.json();
            pageOriginal.value = JSON.parse(JSON.stringify(page));
        }
        async function onSubmit() {
            alert("submit");
        }

        Promise.all([fetchPage(), fetchTemplateList()]);

        return {
            page,
            template,
            templates,
            pageOriginal,
            saveEnabled,
            onSubmit,
        };
    },
};
</script>

<style>
</style>