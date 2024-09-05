<script setup lang="ts">
import LocaleToggler from './LocaleToggler.vue';
import CancelIcon from '../assets/svg/cancel.svg';
</script>

<template>
    <div class="modal-container">
        <CancelIcon class="cancel-button" @click="$emit('closeModal')" />
        <LocaleToggler class="item toggler" :dark-mode="true" />
        <ul>
            <li class="item"><a href="https://www.linkedin.com/in/julialnguyen" target="_blank">linkedin</a></li>
            <li class="item"> <a href="https://github.com/jugnugs" target="_blank">github</a></li>
            <li class="item" @click="$emit('redirectMail')">contact</li>
        </ul>
    </div>
</template>

<style scoped>
.modal-container {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: var(--th-white);
    color: var(--th-text-dark);
    font-size: 2rem;
    opacity: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
}

.cancel-button {
    position: absolute;
    top: 10px;
    right: 30px;
    height: 40px;
    width: 40px;
}

.item.toggler {
    height: calc(2rem + 0.5vh);
}

.modal-container ul {
    padding: 0;
    text-align: center;
}

.modal-container li.item {
    list-style-type: none;
    transition: 0.3s;
}

.modal-container li.item:hover {
    width: 100vw;
    color: var(--th-text-light);
    background: var(--th-black);
}

a {
    text-decoration: none;
}

@media (min-width: 768px) {
    .modal-container {
        display: none;
    }
}
</style>