<template>
    <form @submit.prevent="onSubmit">
        <fieldset>
            <legend>Add Item to Page</legend>
            <div class="form-group mx-2">
                <label class="form-label" for="type"
                    >Select Component {{ component.type }}</label
                >
                <select
                    class="form-select"
                    name="type"
                    id="type"
                    v-model="component.type"
                >
                    <option value="">Select Type</option>
                    <option value="">-- New Component --</option>
                    <option value="new-text">HTML/Markdown</option>
                    <option value="new-view">Laravel View</option>
                    <template v-if="componentsSorted?.length">
                        <option value="">-- Existing Component --</option>
                        <option
                            v-for="component in componentsSorted"
                            :key="component.id"
                            :value="component.id"
                        >
                            {{ component.name }}
                        </option>
                    </template>
                </select>
            </div>

            <div class="form-group mx-2">
                <label class="form-label" for="name">Name</label>
                <input
                    class="form-input"
                    type="text"
                    name="name"
                    id="name"
                    v-model="component.name"
                />
            </div>
            <template
                v-if="
                    'new-text' == component.type || 'new-view' == component.type
                "
            >
                <!-- NEW PAGE -->
                <template v-if="'new-text' == component.type">
                    <div class="form-group mx-2">
                        <label class="form-label" for="html">Body</label>
                        <div v-if="editor">
                            <bubble-menu
                                class="bubble-menu"
                                :tippy-options="{ duration: 100 }"
                                :editor="editor"
                            >
                                <button
                                    @click.prevent="
                                        editor.chain().focus().toggleBold().run()
                                    "
                                    :class="{
                                        'is-active': editor.isActive('bold'),
                                    }"
                                >
                                    Bold
                                </button>
                                <button
                                    @click.prevent="
                                        editor.chain().focus().toggleItalic().run()
                                    "
                                    :class="{
                                        'is-active': editor.isActive('italic'),
                                    }"
                                >
                                    Italic
                                </button>
                                <button
                                    @click.prevent="
                                        editor.chain().focus().toggleStrike().run()
                                    "
                                    :class="{
                                        'is-active': editor.isActive('strike'),
                                    }"
                                >
                                    Strike
                                </button>
                                <button
                                    @click.prevent="
                                        editor
                                            .chain()
                                            .focus()
                                            .toggleBulletList()
                                            .run()
                                    "
                                    :class="{
                                        'is-active': editor.isActive('bulletList'),
                                    }"
                                >
                                    Bullet List
                                </button>
                                <button
                                    @click.prevent="
                                        editor
                                            .chain()
                                            .focus()
                                            .toggleOrderedList()
                                            .run()
                                    "
                                    :class="{
                                        'is-active': editor.isActive('orderedList'),
                                    }"
                                >
                                    Ordered List
                                </button>
                            </bubble-menu>
                            <floating-menu
                                class="floating-menu"
                                :tippy-options="{ duration: 100 }"
                                :editor="editor"
                            >
                                <button
                                    @click.prevent="
                                        editor
                                            .chain()
                                            .focus()
                                            .toggleHeading({ level: 1 })
                                            .run()
                                    "
                                    :class="{
                                        'is-active': editor.isActive('heading', {
                                            level: 1,
                                        }),
                                    }"
                                >
                                    H1
                                </button>
                                <button
                                    @click.prevent="
                                        editor
                                            .chain()
                                            .focus()
                                            .toggleHeading({ level: 2 })
                                            .run()
                                    "
                                    :class="{
                                        'is-active': editor.isActive('heading', {
                                            level: 2,
                                        }),
                                    }"
                                >
                                    H2
                                </button>
                                <button
                                    @click.prevent="
                                        editor
                                            .chain()
                                            .focus()
                                            .toggleBulletList()
                                            .run()
                                    "
                                    :class="{
                                        'is-active': editor.isActive('bulletList'),
                                    }"
                                >
                                    Bullet List
                                </button>
                                <button
                                    @click.prevent="
                                        editor
                                            .chain()
                                            .focus()
                                            .toggleOrderedList()
                                            .run()
                                    "
                                    :class="{
                                        'is-active': editor.isActive('orderedList'),
                                    }"
                                >
                                    Ordered List
                                </button>
                            </floating-menu>
                            <editor-content :editor="editor" />
                        </div>
                    </div>
                </template>

                <!-- NEW LARAVEL VIEW-->
                <template v-if="'new-view' == component.type">
                    <div class="form-group mx-2">
                        <label class="form-label" for="view"
                            >Laravel View</label
                        >
                        <select
                            class="form-select"
                            name="view"
                            id="view"
                            v-model="component.view"
                        >
                            <option value="">Select</option>
                            <option
                                v-for="view in views"
                                :key="view"
                                :value="view"
                            >
                                {{ view }}
                            </option>
                        </select>
                    </div>
                </template>
            </template>

            <div class="form-group mx-2">
                <label class="form-label" for="cms_template_section_id"
                    >Template Section</label
                >
                <select
                    class="form-select"
                    name="cms_template_section_id"
                    id="cms_template_section_id"
                    v-model="component.cms_template_section_id"
                >
                    <option value="">Select</option>
                    <option
                        v-for="section in templateSections"
                        :key="section.id"
                        :value="section.id"
                    >
                        {{ section.name }}
                    </option>
                </select>
            </div>

            <button class="btn mx-2" style="float: right" :disabled="1">
                Cancel
            </button>
            <button class="btn btn-primary mx-2" :disabled="!valid">
                Add Component
            </button>
        </fieldset>
    </form>
</template>

<script>
import { ref, reactive, computed, watch } from "vue";
import { sortBy as _sortBy } from "lodash";
import { useEditor, EditorContent, BubbleMenu, FloatingMenu } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";

export default {
    name: "LaravelCmsAdminPageAddComponentForm",
    props: ["templateSections", "globalComponents"],
    components: { EditorContent, BubbleMenu, FloatingMenu },
    setup(props, { emit }) {
        /**
         * Reactive Properties
         */
        const componentInitialState = {
            type: null,
            html: null,
            view: null,
            name: null,
        };
        const component = reactive({ ...componentInitialState });

        const editor = useEditor({
            content: component.html,
            extensions: [StarterKit],
            onUpdate: ({ editor }) => {
                component.html = editor.getHTML();
            },
        });

        const views = ref([]);

        /**
         * Methods
         */
        async function fetchViewList() {
            const response = await fetch("/api/cms-views");
            const json = await response.json();
            views.value = json.data;
        }

        async function onSubmit() {
            if (!this.valid) {
                return;
            }

            /** Are we adding an existing or creating a new **/
            emit("add", Object.assign({}, component));

            Object.assign(component, componentInitialState);
        }

        /**
         * Watchers
         */
        watch(
            () => component.type,
            (newValue, oldValue) => {
                component.html = null;
                component.view = null;
            }
        );

        /**
         * Computed
         */
        const componentsSorted = computed(() => {
            return _sortBy(props.globalComponents || [], (component) => {
                return component.name;
            });
        });

        fetchViewList();

        /**
         * Computed
         */
        const valid = computed(() => {
            // If not type has been picked it is invalid
            if (!component.type) {
                return false;
            }

            if ("new-text" == component.type) {
                if (!component.html) {
                    return false;
                }
                if (!component.name) {
                    return false;
                }
            } else if ("new-view" == component.type) {
                if (!component.view) {
                    return false;
                }
                if (!component.name) {
                    return false;
                }
            } else {
                // An existing one
            }

            return true;
        });

        return { component, componentsSorted, views, valid, onSubmit, editor };
    },
};
</script>

<style>
</style>