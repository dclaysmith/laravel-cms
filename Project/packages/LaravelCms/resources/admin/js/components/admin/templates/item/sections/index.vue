<template>
    <fieldset v-if="sectionsSorted">
        <legend>Sections</legend>
        <add-form @add="onAdd"></add-form>
        <div v-if="loaded && sectionsSorted.length">
            <list-item
                v-for="section in sectionsSorted"
                :key="section.id"
                :section="section"
                @delete="onDelete"
                @save="onSave"
            ></list-item>
        </div>
        <p v-else-if="loaded">There are no templates sections.</p>
        <p v-else>Loading...</p>
    </fieldset>
</template>

<script>
import { ref, computed } from "vue";
import { notify } from "@kyvg/vue3-notification";
import { sortBy as _sortBy } from "lodash";

import ListItem from "./list-item.vue";
import AddForm from "./add-form.vue";

export default {
    name: "LaravelCmsAdminTemplateSections",
    components: {
        AddForm,
        ListItem,
    },
    props: ["templateId"],
    setup(props) {
        /**
         * Reactive Properties
         */
        const sections = ref([]);
        const loaded = ref(false);

        /**
         * Methods
         */
        async function fetchSectionList() {
            let url =
                "/api/cms-template-sections?" +
                new URLSearchParams({
                    "q[]": ["cms_template_id[eq]=" + props.templateId],
                }).toString();
            const response = await fetch(url);
            const json = await response.json();
            sections.value = json.data;
            loaded.value = true;
        }

        async function onDelete(id) {
            const response = await fetch("/api/cms-template-sections/" + id, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "DELETE",
            });

            if (!response.ok) {
                notify({
                    title: json.message,
                    type: "error",
                });
                return;
            }

            notify({
                title: "Template section deleted.",
                type: "warn",
            });

            var indexToRemove = sections.value
                .map((item) => item.id)
                .indexOf(id);
            ~indexToRemove && sections.value.splice(indexToRemove, 1);
        }

        async function onSave(section) {
            const response = await fetch(
                "/api/cms-template-sections/" + section.id,
                {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    method: "PUT",
                    body: JSON.stringify(section),
                }
            );

            const json = await response.json();

            if (!response.ok) {
                notify({
                    title: json.message,
                    type: "error",
                });
                return;
            }

            notify({
                title: "Template section updated.",
                type: "success",
            });

            var indexToUpdate = sections.value
                .map((item) => item.id)
                .indexOf(section.id);
            ~indexToUpdate && sections.value.splice(indexToUpdate, 1, section);
        }

        async function onAdd(section) {
            section.cms_template_id = props.templateId;

            const response = await fetch("/api/cms-template-sections", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(section),
            });

            const json = await response.json();

            if (!response.ok) {
                notify({
                    title: json.message,
                    type: "error",
                });
                return;
            }

            sections.value.push(json.data);

            notify({
                title: "New template section created.",
                type: "success",
            });
        }

        fetchSectionList();

        /**
         * Computed
         */
        const sectionsSorted = computed(() => {
            return _sortBy(sections.value || [], (section) => {
                return section.name;
            });
        });

        return {
            sectionsSorted,
            loaded,
            onDelete,
            onSave,
            onAdd,
        };
    },
};
</script>

<style>
</style>