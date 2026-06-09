<script lang="ts">
  let openItems = $state<number[]>([]);

  function toggle(index: number) {
    if (openItems.includes(index)) {
      openItems = openItems.filter(i => i !== index);
    } else {
      openItems = [...openItems, index];
    }
  }

  const faqs = [
    {
      question: 'Which POS systems do you integrate with?',
      answer: 'ShopSupport connects directly to Dutchie. We ingest your live catalog, pricing, and inventory through the Dutchie API and keep everything in sync as your menu updates.'
    },
    {
      question: 'How does ShopSupport handle compliance?',
      answer: 'Our agents enforce age verification prompts, daily purchase limits, and state-specific regulations before recommending products. Every recommendation is validated against your configured policies before it is shown.'
    },
    {
      question: 'How long until we\'re live on our store?',
      answer: 'Most dispensary deployments go from kickoff to production in 4 to 6 weeks. You\'ll see a working prototype connected to your Dutchie catalog within the first week.'
    },
    {
      question: 'Can it work with our existing e-commerce site?',
      answer: 'Yes. ShopSupport deploys as an embeddable widget, standalone page, or kiosk interface alongside your existing site. It reads from the same POS and catalog APIs your store already uses. No rip-and-replace required.'
    },
    {
      question: 'What happens when inventory changes?',
      answer: 'ShopSupport syncs with your POS in real time. When stock levels, pricing, or product availability change, recommendations update automatically. Out-of-stock items are never suggested.'
    },
    {
      question: 'Is customer service chat coming?',
      answer: 'Yes. Full-resolution customer service agents that query order history, loyalty points, and store policies via your POS APIs are launching soon. Join the waitlist through our contact page to get early access.'
    }
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
              <p class="faq-answer-text">{faq.answer}</p>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .faq-section {
    background-color: #09090f;
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
</style>
