<template>
  <nav class="navigation" aria-label="Section navigation">
    <ul class="nav-list" :class="`active-${activeSection}`">
      <li v-for="section in sections" :key="section.id">
        <a
          :href="`#${section.id}`"
          :aria-label="`Go to ${section.label}`"
          @click="handleIndicatorClick(section.id, $event)"
          :class="linkClasses(section.id)"
        />
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const SECTIONS = Object.freeze([
  { id: 'intro-section', label: 'Introduction' },
  { id: 'about-section', label: 'About' },
  { id: 'contact-section', label: 'Contact' }
])

const SCROLL_DURATION = 800

const sections = SECTIONS
const activeSection = ref(sections[0].id)

let observer: IntersectionObserver | null = null
let carouselRoot: Element | null = null
let isScrolling = false

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (!element || isScrolling) return

  isScrolling = true
  activeSection.value = sectionId

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })

  window.setTimeout(() => {
    isScrolling = false
  }, SCROLL_DURATION)
}

const handleIndicatorClick = (sectionId: string, event: Event) => {
  event.preventDefault()
  scrollToSection(sectionId)
}

const linkClasses = (sectionId: string) => ({
  active: activeSection.value === sectionId
})

const setupIntersectionObserver = () => {
  carouselRoot = document.querySelector('.vs-carousel__wrapper')

  observer = new IntersectionObserver((entries) => {
    if (isScrolling) return

    let maxRatio = 0
    let mostVisibleSection: string | null = null

    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
        maxRatio = entry.intersectionRatio
        mostVisibleSection = entry.target.id
      }
    })

    if (mostVisibleSection) {
      activeSection.value = mostVisibleSection
    }
  }, {
    root: carouselRoot || null,
    rootMargin: '0px',
    threshold: [0, 0.5, 1]
  })

  sections.forEach(({ id }) => {
    const element = document.getElementById(id)
    if (element) {
      observer?.observe(element)
    }
  })
}

onMounted(() => {
  window.setTimeout(setupIntersectionObserver, 100)
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.navigation {
  position: fixed;
  right: 30px;
  top: 50%;
  transform: translateY(calc(-50% + 0.6rem));
  z-index: 1000;
  display: flex;
  align-items: center;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
}

/* Активный индикатор */
.nav-list::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: var(--nav-indicator-size);
  height: var(--nav-indicator-size);
  border-radius: 50%;
  background-color: #d94e47;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
  pointer-events: none;
}

/* Intro → красный */
.nav-list.active-intro-section::before {
  transform: translateY(0);
  background-color: #d94e47;
}

/* About (фон красный → индикатор должен быть белым) */
.nav-list.active-about-section::before {
  transform: translateY(calc(var(--nav-indicator-size) + var(--nav-indicator-spacing)));
  background-color: #ffffff; /* исправлено */
}

/* Contact → красный */
.nav-list.active-contact-section::before {
  transform: translateY(calc((var(--nav-indicator-size) + var(--nav-indicator-spacing)) * 2));
  background-color: #d94e47;
}

/* Неактивные индикаторы */
.nav-list li {
  margin-bottom: var(--nav-indicator-spacing);
  position: relative;
  z-index: 1;
}

.nav-list a {
  display: block;
  width: var(--nav-indicator-size);
  height: var(--nav-indicator-size);
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  text-decoration: none;
  position: relative;
  z-index: 1;
}

.nav-list a.active {
  background-color: transparent;
}

/* На About — все неактивные индикаторы должны стать белыми */
.nav-list.active-about-section a {
  background-color: rgba(255, 255, 255, 0.5); /* белые */
}

/* MOBILE */
@media (max-width: 768px) {
  .navigation {
    right: 15px;
  }

  .nav-list a {
    width: var(--nav-indicator-mobile-size);
    height: var(--nav-indicator-mobile-size);
  }

  .nav-list::before {
    width: var(--nav-indicator-mobile-size);
    height: var(--nav-indicator-mobile-size);
  }

  .nav-list.active-about-section::before {
    transform: translateY(var(--nav-indicator-mobile-spacing));
    background-color: #d94e47; /* мобайл остаётся красным */
  }

  .nav-list.active-contact-section::before {
    transform: translateY(calc(var(--nav-indicator-mobile-spacing) * 2));
  }

  /* На мобильном About индикаторы красные (как на десктопе для других секций) */
  .nav-list.active-about-section a {
    background-color: rgba(217, 78, 71, 0.5); /* #d94e47 с прозрачностью */
  }
}
</style>