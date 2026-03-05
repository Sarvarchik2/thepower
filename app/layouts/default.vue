<template>
  <div class="layout-wrapper">
    <header :class="['header', { 'scrolled': isScrolled }]">
      <div class="container header-container">
        <div class="logo">
          <span class="logo-text">The <span class="logo-accent">Powers</span></span>
        </div>
        <nav class="nav">
          <NuxtLink to="/#solutions" class="nav-link">Solutions</NuxtLink>
          <NuxtLink to="/#market" class="nav-link">Market</NuxtLink>
          <NuxtLink to="/#partners" class="nav-link">Partners</NuxtLink>
          <NuxtLink to="/api-docs" class="nav-link">API Docs</NuxtLink>
        </nav>
        <div class="header-action">
          <NuxtLink to="/#contact" class="btn btn-primary btn-sm">Partner with us</NuxtLink>
        </div>
      </div>
    </header>

    <main class="main-content">
      <slot />
    </main>

    <footer class="footer">
      <div class="container footer-container">
        <div class="footer-brand">
          <div class="logo">
            <span class="logo-text">The <span class="logo-accent">Powers</span></span>
          </div>
          <p class="copyright">&copy; 2026 The Powers Infrastructure.</p>
        </div>
        <div class="footer-links">
          <NuxtLink to="/privacy" class="footer-link">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms" class="footer-link">Terms of Service</NuxtLink>
          <NuxtLink to="/aml-kyc" class="footer-link">AML/KYC Policy</NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease;
  padding: 20px 0;
}

.header.scrolled {
  padding: 15px 0;
  border-bottom: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--color-text-dark);
}

.logo-accent {
  color: var(--color-primary);
}

.nav {
  display: flex;
  gap: 32px;
}

.nav-link {
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--color-text-muted);
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--color-text-dark);
}

.btn-sm {
  padding: 10px 20px;
  font-size: 0.9rem;
}

.main-content {
  flex: 1;
}

.footer {
  background-color: #000;
  color: #fff;
  padding: 60px 0 40px;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
}

.logo-text {
  color: inherit;
}

.copyright {
  margin-top: 10px;
  color: #888;
  font-size: 0.9rem;
}

.footer-links {
  display: flex;
  gap: 24px;
}

.footer-link {
  color: #888;
  font-size: 0.9rem;
}

.footer-link:hover {
  color: #fff;
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }
  .header-container {
    padding: 0 16px;
  }
}
</style>
