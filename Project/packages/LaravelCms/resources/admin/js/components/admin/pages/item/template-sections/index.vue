<template>
    <form>
        <fieldset>
            <legend>Sections</legend>
            <list-item
                v-for="templateSection in templateSections"
                :key="templateSection.id"
                :template-section="templateSection"
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
        return {};
    },
};
</script>

<style>
</style>