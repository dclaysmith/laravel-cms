<template>
    <tr>
        <td>{{ component.id }}</td>
        <td>
            <router-link :to="'/components/' + component.id">{{
                component.name
            }}</router-link>
        </td>
        <td>
            <button
                @click.prevent="onDeleteClick"
                class="btn btn-link text-error"
            >
                Delete
            </button>
        </td>
    </tr>
</template>

<script>
export default {
    name: "LaravelCmsAdminPagesListItem",
    props: ["component"],
    setup(props, { emit }) {
        async function onDeleteClick() {
            emit("delete", props.component.id);
        }

        return { onDeleteClick };
    },
};
</script>

<style scoped>
</style>