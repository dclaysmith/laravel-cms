<template>
    <Suspense>
        <fieldset>
            <legend>Sections</legend>
            <fieldset>
                <legend>Sidebar</legend>
            </fieldset>
            <fieldset>
                <legend>Main</legend>
            </fieldset>
            <fieldset>
                <legend>Footer</legend>
            </fieldset>
        </fieldset>
    </Suspense>
</template>

<script>
import { ref, computed } from "vue";

export default {
    name: "LaravelCmsAdminPageTemplate",
    props: ["template"],
    setup() {
        return {};
    },
};
</script>

<style>
</style>