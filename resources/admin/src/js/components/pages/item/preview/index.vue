<template>
    <div>{{ page }}</div>
</template>

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
            const response = await fetch("/api/cms-render", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "X-XSRF-TOKEN": $cookies.get("XSRF-TOKEN"),
                },
                method: "POST",
                body: JSON.stringify({ cms_page_id: props.page.id }),
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