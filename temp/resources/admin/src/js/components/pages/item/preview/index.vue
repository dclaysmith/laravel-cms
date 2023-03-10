<template>{{ page }}</template>

<script>
import { ref } from "vue";

export default {
    name: "LaravelCmsAdminPagePreview",
    props: ["page"],
    components: {},
    setup(props, { emit }) {
        const page = ref(null);

        console.log("...get page data");

        async function fetchPreview() {
            const response = await fetch("/api/cms-render/" + props.page.id, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "X-XSRF-TOKEN": $cookies.get("XSRF-TOKEN"),
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