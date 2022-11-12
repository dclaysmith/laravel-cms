<template>{{ page }}</template>

<script>
import { ref } from "vue";

export default {
    name: "LaravelCmsAdminPagePreview",
    props: ["page"],
    components: {},
    setup(props, { emit }) {
        const page = ref(null);

        async function fetchPreview() {
            const response = await fetch("/api/cms-render/" + props.page.id, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "POST",
            });
            const json = await response.json();
            page.value = json.data;
        }

        fetchPreview();

        return { page };
    },
};
</script>

<style>
</style>