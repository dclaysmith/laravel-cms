<template>
    <p><router-link to="/components">&lt; Back</router-link></p>
    <h2>Edit Component</h2>
    <form @submit.prevent="onSubmit" v-if="component">
        <fieldset>
            <div class="form-group">
                <label class="form-label" for="name">Name</label>
                <input
                    class="form-input"
                    type="text"
                    name="name"
                    id="name"
                    v-model="component.name"
                />
            </div>

            <div class="form-group">
                <label class="form-label" for="html">Body</label>
                <wysiwyg-editor v-model="component.html"></wysiwyg-editor>
            </div>

            <button class="btn btn-primary" :disabled="!saveEnabled">
                Update
            </button>
        </fieldset>
    </form>
</template>

<script>
import { ref, computed, watch } from "vue";
import { notify } from "@kyvg/vue3-notification";
import { sortBy as _sortBy, filter as _filter, chain as _chain } from "lodash";
import WysiwygEditor from "../../editor/index.vue";

export default {
    name: "LaravelCmsAdminComponent",
    components: { WysiwygEditor },
    props: ["id"],
    setup(props) {
        /**
         * Reactive Properties
         */
        const component = ref(null);
        const componentOriginal = ref(null);

        /**
         * Methods
         */
        async function fetchComponent() {
            const response = await fetch("/api/cms-components/" + props.id);
            const json = await response.json();
            component.value = json.data;
            componentOriginal.value = Object.assign({}, component.value);
        }

        async function onSubmit() {
            const response = await fetch("/api/cms-components/" + props.id, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "X-XSRF-TOKEN": $cookies.get("XSRF-TOKEN"),
                },
                method: "PUT",
                body: JSON.stringify(component.value),
            });

            const json = await response.json();

            if (!response.ok) {
                notify({
                    title: json.message,
                    type: "error",
                });
                return;
            }

            component.value = json.data;
            componentOriginal.value = Object.assign({}, component.value);

            notify({
                title: "Page updated.",
                type: "success",
            });
        }

        Promise.all([fetchComponent()]);

        /**
         * Computed
         */
        const saveEnabled = computed(() => {
            return (
                JSON.stringify(componentOriginal.value) !=
                JSON.stringify(component.value)
            );
        });

        return {
            component,
            componentOriginal,
            saveEnabled,
            onSubmit,
        };
    },
};
</script>

<style></style>
