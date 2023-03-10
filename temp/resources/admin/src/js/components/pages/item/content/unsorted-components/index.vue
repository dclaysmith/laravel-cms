<template>
    <p>Unsorted Components</p>
    <table class="table mb-2">
        <component
            v-for="component in components"
            :key="component.id"
            :component="component"
            @edit="onEdit"
            @delete="onDelete"
        ></component>
    </table>
</template>

<script>
import { ref } from "vue";
import Component from "../component-preview.vue";

export default {
    name: "LaravelCmsAdminPageUnsortedComponents",
    components: {
        Component,
    },
    props: ["templateSections", "components"],
    emits: ["select", "delete"],
    setup(props, { emit }) {
        /**
         * Methods
         */
        function onEdit(component) {
            emit("select", component);
        }
        function onDelete(component) {
            emit("delete", component);
        }
        return { onEdit, onDelete };
    },
};
</script>

<style>
</style>