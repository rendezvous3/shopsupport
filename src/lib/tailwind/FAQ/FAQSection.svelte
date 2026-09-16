<script lang="ts">
  import BrandName from '$lib/custom/BrandName/BrandName.svelte';

  let openItems = $state<number[]>([]);

  function toggle(index: number) {
    if (openItems.includes(index)) {
      openItems = openItems.filter(i => i !== index);
    } else {
      openItems = [...openItems, index];
    }
  }

  const faqs = [
    { id: 'pos', question: 'Which POS and commerce systems do you integrate with?' },
    { id: 'compliance', question: 'How does compliance work in each industry?' },
    { id: 'timeline', question: 'How long until we\'re live on our store?' },
    { id: 'embed', question: 'Can it work with our existing e-commerce site?' },
    { id: 'inventory', question: 'What happens when inventory changes?' },
    { id: 'cs', question: 'Is a customer service agent coming?' }
  ];
</script>

<section class="faq-section">
  <div class="faq-inner">
    <h2 class="faq-heading">Frequently Asked Questions</h2>

    <div class="faq-list">
      {#each faqs as faq, i}
        {@const isOpen = openItems.includes(i)}
        <div class="faq-item" class:faq-item--open={isOpen}>
          <button class="faq-question" onclick={() => toggle(i)}>
            <span class="faq-question-text">{faq.question}</span>
            <span class="faq-chevron" class:faq-chevron--open={isOpen}>+</span>
          </button>
          {#if isOpen}
            <div class="faq-answer">
              {#if faq.id === 'pos'}
                <p class="faq-answer-text"><BrandName variant="onDark" /> connects to the system your catalog already lives in: Dutchie for dispensaries, Shopify, WooCommerce, Magento or Salesforce Commerce for retail, or a plain product feed. We ingest the live catalog, pricing and inventory and keep everything in sync as it changes.</p>
              {:else if faq.id === 'compliance'}
                <p class="faq-answer-text">Each vertical carries its own rulebook and the agent applies it before a recommendation is shown: purchase limits, age verification and state warnings in cannabis; cosmetics, supplement and infant-formula claim rules in drugstore and beauty; age gating and shipping eligibility in wine and spirits; size availability and returns rules in fashion. In the EU, AI Act Article 50 disclosure, GDPR storage and accessibility come as standard. A forbidden-claim test suite runs on every release.</p>
              {:else if faq.id === 'timeline'}
                <p class="faq-answer-text">Dispensaries run as SaaS: after the $299 setup, most stores are live within days once the Dutchie catalog is connected, at $499/month plus token usage. Other verticals start with a scoped pilot on one catalog and one market, typically eight to ten weeks from kick-off, ending in a decision meeting. See our <a href="/pricing" class="faq-link">pricing page</a> for details.</p>
              {:else if faq.id === 'embed'}
                <p class="faq-answer-text">Yes. The agent deploys as an embeddable widget, one script tag, or as a standalone page alongside your existing site. It reads from the same POS and catalog APIs your store already uses, and your existing site search stays exactly as it is. No rip-and-replace required.</p>
              {:else if faq.id === 'inventory'}
                <p class="faq-answer-text">The agent syncs with your POS or commerce platform in real time. When stock levels, pricing, sizes or availability change, recommendations update automatically. Out-of-stock items are never suggested.</p>
              {:else if faq.id === 'cs'}
                <p class="faq-answer-text">Yes. Full-resolution customer service agents that query order history, loyalty points, and store policies via your POS APIs are launching soon. Join the waitlist through our contact page to get early access.</p>
              {/if}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .faq-section {
    background-color: var(--bg-outer, #09090f);
    padding: 5rem 1.5rem;
  }

  .faq-inner {
    max-width: 48rem;
    margin: 0 auto;
  }

  .faq-heading {
    text-align: center;
    color: #ffffff;
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 600;
    margin-bottom: 3rem;
    letter-spacing: -0.02em;
  }

  .faq-list {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .faq-item {
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  .faq-question {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1.25rem 0;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
  }

  .faq-question-text {
    color: #e2e8f0;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.4;
  }

  .faq-chevron {
    color: #475569;
    font-size: 1.25rem;
    font-weight: 300;
    flex-shrink: 0;
    transition: transform 0.2s ease;
  }

  .faq-chevron--open {
    transform: rotate(45deg);
    color: #00d4aa;
  }

  .faq-answer {
    padding-bottom: 1.25rem;
  }

  .faq-answer-text {
    color: #94a3b8;
    font-size: 14px;
    line-height: 1.7;
    margin: 0;
  }

  .faq-answer-text :global(.faq-link) {
    color: #00d4aa;
    text-decoration: none;
  }

  .faq-answer-text :global(.faq-link:hover) {
    text-decoration: underline;
  }
</style>
