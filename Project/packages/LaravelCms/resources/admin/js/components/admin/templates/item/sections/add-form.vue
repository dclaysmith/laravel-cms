<template>
    <form @submit.prevent="onSubmit">
        <fieldset>
            <legend>Add Section</legend>
            <p>
                <label for="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    v-model="newTemplateSection.name"
                    required
                />
            </p>
            <p>
                <label for="slug">Slug</label>
                <input
                    type="text"
                    name="slug"
                    id="slug"
                    v-model="newTemplateSection.slug"
                />
            </p>
            <p><button :disabled="!valid">Add Template Section</button></p>
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