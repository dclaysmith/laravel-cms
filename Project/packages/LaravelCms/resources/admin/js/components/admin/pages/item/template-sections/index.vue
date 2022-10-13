<template>
    <form>
        <fieldset>
            <list-item
                v-for="templateSection in templateSections"
                :key="templateSection.id"
                :template-section="templateSection"
                :components="components"
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
        return {};
    },
};
</script>

<style>
</style>