<template>
    <tr>
        <td>{{ media.id }}</td>
        <td>
            <img
                :src="media.url"
                :alt="media.caption"
                style="max-width: 200px; max-width: 200px"
            />
        </td>
        <td>{{ media.url }}<br />{{ media.caption }}</td>
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
    name: "LaravelCmsAdminMediaListItem",
    props: ["media"],
    emits: ["delete"],
    setup(props, { emit }) {
        async function onDeleteClick() {
            emit("delete", props.media.id);
        }

        return { onDeleteClick };
    },
};
</script>

<style></style>
