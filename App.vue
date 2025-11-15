<template>
  <div id="app" class="app">
    <Navigation />
    <Carousel class="vertical-carousel">
      <template #arrows>
        <!-- Пустой слот для скрытия стрелок -->
      </template>
      <Slide>
        <IntroSection />
      </Slide>
      <Slide>
        <AboutSection />
      </Slide>
      <Slide>
        <ContactSection />
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-snap'
import Navigation from './components/Navigation.vue'
import IntroSection from './components/IntroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    IntroSection,
    AboutSection,
    ContactSection,
    Carousel,
    Slide
  }
}
</script>

<style scoped>
.app {
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: block;
}

/* Стили для vue-snap Carousel - вертикальное направление */
.vertical-carousel :deep(.vs-carousel) {
  width: 100%;
  height: 100vh;
  position: relative;
}

.vertical-carousel :deep(.vs-carousel__wrapper) {
  width: 100%;
  height: 100vh;
  overflow-y: auto !important;
  overflow-x: hidden !important;
  scroll-snap-type: y mandatory !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
  display: flex !important;
  flex-direction: column !important;
  margin: 0;
  padding: 0;
  list-style: none;
}

.vertical-carousel :deep(.vs-carousel__wrapper::-webkit-scrollbar) {
  display: none;
}

.vertical-carousel :deep(.vs-carousel__slide) {
  width: 100% !important;
  height: 100vh !important;
  min-height: 100vh !important;
  flex: 0 0 100vh !important;
  flex-shrink: 0;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  margin: 0;
  padding: 0;
}

/* Скрываем стрелки навигации vue-snap (уже скрыты через пустой слот, но на всякий случай) */
.vertical-carousel :deep(.vs-carousel__arrows),
.vertical-carousel :deep(.vs-carousel__arrows--left),
.vertical-carousel :deep(.vs-carousel__arrows--right) {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
  pointer-events: none !important;
}
</style>
