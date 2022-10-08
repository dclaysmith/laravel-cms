<template>
    <form>
        <fieldset>
            <legend>Add Item to Page</legend>
            <p>
                <label for="type">Select Component</label>
                <select name="type" id="type" v-model="component.type">
                    <option value="">Select Type</option>
                    <option value="new-text">HTML/Markdown</option>
                    <option value="new-view">Laravel View</option>
                    <template v-if="componentsSorted?.length">
                        <option value="">-- Existing --</option>
                        <option
                            v-for="component in componentsSorted"
                            :key="component.id"
                            :value="component.id"
                        >
                            {{ component.name }}
                        </option>
                    </template>
                </select>
            </p>

            <template v-if="templateSections?.length">
                <p>
                    <label for="cms_template_section_id"
                        >Template Section</label
                    >
                    <select
                        name="cms_template_section_id"
                        id="cms_template_section_id"
                        v-model="component.cms_template_section_id"
                    >
                        <option value="">Select</option>
                        <option
                            v-for="section in templateSections"
                            :key="section.id"
                            :value="section.id"
                        >
                            {{ section.name }}
                        </option>
                    </select>
                </p>
            </template>

            <!-- NEW PAGE -->
            <template v-if="'new-text' == component.type">
                <p>
                    <label for="html">Body</label>
                    <textarea name="html" id="html" v-model="component.html" />
                </p>
            </template>

            <!-- NEW LARAVEL VIEW-->
            <template v-if="'new-view' == component.type">
                ADD A LARAVEL VIEW COMPONENT</template
            >

            <p>
                <button :disabled="0">Cancel</button>
                <button style="float: right" :disabled="0">
                    Add Component
                </button>
            </p>
        </fieldset>
    </form>
</template>

<script>
import { ref, computed } from "vue";
import { sortBy as _sortBy } from "lodash";

export default {
    name: "LaravelCmsAdminPageAddComponentForm",
    props: ["templateSections", "globalComponents"],
    setup(props, { emit }) {
        const component = ref({});

        /**
         * Computed
         */
        const componentsSorted = computed(() => {
            return _sortBy(props.globalComponents || [], (component) => {
                return component.name;
            });
        });

        return { component, componentsSorted };
    },
};
</script>

<style>
</style>