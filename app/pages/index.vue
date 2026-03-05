<template>
  <div class="landing-page">
    <!-- Hero Section -->
    <section class="hero b-section">
      <div class="container hero-container">
        <div class="hero-content" ref="heroContent">
          <h1 class="hero-title">Your Gateway to the <br><span class="text-primary">Uzbek Gaming Market</span>.</h1>
          <p class="hero-subtitle">Unified payment infrastructure and API routing for global digital entertainment. Reach 40M+ users through local payment networks.</p>
          <div class="hero-actions">
            <NuxtLink to="/#contact" class="btn btn-primary btn-lg">Get in touch</NuxtLink>
            <NuxtLink to="/api-docs" class="btn btn-outline btn-lg">View API Docs</NuxtLink>
          </div>
        </div>
        <div class="hero-visual" ref="heroVisual">
          <div class="abstract-shape shape-1"></div>
          <div class="abstract-shape shape-2"></div>
          <div class="abstract-shape shape-3"></div>
        </div>
      </div>
    </section>

    <!-- Trust & Traction Section -->
    <section id="partners" class="trust b-section bg-alt gsap-reveal">
      <div class="container">
        <p class="trust-subtitle">Trusted by industry leaders & powered by top-tier banking.</p>
        <div class="trust-logos">
          <span class="logo-placeholder">Tencent</span>
          <span class="logo-placeholder">Xsolla</span>
          <span class="logo-placeholder">Octobank</span>
        </div>
      </div>
    </section>

    <!-- The Market Opportunity -->
    <section id="market" class="market b-section gsap-reveal">
      <div class="container">
        <h2 class="section-title">Unlocking a <span class="text-primary">$150M+</span> Market</h2>
        <div class="grid cards-3">
          <div class="metric-card">
            <h3 class="metric-value">40M</h3>
            <p class="metric-label">Population</p>
            <p class="metric-desc">Young & digital-first demographic.</p>
          </div>
          <div class="metric-card">
            <h3 class="metric-value">16M+</h3>
            <p class="metric-label">Active Gamers</p>
            <p class="metric-desc">Rapidly expanding gaming community.</p>
          </div>
          <div class="metric-card">
            <h3 class="metric-value">93%</h3>
            <p class="metric-label">Local Cards</p>
            <p class="metric-desc">UZCARD/HUMO — unsupported by global gateways.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Solutions -->
    <section id="solutions" class="solutions b-section bg-alt gsap-reveal">
      <div class="container">
        <h2 class="section-title">Seamless Integration Models</h2>
        <div class="grid cards-2">
          
          <div class="solution-card">
            <div class="solution-icon-wrapper">
              <div class="icon-3d gear-icon">⚙️</div>
            </div>
            <h3 class="solution-title">Kiosk API (Direct Top-Up)</h3>
            <p class="solution-desc">Real-time server-to-server balance funding directly via local e-wallets and cash networks.</p>
          </div>

          <div class="solution-card">
            <div class="solution-icon-wrapper">
              <div class="icon-3d card-icon">💳</div>
            </div>
            <h3 class="solution-title">Hosted Checkout (E-Commerce)</h3>
            <p class="solution-desc">Storefront integration allowing users to purchase content via local payment methods with automated USD/EUR settlement.</p>
          </div>

        </div>
      </div>
    </section>

    <!-- Why The Powers? -->
    <section class="features b-section gsap-reveal">
      <div class="container">
        <h2 class="section-title">Enterprise Infrastructure</h2>
        <div class="grid cards-4">
          <div class="feature-card">
            <h4 class="feature-title">Full Local Coverage</h4>
            <p class="feature-desc">UZCARD, HUMO, Visa, Mastercard processing in a single API.</p>
          </div>
          <div class="feature-card">
            <h4 class="feature-title">Automated Settlements</h4>
            <p class="feature-desc">Real-time UZS to USD/EUR conversion with transparent rates.</p>
          </div>
          <div class="feature-card">
            <h4 class="feature-title">Ready for Scale</h4>
            <p class="feature-desc">Built to seamlessly plug into offline terminal networks and digital wallets.</p>
          </div>
          <div class="feature-card">
            <h4 class="feature-title">100% Compliant</h4>
            <p class="feature-desc">PCI DSS standard, 3D-Secure, robust zero-fraud monitoring.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Lead Form / Contact -->
    <section id="contact" class="contact b-section bg-dark gsap-reveal">
      <div class="container contact-container">
        <div class="contact-header">
          <h2 class="contact-title">Ready to scale your presence in Central Asia?</h2>
          <p class="contact-subtitle">Get directly in touch with our partnerships team or email us at <br><a href="mailto:partners@thepowers.uz" class="text-primary">partners@thepowers.uz</a></p>
        </div>
        
        <div class="contact-form-card">
          <form class="lead-form" @submit.prevent="submitForm">
            <div class="form-row">
              <div class="form-group">
                <label for="fname">First Name</label>
                <input type="text" id="fname" required placeholder="John" />
              </div>
              <div class="form-group">
                <label for="lname">Last Name</label>
                <input type="text" id="lname" required placeholder="Doe" />
              </div>
            </div>
            <div class="form-group">
              <label for="email">Work Email</label>
              <input type="email" id="email" required placeholder="john@company.com" />
            </div>
            <div class="form-group">
              <label for="company">Company</label>
              <input type="text" id="company" required placeholder="Company Name" />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" rows="4" placeholder="Tell us about your project..." required></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Submit Request</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const submitForm = () => {
  // Demo submission
  alert('Thank you! Your request has been sent to our partnerships team.')
}

