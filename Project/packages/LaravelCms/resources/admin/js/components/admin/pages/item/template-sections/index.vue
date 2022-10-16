<template>
    <form>
        <fieldset>
            <list-item
                v-for="templateSection in templateSections"
                :key="templateSection.id"
                :template-section="templateSection"
                :components="components"
                @select="onSelect"
                @delete="onDelete"
            ></list-item>
        </fieldset>
    </form>
</template>

<script>
import { ref } from "vue";
import ListItem from "./list-item.vue";

export default {
    name: "LaravelCmsAdminPageTemplateSections",
    components: {
        ListItem,
    },
    props: ["templateSections", "components"],
    setup(props, { emit }) {
        /**
         * Methods
         */
        async function onSelect(component) {
            emit("select", component);
        }
        function onDelete(component) {
            emit("delete", component);
        }

        return { onSelect, onDelete };
    },
};
</script>

<style>
</style>