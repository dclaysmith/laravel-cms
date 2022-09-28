<template>
    <fieldset>
        <legend>{{ section.name }}</legend>
        <p>
            <label for="name">Name</label>
            <input type="text" name="name" id="name" v-model="section.name" />
        </p>
        <p>
            <label for="slug">Slug</label>
            <input type="text" name="slug" id="slug" v-model="section.slug" />
        </p>
        <p>
            <a @click.prevent="onDeleteClick">Delete</a>
        </p>
    </fieldset>
</template>

<script>
import { watch } from "vue";
import { useDebounceFn } from "../../../../../composables/useDebounce.js";

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