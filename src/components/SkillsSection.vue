<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import ButtonComponent from './ButtonComponent.vue';
import DownloadIcon from './DownloadIcon.vue';

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
    <div class="section">
        <div class="photo-box">
            <img class="photo" src="../assets/png/photo.jpg">
        </div>
        <div class="desc">
            <h1>{{ $t("Description.header") }}👋</h1>
            <p>{{ $t("Description.bio") }}</p>
        </div>
    </div>
    <div class="divider">
    </div>
    <div class="more-text">
        <div class="box-container">
            <div class="box teal">
                <div class="hr space-mono">frontend development</div>
                <p>HTML/CSS, JavaScript, TypeScript</p>
                <p>React.js, Vue3, Figma</p>
            </div>
            <div class="box blue">
                <div class="hr space-mono">backend development</div>
                <p>C#, Python, SQL</p>
                <p>ASP.NET, PostgreSQL</p>
            </div>
        </div>
        <ButtonComponent :label="resumeLabel" @handle-click="downloadFile" @apply-hover="() => isButtonHovered = true"
            @remove-hover="() => isButtonHovered = false">
            <DownloadIcon :is-hovered="isButtonHovered" />
        </ButtonComponent>
    </div>
</template>

<style scoped>
.section {
    position: sticky;
    bottom: 0vh;
    z-index: -1;
    width: 100%;
    height: 50vh;
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

.more-text {
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

.box-container {
    width: 100%;
    display: flex;
    gap: 5vw;
}

.box {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(85, 85, 85, 50%);
    border-radius: 5px;
    padding-bottom: 30px;
}

.hr {
    font-size: clamp(1rem, 1rem + 1.5vw, 1.5rem);
    width: 100%;
    text-align: center;
    color: var(--th-text-light);
    margin-bottom: 10px;
}

.box.teal>.hr {
    background: var(--th-teal);
}

.box.blue>.hr {
    background: var(--th-blue);
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
        height: 100vh;
        padding: 30% 10%;
        text-align: center;
    }

    .box-container {
        flex-direction: column;
    }

    .more-text {
        padding: 10%;
    }

    .photo-box {
        max-width: 80%;
        max-height: 50vh;
    }
}
</style>
