<template>
    <tr>
        <td>{{ user.id }}</td>
        <td>
            <router-link :to="'/users/' + user.id">{{ user.name }}</router-link>
        </td>
        <td>{{ user.title }}</td>
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
import { ref } from "vue";

export default {
    name: "LaravelCmsAdminUsersListItem",
    props: ["user"],
    emits: ["delete"],
    setup(props, { emit }) {
        async function onDeleteClick() {
            emit("delete", props.user.id);
        }

        return { onDeleteClick };
    },
};
</script>

<style></style>
