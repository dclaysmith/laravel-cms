<template>
    <div class="card mb-2">
        <div class="card-header">
            <div class="card-title h5">{{ component.name }}</div>
            <div class="card-subtitle text-gray">{{ component.view }}</div>
        </div>
        <div class="card-body">Preview&hellip;</div>
        <div class="card-footer">
            <button class="btn btn-link">Edit</button>
            <button class="btn btn-link text-error float-right">Delete</button>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    name: "LaravelCmsAdminPageComponent",
    props: ["component"],
    components: {},
    setup(props, { emit }) {
        return {};
    },
};
</script>

<style>
</style>