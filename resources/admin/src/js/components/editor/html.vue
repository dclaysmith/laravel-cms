<template>
    <span>
        <div class="modal" :class="{ active: localVisible }">
            <a
                href="#close"
                class="modal-overlay"
                aria-label="Close"
                @click.prevent="localVisible = false"
            ></a>
            <div class="modal-container">
                <div class="modal-header">
                    <a
                        href="#close"
                        class="btn btn-clear float-right"
                        aria-label="Close"
                        @click.prevent="localVisible = false"
                    ></a>
                    <div class="modal-title">Edit HTML</div>
                </div>
                <div class="modal-body">
                    <div>
                        <textarea
                            v-model="localHtml"
                            style="width: 100%; height: 10rem"
                        ></textarea>
                    </div>
                </div>
            </div>
        </div>
        <slot></slot>
    </span>
</template>

<script>
import { computed } from "vue";

export default {
    name: "LaravelCmsAdminEditorHtml",
    emits: ["submit", "update:visible", "update"],
    components: {},
    props: {
        html: String,
        visible: Boolean,
    },
    setup(props, { emit }) {
        const localVisible = computed({
            get() {
                return props.visible;
            },
            set(newValue) {
                emit("update:visible", newValue);
            },
        });

        const localHtml = computed({
            get() {
                return props.html;
            },
            set(newValue) {
                emit("update", newValue);
            },
        });

        return { localVisible, localHtml };
    },
};
</script>
