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
      question: "What is RAG and how does it improve AI accuracy?",
      answer: "Retrieval-Augmented Generation (RAG) combines the power of large language models with real-time document retrieval. Instead of relying solely on training data, RAG systems query your actual knowledge base to provide accurate, up-to-date answers. This dramatically reduces hallucinations and ensures responses are grounded in your specific data."
    },
    {
      question: "How long does it take to deploy a custom AI agent?",
      answer: "Most projects go from kickoff to production in 4 to 8 weeks. Simple integrations can be live in under two weeks. Complex multi-agent systems with custom data pipelines typically take 6 to 10 weeks. We prioritize rapid iteration. You'll see a working prototype within the first week."
    },
    {
      question: "Can your AI systems integrate with our existing tools?",
      answer: "Yes. We build integrations with virtually any modern stack: REST APIs, GraphQL, databases (PostgreSQL, MongoDB, Pinecone, Weaviate), CRMs (Salesforce, HubSpot), and communication tools (Slack, Teams). If your system has an API or webhook, we can connect to it."
    },
    {
      question: "What makes multi-agent systems better than single-model solutions?",
      answer: "Multi-agent systems assign specialized roles to individual agents: one retrieves, one validates, one synthesizes. This mirrors how expert teams operate and produces measurably higher accuracy, built-in cross-verification, and the ability to handle complex multi-step reasoning that single models struggle with."
    },
    {
      question: "How do you handle data privacy and security?",
      answer: "All data processing can be fully on-premise or in your private cloud environment. We support air-gapped deployments, SOC 2-compliant architectures, and end-to-end encryption. Your proprietary data never touches third-party model APIs unless you explicitly choose cloud-hosted models with enterprise data agreements."
    },
    {
      question: "What does ongoing support look like after launch?",
      answer: "We offer tiered support plans including model monitoring, performance dashboards, quarterly retraining, and direct engineering access. Most clients see continuous improvement in accuracy over the first 90 days as the system learns from production usage patterns. We treat launch as the starting line, not the finish line."
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
    gap: 0.75rem;
  }

  .faq-item {
    background-color: #111117;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 0.75rem;
    overflow: hidden;
    transition: border-color 0.2s ease;
  }

  .faq-item:hover,
  .faq-item--open {
    border-color: rgba(0, 212, 170, 0.1);
  }

  .faq-question {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    gap: 1rem;
  }

  .faq-question-text {
    color: #ffffff;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.4;
    font-family: inherit;
  }

  .faq-chevron {
    color: #00d4aa;
    flex-shrink: 0;
    font-size: 1.25rem;
    line-height: 1;
    display: inline-block;
    transition: transform 0.2s ease;
    font-weight: 300;
  }

  .faq-chevron--open {
    transform: rotate(45deg);
  }

  .faq-answer {
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    padding: 1rem 1.5rem 1.25rem;
  }

  .faq-answer-text {
    color: #94a3b8;
    font-size: 14px;
    line-height: 1.7;
    margin: 0;
  }
</style>
