<template>
    <form @submit.prevent="onSubmit">
        <fieldset>
            <legend>Add Section</legend>
            <div class="form-group form-inline mx-2">
                <label class="form-label" for="name">Name</label>
                <input
                    class="form-input"
                    type="text"
                    name="name"
                    id="name"
                    v-model="newTemplateSection.name"
                    required
                />
            </div>
            <div class="form-group form-inline mx-2">
                <label class="form-label" for="slug">Slug</label>
                <input
                    class="form-input"
                    type="text"
                    name="slug"
                    id="slug"
                    v-model="newTemplateSection.slug"
                />
            </div>
            <button class="btn btn-link mx-2" :disabled="!valid">
                Add Template Section
            </button>
        </fieldset>
    </form>
</template>


<script>
import { ref, computed } from "vue";

export default {
    name: "LaravelCmsAdminTemplateSectionAddForm",
    components: {},
    emits: ["add"],
    setup(props, { emit }) {
        const newTemplateSection = ref({});

        async function onSubmit() {
            if (!this.valid) {
                return;
            }
            emit("add", newTemplateSection.value);
            newTemplateSection.value = {};
        }

        /**
         * Updated
         */
        const valid = computed(() => {
            return (
                newTemplateSection.value.name != null &&
                newTemplateSection.value.slug != null
            );
        });

        return { newTemplateSection, onSubmit, valid };
    },
};
</script>