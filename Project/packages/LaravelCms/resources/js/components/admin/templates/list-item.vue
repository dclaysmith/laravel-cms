<template>
    <tr>
        <td>{{ template.id }}</td>
        <td>
            <router-link :to="'/templates/' + template.id">{{
                template.name
            }}</router-link>
        </td>
    </tr>
</template>

<script>
import { ref } from "vue";

export default {
    name: "LaravelCmsAdminTemplatesListItem",
    props: ["template"],
    setup() {
        return {};
    },
};
</script>

<style>
</style>