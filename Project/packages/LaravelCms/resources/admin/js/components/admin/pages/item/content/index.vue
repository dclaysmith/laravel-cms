<template>
    <div class="container">
        <div class="columns">
            <div class="column col-6">
                <unsorted-components
                    v-if="unsortedComponents.length > 0"
                    :template-sections="page?.template?.template_sections"
                    :components="unsortedComponents"
                    @select="selectComponent"
                    @delete="deleteComponent"
                ></unsorted-components>
                <template-sections
                    :template-sections="page?.template?.template_sections"
                    :components="page?.components"
                    @select="selectComponent"
                    @delete="deleteComponent"
                ></template-sections>
            </div>
            <div class="column col-6">
                <component-edit-form
                    v-if="selectedComponent"
                    :component="selectedComponent"
                    :template-sections="page?.template?.template_sections"
                    @update="onUpdateComponent"
                    >EDIT</component-edit-form
                >
                <component-add-form
                    v-else
                    v-if="page?.template?.template_sections"
                    :template-sections="page?.template?.template_sections"
                    :global-components="globalComponents"
                    @add="onAddComponent"
                ></component-add-form>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed } from "vue";
import { notify } from "@kyvg/vue3-notification";

import UnsortedComponents from "./unsorted-components/index.vue";
import TemplateSections from "./template-sections/index.vue";
import ComponentAddForm from "./component-add-form.vue";
import ComponentEditForm from "./component-edit-form.vue";
import { sortBy as _sortBy, filter as _filter, chain as _chain } from "lodash";

export default {
    name: "LaravelCmsAdminPageContent",
    props: ["page"],
    components: {
        UnsortedComponents,
        TemplateSections,
        ComponentAddForm,
        ComponentEditForm,
    },
    setup(props, { emit }) {
        const pageComponents = ref(props.page.components);
        const globalComponents = ref([]);
        const selectedComponent = ref(null);

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
                        cms_page_id: props.page.id,
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
            component.cms_page_id = props.page.id;
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

        async function deleteComponent(component) {
            const response = await fetch("/api/cms-component-page", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "DELETE",
                body: JSON.stringify({
                    cms_page_id: props.page.id,
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
            component.cms_page_id = props.page.id;

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

        const unsortedComponents = computed(() => {
            const templateSections =
                props.page.template?.template_sections || [];
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

        function selectComponent(component) {
            selectedComponent.value = component;
        }

        Promise.all([fetchGlobalComponents()]);

        /**
         * Computed
         */
        return {
            selectedComponent,
            deleteComponent,
            pageComponents,
            globalComponents,
            unsortedComponents,
            selectComponent,
            onAddComponent,
            onUpdateComponent,
        };
    },
};
</script>

<style>
</style>