onMounted(() => {
  const tl = gsap.timeline()
  
  tl.fromTo('.hero-title', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' })
    .fromTo('.hero-subtitle', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.6')
    .fromTo('.hero-actions', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.6')
    .fromTo('.abstract-shape', { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, stagger: 0.1, ease: 'back.out(1.7)' }, '-=0.8')

  gsap.utils.toArray('.gsap-reveal').forEach(section => {
    gsap.fromTo(section, 
      { y: 50, opacity: 0 },
      {
        y: 0, 
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        }
      }
    )
  })
})
</script>

<style scoped>
.text-primary {
  color: var(--color-primary);
}

.b-section {
  padding: 120px 0;
}

.bg-alt {
  background-color: var(--color-bg-alt);
}

.bg-dark {
  background-color: #0b0b0b;
  color: #fff;
}

/* Hero Section */
.hero {
  padding-top: 180px;
  padding-bottom: 120px;
  overflow: hidden;
}

.hero-container {
  display: flex;
  align-items: center;
  gap: 60px;
}

.hero-content {
  flex: 1;
  max-width: 700px;
}

.hero-title {
  font-size: 4.5rem;
  letter-spacing: -0.04em;
  margin-bottom: 24px;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--color-text-muted);
  margin-bottom: 40px;
  max-width: 600px;
}

.hero-actions {
  display: flex;
  gap: 16px;
}

.btn-lg {
  padding: 16px 36px;
  font-size: 1.1rem;
}

.hero-visual {
  flex: 1;
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.abstract-shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  z-index: -1;
}

.shape-1 {
  width: 300px;
  height: 300px;
  background: rgba(2, 197, 35, 0.2);
  top: 10%;
  left: 10%;
}

.shape-2 {
  width: 250px;
  height: 250px;
  background: rgba(0, 0, 0, 0.05);
  bottom: 10%;
  right: 20%;
}

.shape-3 {
  width: 200px;
  height: 200px;
  background: rgba(2, 197, 35, 0.1);
  top: 40%;
  left: 40%;
}

/* Trust Section */
.trust {
  padding: 60px 0;
  text-align: center;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.trust-subtitle {
  font-size: 1.1rem;
  color: var(--color-text-muted);
  margin-bottom: 30px;
  font-weight: 500;
}

.trust-logos {
  display: flex;
  justify-content: center;
  gap: 60px;
  align-items: center;
  opacity: 0.6;
}

.logo-placeholder {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-dark);
  letter-spacing: -0.02em;
}

/* Grid Utilities */
.grid {
  display: grid;
  gap: 30px;
}
.cards-3 { grid-template-columns: repeat(3, 1fr); }
.cards-2 { grid-template-columns: repeat(2, 1fr); max-width: 900px; margin: 0 auto; }
.cards-4 { grid-template-columns: repeat(4, 1fr); }

/* Metric Card */
.metric-card {
  background: #fff;
  padding: 40px;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-border);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.metric-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.metric-value {
  font-size: 3.5rem;
  color: var(--color-primary);
  margin-bottom: 8px;
  font-weight: 700;
}

.metric-label {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 12px;
}

.metric-desc {
  color: var(--color-text-muted);
}

/* Solution Card */
.solution-card {
  background: #fff;
  padding: 40px;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.solution-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-primary);
}

.solution-icon-wrapper {
  background-color: var(--color-bg-alt);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

.icon-3d {
  font-size: 2.5rem;
}

.solution-title {
  font-size: 1.5rem;
  margin-bottom: 16px;
}

.solution-desc {
  color: var(--color-text-muted);
}

/* Feature Card */
.feature-card {
  padding: 30px;
  background: var(--color-bg-alt);
  border-radius: var(--radius-md);
}

.feature-title {
  font-size: 1.1rem;
  margin-bottom: 12px;
  position: relative;
  padding-left: 20px;
}

.feature-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 6px;
  width: 8px;
  height: 8px;
  background-color: var(--color-primary);
  border-radius: 50%;
}

.feature-desc {
  color: var(--color-text-muted);
  font-size: 0.95rem;
}

/* Contact Section */
.contact-container {
  display: flex;
  gap: 60px;
  align-items: center;
}

.contact-header {
  flex: 1;
}

.contact-title {
  font-size: 3rem;
  margin-bottom: 24px;
}

.contact-subtitle {
  font-size: 1.1rem;
  color: #aaa;
  line-height: 1.8;
}

.contact-form-card {
  flex: 1;
  background-color: #1a1a1a;
  padding: 40px;
  border-radius: var(--radius-lg);
  max-width: 500px;
  width: 100%;
}

.form-row {
  display: flex;
  gap: 16px;
}

.form-group {
  margin-bottom: 20px;
  flex: 1;
}

label {
  display: block;
  font-size: 0.85rem;
  color: #888;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

input, textarea {
  width: 100%;
  padding: 14px 16px;
  border-radius: var(--radius-sm);
  background-color: #2a2a2a;
  border: 1px solid #333;
  color: #fff;
  font-family: var(--font-main);
  font-size: 1rem;
  transition: all 0.2s ease;
}

input:focus, textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  background-color: #333;
}

input::placeholder, textarea::placeholder {
  color: #555;
}

.btn-block {
  width: 100%;
  padding: 18px;
  font-size: 1.1rem;
}

@media (max-width: 1024px) {
  .hero-container {
    flex-direction: column;
    text-align: center;
  }
  .hero-actions {
    justify-content: center;
  }
  .hero-visual {
    height: 300px;
  }
  .grid.cards-3 {
    grid-template-columns: 1fr;
  }
  .grid.cards-2 {
    grid-template-columns: 1fr;
  }
  .grid.cards-4 {
    grid-template-columns: repeat(2, 1fr);
  }
  .contact-container {
    flex-direction: column;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }
  .grid.cards-4 {
    grid-template-columns: 1fr;
  }
}
</style>
