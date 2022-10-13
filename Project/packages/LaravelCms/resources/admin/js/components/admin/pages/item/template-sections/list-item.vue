<template>
    <fieldset>
        <legend>Section: {{ templateSection.name }}</legend>
        <component
            v-for="component in includedComponents"
            :key="component.id"
            :component="component"
        ></component>
    </fieldset>
</template>

<script>
import { ref, computed } from "vue";
import Component from "./component/index.vue";
import { sortBy as _sortBy, filter as _filter, chain as _chain } from "lodash";

export default {
    name: "LaravelCmsAdminPageTemplateSection",
    props: ["templateSection", "components"],
    components: {
        Component,
    },
    setup(props, { emit }) {
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
        };
    },
};
</script>

<style>
</style>