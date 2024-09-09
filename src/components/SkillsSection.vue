<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import ButtonComponent from './ButtonComponent.vue';
import DownloadIcon from './DownloadIcon.vue';

const skills = {
    languages: ["JavaScript", "TypeScript", "HTML", "CSS", "C#", "Python"],
    frameworks: ["React", "Vue", "Vite", "Node.js", "Express.js", "ASP.NET"],
    tools: ["VS Code", "Git", "npm", "Figma", "Docker", "Jira"],
    cloud: ["Azure", "AWS", "Firebase"],
    databases: ["MySQL", "PostgreSQL"],
}

const t = useI18n().t;

const isButtonHovered = ref(false);

const downloadFile = () => {
    console.log('download file');
};

const resumeLabel = computed(() => {
    return t("Skills.resume");
})

</script>

<template>
    <div class="wrapper" data-scroll-section>
        <div class="section fade-in-container" data-scroll data-scroll-class="animate" data-scroll-speed="5">
            <div class="photo-box">
                <img class="photo" src="../assets/png/photo2.png">
            </div>
            <div class="desc">
                <h1>{{ $t("Description.header") }}👋</h1>
                <p>{{ $t("Description.bio") }}</p>
            </div>
        </div>
    </div>
    <div class="divider" data-scroll-section>
    </div>
    <div class="wrapper" data-scroll-section>
        <div class="skills-container fade-in-container" data-scroll data-scroll-class="animate">
            <div class="box-wrapper">
                <div class="header-wrapper">
                    <h1>skills</h1>
                </div>
                <h1 class="no-sticky">skills</h1>
                <div class="box-container">
                    <div v-for="(value, key) in skills" class="box" :key="key">
                        <h2>{{ $t(`Skills.${key}`) }}</h2>
                        <div class="skill-card-container">
                            <div class="skill-card space-mono" v-for="skill in value" :key="skill">
                                {{ skill }}
                            </div>
                        </div>
                    </div>
                    <ButtonComponent class="add-margin" :label="resumeLabel" @handle-click="downloadFile"
                        @apply-hover="() => isButtonHovered = true" @remove-hover="() => isButtonHovered = false">
                        <DownloadIcon :is-hovered="isButtonHovered" />
                    </ButtonComponent>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    width: 100%;
    height: fit-content;
}

.section {
    width: 100%;
    height: fit-content;
    padding: 50px 20vw;
    color: var(--th-text-dark);
    background: var(--th-white);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

.divider {
    width: 75vw;
    height: 3px;
    background: linear-gradient(to right, hsl(0, 0%, 100%), var(--th-teal), var(--th-blue), hsl(0, 0%, 100%));
}

.skills-container {
    width: 100%;
    height: fit-content;
    padding: 100px 20vw;
    background: var(--th-white);
    color: var(--th-text-dark);
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
}

.box-wrapper {
    position: relative;
    width: 100%;
    display: flex;
    gap: 10%;
}

.header-wrapper {
    position: sticky;
    top: 10vh;
    width: 20%;
    height: 100%;
}

.header-wrapper>h1 {
    width: fit-content;
    height: fit-content;
}

h1.no-sticky {
    display: none;
}

.box-container {
    display: flex;
    flex-direction: column;
    width: 70%;
    gap: 1.5rem;
}

.box {
    width: 100%;
    height: fit-content;
}

.skill-card-container {
    padding-top: 1rem;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
}

.skill-card {
    width: fit-content;
    padding: 1rem;
    border: 1px solid rgb(85, 85, 85, 50%);
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgb(85, 85, 85, 20%);
    transition: 0.5s;
}

.skill-card:hover {
    color: var(--th-text-light);
    background-color: var(--th-teal);
}

.add-margin {
    margin-top: 2rem;
}

.photo-box {
    display: flex;
    align-items: center;
    height: 100%;
    max-width: 40%;
    text-align: center;
}

.desc {
    flex: 2;
}

img.photo {
    display: block;
    border-radius: 100%;
    max-width: 100%;
    max-height: 100%;
}

@media (max-width: 1100px) or (orientation: portrait) {
    .section {
        flex-direction: column;
        padding: 10%;
        text-align: center;
    }

    .box-wrapper {
        flex-direction: column;
    }

    .header-wrapper {
        display: none;
    }

    h1.no-sticky {
        display: block;
        text-align: center;
        padding-bottom: 30px;
    }


    .box-container {
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .box {
        width: 100%;
        text-align: center;
    }

    .skills-container {
        padding: 10%;
    }

    .skill-card-container {
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
    }

    .skill-card {
        padding: 10px;
    }

    .photo-box {
        max-width: 80%;
        max-height: 50vh;
    }
}
</style>
