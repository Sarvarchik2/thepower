<template>
  <div class="layout-wrapper">
    <header :class="['header', { 'scrolled': isScrolled }]">
      <div class="container">
        <div class="header-pill">
          <div class="logo">
            <NuxtLink :to="localePath('/')">
              <img src="/logo.png" alt="The Power Logo" class="brand-logo" />
            </NuxtLink>
          </div>
          <nav class="nav">
            <NuxtLink :to="localePath('/#solutions')" class="nav-link">{{ $t('nav.products') }}</NuxtLink>
            <NuxtLink :to="localePath('/#market')" class="nav-link">{{ $t('nav.solutions') }}</NuxtLink>
            <NuxtLink :to="localePath('/#partners')" class="nav-link">{{ $t('nav.partners') }}</NuxtLink>
            <NuxtLink :to="localePath('/#contact')" class="nav-link">{{ $t('nav.resources') }}</NuxtLink>
          </nav>
          <div class="header-action">
            <!-- Language Switcher -->
            <div class="lang-switcher">
              <button class="lang-btn" @click="toggleLangMenu">
                {{ locale.toUpperCase() }}
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </button>
              <div v-if="isLangMenuOpen" class="lang-menu">
                <button 
                  v-for="loc in locales" 
                  :key="loc.code" 
                  @click="switchLanguage(loc.code)"
                  :class="{'active': locale === loc.code}"
                >
                  {{ loc.name }}
                </button>
              </div>
            </div>
            <NuxtLink :to="localePath('/#contact')" class="btn btn-primary btn-sm">{{ $t('nav.partnerDetails') }}</NuxtLink>
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
            <NuxtLink :to="localePath('/')">
              <img src="/logo.png" alt="The Power Logo" class="brand-logo footer-logo" />
            </NuxtLink>
          </div>
          <p class="copyright">{{ $t('footer.copyright') }}</p>
          <div class="social-links">
            <a href="https://www.linkedin.com/company/the-power-uz/?viewAsMember=true" target="_blank" rel="noopener noreferrer" class="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>
        <div class="footer-links">
          <NuxtLink to="/privacy" class="footer-link">{{ $t('footer.privacy') }}</NuxtLink>
          <NuxtLink to="/terms" class="footer-link">{{ $t('footer.terms') }}</NuxtLink>
          <NuxtLink to="/aml-kyc" class="footer-link">{{ $t('footer.aml') }}</NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const { locale, locales, setLocale } = useI18n()
const localePath = useLocalePath()

const isScrolled = ref(false)
const isLangMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

const toggleLangMenu = () => {
  isLangMenuOpen.value = !isLangMenuOpen.value
}

const switchLanguage = (code) => {
  setLocale(code)
  isLangMenuOpen.value = false
}

// Close language menu on outside click
const closeMenu = (e) => {
  if (!e.target.closest('.lang-switcher')) {
    isLangMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('click', closeMenu)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('click', closeMenu)
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
  background-color: #ffffff;
  border-radius: var(--radius-md);
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.brand-logo {
  height: 48px;
  width: auto;
  display: block;
}

.footer-logo {
  height: 56px;
  /* Keep footer logo white since footer is dark */
  filter: brightness(0) invert(1);
}

.nav {
  display: flex;
  gap: 32px;
}

.nav-link {
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--color-text-dark);
  position: relative;
  transition: color 0.3s ease;
}



.nav-link::after {
  content: '';
  position: absolute;
  top: 50%;
  right: -14px;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23121212" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>');
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.5;
}

.nav-link:hover::after {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%2302c523" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>');
  opacity: 1;
}

.btn-sm {
  padding: 10px 24px;
  font-size: 0.95rem;
  font-weight: 600;
  background-color: var(--color-primary);
  border: none;
  color: #fff;
  transition: all 0.3s ease;
}

.btn-sm:hover {
  background-color: var(--color-primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(2, 197, 35, 0.2);
}

/* Header actions container */
.header-action {
  display: flex;
  align-items: center;
  gap: 16px;
}

/* Language Switcher */
.lang-switcher {
  position: relative;
  display: flex;
  align-items: center;
}

.lang-btn {
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text-dark);
  padding: 8px 14px;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.3s ease;
}

.lang-btn:hover {
  background: rgba(2, 197, 35, 0.05);
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.lang-menu {
  position: absolute;
  top: 120%;
  right: 0;
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 130px;
  box-shadow: var(--shadow-lg);
  z-index: 1000;
}

.lang-menu button {
  background: transparent;
  border: none;
  padding: 10px 16px;
  text-align: left;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  color: var(--color-text-dark);
  transition: all 0.2s ease;
}

.lang-menu button:hover {
  background: var(--color-bg-alt);
  color: var(--color-primary);
}

.lang-menu button.active {
  background: rgba(2, 197, 35, 0.1);
  color: var(--color-primary);
  font-weight: 600;
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
  margin-bottom: 16px;
}

.social-links {
  display: flex;
  gap: 16px;
}

.social-icon {
  color: #888;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255,255,255,0.05);
}

.social-icon:hover {
  background: #0077b5;
  color: #fff;
  transform: translateY(-2px);
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

@media (max-width: 768px) {
  .header-pill {
    padding: 10px 16px;
  }
  .brand-logo {
    height: 40px;
  }
  .header-action {
    gap: 10px;
  }
  .btn-sm {
    padding: 8px 16px;
    font-size: 0.85rem;
    white-space: nowrap;
  }
  .lang-btn {
    padding: 6px 10px;
  }
}

@media (max-width: 480px) {
  .header-pill {
    padding: 8px 12px;
  }
  .brand-logo {
    height: 32px;
  }
  .header-action {
    gap: 6px;
  }
  .btn-sm {
    padding: 6px 12px;
    font-size: 0.75rem;
  }
  .lang-btn {
    padding: 4px 8px;
    font-size: 0.75rem;
  }
}
</style>
