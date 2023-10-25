<template>
    <Suspense>
        <page-content :page-id="page.id"></page-content>
    </Suspense>
</template>

<script>
import { computed } from "vue";
import PageContent from "./content.vue"; 

export default {
    name: "LaravelCmsAdminPagePreviewContent",
    props: ["page"],    
    components: { PageContent },
    setup(props, { emit }) {
        return {   };
    },
};
</script>

<style>
</style>