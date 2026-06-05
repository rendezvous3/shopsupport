<script lang="ts">
  import Navigation from '$lib/tailwind/Navigation/Navigation.svelte';
  import Footer from '$lib/tailwind/Footer/Footer.svelte';
  import { enhance } from '$app/forms';
  import type { ActionData } from './$types';

  let { form }: { form: ActionData } = $props();
  let fields = $state({ name: '', email: '', company: '', message: '' });
  let submitting = $state(false);
</script>

<svelte:head>
  <title>Contact | ShopSupport.ai</title>
  <meta name="description" content="Get in touch with ShopSupport.ai. Tell us about your POS stack and store type — dispensary or winery." />
</svelte:head>

<Navigation />

<main class="contact-page">

  <!-- Header -->
  <section class="contact-hero">
    <div class="contact-hero-inner">
      <div class="contact-label">GET IN TOUCH</div>
      <h1 class="contact-heading">Let's connect your store</h1>
      <p class="contact-subheading">
        Tell us about your POS stack and store type (dispensary or winery). We'll get back to you within one business day.
      </p>
    </div>
  </section>

  <!-- Two-column layout -->
  <section class="contact-body">
    <div class="contact-body-inner">

      <!-- Left: form -->
      <div class="contact-form-col">
        {#if form?.success}
          <div class="form-success">
            <div class="form-success-icon">
              <svg width="24" height="24" fill="none" stroke="#00d4aa" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 class="form-success-title">Message received</h2>
            <p class="form-success-text">
              Thanks for reaching out. We'll review your message and respond within one business day.
            </p>
          </div>
        {:else}
          <form
            class="contact-form"
            method="POST"
            use:enhance={() => {
              submitting = true;
              return async ({ update }) => {
                await update();
                submitting = false;
              };
            }}
          >
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  class="form-input"
                  placeholder="Jane Smith"
                  bind:value={fields.name}
                  required
                />
              </div>
              <div class="form-group">
                <label class="form-label" for="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  class="form-input"
                  placeholder="jane@company.com"
                  bind:value={fields.email}
                  required
                />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="company">Company <span class="form-label-opt">(optional)</span></label>
              <input
                id="company"
                name="company"
                type="text"
                class="form-input"
                placeholder="Acme Corp"
                bind:value={fields.company}
              />
            </div>

            <div class="form-group">
              <label class="form-label" for="message">Tell us about your store</label>
              <textarea
                id="message"
                name="message"
                class="form-textarea"
                placeholder="POS system (Dutchie, Treez, Shopify, etc.), store type, and what you want the AI assistant to do…"
                rows="5"
                bind:value={fields.message}
                required
              ></textarea>
            </div>

            {#if form?.error}
              <p class="form-error">{form.error}</p>
            {/if}

            <button type="submit" class="form-submit" disabled={submitting}>
              {#if submitting}
                <span class="submit-spinner"></span>
                Sending…
              {:else}
                Send message
                <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              {/if}
            </button>
          </form>
        {/if}
      </div>

      <!-- Right: contact info -->
      <div class="contact-info-col">

        <div class="info-block">
          <div class="info-icon">
            <svg width="18" height="18" fill="none" stroke="#00d4aa" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div class="info-content">
            <div class="info-label">Office</div>
            <div class="info-value">340 E 200 S</div>
            <div class="info-value">Salt Lake City, UT 84111</div>
          </div>
        </div>

        <div class="info-block">
          <div class="info-icon">
            <svg width="18" height="18" fill="none" stroke="#00d4aa" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div class="info-content">
            <div class="info-label">Phone</div>
            <a href="tel:+16308632240" class="info-link">(630) 863-2240</a>
          </div>
        </div>

        <div class="info-block">
          <div class="info-icon">
            <svg width="18" height="18" fill="none" stroke="#00d4aa" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div class="info-content">
            <div class="info-label">Email</div>
            <a href="mailto:info@shopsupport.ai" class="info-link">info@shopsupport.ai</a>
          </div>
        </div>

        <!-- Response time -->
        <div class="response-card">
          <div class="response-dot"></div>
          <div>
            <div class="response-title">Typical response time</div>
            <div class="response-value">Under 24 hours</div>
          </div>
        </div>

        <!-- What to expect -->
        <div class="expect-block">
          <div class="expect-title">What happens next</div>
          <div class="expect-steps">
            <div class="expect-step">
              <div class="step-num">1</div>
              <div class="step-text">We review your POS stack and catalog</div>
            </div>
            <div class="expect-step">
              <div class="step-num">2</div>
              <div class="step-text">30-minute discovery call to align on scope</div>
            </div>
            <div class="expect-step">
              <div class="step-num">3</div>
              <div class="step-text">Technical proposal with timeline and cost</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

</main>

<Footer />

<style>
  .contact-page {
    background-color: #09090f;
    min-height: 100vh;
  }

  /* Hero */
  .contact-hero {
    padding: 5rem 1.5rem 3rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .contact-hero-inner {
    max-width: 48rem;
    margin: 0 auto;
    text-align: center;
  }

  .contact-label {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #00d4aa;
    margin-bottom: 1.25rem;
  }

  .contact-heading {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 600;
    color: #ffffff;
    letter-spacing: -0.03em;
    line-height: 1.1;
    margin: 0 0 1rem;
  }

  .contact-subheading {
    font-size: 17px;
    color: #94a3b8;
    line-height: 1.6;
    margin: 0;
  }

  /* Body */
  .contact-body {
    padding: 4rem 1.5rem 6rem;
  }

  .contact-body-inner {
    max-width: 72rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 3.5rem;
    align-items: start;
  }

  @media (min-width: 1024px) {
    .contact-body-inner {
      grid-template-columns: 1fr 420px;
      gap: 4rem;
    }
  }

  /* Form */
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  @media (max-width: 600px) {
    .form-row {
      grid-template-columns: 1fr;
    }
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .form-label {
    font-size: 13px;
    font-weight: 500;
    color: #94a3b8;
    letter-spacing: 0.01em;
  }

  .form-label-opt {
    font-weight: 400;
    color: #475569;
  }

  .form-input,
  .form-textarea {
    background-color: #111117;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 0.625rem;
    padding: 0.75rem 1rem;
    font-size: 14px;
    color: #ffffff;
    font-family: inherit;
    transition: border-color 0.15s ease;
    outline: none;
    width: 100%;
    box-sizing: border-box;
  }

  .form-input::placeholder,
  .form-textarea::placeholder {
    color: #334155;
  }

  .form-input:focus,
  .form-textarea:focus {
    border-color: rgba(0, 212, 170, 0.35);
  }

  .form-textarea {
    resize: vertical;
    min-height: 130px;
    line-height: 1.6;
  }

  .form-submit {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: #00d4aa;
    color: #09090f;
    border: none;
    border-radius: 9999px;
    padding: 0.75rem 1.75rem;
    font-size: 14px;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    transition: background-color 0.2s ease, opacity 0.2s ease;
    align-self: flex-start;
  }

  .form-submit:hover {
    background-color: #00bfa0;
  }

  .form-submit:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .submit-spinner {
    width: 14px;
    height: 14px;
    border: 2px solid rgba(9, 9, 15, 0.3);
    border-top-color: #09090f;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
    flex-shrink: 0;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* Error */
  .form-error {
    font-size: 13px;
    color: #f87171;
    margin: 0;
  }

  /* Success state */
  .form-success {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 2.5rem;
    background-color: #111117;
    border: 1px solid rgba(0, 212, 170, 0.15);
    border-radius: 1rem;
  }

  .form-success-icon {
    width: 48px;
    height: 48px;
    background: rgba(0, 212, 170, 0.1);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .form-success-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #ffffff;
    margin: 0;
  }

  .form-success-text {
    font-size: 15px;
    color: #94a3b8;
    line-height: 1.65;
    margin: 0;
  }

  /* Info column */
  .contact-info-col {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
  }

  .info-block {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }

  .info-icon {
    width: 38px;
    height: 38px;
    background: rgba(0, 212, 170, 0.08);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .info-content {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .info-label {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #475569;
    margin-bottom: 2px;
  }

  .info-value {
    font-size: 14px;
    color: #e2e8f0;
    line-height: 1.5;
  }

  .info-link {
    font-size: 14px;
    color: #00d4aa;
    text-decoration: none;
    transition: color 0.15s ease;
  }

  .info-link:hover {
    color: #00bfa0;
  }

  /* Response card */
  .response-card {
    display: flex;
    align-items: center;
    gap: 0.875rem;
    padding: 1rem 1.25rem;
    background-color: #111117;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 0.75rem;
  }

  .response-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #00d4aa;
    animation: pulse 1.5s ease-in-out infinite;
    flex-shrink: 0;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }

  .response-title {
    font-size: 12px;
    color: #475569;
  }

  .response-value {
    font-size: 14px;
    font-weight: 500;
    color: #ffffff;
  }

  /* What to expect */
  .expect-block {
    padding: 1.5rem;
    background-color: #111117;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 0.75rem;
  }

  .expect-title {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #475569;
    margin-bottom: 1.25rem;
  }

  .expect-steps {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .expect-step {
    display: flex;
    align-items: flex-start;
    gap: 0.875rem;
  }

  .step-num {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: rgba(0, 212, 170, 0.1);
    border: 1px solid rgba(0, 212, 170, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 600;
    color: #00d4aa;
    flex-shrink: 0;
  }

  .step-text {
    font-size: 13px;
    color: #94a3b8;
    line-height: 1.5;
    padding-top: 2px;
  }
</style>
