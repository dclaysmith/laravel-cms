<template>
    <tr>
        <td>{{ path.id }}</td>
        <td>{{ path.cms_page_id }}</td>
        <td>
            <router-link :to="'/paths/' + path.id">{{ path.path }}</router-link>
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