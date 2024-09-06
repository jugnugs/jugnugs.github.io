<script setup lang="ts">
import LinkedinLogo from '../assets/svg/linkedin.svg';
import GithubLogo from '../assets/svg/github.svg';
</script>

<template>
    <div class="section" data-scroll-section>
        <div class="top space-mono" data-scroll data-scroll-repeat="true" data-scroll-class="animate"
            data-scroll-speed="5">
            <div class="big">{{ $t("Footer.header") }}</div>
            <div class="email">
                <a href="mailto:julialn.sunni@gmail.com" target="_blank">julialn.sunni@gmail.com</a>
            </div>
            <div class="socials">
                <a href="https://www.linkedin.com/in/julialnguyen" target="_blank">
                    <LinkedinLogo class="logo" />
                </a>
                <a href="https://github.com/jugnugs" target="_blank">
                    <GithubLogo class="logo" />
                </a>
            </div>
        </div>
        <div class="bottom">@ Julia Nguyen 2024</div>
    </div>
</template>

<style scoped>
.section {
    width: 100%;
    height: fit-content;
    padding: 30px 120px;
    background: linear-gradient(to right, var(--th-teal), var(--th-blue));
    color: var(--th-text-light);
    display: flex;
    gap: 20vh;
    align-items: center;
    flex-direction: column;
}

.top {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
}

.top>.big {
    font-size: clamp(1rem, 1rem + 3.5vw, 3rem);
}

.top>.email {
    font-size: clamp(1rem, 1rem + 0.5vw, 1.5rem);
    text-decoration: underline;
    position: relative;
    z-index: 15;
    pointer-events: auto;
}

a {
    position: relative;
    z-index: 100;
    pointer-events: auto;
}

.socials {
    display: flex;
    gap: 20px;
}

img,
.logo {
    width: 40px;
    height: 40px;
}


.bottom {
    opacity: 80%;
}



@media (max-width: 767px) {
    .section {
        background: linear-gradient(to top, var(--th-teal), var(--th-blue));
        padding: 10% 10%;
        gap: 40vh;
    }
}
</style>
