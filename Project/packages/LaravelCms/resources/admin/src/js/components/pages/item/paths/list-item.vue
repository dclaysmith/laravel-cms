<template>
    <tr>
        <td>{{ path.id }}</td>
        <td>
            {{ path.path }}
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
    name: "LaravelCmsAdminPagePathsListItem",
    props: ["path"],
    setup(props, { emit }) {
        async function onDeleteClick() {
            emit("delete", props.path.id);
        }

        return { onDeleteClick };
    },
};
</script>

<style scoped>
</style>