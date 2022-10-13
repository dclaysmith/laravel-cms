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
                    v-model="newPage.name"
                />
            </div>
            <div class="form-group form-inline mx-2">
                <label class="form-label" for="slug">Title</label>
                <input
                    class="form-input"
                    type="text"
                    name="title"
                    id="title"
                    v-model="newPage.title"
                />
            </div>
            <div class="form-group form-inline mx-2">
                <label class="form-label" for="path">Path</label>
                <input
                    class="form-input"
                    type="text"
                    name="path"
                    id="path"
                    v-model="newPage.path"
                />
            </div>
            <button class="mx-2 btn btn-link" :disabled="!valid">
                Add Page
            </button>
        </fieldset>
    </form>
</template>


<script>
import { ref, computed } from "vue";

export default {
    name: "LaravelCmsAdminPageAddForm",
    components: {},
    emits: ["add"],
    setup(props, { emit }) {
        const newPage = ref({});

        async function onSubmit() {
            if (!this.valid) {
                return;
            }
            emit("add", newPage.value);
            newPage.value = {};
        }

        /**
         * Computed
         */
        const valid = computed(() => {
            return (
                newPage.value.name != null &&
                newPage.value.title != null &&
                newPage.value.path != null
            );
        });

        return { newPage, onSubmit, valid };
    },
};
</script>