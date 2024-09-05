<script setup lang="ts">
const { label, isWhiteMode } = defineProps(['label', 'isWhiteMode']);
</script>

<template>
    <div class="button space-mono" :class="{ whiteMode: isWhiteMode }" @click="$emit('handleClick')"
        @mouseover="$emit('apply-hover')" @mouseleave="$emit('remove-hover')">
        <slot></slot>
        <div class="label">
            {{ label }}
        </div>
    </div>
</template>

<style scoped>
.button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: fit-content;
    height: inherit;
    font-size: clamp(1rem, 1rem + 1.5vw, 1.5rem);
    padding: 10px 20px;
    border: 1px solid rgb(85, 85, 85, 50%);
    border-radius: 5px;
    cursor: pointer;
    transition:
        color 0.5s,
        background 0.5s;
}

.label {
    text-align: center;
}

.button:hover {
    color: var(--th-text-light);
    background: linear-gradient(to right, var(--th-teal), var(--th-blue));
}

.button:hover svg path {
    fill: white;
    stroke: white;
}


.whiteMode {
    border: 1px solid var(--th-white);
}

.whiteMode.button:hover {
    color: var(--th-blue);
    background: var(--th-text-light);
}

@media (max-width: 1100px) or (orientation: portrait) {
    .more-text .button {
        width: 100%;
    }
}
</style>
