<template>
    <p><router-link to="/pages">&lt; Back</router-link></p>
    <template v-if="page">
        <h2>Edit Page</h2>
        <ul class="tab" style="margin-bottom: 0.5rem">
            <li class="tab-item" :class="{ active: tab == 'main' || !tab }">
                <a href="#" @click.prevent="tab = 'main'">Main</a>
            </li>
            <li class="tab-item" :class="{ active: tab == 'seo' }">
                <a href="#" @click.prevent="tab = 'seo'">SEO</a>
            </li>
            <li class="tab-item" :class="{ active: tab == 'content' }">
                <a href="#" @click.prevent="tab = 'content'">Content</a>
            </li>
            <li class="tab-item" :class="{ active: tab == 'preview' }">
                <a href="#" @click.prevent="tab = 'preview'">Preview</a>
            </li>
        </ul>
        <div class="container">
            <div class="columns">
                <div class="column col-6">
                    <form @submit.prevent="onSubmit">
                        <fieldset v-show="'main' == tab || !tab">
                            <div class="form-group">
                                <label class="form-label" for="name"
                                    >Name</label
                                >
                                <input
                                    class="form-input"
                                    type="text"
                                    name="name"
                                    id="name"
                                    v-model="page.name"
                                />
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="path"
                                    >Path</label
                                >
                                <input
                                    class="form-input"
                                    type="text"
                                    name="path"
                                    id="path"
                                    v-model="page.path"
                                />
                            </div>
                            <div class="form-group" v-if="templates.length">
                                <label class="form-label" for="template"
                                    >Template</label
                                >
                                <select
                                    class="form-select"
                                    name="template"
                                    id="template"
                                    v-model.number="page.cms_template_id"
                                >
                                    <option
                                        v-for="template in templates"
                                        :key="template.id"
                                        :value="template.id"
                                    >
                                        {{ template.name }}
                                    </option>
                                </select>
                            </div>
                            <button
                                class="btn btn-primary"
                                :disabled="!saveEnabled"
                            >
                                Update
                            </button>
                        </fieldset>
                        <fieldset v-show="'seo' == tab">
                            <div class="form-group">
                                <label class="form-label" for="title"
                                    >Title</label
                                >
                                <input
                                    class="form-input"
                                    type="text"
                                    name="title"
                                    id="title"
                                    v-model="page.title"
                                />
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="keywords"
                                    >Meta Keywords</label
                                >
                                <input
                                    class="form-input"
                                    type="text"
                                    name="meta_keywords"
                                    id="meta_keywords"
                                    v-model="page.meta_keywords"
                                />
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="keywords"
                                    >Meta Description</label
                                >
                                <textarea
                                    class="form-input"
                                    name="meta_description"
                                    id="meta_description"
                                    v-model="page.meta_description"
                                />
                            </div>
                            <button
                                class="btn btn-primary"
                                :disabled="!saveEnabled"
                            >
                                Update
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
        <template v-if="'content' == tab">
            <div class="container">
                <div class="columns">
                    <div class="column col-6">
                        <unsorted-components
                            v-if="unsortedComponents.length > 0"
                            :template-sections="
                                page?.template?.template_sections
                            "
                            :components="unsortedComponents"
                            @select="selectComponent"
                            @delete="deleteComponent"
                        ></unsorted-components>
                        <template-sections
                            v-if="displayTemplate"
                            :template-sections="
                                page?.template?.template_sections
                            "
                            :components="pageComponents"
                            @select="selectComponent"
                            @delete="deleteComponent"
                        ></template-sections>
                    </div>
                    <div class="column col-6">
                        <edit-component-form
                            v-if="selectedComponent"
                            :component="selectedComponent"
                            :template-sections="
                                page?.template?.template_sections
                            "
                            @update="onUpdateComponent"
                            >EDIT</edit-component-form
                        >
                        <add-component-form
                            v-else
                            v-if="page?.template?.template_sections"
                            :template-sections="
                                page?.template?.template_sections
                            "
                            :global-components="globalComponents"
                            @add="onAddComponent"
                        ></add-component-form>
                    </div>
                </div>
            </div>
        </template>
    </template>
</template>

<script>
import { ref, computed, watch } from "vue";
import { notify } from "@kyvg/vue3-notification";
import { sortBy as _sortBy, filter as _filter, chain as _chain } from "lodash";

import UnsortedComponents from "./unsorted-components/index.vue";
import TemplateSections from "./template-sections/index.vue";
import AddComponentForm from "./add-component-form.vue";
import EditComponentForm from "./edit-component-form.vue";

