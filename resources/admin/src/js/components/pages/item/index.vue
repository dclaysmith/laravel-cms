<template>
    <div>
        <p><router-link to="/pages">&lt; Back</router-link></p>
        <div v-if="page">
            <h2>Edit Page: {{ page.name }}</h2>
            <ul class="tab" style="margin-bottom: 1rem">
                <li class="tab-item" :class="{ active: tab == 'main' || !tab }">
                    <a href="#" @click.prevent="tab = 'main'">Main</a>
                </li>
                <li class="tab-item" :class="{ active: tab == 'seo' }">
                    <a href="#" @click.prevent="tab = 'seo'">SEO</a>
                </li>
                <li class="tab-item" :class="{ active: tab == 'paths' }">
                    <a href="#" @click.prevent="tab = 'paths'">Paths</a>
                </li>
                <li class="tab-item" :class="{ active: tab == 'content' }">
                    <a href="#" @click.prevent="tab = 'content'">Content</a>
                </li>
                <li class="tab-item" :class="{ active: tab == 'preview' }">
                    <a href="#" @click.prevent="tab = 'preview'">Preview</a>
                </li>
            </ul>
            <div class="container" v-if="'main' == tab || 'seo' == tab || !tab">
                <div class="columns">
                    <div class="column col-6">
                        <form @submit.prevent="onSubmit">
                            <main-form
                                v-show="'main' == tab || !tab"
                                :page="page"
                                :users="users"
                            ></main-form>
                            <seo-form
                                v-show="'seo' == tab"
                                :page="page"
                            ></seo-form>
                            <button
                                class="btn btn-primary"
                                :disabled="!saveEnabled"
                            >
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <page-paths v-if="'paths' == tab" :page="page"></page-paths>
            <page-content v-if="'content' == tab" :page="page"> </page-content>
            <page-preview v-if="'preview' == tab" :page="page"> </page-preview>
        </div>
    </div>
</template>

<script>
import { ref, computed, watch } from "vue";
import { notify } from "@kyvg/vue3-notification";
import { sortBy as _sortBy, filter as _filter, chain as _chain } from "lodash";

import PagePaths from "./paths/index.vue";
import PageContent from "./content/index.vue";
import PagePreview from "./preview/index.vue";
import MainForm from "./main-form.vue";
import SeoForm from "./seo-form.vue";

export default {
    name: "LaravelCmsAdminPage",
    components: {
        PageContent,
        PagePaths,
        PagePreview,
        MainForm,
        SeoForm,
    },
    props: ["id"],
    setup(props) {
        /**
         * Reactive Properties
         */
        const page = ref(null);
        const tab = ref(null);
        const pageOriginal = ref(null);
        const templates = ref([]);
        const users = ref([]);

        /**
         * Methods
         */
        async function fetchPage() {
            const response = await fetch("/api/cms-pages/" + props.id);
            const json = await response.json();
            page.value = json.data;
            pageOriginal.value = Object.assign({}, page.value);
        }

        async function fetchTemplateList() {
            const response = await fetch("/api/cms-templates");
            const json = await response.json();
            templates.value = json.data;
        }

        async function fetchUserList() {
            const response = await fetch("/api/cms-users");
            const json = await response.json();
            users.value = json.data;
        }

        async function onSubmit() {
            const response = await fetch("/api/cms-pages/" + props.id, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "X-XSRF-TOKEN": $cookies.get("XSRF-TOKEN"),
                },
                method: "PUT",
                body: JSON.stringify(page.value),
            });

            const json = await response.json();

            if (!response.ok) {
                notify({
                    title: json.message,
                    type: "error",
                });
                return;
            }

            page.value = json.data;
            pageOriginal.value = Object.assign({}, page.value);

            notify({
                title: "Page updated.",
                type: "success",
            });
        }

        Promise.all([fetchPage(), fetchTemplateList(), fetchUserList()]);

        /**
         * Computed
         */
        const saveEnabled = computed(() => {
            return (
                JSON.stringify(pageOriginal.value) != JSON.stringify(page.value)
            );
        });

        return {
            tab,
            page,
            templates,
            users,
            saveEnabled,
            onSubmit,
        };
    },
};
</script>

<style></style>
