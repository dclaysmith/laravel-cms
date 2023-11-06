<template>
    <fieldset>
        <legend>Section: {{ templateSection.name }}</legend>
        <component-preview
            v-for="component in includedComponents"
            :key="component.id"
            :component="component"
            @edit="onEdit"
            @delete="onDelete"
        ></component-preview>
    </fieldset>
</template>

<script>
import { ref, computed } from "vue";
import ComponentPreview from "../component-preview.vue";
import { sortBy as _sortBy, filter as _filter, chain as _chain } from "lodash";

export default {
    name: "LaravelCmsAdminPageTemplateSection",
    props: ["templateSection", "components"],
    components: {
        ComponentPreview,
    },
    setup(props, { emit }) {
        /**
         * Methods
         */
        async function onEdit(component) {
            emit("select", component);
        }
        function onDelete(component) {
            emit("delete", component);
        }

        const includedComponents = computed(() => {
            const filtered = _filter(props.components, (component) => {
                return (
                    component.cms_template_section_id ==
                    props.templateSection.id
                );
            });
            return _sortBy(filtered, "sort_order");
        });

        return {
            includedComponents,
            onEdit,
            onDelete,
        };
    },
};
</script>

<style></style>
