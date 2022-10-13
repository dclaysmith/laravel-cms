<template>
    <form @submit.prevent="onSubmit">
        <fieldset>
            <div class="form-group form-inline mx-2">
                <label class="form-label" for="name">Name</label>
                <input
                    class="form-input"
                    type="text"
                    name="name"
                    id="name"
                    v-model="newTemplate.name"
                />
            </div>
            <div class="form-group form-inline mx-2">
                <label class="form-label" for="slug">Slug</label>
                <input
                    class="form-input"
                    type="text"
                    name="slug"
                    id="slug"
                    v-model="newTemplate.slug"
                />
            </div>
            <button class="btn btn-primary mx-2" :disabled="!valid">
                Add Template
            </button>
        </fieldset>
    </form>
</template>


<script>
import { ref, computed } from "vue";

export default {
    name: "LaravelCmsAdminTemplateAddForm",
    components: {},
    emits: ["add"],
    setup(props, { emit }) {
        const newTemplate = ref({});

        async function onSubmit() {
            if (!this.valid) {
                return;
            }
            emit("add", newTemplate.value);
            newTemplate.value = {};
        }

        /**
         * Updated
         */
        const valid = computed(() => {
            return (
                newTemplate.value.name != null && newTemplate.value.slug != null
            );
        });

        return { newTemplate, onSubmit, valid };
    },
};
</script>