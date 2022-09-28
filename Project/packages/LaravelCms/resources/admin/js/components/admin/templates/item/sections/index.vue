<template>
    <fieldset>
        <legend>Sections</legend>
        <p><a @click.prevent="onAdd">Add Section</a></p>
        <list-item
            v-for="section in sections"
            :key="section.id"
            :section="section"
            @delete="onDelete"
            @save="onSave"
        ></list-item>
    </fieldset>
</template>

<script>
import { ref } from "vue";

import ListItem from "./list-item.vue";

export default {
    name: "LaravelCmsAdminTemplateSections",
    components: {
        ListItem,
    },
    props: ["id"],
    setup(props) {
        /**
         * Reactive Properties
         */
        const sections = ref([]);

        /**
         * Methods
         */
        async function fetchSectionList() {
            const response = await fetch("/api/cms-template-sections");
            sections.value = await response.json();
        }
        async function onDelete(id) {
            // fetch / DELETE
            // remove from array
            alert("delete it!");
        }
        async function onSave(section) {
            // fetch / DELETE
            // remove from array
            alert("save it!");
        }
        async function onAdd() {
            alert("create it");
            sections.value.push({ id: 44, name: "New Section" });
        }

        fetchSectionList();

        return {
            sections,
            onDelete,
            onSave,
            onAdd,
        };
    },
};
</script>

<style>
</style>