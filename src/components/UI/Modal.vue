<template>
    <div class="modal fade" :id="modalId" tabindex="-1" :aria-labelledby="`${modalId}Label`" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" :id="`${modalId}Label`">{{ title }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <slot name="body">
                        <p>Please Provide Modal Content</p>
                    </slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer">
                        <p>Please Provide Modal Footer</p>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    modalId: String
})
</script>

<style lang="scss" scoped></style>