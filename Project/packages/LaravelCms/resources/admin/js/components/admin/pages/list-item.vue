<template>
    <tr>
        <td>{{ page.id }}</td>
        <td>
            <router-link :to="'/pages/' + page.id">{{ page.name }}</router-link>
        </td>
        <td>
            {{ page.title }}
        </td>
        <td>
            {{ page.path }}
        </td>
        <td>
            <a href="#" @click.prevent="onDeleteClick">Delete</a>
        </td>
    </tr>
</template>

<script>
import { ref } from "vue";

export default {
    name: "LaravelCmsAdminPagesListItem",
    props: ["page"],
    setup(props, { emit }) {
        async function onDeleteClick() {
            emit("delete", props.page.id);
        }

        return { onDeleteClick };
    },
};
</script>

<style scoped>
</style>