<template>
    <form @submit.prevent="onSubmit">
        <fieldset>
            <div class="form-group form-inline mx-2">
                <label class="form-label" for="path">Path</label>
                <input
                    class="form-input"
                    type="text"
                    name="path"
                    id="path"
                    v-model="newPath.path"
                />
            </div>
            <button class="btn btn-primary mx-2" :disabled="!valid">
                Add Path
            </button>
        </fieldset>
    </form>
</template>


<script>
import { ref, computed } from "vue";

export default {
    name: "LaravelCmsAdminPagePathsAddForm",
    components: {},
    emits: ["add"],
    setup(props, { emit }) {
        const newPath = ref({});

        async function onSubmit() {
            if (!this.valid) {
                return;
            }
            emit("add", newPath.value);
            newPath.value = {};
        }

        /**
         * Updated
         */
        const valid = computed(() => {
            return newPath.value.path != null;
        });

        return { newPath, onSubmit, valid };
    },
};
</script>