<script setup lang="ts">
import TopBar from './TopBar.vue';
import DoubleDownIcon from '../assets/svg/double-down.svg';

</script>

<template>
    <div class="title-card space-mono">
        <TopBar />
        <div class="center">
            <div class="title">Frontend Developer</div>
            <div class="subtitle">react. vue. javascript/typescript.</div>
        </div>
        <div class="scroll">
            <DoubleDownIcon class="icon" />
            scroll down
            <DoubleDownIcon class="icon" />
        </div>
    </div>
</template>

<style scoped>
.title-card {
    background: linear-gradient(to right, var(--th-teal), var(--th-blue));
    z-index: 10;
    width: 100%;
    height: 100vh;
    color: var(--th-text-light);
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

.scroll {
    display: flex;
    align-items: end;
    gap: 1rem;
    padding-bottom: 5px;
}

.scroll>.icon {
    width: 20px;
    height: 20px;
}

@media (max-width: 767px) {
    .title-card {
        background: linear-gradient(to bottom, var(--th-teal), var(--th-blue));
    }
}
</style>
