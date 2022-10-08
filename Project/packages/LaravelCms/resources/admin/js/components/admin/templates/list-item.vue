<template>
    <tr>
        <td>{{ template.id }}</td>
        <td>
            <router-link :to="'/templates/' + template.id">{{
                template.name
            }}</router-link>
        </td>
        <td>{{ template.slug }}</td>
        <td>
            <a href="#" @click.prevent="onDeleteClick">Delete</a>
        </td>
    </tr>
</template>

<script>
import { ref } from "vue";

export default {
    name: "LaravelCmsAdminTemplatesListItem",
    props: ["template"],
    emits: ["delete"],
    setup(props, { emit }) {
        async function onDeleteClick() {
            emit("delete", props.template.id);
        }

        return { onDeleteClick };
    },
};
</script>

<style>
</style>