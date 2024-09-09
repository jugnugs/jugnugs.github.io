<script setup lang="ts">
import TopBar from './TopBar.vue';
import DoubleDownIcon from '../assets/svg/double-down.svg';

defineEmits(['openModal']);

</script>

<template>
    <div class="title-card space-mono" data-scroll-section>
        <TopBar />
        <div class="center fade-in-container" data-scroll data-scroll-repeat="true" data-scroll-speed="10"
            data-scroll-class="animate">
            <div class="title">{{ $t("TitleCard.title") }}</div>
            <div class="subtitle">react. vue. javascript/typescript.</div>
        </div>
        <div class="scroll bounce">
            <DoubleDownIcon class="icon" />
            {{ $t("TitleCard.scroll") }}
            <DoubleDownIcon class="icon" />
        </div>
    </div>
</template>

<style scoped>
.title-card {
    background: linear-gradient(to right, var(--th-teal), var(--th-blue));
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

@media (prefers-reduced-motion: no-preference) {
    .bounce {
        animation: bounce 2s ease-in infinite;
    }
}

@keyframes bounce {

    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateY(0);
    }

    40% {
        transform: translateY(-15px);
    }

    60% {
        transform: translateY(-5px);
    }
}

@media (max-width: 767px) {
    .title-card {
        background: linear-gradient(to bottom, var(--th-teal), var(--th-blue));
    }
}
</style>
