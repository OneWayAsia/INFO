<template>
  <section id="contact-section" class="contact-section">
    <div class="section-content">
      <div class="contact-title">
        <h1 class="title large contact-heading">
          contact<span class="dot">.</span>
        </h1>
        <hr class="divider" />
        <div class="info-wrapper">
          <div class="info">
            <p class="info-text">
              <a href="mailto:info@oneway.asia" class="email-link"
                >info@oneway.asia</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection'
}
</script>

<style scoped>
.contact-section {
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  background-color: var(--darker-bg);
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

.contact-title {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title.large.contact-heading {
  color: #ffffff;
  margin-bottom: 20px;
  font-size: 3.5rem !important;
  font-weight: 200;
}

.title.large.contact-heading .dot {
  color: #c9584d;
}

.divider {
  width: 100px;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.3);
  border: none;
  margin: 0 0 20px 0;
}

.info-wrapper {
  margin: 0;
}

.info-text {
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.6;
  margin: 0;
}

.email-link {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.email-link:hover {
  color: var(--primary-red);
}

@media (max-width: 768px) {
  .title.large.contact-heading {
    font-size: 2.8rem !important;
    max-width: calc(100% - 60px);
    margin: 0 auto 20px;
  }

  .section-content {
    padding: 0 50px 0 20px;
  }

  .divider {
    width: 80px;
  }

  .info-text {
    font-size: var(--font-size-intro-text-mobile);
    word-break: break-word;
  }
}
</style>
