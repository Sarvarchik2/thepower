<template>
  <div class="layout-wrapper">
    <header :class="['header', { 'scrolled': isScrolled }]">
      <div class="container">
        <div class="header-pill">
          <div class="logo">
            <span class="logo-text">ThePowers</span>
          </div>
          <nav class="nav">
            <NuxtLink to="/#solutions" class="nav-link">Products</NuxtLink>
            <NuxtLink to="/#market" class="nav-link">Solutions</NuxtLink>
            <NuxtLink to="/#partners" class="nav-link">Partners</NuxtLink>
            <NuxtLink to="/#contact" class="nav-link">Resources</NuxtLink>
          </nav>
          <div class="header-action">
            <NuxtLink to="/#contact" class="btn btn-primary btn-sm">Partner Details</NuxtLink>
          </div>
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
            <span class="logo-text">ThePowers</span>
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
  isScrolled.value = window.scrollY > 10
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
  top: 16px;
  left: 0;
  width: 100%;
  z-index: 100;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.header.scrolled {
  top: 8px;
}

.header-pill {
  background-color: var(--color-dark);
  border-radius: var(--radius-md);
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.05em;
  color: #fff;
}

.nav {
  display: flex;
  gap: 32px;
}

.nav-link {
  font-weight: 500;
  font-size: 0.95rem;
  color: rgba(255,255,255,0.7);
  position: relative;
  transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #fff;
}

.nav-link::after {
  content: '';
  position: absolute;
  top: 50%;
  right: -14px;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>');
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.7;
}

.nav-link:hover::after {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>');
  opacity: 1;
}

.btn-sm {
  padding: 10px 24px;
  font-size: 0.95rem;
  font-weight: 600;
  background-color: transparent;
  border: 1px solid rgba(255,255,255,0.2);
  color: #fff;
}

.btn-sm:hover {
  background-color: rgba(255,255,255,0.1);
  box-shadow: none;
  transform: none;
}

.main-content {
  flex: 1;
}

.footer {
  background-color: #000;
  color: #fff;
  padding: 80px 0 40px;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
}

.copyright {
  margin-top: 10px;
  color: #666;
  font-size: 0.9rem;
}

.footer-links {
  display: flex;
  gap: 32px;
}

.footer-link {
  color: #888;
  font-size: 0.9rem;
  font-weight: 500;
}

.footer-link:hover {
  color: #fff;
}

@media (max-width: 900px) {
  .nav {
    display: none;
  }
}
</style>
