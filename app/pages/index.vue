<template>
  <div class="landing-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container hero-container">
        <div class="hero-content gsap-reveal">
          <h1 class="hero-title">
            <span class="text-dark">{{ $t('hero.gateway1') }}</span>
            <br>
            <span class="text-accent">{{ $t('hero.gateway2') }}</span>
          </h1>
        </div>
        
        <div class="hero-card gsap-reveal">
          <div class="hero-card-left">
            <h2 class="card-headline">{{ $t('hero.headline1') }} <br><strong>{{ $t('hero.headline2') }}</strong></h2>
            <p class="subtitle">{{ $t('hero.subtitle') }}</p>
            <div class="hero-actions">
              <NuxtLink :to="localePath('/#contact')" class="btn btn-primary">{{ $t('hero.ctaStart') }}</NuxtLink>
              <NuxtLink :to="localePath('/#contact')" class="btn btn-outline-light">{{ $t('hero.ctaDocs') }}</NuxtLink>
            </div>
          </div>
          <div class="hero-card-right">
            <!-- Mockup phone / graphic representation -->
            <div class="phone-mockup">
              <div class="phone-screen">
                <div class="top-bar">
                  <span>9:30</span>
                  <div class="icons">
                    <span>📶</span><span>🔋</span>
                  </div>
                </div>
                <div class="game-store">
                  <h4>{{ $t('mockup.store') }}</h4>
                  <div class="offer-card">
                    <div class="gem-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 3 18 3 22 9 12 22 2 9"></polygon><polygon points="12 22 18 3 12 9 6 3"></polygon><polygon points="2 9 12 9 22 9"></polygon></svg>
                    </div>
                    <span class="badge badge-green">{{ $t('mockup.offer') }}</span>
                    <button class="buy-btn">$39.99 <span>{{ $t('mockup.pay') }}</span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust & Traction Section -->
    <section id="partners" class="trust gsap-reveal">
      <div class="container">
        <p class="trust-subtitle">{{ $t('trust.subtitle') }}</p>
        <div class="trust-logos">
          <span class="logo-placeholder">Tencent</span>
          <span class="logo-placeholder">Xsolla</span>
          <span class="logo-placeholder">Octobank</span>
          <span class="logo-placeholder">Epic Games</span>
          <span class="logo-placeholder">Steam</span>
          <span class="logo-placeholder">PUBG</span>
          <span class="logo-placeholder">Valve</span>
        </div>
      </div>
    </section>

    <!-- The Market Opportunity -->
    <section id="market" class="market gsap-reveal section">
      <div class="container">
        <h2 class="section-title">{{ $t('metrics.title1') }} <br>{{ $t('metrics.title2') }}</h2>
        <div class="grid cards-3">
          <div class="metric-card">
            <div class="metric-badge">{{ $t('metrics.m1Badge') }}</div>
            <h3 class="metric-value">40M</h3>
            <p class="metric-label">{{ $t('metrics.m1Title') }}</p>
            <p class="metric-desc">{{ $t('metrics.m1Desc') }}</p>
          </div>
          <div class="metric-card dark-card">
            <div class="metric-badge">{{ $t('metrics.m2Badge') }}</div>
            <h3 class="metric-value text-green">16M+</h3>
            <p class="metric-label">{{ $t('metrics.m2Title') }}</p>
            <p class="metric-desc">{{ $t('metrics.m2Desc') }}</p>
          </div>
          <div class="metric-card">
            <div class="metric-badge">{{ $t('metrics.m3Badge') }}</div>
            <h3 class="metric-value">93%</h3>
            <p class="metric-label">{{ $t('metrics.m3Title') }}</p>
            <p class="metric-desc">{{ $t('metrics.m3Desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Solutions -->
    <section id="solutions" class="solutions section bg-alt">
      <div class="container">
        <h2 class="section-title text-center">{{ $t('solutions.title') }}</h2>
        <div class="grid cards-2">
          
          <div class="xcard xcard-light gsap-reveal">
            <div class="xcard-badge"><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg></span> {{ $t('solutions.apiBadge') }}</div>
            <h3 class="xcard-title">{{ $t('solutions.apiTitle') }} <br>{{ $t('solutions.apiSubtitle') }}</h3>
            <p class="xcard-desc">{{ $t('solutions.apiDesc') }}</p>
            <div class="xcard-actions">
              <NuxtLink :to="localePath('/#contact')" class="fake-link">{{ $t('solutions.apiLink') }}</NuxtLink>
            </div>
            <!-- decorative floating element -->
            <div class="floating-el el-1">
              <div class="pill3d">{{ $t('solutions.apiPill') }}</div>
            </div>
          </div>

          <div class="xcard xcard-dark gsap-reveal">
            <div class="xcard-badge"><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg></span> {{ $t('solutions.sdkBadge') }}</div>
            <h3 class="xcard-title">{{ $t('solutions.sdkTitle') }} <br>{{ $t('solutions.sdkSubtitle') }}</h3>
            <p class="xcard-desc">{{ $t('solutions.sdkDesc') }}</p>
            <div class="xcard-actions">
              <NuxtLink :to="localePath('/#contact')" class="fake-link text-white">{{ $t('solutions.sdkLink') }}</NuxtLink>
            </div>
            <!-- decorative floating element -->
            <div class="floating-el el-2">
              <div class="pill3d pill-green">{{ $t('solutions.sdkPill') }}</div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Why The Powers? -->
    <section class="features section">
      <div class="container">
        <h2 class="section-title text-center">{{ $t('features.title1') }} <br>{{ $t('features.title2') }}</h2>
        <div class="grid cards-2">
          <div class="feature-card-detailed gsap-reveal">
            <div class="f-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </div>
            <h4 class="feature-title-large">{{ $t('features.f1Title') }}</h4>
            <p class="feature-desc-large">{{ $t('features.f1Desc') }}</p>
            <ul class="feature-list">
              <li><span class="check">✓</span> {{ $t('features.f1b1') }}</li>
              <li><span class="check">✓</span> {{ $t('features.f1b2') }}</li>
              <li><span class="check">✓</span> {{ $t('features.f1b3') }}</li>
            </ul>
          </div>
          <div class="feature-card-detailed gsap-reveal">
            <div class="f-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" x2="21" y1="14" y2="3"></line><polyline points="8 21 3 21 3 16"></polyline><line x1="20" x2="3" y1="10" y2="21"></line></svg>
            </div>
            <h4 class="feature-title-large">{{ $t('features.f2Title') }}</h4>
            <p class="feature-desc-large">{{ $t('features.f2Desc') }}</p>
            <ul class="feature-list">
              <li><span class="check">✓</span> {{ $t('features.f2b1') }}</li>
              <li><span class="check">✓</span> {{ $t('features.f2b2') }}</li>
              <li><span class="check">✓</span> {{ $t('features.f2b3') }}</li>
            </ul>
          </div>
          <div class="feature-card-detailed gsap-reveal">
            <div class="f-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            </div>
            <h4 class="feature-title-large">{{ $t('features.f3Title') }}</h4>
            <p class="feature-desc-large">{{ $t('features.f3Desc') }}</p>
            <ul class="feature-list">
              <li><span class="check">✓</span> {{ $t('features.f3b1') }}</li>
              <li><span class="check">✓</span> {{ $t('features.f3b2') }}</li>
              <li><span class="check">✓</span> {{ $t('features.f3b3') }}</li>
            </ul>
          </div>
          <div class="feature-card-detailed gsap-reveal">
            <div class="f-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            </div>
            <h4 class="feature-title-large">{{ $t('features.f4Title') }}</h4>
            <p class="feature-desc-large">{{ $t('features.f4Desc') }}</p>
            <ul class="feature-list">
              <li><span class="check">✓</span> {{ $t('features.f4b1') }}</li>
              <li><span class="check">✓</span> {{ $t('features.f4b2') }}</li>
              <li><span class="check">✓</span> {{ $t('features.f4b3') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Lead Form / Contact -->
    <section id="contact" class="contact section">
      <div class="container">
        <div class="contact-box gsap-reveal">
          <div class="contact-left">
            <h2 class="contact-title">{{ $t('contact.title') }}</h2>
            <p class="contact-subtitle">{{ $t('contact.subtitle') }}</p>
            <div class="contact-info">
              <div class="contact-item">
                <p><strong>{{ $t('contact.hq') }}</strong><br>{{ $t('contact.address') }}</p>
              </div>
              <div class="contact-item mt-4">
                <p><strong>{{ $t('contact.email') }}</strong><br><a href="mailto:info@thepower.uz">info@thepower.uz</a></p>
              </div>
              <div class="contact-item mt-4">
                <p><strong>{{ $t('contact.phone') }}</strong><br><a href="tel:+998981888888">+998 98 188 88 88</a></p>
              </div>
              <div class="contact-item mt-4">
                <p><strong>LinkedIn</strong><br><a href="https://www.linkedin.com/company/the-power-uz/?viewAsMember=true" target="_blank" rel="noopener noreferrer">The Power</a></p>
              </div>
            </div>
          </div>
          
          <div class="contact-right">
            <form class="lead-form" @submit.prevent="submitForm">
              <div class="form-row">
                <div class="form-group">
                  <input type="text" id="fname" required :placeholder="$t('contact.fname')" v-model="form.fname" />
                </div>
                <div class="form-group">
                  <input type="text" id="lname" required :placeholder="$t('contact.lname')" v-model="form.lname" />
                </div>
              </div>
              <div class="form-group">
                <input type="email" id="email" required :placeholder="$t('contact.workEmail')" v-model="form.email" />
              </div>
              <div class="form-group">
                <input type="text" id="company" required :placeholder="$t('contact.company')" v-model="form.company" />
              </div>
              <div class="form-group">
                <textarea id="message" rows="4" :placeholder="$t('contact.message')" required v-model="form.message"></textarea>
              </div>
              <button type="submit" class="btn btn-primary w-full" :disabled="isLoading">
                {{ isLoading ? $t('contact.sending') : $t('contact.submit') }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Custom Toast Alert -->
    <div :class="['custom-toast', { 'toast-visible': showToast, 'toast-error': toastType === 'error' }]">
      <div class="toast-icon">
        <svg v-if="toastType === 'success'" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
      </div>
      <div class="toast-content">
        <h4>{{ toastTitle }}</h4>
        <p>{{ toastMessage }}</p>
      </div>
      <button class="toast-close" @click="closeToast">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const { t } = useI18n()
const localePath = useLocalePath()

const form = ref({
  fname: '',
  lname: '',
  email: '',
  company: '',
  message: ''
})

const isLoading = ref(false)

// Toast Alert State
const showToast = ref(false)
const toastType = ref('success')
const toastTitle = ref('')
const toastMessage = ref('')
let toastTimer = null

const displayToast = (type, title, message) => {
  toastType.value = type
  toastTitle.value = title
  toastMessage.value = message
  showToast.value = true
  
  if (toastTimer) clearTimeout(toastTimer)
  toastTimer = setTimeout(() => {
    closeToast()
  }, 5000)
}

const closeToast = () => {
  showToast.value = false
}

const submitForm = async () => {
  isLoading.value = true
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: form.value
    })
    displayToast('success', t('contact.successTitle'), t('contact.successMessage'))
    form.value = { fname: '', lname: '', email: '', company: '', message: '' }
  } catch (error) {
    displayToast('error', t('contact.errorTitle'), t('contact.errorMessage'))
    console.error(error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  const tl = gsap.timeline()
  
  tl.fromTo('.hero-title span', 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power4.out' })
    .fromTo('.hero-card', 
      { y: 40, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.4')

  gsap.utils.toArray('.gsap-reveal').forEach(section => {
    gsap.fromTo(section, 
      { y: 40, opacity: 0 },
      {
        y: 0, 
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
        }
      }
    )
  })
})
</script>

<style scoped>
/* Hero Typography */
.hero {
  padding-top: 160px;
  padding-bottom: 60px;
}

.hero-title {
  text-align: center;
  font-size: 5.5rem;
  letter-spacing: -0.06em;
  line-height: 1;
  margin-bottom: 60px;
}

.text-dark {
  color: var(--color-text-dark);
}

.text-accent {
  color: var(--color-text-accent);
}

/* Xsolla-esque Hero Card */
.hero-card {
  background-color: #0b1c11; /* Deep green */
  background-image: linear-gradient(135deg, #0b1c11 0%, #061109 100%);
  border-radius: var(--radius-xl);
  display: flex;
  overflow: hidden;
  color: #fff;
  min-height: 500px;
  box-shadow: var(--shadow-lg);
}

.hero-card-left {
  flex: 1;
  padding: 80px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-headline {
  font-size: 3rem;
  color: rgba(255,255,255,0.7);
  letter-spacing: -0.04em;
  margin-bottom: 24px;
}

.card-headline strong {
  color: #fff;
}

.subtitle {
  font-size: 1.1rem;
  color: rgba(255,255,255,0.8);
  margin-bottom: 40px;
  max-width: 450px;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 16px;
}

.btn-outline-light {
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255,255,255,0.3);
  padding: 16px 32px;
  border-radius: 50px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
}

.btn-outline-light:hover {
  background: rgba(255,255,255,0.1);
}

.hero-card-right {
  flex: 0.8;
  position: relative;
  background: radial-gradient(circle at center, rgba(2, 197, 35, 0.2) 0%, transparent 70%);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-top: 60px;
}

/* Phone Mockup */
.phone-mockup {
  width: 280px;
  height: 90%;
  background: #000;
  border-radius: 40px 40px 0 0;
  border: 8px solid #1a2a1f;
  border-bottom: none;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0 40px rgba(0,0,0,0.5);
}

.phone-screen {
  background: linear-gradient(180deg, #184223 0%, #0b1f11 100%);
  width: 100%;
  height: 100%;
  padding: 20px 16px;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 30px;
}

.game-store h4 {
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 20px;
}

.offer-card {
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(10px);
}

.gem-icon {
  font-size: 3rem;
  margin-bottom: 10px;
  filter: drop-shadow(0 0 20px rgba(2,197,35,0.5));
}

.badge-green {
  background: #02c523;
  border-radius: 50px;
  padding: 4px 12px;
  font-size: 0.7rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.buy-btn {
  background: rgba(255,255,255,0.15);
  border: none;
  width: 100%;
  padding: 12px;
  border-radius: 50px;
  color: #fff;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  cursor: pointer;
}

.buy-btn span {
  font-weight: 500;
  font-size: 0.8rem;
  color: #eee;
}

/* Trust Section */
.trust {
  padding: 40px 0 80px;
  text-align: center;
}

.trust-subtitle {
  font-size: 1rem;
  color: var(--color-text-muted);
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}

.trust-logos {
  display: flex;
  justify-content: center;
  gap: 60px;
  align-items: center;
  opacity: 0.4;
  flex-wrap: wrap;
}

.logo-placeholder {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--color-text-dark);
  letter-spacing: -0.04em;
}

/* Grid Layouts */
.grid {
  display: grid;
  gap: 24px;
}
.cards-3 { grid-template-columns: repeat(3, 1fr); }
.cards-2 { grid-template-columns: repeat(2, 1fr); }
.cards-4 { grid-template-columns: repeat(4, 1fr); }

/* Metics & Normal Cards */
.metric-card {
  background: #fff;
  padding: 40px;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
  position: relative;
}

.dark-card {
  background: var(--color-dark);
  color: #fff;
  border: none;
}

.dark-card .metric-label, .dark-card .metric-desc {
  color: rgba(255,255,255,0.7);
}

.metric-badge {
  display: inline-block;
  padding: 6px 14px;
  background: var(--color-bg-alt);
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 30px;
}

.dark-card .metric-badge {
  background: rgba(255,255,255,0.1);
  color: #fff;
}

.metric-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-md);
}

.metric-value {
  font-size: 4rem;
  margin-bottom: 12px;
}

.text-green {
  color: #02e028;
}

.metric-label {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.metric-desc {
  color: var(--color-text-muted);
}

/* Xcards (Solutions) */
.bg-alt {
  background-color: var(--color-bg-alt);
}

.xcard {
  padding: 60px;
  border-radius: var(--radius-xl);
  position: relative;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-md);
  overflow: hidden;
}

.xcard-light {
  background: #fff;
}

.xcard-dark {
  background: #111;
  color: #fff;
  background-image: radial-gradient(circle at top right, rgba(2, 197, 35, 0.15), transparent 60%);
}

.xcard-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(0,0,0,0.05);
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 30px;
  align-self: flex-start;
}

.xcard-dark .xcard-badge {
  background: rgba(255,255,255,0.1);
}

.xcard-title {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.xcard-desc {
  font-size: 1.1rem;
  color: var(--color-text-muted);
  max-width: 80%;
  margin-bottom: 40px;
  flex: 1;
}

.xcard-dark .xcard-desc {
  color: rgba(255,255,255,0.6);
}

.fake-link {
  font-weight: 700;
  font-size: 1.05rem;
  cursor: pointer;
}

.text-white {
  color: #fff;
}

/* Floating 3D Pills */
.floating-el {
  position: absolute;
  bottom: 40px;
  right: 40px;
}

.pill3d {
  background: #fff;
  padding: 16px 32px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.1rem;
  box-shadow: 0 20px 40px rgba(0,0,0,0.2), 
              inset 0 -4px 10px rgba(0,0,0,0.05),
              inset 0 4px 10px rgba(255,255,255,1);
  transform: perspective(400px) rotateX(10deg) rotateY(-10deg);
  transition: transform 0.3s ease;
  color: #111;
}

.pill-green {
  background: linear-gradient(135deg, #02e028 0%, #02a31d 100%);
  color: #fff;
  box-shadow: 0 20px 40px rgba(2, 197, 35, 0.4),
              inset 0 -4px 10px rgba(0,0,0,0.1),
              inset 0 4px 10px rgba(255,255,255,0.4);
}

.xcard:hover .pill3d {
  transform: perspective(400px) rotateX(0) rotateY(0) translateY(-10px);
}

/* Detailed Feature Cards */
.feature-card-detailed {
  padding: 50px 40px;
  background: #fff;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
}

.feature-card-detailed:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-5px);
  border-color: rgba(2, 197, 35, 0.3);
}

.f-icon-box {
  width: 64px;
  height: 64px;
  background: var(--color-bg-alt);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 24px;
}

.feature-title-large {
  font-size: 1.7rem;
  margin-bottom: 16px;
  letter-spacing: -0.03em;
}

.feature-desc-large {
  color: var(--color-text-muted);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 30px;
}

.feature-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.feature-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
  color: var(--color-text-dark);
}

.check {
  color: var(--color-primary);
  font-weight: 800;
  background: rgba(2, 197, 35, 0.1);
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 0.8rem;
}

/* Contact Block */
.contact-box {
  background: var(--color-dark);
  border-radius: var(--radius-xl);
  display: flex;
  overflow: hidden;
  color: #fff;
  box-shadow: var(--shadow-lg);
}

.contact-left {
  flex: 1;
  padding: 80px 60px;
  background-image: radial-gradient(circle at bottom left, rgba(2, 197, 35, 0.2), transparent 50%);
}

.contact-title {
  font-size: 3rem;
  margin-bottom: 20px;
}

.contact-subtitle {
  font-size: 1.1rem;
  color: rgba(255,255,255,0.7);
  margin-bottom: 40px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-info p {
  font-size: 1.05rem;
  line-height: 1.5;
  color: rgba(255,255,255,0.7);
}

.contact-info strong {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #fff;
  display: inline-block;
  margin-bottom: 4px;
}

.contact-info a {
  color: var(--color-primary);
  font-weight: 600;
  font-size: 1.1rem;
}

.contact-info a:hover {
  color: var(--color-primary-hover);
}

.contact-right {
  flex: 1;
  padding: 80px 60px;
  background: rgba(255,255,255,0.03);
  display: flex;
  align-items: center;
}

.lead-form {
  width: 100%;
}

.form-row {
  display: flex;
  gap: 16px;
}

.form-group {
  margin-bottom: 16px;
  flex: 1;
}

input, textarea {
  width: 100%;
  padding: 16px 20px;
  border-radius: var(--radius-sm);
  background-color: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  color: #fff;
  font-family: var(--font-main);
  font-size: 1rem;
  transition: all 0.2s ease;
}

input:focus, textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  background-color: rgba(255,255,255,0.1);
}

input::placeholder, textarea::placeholder {
  color: rgba(255,255,255,0.4);
}

.w-full {
  width: 100%;
}

@media (max-width: 1024px) {
  .hero-card {
    flex-direction: column;
  }
  .hero-card-left {
    padding: 60px 40px;
  }
  .hero-card-right {
    height: 300px;
  }
  .contact-box {
    flex-direction: column;
  }
  .contact-left, .contact-right {
    padding: 60px 40px;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
    word-break: break-word;
  }
  .card-headline {
    font-size: 1.8rem;
  }
  .hero-actions {
    flex-direction: column;
    gap: 16px;
  }
  .hero-actions .btn {
    width: 100%;
  }
  .hero-card-left {
    padding: 40px 24px;
  }
  .grid.cards-3, .grid.cards-2, .grid.cards-4 {
    grid-template-columns: 1fr;
  }
  .xcard {
    padding: 40px 30px;
  }
  .section-title {
    font-size: 2.5rem;
  }
  .custom-toast {
    left: 16px;
    right: 16px;
    bottom: 16px;
  }
  .contact-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2.2rem;
  }
  .card-headline {
    font-size: 1.5rem;
  }
  .hero-card-left {
    padding: 30px 20px;
  }
  .section-title {
    font-size: 2rem;
  }
  .trust-logos {
    gap: 24px;
  }
  .logo-placeholder {
    font-size: 1.2rem;
  }
  .contact-title {
    font-size: 2rem;
    word-break: break-word;
  }
  .contact-left, .contact-right {
    padding: 40px 20px;
  }
}

/* Custom Toast Alert */
.custom-toast {
  position: fixed;
  bottom: -100px;
  right: 32px;
  background: var(--color-dark);
  color: #fff;
  padding: 20px 24px;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  display: flex;
  align-items: center;
  gap: 16px;
  z-index: 9999;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  border: 1px solid rgba(255,255,255,0.1);
  min-width: 300px;
  max-width: 450px;
  opacity: 0;
  pointer-events: none;
}

.custom-toast.toast-visible {
  bottom: 32px;
  opacity: 1;
  pointer-events: auto;
}

.toast-icon {
  width: 40px;
  height: 40px;
  background: rgba(2, 197, 35, 0.2);
  color: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.toast-error .toast-icon {
  background: rgba(239, 68, 68, 0.2);
  color: #ef4444;
}

.toast-content {
  flex: 1;
}

.toast-content h4 {
  font-size: 1rem;
  margin-bottom: 4px;
  font-weight: 700;
}

.toast-content p {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.7);
  line-height: 1.4;
}

.toast-close {
  background: transparent;
  border: none;
  color: rgba(255,255,255,0.5);
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;
}

.toast-close:hover {
  color: #fff;
}
</style>
