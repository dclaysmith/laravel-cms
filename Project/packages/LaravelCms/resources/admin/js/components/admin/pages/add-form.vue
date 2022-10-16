<template>
    <form @submit.prevent="onSubmit">
        <fieldset>
            <div class="form-group form-inline mx-2">
                <label class="form-label" for="name">Name</label>
                <input
                    class="form-input"
                    type="text"
                    name="name"
                    id="name"
                    v-model="newPage.name"
                />
            </div>
            <div class="form-group form-inline mx-2">
                <label class="form-label" for="title">Title</label>
                <input
                    class="form-input"
                    type="text"
                    name="title"
                    id="title"
                    @blur="onTitleBlur"
                    v-model="newPage.title"
                />
            </div>
            <div class="form-group form-inline mx-2">
                <label class="form-label" for="template">Template</label>
                <select
                    class="form-select"
                    name="template"
                    id="template"
                    v-model.number="newPage.cms_template_id"
                >
                    <option></option>
                    <option
                        v-for="template in templates"
                        :key="template.id"
                        :value="template.id"
                    >
                        {{ template.name }}
                    </option>
                </select>
            </div>
            <div class="form-group form-inline mx-2">
                <label class="form-label" for="path">Path</label>
                <input
                    class="form-input"
                    type="text"
                    name="path"
                    id="path"
                    v-model="newPage.path"
                />
            </div>
            <button class="mx-2 btn btn-link" :disabled="!valid">
                Add Page
            </button>
        </fieldset>
    </form>
</template>


<script>
import { ref, computed } from "vue";

export default {
    name: "LaravelCmsAdminPageAddForm",
    components: {},
    emits: ["add"],
    setup(props, { emit }) {
        const newPage = ref({});
        const templates = ref([]);

        /**
         * Methods
         */
        async function fetchTemplateList() {
            const response = await fetch("/api/cms-templates");
            const json = await response.json();
            templates.value = json.data;
        }
        async function onSubmit() {
            if (!this.valid) {
                return;
            }
            emit("add", newPage.value);
            newPage.value = {};
        }

        function onTitleBlur() {
            if (newPage.value.path) {
                return;
            }
            newPage.value.path =
                "/" +
                newPage.value.title
                    .toLowerCase()
                    .replace(/[^\w ]+/g, "")
                    .replace(/ +/g, "-");
        }

        fetchTemplateList();

        /**
         * Computed
         */
        const valid = computed(() => {
            return (
                newPage.value.name != null &&
                newPage.value.title != null &&
                newPage.value.path != null &&
                newPage.value.cms_template_id != null
            );
        });

        return { newPage, templates, onSubmit, onTitleBlur, valid };
    },
};
</script>