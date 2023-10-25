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
                    v-model="newPath.name"
                />
            </div>
            <div class="form-group form-inline mx-2">
                <label class="form-label" for="identifier">Identifier</label>
                <input
                    class="form-input"
                    type="text"
                    name="identifier"
                    id="identifier"
                    v-model="newPath.identifier"
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
    name: "LaravelCmsAdminComponentAddForm",
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
         * Computed
         */
        const valid = computed(() => {
            return (
                newPath.value.name != null && newPath.value.identifier != null
            );
        });

        return { newPath, onSubmit, valid };
    },
};
</script>