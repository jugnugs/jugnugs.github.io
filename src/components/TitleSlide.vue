<script setup lang="ts">
import TopBar from './TopBar.vue';


</script>

<template>
    <div class="title-card">
        <TopBar />
        <div class="center">
            <div class="title">Frontend Developer</div>
            <div class="subtitle">react. vue. javascript/typescript.</div>
        </div>
        <div class="scroll">scroll down</div>
    </div>
</template>

<style scoped>
.title-card {
    width: 100%;
    height: 100vh;
    color: var(--th-text-dark);
    font-family: "Space Mono", monospace;
    font-weight: 400;
    font-style: normal;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.center {
    text-align: center;
}

.title {
    font-size: clamp(1rem, 1rem + 3.5vw, 4rem);
}

.subtitle {
    font-size: clamp(1rem, 1rem + 1.5vw, 2rem);
}
</style>