export default {
    name: "LaravelCmsAdminPage",
    components: {
        TemplateSections,
        UnsortedComponents,
        AddComponentForm,
        EditComponentForm,
    },
    props: ["id"],
    setup(props) {
        /**
         * Reactive Properties
         */
        const page = ref(null);
        const tab = ref(null);
        const pageOriginal = ref(null);
        const templates = ref([]);
        const pageComponents = ref([]);
        const globalComponents = ref([]);
        const selectedComponent = ref(null);

        /**
         * Methods
         */
        async function fetchPage() {
            const response = await fetch("/api/cms-pages/" + props.id);
            const json = await response.json();
            page.value = json.data;
            pageOriginal.value = Object.assign({}, page.value);
            pageComponents.value = json.data?.components || [];
        }
        async function fetchTemplateList() {
            const response = await fetch("/api/cms-templates");
            const json = await response.json();
            templates.value = json.data;
        }
        async function fetchGlobalComponents() {
            let url =
                "/api/cms-components?" +
                new URLSearchParams({
                    "q[]": ["is_global[eq]=TRUE"],
                }).toString();
            const response = await fetch(url);
            const json = await response.json();
            globalComponents.value = json.data;
        }

        function selectComponent(component) {
            selectedComponent.value = component;
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

        async function onAddComponent(component) {
            /**
             * Add a pre-existing global component
             */
            if (!isNaN(component.type)) {
                const response = await fetch("/api/cms-component-page", {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                    body: JSON.stringify({
                        cms_page_id: props.id,
                        cms_component_id: component.type,
                        cms_template_section_id:
                            component.cms_template_section_id,
                    }),
                });

                const json = await response.json();

                if (!response.ok) {
                    notify({
                        title: json.message,
                        type: "error",
                    });
                    return;
                }

                pageComponents.value.push(
                    Object.assign(component, json.data.component)
                );

                notify({
                    title: "New component added.",
                    type: "success",
                });

                return;
            }

            /**
             * Append some data
             */
            component.cms_page_id = props.id;
            component.is_global = false;

            const response = await fetch("/api/cms-components", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(component),
            });

            const json = await response.json();

            if (!response.ok) {
                notify({
                    title: json.message,
                    type: "error",
                });
                return;
            }

            pageComponents.value.push(Object.assign(component, json.data));

            notify({
                title: "New component added.",
                type: "success",
            });
        }

        async function deleteComponent(component) {
            const response = await fetch("/api/cms-component-page", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "DELETE",
                body: JSON.stringify({
                    cms_page_id: props.id,
                    cms_component_id: component.id,
                }),
            });

            const json = await response.json();

            if (!response.ok) {
                notify({
                    title: json.message,
                    type: "error",
                });
                return;
            }

            pageComponents.value.splice(
                pageComponents.value.map((e) => e.id).indexOf(component.id),
                1
            );

            notify({
                title: "Component removed.",
                type: "success",
            });
        }

        async function onUpdateComponent(component) {
            /**
             * Append some data
             */
            component.cms_page_id = props.id;

            const response = await fetch(
                "/api/cms-components/" + component.id,
                {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    method: "PUT",
                    body: JSON.stringify(component),
                }
            );

            const json = await response.json();

            if (!response.ok) {
                notify({
                    title: json.message,
                    type: "error",
                });
                return;
            }

            pageComponents.value.splice(
                pageComponents.value.map((e) => e.id).indexOf(component.id),
                1,
                Object.assign(component, json.data)
            );

            notify({
                title: "Component update.",
                type: "success",
            });
        }

        Promise.all([
            fetchPage(),
            fetchGlobalComponents(),
            fetchTemplateList(),
        ]);

        /**
         * Computed
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

        const unsortedComponents = computed(() => {
            const templateSections =
                page.value.template?.template_sections || [];
            const templateSectionIds = templateSections.map(function (obj) {
                return obj.id;
            });
            const filtered = _filter(pageComponents.value, (component) => {
                return (
                    !component.cms_template_section_id ||
                    -1 ==
                        templateSectionIds.indexOf(
                            component.cms_template_section_id
                        )
                );
            });
            return _sortBy(filtered, "sort_order");
        });

        return {
            tab,
            page,
            selectedComponent,
            templates,
            pageComponents,
            globalComponents,
            unsortedComponents,
            saveEnabled,
            displayTemplate,
            selectComponent,
            onSubmit,
            onAddComponent,
            onUpdateComponent,
            deleteComponent,
        };
    },
};
</script>

<style>
</style>