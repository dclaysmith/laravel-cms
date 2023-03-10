<template>
    <fieldset>
        <div class="form-group form-inline mx-2">
            <label class="form-label" for="name">Name</label>
            <input
                class="form-input"
                type="text"
                name="name"
                id="name"
                v-model="section.name"
            />
        </div>
        <div class="form-group form-inline mx-2">
            <label class="form-label" for="identifier">Slug</label>
            <input
                class="form-input"
                type="text"
                name="identifier"
                id="identifier"
                v-model="section.identifier"
            />
        </div>
        <button
            class="btn btn-link text-error mx-2"
            @click.prevent="onDeleteClick"
        >
            Delete
        </button>
    </fieldset>
</template>

<script>
import { watch } from "vue";
import { useDebounceFn } from "../../../../composables/useDebounce.js";

export default {
    name: "LaravelCmsAdminTemplatesListItem",
    props: ["section"],
    emits: ["delete", "save"],
    setup(props, { emit }) {
        watch(props.section, (newValue, oldValue) => {
            save();
        });

        async function onDeleteClick() {
            emit("delete", props.section.id);
        }

        const save = useDebounceFn(() => {
            emit("save", props.section);
        }, 1000);

        return { onDeleteClick };
    },
};
</script>

<style>
</style>