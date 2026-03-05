<template>
  <div class="api-docs b-section">
    <div class="container container-sm">
      <div v-if="!isAuthenticated" class="auth-card">
        <h1 class="auth-title">API Documentation</h1>
        <p class="auth-desc">This portal is for authorized partners only. Please enter the access key provided by your account manager.</p>
        
        <form @submit.prevent="authenticate" class="auth-form">
          <div class="form-group">
            <input type="password" v-model="password" placeholder="Access Key" required />
          </div>
          <button type="submit" class="btn btn-primary btn-block">Access Docs</button>
        </form>
        <p v-if="error" class="error-msg">{{ error }}</p>
      </div>

      <div v-else class="docs-content">
        <div class="docs-header">
          <h1>The Powers Integration API</h1>
          <p>Version 2.0.4 | Updated: Oct 2026</p>
        </div>

        <div class="docs-body">
          <div class="docs-section">
            <h2>Authentication</h2>
            <p>All API requests require an API Key passed in the <code>Authorization: Bearer</code> header.</p>
            <pre><code>Authorization: Bearer sk_live_xxx</code></pre>
          </div>
          
          <div class="docs-section">
            <h2>Endpoints</h2>
            
            <div class="endpoint">
              <span class="method post">POST</span>
              <span class="path">/v1/payments/kiosk</span>
            </div>
            <p>Initiate a direct top-up transaction.</p>

            <div class="endpoint mt-4">
              <span class="method get">GET</span>
              <span class="path">/v1/payments/{tx_id}/status</span>
            </div>
            <p>Check the real-time status of a transaction.</p>
          </div>
        </div>
        
        <button @click="isAuthenticated = false" class="btn btn-outline" style="margin-top: 40px;">Lock Session</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isAuthenticated = ref(false)
const password = ref('')
const error = ref('')

const authenticate = () => {
  if (password.value === 'partner2026') {
    isAuthenticated.value = true
    error.value = ''
  } else {
    error.value = 'Invalid access key. Please contact your account manager.'
  }
}
</script>

<style scoped>
.b-section {
  padding: 120px 0;
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.container-sm {
  max-width: 600px;
  margin: 0 auto;
}

.auth-card {
  background: var(--color-bg-alt);
  padding: 50px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  text-align: center;
}

.auth-title {
  font-size: 2rem;
  margin-bottom: 16px;
}

.auth-desc {
  color: var(--color-text-muted);
  margin-bottom: 30px;
}

.auth-form {
  margin-bottom: 16px;
}

.form-group {
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 14px 16px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  font-family: var(--font-main);
  font-size: 1rem;
}

input:focus {
  outline: none;
  border-color: var(--color-primary);
}

.btn-block {
  width: 100%;
}

.error-msg {
  color: #ff3b30;
  font-size: 0.9rem;
}

/* Docs Content */
.docs-content {
  background: #fff;
}

.docs-header {
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 20px;
  margin-bottom: 40px;
}

.docs-header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.docs-header p {
  color: var(--color-text-muted);
}

.docs-section {
  margin-bottom: 40px;
}

.docs-section h2 {
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: var(--color-text-dark);
}

pre {
  background: var(--color-bg-alt);
  padding: 16px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  overflow-x: auto;
  font-family: monospace;
  margin: 16px 0;
}

code {
  font-family: monospace;
}

.endpoint {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
  font-family: monospace;
  background: var(--color-bg-alt);
  padding: 12px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
}

.method {
  font-weight: 700;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.85rem;
}

.method.post { background: #e3f2fd; color: #1976d2; }
.method.get { background: #e8f5e9; color: #388e3c; }

.path {
  font-weight: 600;
}

.mt-4 {
  margin-top: 24px;
}
</style>
