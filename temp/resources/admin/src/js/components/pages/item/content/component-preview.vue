<template>
    <div class="card mb-2">
        <div class="card-header">
            <div class="card-title h5">{{ component.name }}</div>
            <div class="card-subtitle text-gray">{{ component.view }}</div>
        </div>
        <div class="card-body" v-html="preview"></div>
        <div class="card-footer">
            <button class="btn btn-link" @click.prevent="onEditClick">
                Edit
            </button>
            <button
                class="btn btn-link text-error float-right"
                @click.prevent="onDeleteClick"
            >
                Delete
            </button>
        </div>
    </div>
</template>

<script>
import { ref, computed } from "vue";
// import { clip } from "text-clipper";

export default {
    name: "LaravelCmsAdminPageComponent",
    props: ["component"],
    components: {},
    emits: ["edit"],
    setup(props, { emit }) {
        function onEditClick() {
            emit("edit", props.component);
        }

        function onDeleteClick() {
            emit("delete", props.component);
        }

        /**
         * Computed
         */
        const preview = computed(() => {
            return props.component.html;
            // return clip(props.component.html, 140, { html: true, maxLines: 5 });
        });

        return { onEditClick, onDeleteClick, preview };
    },
};
</script>

<style>
</style>