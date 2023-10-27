<template>
    <div v-if="editor">
        <editor-content :editor="editor" />
        <edit-html
            :html="modelValue"
            @update="setFromHtml"
            v-model:visible="showEditHtml"
        >
            <a href="#" slot="trigger" @click.prevent="showEditHtml = true"
                >Edit Html
            </a>
        </edit-html>
        <bubble-menu
            class="bubble-menu"
            :tippy-options="{ duration: 100 }"
            :editor="editor"
        >
            <button
                @click="editor.chain().focus().toggleBold().run()"
                :class="{
                    'is-active': editor.isActive('bold'),
                }"
            >
                Bold
            </button>
            <button
                @click="editor.chain().focus().toggleItalic().run()"
                :class="{
                    'is-active': editor.isActive('italic'),
                }"
            >
                Italic
            </button>
            <button
                @click="editor.chain().focus().toggleStrike().run()"
                :class="{
                    'is-active': editor.isActive('strike'),
                }"
            >
                Strike
            </button>
            <button
                @click="editor.chain().focus().toggleBulletList().run()"
                :class="{
                    'is-active': editor.isActive('bulletList'),
                }"
            >
                Bullet List
            </button>
            <button
                @click="editor.chain().focus().toggleOrderedList().run()"
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
                @click="
                    editor.chain().focus().toggleHeading({ level: 1 }).run()
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
                @click="
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
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
                @click="editor.chain().focus().toggleBulletList().run()"
                :class="{
                    'is-active': editor.isActive('bulletList'),
                }"
            >
                Bullet List
            </button>
            <button
                @click="editor.chain().focus().toggleOrderedList().run()"
                :class="{
                    'is-active': editor.isActive('orderedList'),
                }"
            >
                Ordered List
            </button>
        </floating-menu>
    </div>
</template>

<script>
import { ref } from "vue";

import StarterKit from "@tiptap/starter-kit";
import EditHtml from "./html.vue";

import {
    useEditor,
    BubbleMenu,
    EditorContent,
    FloatingMenu,
} from "@tiptap/vue-3";

export default {
    name: "LaravelCmsAdminEditor",
    components: {
        EditorContent,
        StarterKit,
        BubbleMenu,
        FloatingMenu,
        EditHtml,
    },
    props: ["modelValue"],
    emits: ["update:modelValue"],
    setup(props, { emit }) {
        /**
         * Reactive Properties
         */
        const showEditHtml = ref(false);

        const editor = useEditor({
            content: props.modelValue,
            extensions: [StarterKit],
            onUpdate: ({ editor }) => {
                emit("update:modelValue", editor.getHTML());
            },
        });

        async function setFromHtml(html) {
            editor.value.commands.setContent(html);
            emit("update:modelValue", html);
        }

        return {
            editor,
            showEditHtml,
            setFromHtml,
        };
    },
};
</script>

<style></style>
