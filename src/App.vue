<script setup lang="ts">
import { onMounted, ref, useTemplateRef } from 'vue';
import LocomotiveScroll from 'locomotive-scroll';
import FooterComponent from './components/FooterComponent.vue';
import SkillsSection from './components/SkillsSection.vue';
import TitleSlide from './components/TitleSlide.vue';
import MobileModal from './components/MobileModal.vue';

const displayModal = ref(false);
const containerRef = useTemplateRef('container');

let scroll: any;

onMounted(() => {
  scroll = new LocomotiveScroll({
    el: containerRef.value,
    smooth: true,
    tablet: {
      smooth: true,
      breakpoint: 0,
      multiplier: 10
    }
  });
});

const toggleMenu = () => {
  displayModal.value = !displayModal.value;
  if (displayModal.value) {
    if (scroll !== undefined)
      scroll.stop();
  }
  else {
    if (scroll !== undefined)
      scroll.start();
  }
};

const redirectToMail = () => {
  window.open("mailto:julialn.sunni@gmail.com");
};

</script>

<template>
  <MobileModal v-if="displayModal" class="requires-no-scroll" @close-modal="toggleMenu"
    @redirect-mail="redirectToMail" />
  <div ref="container" class="container" data-scroll-container>
    <TitleSlide @open-modal="toggleMenu" />
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
