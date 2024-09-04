<script setup lang="ts">
import FooterComponent from './components/FooterComponent.vue';
import SkillsSection from './components/SkillsSection.vue';
import TitleSlide from './components/TitleSlide.vue';


</script>

<template>
  <div class="container">
    <TitleSlide />
    <SkillsSection />
    <FooterComponent />
  </div>
</template>

<style scoped>
.container {
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
