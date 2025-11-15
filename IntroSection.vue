<template>
  <section id="intro-section" class="intro-section">
    <div class="section-content">
      <div class="intro-title">
        <h2 class="home-title desk-title">
          project<span class="dot">.</span
          ><span class="typeit-text">{{ typeitText }}</span
          ><span class="cursor blink">|</span>
        </h2>
        <h2 class="home-title mobile-title">
          project<span class="dot">.</span
          ><span class="typeit-text">{{ typeitText }}</span
          ><span class="cursor blink">|</span>
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

const WORDS = ['management', 'consulting', 'development']
const TYPING_SPEED = 100
const DELETING_SPEED = 50
const PAUSE_TIME = 2000
const START_DELAY = 1000

export default {
  name: 'IntroSection',
  setup() {
    const typeitText = ref('')
    let currentWordIndex = 0
    let currentCharIndex = 0
    let isDeleting = false
    let timeoutId = null

    const type = () => {
      const currentWord = WORDS[currentWordIndex]

      if (isDeleting) {
        typeitText.value = currentWord.substring(0, currentCharIndex - 1)
        currentCharIndex--
      } else {
        typeitText.value = currentWord.substring(0, currentCharIndex + 1)
        currentCharIndex++
      }

      if (!isDeleting && currentCharIndex === currentWord.length) {
        timeoutId = setTimeout(type, PAUSE_TIME)
        isDeleting = true
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false
        currentWordIndex = (currentWordIndex + 1) % WORDS.length
        timeoutId = setTimeout(type, 500)
      } else {
        const speed = isDeleting ? DELETING_SPEED : TYPING_SPEED
        timeoutId = setTimeout(type, speed)
      }
    }

    onMounted(() => {
      timeoutId = setTimeout(type, START_DELAY)
    })

    onUnmounted(() => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    })

    return {
      typeitText
    }
  }
}
</script>

<style scoped>
.intro-section {
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #191919;
  display: flex;
  align-items: center;
  justify-content: center;
}

.section-content {
  position: relative;
  z-index: 1;
  text-align: center;
  width: 100%;
  max-width: 100%;
  padding: 0 20px;
  padding-right: 60px;
  box-sizing: border-box;
}

.intro-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--content-gap);
}

.home-title {
  font-size: var(--font-size-large);
  font-weight: 200;
  color: var(--text-light);
  letter-spacing: 2px;
  position: relative;
  z-index: 1;
}

.home-title .dot {
  color: var(--primary-red);
}

.home-title .typeit-text {
  color: var(--primary-red);
}

.home-title .cursor {
  color: var(--primary-red);
  margin-left: 2px;
}

.mobile-title {
  display: none;
}

@media (max-width: 768px) {
  .desk-title {
    display: none;
  }

  .mobile-title {
    display: block;
  }

  .home-title {
    font-size: 2.8rem;
    letter-spacing: 1px;
    white-space: nowrap;
    margin: 0 auto;
    overflow: hidden;
  }

  .section-content {
    padding: 0 20px;
    padding-right: 50px;
  }
}
</style>
