<script setup lang="ts">
import PersonalLogo from '../assets/svg/logo.svg';
import LinkedinLogo from '../assets/svg/linkedin.svg';
import GithubLogo from '../assets/svg/github.svg';
import ButtonComponent from './ButtonComponent.vue';

const redirectToMail = () => {
    window.open("mailto:julialn.sunni@gmail.com");
}

</script>

<template>
    <div class="top">
        <div class="left">
            <PersonalLogo class="logo" />
            <span>julia nguyen</span>
        </div>
        <div class="tray">
            <a href="https://www.linkedin.com/in/julialnguyen" target="_blank">
                <LinkedinLogo class="logo" />
            </a>
            <a href="https://github.com/jugnugs" target="_blank">
                <GithubLogo class="logo" />
            </a>
            <ButtonComponent label="contact" @handle-click="redirectToMail" :is-white-mode="true" />
        </div>
    </div>
</template>

<style scoped>
.top {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px 10px 30px;
    font-size: clamp(1rem, 1rem + 1.5vw, 1.5rem);
}

.left,
.tray {
    height: 40px;
    display: flex;
    align-items: center;
    gap: 20px;

}

.logo {
    width: 40px;
    height: 40px;
}

@media (max-width: 767px) {
    .logo {
        display: none;
    }
}
</style>
