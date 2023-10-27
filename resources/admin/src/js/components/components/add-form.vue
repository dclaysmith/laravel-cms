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
                    v-model="newComponent.name"
                />
            </div>
            <div class="form-group form-inline mx-2">
                <label class="form-label" for="identifier">Identifier</label>
                <input
                    class="form-input"
                    type="text"
                    name="identifier"
                    id="identifier"
                    v-model="newComponent.identifier"
                />
            </div>
            <button class="btn btn-primary mx-2" :disabled="!valid">
                Add Component
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
        const newComponent = ref({});

        async function onSubmit() {
            if (!this.valid) {
                return;
            }
            emit("add", newComponent.value);
            newComponent.value = {};
        }

        /**
         * Computed
         */
        const valid = computed(() => {
            return (
                newComponent.value.name != null && newComponent.value.identifier != null
            );
        });

        return { newComponent, onSubmit, valid };
    },
};
</script>