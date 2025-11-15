<template>
  <section id="about-section" class="about-section">
    <div class="section-content">
      <div class="row">
        <div class="col about-left">
          <div class="inner-wrapper">
            <h1 class="title large">
              about<span class="dot">.</span>
            </h1>
            <hr class="divider" />
            <h2 class="title intro-text">
              We are a Project Management and Consulting company
              that provides technology-focused solutions.
            </h2>
          </div>
        </div>

        <div class="col collaborate-right">
          <div class="inner-wrapper">
            <h1 class="title large">
              collaborate<span class="dot">.</span>
            </h1>
            <hr class="divider" />
            <h2 class="title intro-text">
              Got an idea or business project that you need help with? We would
              love to hear from you.
            </h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>

<style scoped>
.about-section {
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  padding: 0;
}

.section-content {
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
}

.row {
  display: flex;
  flex-wrap: nowrap;
  margin: 0;
  height: 100vh;
}

.col {
  flex: 0 0 50%;
  max-width: 50%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.about-left {
  background-color: #ffffff;
}

.collaborate-right {
  background-color: var(--primary-red);
}

.inner-wrapper {
  padding: var(--section-padding);
  text-align: left;
  width: 80%;
  margin: 0 auto;
}

.title.large {
  color: var(--primary-red);
  margin-bottom: 20px;
  font-size: 3.5rem;
  font-weight: 200;
}

.collaborate-right .title.large {
  color: #ffffff;
}

.title.large .dot {
  color: var(--primary-red);
}

.collaborate-right .title.large .dot {
  color: #ffffff;
}

.divider {
  width: 100px;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  margin: 20px 0;
}

.collaborate-right .divider {
  background-color: rgba(255, 255, 255, 0.3);
}

.title.intro-text {
  color: #333333;
  font-weight: 300;
  line-height: 1.6;
  font-size: 1.2rem;
}

.collaborate-right .title.intro-text {
  color: #ffffff;
}

@media (max-width: 992px) {
  .row {
    flex-wrap: wrap;
    height: auto;
  }

  .col {
    flex: 0 0 100%;
    max-width: 100%;
    min-height: 50vh;
  }

  .inner-wrapper {
    padding: var(--section-padding-tablet);
  }
}

@media (max-width: 768px) {
  .inner-wrapper {
    padding: var(--section-padding-mobile);
    padding-right: 50px;
  }

  .title.large {
    font-size: 2.8rem;
    word-break: break-word;
  }

  .title.intro-text {
    font-size: var(--font-size-intro-text-mobile);
    word-break: break-word;
  }

  .divider {
    width: 80px;
  }
}
</style>
