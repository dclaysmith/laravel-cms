<template>
    <tr>
        <td>{{ page.id }}</td>
        <td>
            <router-link :to="'/pages/' + page.id">{{ page.name }}</router-link>
        </td>
    </tr>
</template>

<script>
import { ref } from "vue";

export default {
    name: "LaravelCmsAdminPagesListItem",
    props: ["page"],
    setup() {
        return {};
    },
};
</script>

<style scoped>
</style>