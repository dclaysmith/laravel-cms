<template>
    <fieldset>
        <div class="form-group">
            <label class="form-label" for="title">Title</label>
            <input
                class="form-input"
                type="text"
                name="title"
                id="title"
                v-model="page.title"
            />
        </div>
        <div class="form-group">
            <label class="form-label" for="keywords">Meta Keywords</label>
            <input
                class="form-input"
                type="text"
                name="meta_keywords"
                id="meta_keywords"
                v-model="page.meta_keywords"
            />
        </div>
        <div class="form-group">
            <label class="form-label" for="keywords">Meta Description</label>
            <textarea
                class="form-input"
                name="meta_description"
                id="meta_description"
                v-model="page.meta_description"
            />
        </div>
    </fieldset>
</template>

<script>
import { ref } from "vue";

export default {
    name: "LaravelCmsAdminPageSeoForm",
    props: ["page"],
    components: {},
    setup(props, { emit }) {
        return {};
    },
};
</script>

<style>
</style>