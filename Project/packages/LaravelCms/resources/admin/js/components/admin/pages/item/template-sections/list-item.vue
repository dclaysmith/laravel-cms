<template>
    <fieldset>
        <legend>{{ templateSection.name }}</legend>
    </fieldset>
</template>

<script>
import { ref } from "vue";

export default {
    name: "LaravelCmsAdminPageTemplateSection",
    props: ["templateSection"],
    setup(props, { emit }) {
        return {};
    },
};
</script>

<style>
</style>