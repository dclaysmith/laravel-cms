<template>
    <div v-html="content"></div>
</template>

<script>
import { ref, computed } from "vue";

export default {
    name: "LaravelCmsAdminPagePreviewContent",
    props: ["pageId"],
    async setup(props, { emit }) {
        const page = ref(null);

        async function fetchPreview() {
            const response = await fetch("/api/cms-render", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "X-XSRF-TOKEN": $cookies.get("XSRF-TOKEN"),
                },
                method: "POST",
                body: JSON.stringify({ cms_page_id: props.pageId }),
            });
            const json = await response.json();
            page.value = json.data;
        }

        await fetchPreview();

        /**
         * Computed
         */
         const content = computed(() => {
            return page.value.html;
         });

        return { content };
    },
};
</script>

<style>
</style>