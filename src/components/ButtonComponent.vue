<script setup lang="ts">
const { label, handleClick, isWhiteMode } = defineProps(['label', 'handleClick', 'isWhiteMode']);
</script>

<template>
    <div class="button space-mono" :class="{ whiteMode: isWhiteMode }" @click="handleClick">
        <slot></slot>
        <div class="label">
            {{ label }}
        </div>
    </div>
</template>

<style scoped>
.button {
    display: flex;
    align-items: center;
    gap: 20px;
    width: fit-content;
    height: inherit;
    font-size: clamp(1rem, 1rem + 1.5vw, 2rem);
    padding: 10px;
    border: 1px solid rgb(85, 85, 85, 50%);
    border-radius: 5px;
    cursor: pointer;
}

.label {
    text-align: center;
}

.whiteMode {
    border: 1px solid var(--th-white);
}
</style>
