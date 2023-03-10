<template>
    <form @submit.prevent="onSubmit">
        <fieldset>
            <div class="form-group form-inline mx-2">
                <label class="form-label" for="caption">Caption</label>
                <input
                    class="form-input"
                    type="text"
                    name="caption"
                    id="caption"
                    v-model="newMedia.caption"
                />
            </div>
            <div class="form-group form-inline mx-2">
                <label class="form-label" for="file">File</label>
                <input
                    class="form-input"
                    type="file"
                    name="file"
                    id="file"
                    v-on:change="onFileChanged"
                />
            </div>
            <button class="btn btn-primary mx-2" :disabled="!valid">
                Add Media
            </button>
        </fieldset>
    </form>
</template>


<script>
import { ref, computed } from "vue";

export default {
    name: "LaravelCmsAdminMediaAddForm",
    components: {},
    emits: ["add"],
    setup(props, { emit }) {
        const newMedia = ref({});

        async function onSubmit() {
            if (!this.valid) {
                return;
            }
            emit("add", newMedia.value);
            newMedia.value = {};
        }

        function onFileChanged() {
            newMedia.value.file = "Set";
        }

        /**
         * Updated
         */
        const valid = computed(() => {
            return (
                newMedia.value.caption != null && newMedia.value.file != null
            );
        });

        return { newMedia, onSubmit, onFileChanged, valid };
    },
};
</script>