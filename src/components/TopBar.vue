<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import PersonalLogo from '../assets/svg/logo.svg';
import LinkedinLogo from '../assets/svg/linkedin.svg';
import GithubLogo from '../assets/svg/github.svg';
import MenuIcon from '../assets/svg/hamburger.svg';
import ButtonComponent from './ButtonComponent.vue';
import LocaleToggler from './LocaleToggler.vue';

const t = useI18n().t;

const redirectToMail = () => {
    window.open("mailto:julialn.sunni@gmail.com");
};

const contactLabel = computed(() => {
    return t("TitleCard.contact");
});

</script>

<template>
    <div class="top">
        <div class="left">
            <PersonalLogo class="logo hide-mobile" />
            <span>julia nguyen</span>
        </div>
        <div class="tray">
            <a href="https://www.linkedin.com/in/julialnguyen" target="_blank">
                <LinkedinLogo class="logo hide-mobile" />
            </a>
            <a href="https://github.com/jugnugs" target="_blank">
                <GithubLogo class="logo hide-mobile" />
            </a>
            <ButtonComponent class="hide-mobile" :label="contactLabel" @handle-click="redirectToMail"
                :is-white-mode="true" />
            <LocaleToggler class="hide-mobile" />
            <MenuIcon class="logo show-mobile" @click="$parent?.$emit('openModal')" />
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

.show-mobile {
    display: none;
}

@media (max-width: 767px) {
    .show-mobile {
        display: block;
    }

    .hide-mobile {
        display: none;
    }
}
</style>
