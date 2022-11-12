<template>PREVIEW OUTPUT</template>

<script>
import { ref } from "vue";

export default {
    name: "LaravelCmsAdminPagePreview",
    props: ["page"],
    components: {},
    setup(props, { emit }) {
        async function fetchPreview() {
            const response = await fetch("/api/cms-render/" + props.page.id, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "POST",
            });
            const json = await response.json();
        }

        fetchPreview();

        return {};
    },
};
</script>

<style>
</style>