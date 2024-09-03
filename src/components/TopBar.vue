<script setup lang="ts">
import LinkedinLogo from '../assets/svg/linkedin.svg';
import GithubLogo from '../assets/svg/github.svg';
</script>

<template>
    <div class="top">
        <div class="left">
            <img src="../assets/svg/logo.svg">
            <span>julia nguyen</span>
        </div>
        <div class="tray">
            <LinkedinLogo class="logo" />
            <GithubLogo class="logo" />
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
    font-size: clamp(1rem, 1rem + 1.5vw, 2rem);
}

.left,
.tray {
    display: flex;
    align-items: center;
    gap: 20px;

}

img,
.logo {
    width: 40px;
    height: 40px;
}

.left img {
    opacity: 60%;
}
</style>
