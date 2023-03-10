<template>
    <fieldset>
        <div class="form-group">
            <label class="form-label" for="name">Name</label>
            <input
                class="form-input"
                type="text"
                name="name"
                id="name"
                v-model="page.name"
            />
        </div>
        <div class="form-group">
            <label class="form-label" for="path">Path</label>
            <input
                class="form-input"
                type="text"
                name="path"
                id="path"
                v-model="page.path"
            />
        </div>
        <div class="form-group" v-if="templates?.length">
            <label class="form-label" for="template">Template</label>
            <select
                class="form-select"
                name="template"
                id="template"
                v-model.number="page.cms_template_id"
            >
                <option
                    v-for="template in templates"
                    :key="template.id"
                    :value="template.id"
                >
                    {{ template.name }}
                </option>
            </select>
        </div>
    </fieldset>
</template>

<script>
import { ref } from "vue";

export default {
    name: "LaravelCmsAdminPageMainForm",
    props: ["page", "templates"],
    components: {},
    setup(props, { emit }) {
        return {};
    },
};
</script>

<style>
</style>