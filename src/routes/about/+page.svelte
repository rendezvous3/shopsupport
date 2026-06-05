<script lang="ts">
  import Navigation from '$lib/tailwind/Navigation/Navigation.svelte';
  import Footer from '$lib/tailwind/Footer/Footer.svelte';
  import ButtonMinimal from '$lib/custom/ButtonMinimal/ButtonMinimal.svelte';
</script>

<svelte:head>
  <title>About | ShopSupport.ai</title>
  <meta name="description" content="ShopSupport builds POS-connected AI shopping assistants for dispensaries and wineries. Agentic systems trained on your catalog and compliance policies." />
</svelte:head>

<Navigation />

<main class="about-page">

  <!-- ─── Hero ──────────────────────────────────────────── -->
  <section class="about-hero">
    <div class="about-hero-inner">
      <div class="about-label">OUR MISSION</div>
      <h1 class="about-heading">
        AI commerce for<br />
        <span class="heading-teal">regulated retail</span>
      </h1>
      <p class="about-subheading">
        ShopSupport connects to your POS and e-commerce APIs, trains agentic systems on your catalog
        and compliance policies, and deploys shopping assistants for dispensaries and wineries.
      </p>
    </div>
  </section>

  <!-- ─── What We Believe ───────────────────────────────── -->
  <section class="about-section">
    <div class="about-inner">
      <div class="section-grid section-grid--text-visual">

        <div class="section-text">
          <div class="section-label">PHILOSOPHY</div>
          <h2 class="section-heading">Integration-first, production-always</h2>
          <p class="section-body">
            Dispensaries and wineries run on specialized POS systems — Dutchie, Treez, Shopify,
            custom APIs — with catalogs that change hourly and compliance rules that vary by state.
            Generic chatbots can't handle that complexity.
          </p>
          <p class="section-body">
            ShopSupport starts with your live data. We connect to your POS, ingest your catalog,
            embed your policies, and deploy agents that know what's in stock right now — not what
            was in stock when someone last updated a spreadsheet.
          </p>
          <p class="section-body">
            Everything we build gets evaluated against one question: does it help a shopper find
            the right product and complete a purchase? If the answer is yes, it ships.
          </p>
        </div>

        <div class="section-visual">
          <div class="research-panel">
            <div class="research-panel-header">
              <span class="research-panel-title">Recent Research Signals</span>
              <span class="research-live-badge">
                <span class="research-live-dot"></span>
                Tracking
              </span>
            </div>
            <div class="research-items">
              <div class="research-item">
                <div class="research-item-teal-bar"></div>
                <div class="research-item-content">
                  <div class="research-item-title">Self-RAG: Learning to Retrieve, Generate, and Critique</div>
                  <div class="research-item-meta">Retrieval · Adaptive reasoning</div>
                </div>
              </div>
              <div class="research-item">
                <div class="research-item-teal-bar"></div>
                <div class="research-item-content">
                  <div class="research-item-title">HyDE: Hypothetical Document Embeddings for retrieval</div>
                  <div class="research-item-meta">Embedding · Query expansion</div>
                </div>
              </div>
              <div class="research-item">
                <div class="research-item-teal-bar"></div>
                <div class="research-item-content">
                  <div class="research-item-title">RAPTOR: Recursive Abstractive Processing for Tree-Organized Retrieval</div>
                  <div class="research-item-meta">Hierarchical chunking · Long docs</div>
                </div>
              </div>
              <div class="research-item">
                <div class="research-item-teal-bar research-item-teal-bar--dim"></div>
                <div class="research-item-content">
                  <div class="research-item-title">ReAct: Synergizing Reasoning and Acting in LLMs</div>
                  <div class="research-item-meta">Agent loops · Tool use</div>
                </div>
              </div>
            </div>
            <div class="research-footer">
              <span class="research-footer-dot"></span>
              <span class="research-footer-text">Continuously updated from arXiv, Semantic Scholar</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ─── Where We're Headed ────────────────────────────── -->
  <section class="about-section about-section--alt">
    <div class="about-inner">
      <div class="section-center-header">
        <div class="section-label">VISION</div>
        <h2 class="section-heading">Towards intelligent commerce at scale</h2>
        <p class="section-body section-body--centered">
          Every dispensary and winery shopper deserves expert guidance — strain recommendations,
          wine pairings, compliance-aware suggestions — without waiting for staff. That's what
          we're building.
        </p>
      </div>

      <div class="vision-cards">

        <div class="vision-card">
          <div class="vision-card-icon">
            <svg width="22" height="22" fill="none" stroke="#00d4aa" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h3 class="vision-card-title">Dispensary Commerce</h3>
          <p class="vision-card-body">
            Compliance-aware product discovery for cannabis retail. Strain recommendations with
            potency filters, purchase limit tracking, and live Dutchie or Treez inventory sync.
            Every suggestion is in stock and within regulations.
          </p>
        </div>

        <div class="vision-card">
          <div class="vision-card-icon">
            <svg width="22" height="22" fill="none" stroke="#00d4aa" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
          <h3 class="vision-card-title">Winery DTC</h3>
          <p class="vision-card-body">
            Expert guidance from vineyard to checkout. Tasting notes, food pairings, club
            membership tiers, and shipping zone validation — all connected to your live catalog
            and DTC fulfillment rules.
          </p>
        </div>

        <div class="vision-card">
          <div class="vision-card-icon">
            <svg width="22" height="22" fill="none" stroke="#00d4aa" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 class="vision-card-title">POS-Native Intelligence</h3>
          <p class="vision-card-body">
            General-purpose LLMs don't know your inventory. ShopSupport agents query your POS in
            real time, enforce compliance policies, and reason over your specific catalog — strains,
            vintages, SKUs — like your best budtender or sommelier.
          </p>
        </div>

      </div>
    </div>
  </section>

  <!-- ─── How RAG Works in Practice ────────────────────── -->
  <section class="about-section">
    <div class="about-inner">
      <div class="section-center-header">
        <div class="section-label">HOW IT WORKS</div>
        <h2 class="section-heading">From your data to a working AI, practically</h2>
        <p class="section-body section-body--centered">
          RAG (Retrieval-Augmented Generation) sounds complex. The practical version is
          straightforward: the AI retrieves relevant pieces of your knowledge before generating
          an answer. Here's what that looks like in production.
        </p>
      </div>

      <!-- Data ingestion paths -->
      <div class="rag-paths">
        <div class="rag-path-card">
          <div class="rag-path-badge">PATH A</div>
          <h3 class="rag-path-title">You have an API</h3>
          <p class="rag-path-desc">
            If your product data, knowledge base, or content is already served via a REST or
            GraphQL API, we connect directly. The AI queries your live data at inference time,
            meaning it always reflects the current state of your catalogue, pricing, or policies
            without any re-indexing.
          </p>
          <div class="rag-path-flow">
            <div class="rag-flow-step">
              <div class="rag-flow-icon">
                <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              </div>
              <span>Your API</span>
            </div>
            <div class="rag-flow-arrow">→</div>
            <div class="rag-flow-step">
              <div class="rag-flow-icon">
                <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0"/></svg>
              </div>
              <span>Agent retrieves</span>
            </div>
            <div class="rag-flow-arrow">→</div>
            <div class="rag-flow-step">
              <div class="rag-flow-icon">
                <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
              </div>
              <span>Answer generated</span>
            </div>
          </div>
          <div class="rag-path-note">Real-time · Always current · No indexing lag</div>
        </div>

        <div class="rag-path-divider">or</div>

        <div class="rag-path-card">
          <div class="rag-path-badge rag-path-badge--b">PATH B</div>
          <h3 class="rag-path-title">You have documents</h3>
          <p class="rag-path-desc">
            PDFs, Word docs, support transcripts, policy manuals, product spec sheets. We ingest,
            chunk, embed, and index them into a vector store. Chunking strategy matters enormously:
            we use semantic boundaries, sliding windows, and metadata tagging so the retriever
            finds the right passage, not just the right document.
          </p>
          <div class="rag-path-flow">
            <div class="rag-flow-step">
              <div class="rag-flow-icon">
                <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              </div>
              <span>Documents</span>
            </div>
            <div class="rag-flow-arrow">→</div>
            <div class="rag-flow-step">
              <div class="rag-flow-icon">
                <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/></svg>
              </div>
              <span>Chunk + embed</span>
            </div>
            <div class="rag-flow-arrow">→</div>
            <div class="rag-flow-step">
              <div class="rag-flow-icon">
                <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              </div>
              <span>Vector search</span>
            </div>
            <div class="rag-flow-arrow">→</div>
            <div class="rag-flow-step">
              <div class="rag-flow-icon">
                <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
              </div>
              <span>Answer</span>
            </div>
          </div>
          <div class="rag-path-note">Offline indexing · Semantic search · No API needed</div>
        </div>
      </div>

      <!-- What chunking decisions look like -->
      <div class="chunking-detail">
        <h3 class="chunking-title">Why chunking strategy matters</h3>
        <p class="chunking-body">
          Chunking is where most RAG implementations fail silently. Split too aggressively and
          you lose context. The retrieved passage makes sense in isolation but misses the
          surrounding reasoning. Split too broadly and retrieval becomes imprecise. You get
          the right page but not the right paragraph.
        </p>
        <p class="chunking-body">
          We use a layered approach: semantic chunking at sentence boundaries, overlapping
          windows for context continuity, and per-chunk metadata (section title, document type,
          date) that can be used as a retrieval filter. A compliance query filters to policy
          documents. A product query filters to a specific category and potency range. The retriever
          finds not just semantically similar content, but the right kind of content.
        </p>
        <div class="chunking-visual">
          <div class="chunk-doc">
            <div class="chunk-doc-label">Source document</div>
            <div class="chunk-rows">
              <div class="chunk-row chunk-row--active">
                <div class="chunk-tag">§ 2.1</div>
                <div class="chunk-bar chunk-bar--full"></div>
                <div class="chunk-match">↗ retrieved</div>
              </div>
              <div class="chunk-row">
                <div class="chunk-tag">§ 2.2</div>
                <div class="chunk-bar chunk-bar--full"></div>
              </div>
              <div class="chunk-row chunk-row--active">
                <div class="chunk-tag">§ 2.3</div>
                <div class="chunk-bar chunk-bar--med"></div>
                <div class="chunk-match">↗ retrieved</div>
              </div>
              <div class="chunk-row">
                <div class="chunk-tag">§ 3.1</div>
                <div class="chunk-bar chunk-bar--full"></div>
              </div>
            </div>
          </div>
          <div class="chunk-arrow-col">
            <div class="chunk-arrow">→</div>
            <div class="chunk-arrow-label">hybrid search</div>
          </div>
          <div class="chunk-context">
            <div class="chunk-doc-label">Context window</div>
            <div class="chunk-context-blocks">
              <div class="chunk-context-block">Chunk § 2.1 (94%)</div>
              <div class="chunk-context-block chunk-context-block--dim">Chunk § 2.3 (81%)</div>
            </div>
            <div class="chunk-context-footer">
              <div class="chunk-context-dot"></div>
              Passed to LLM for generation
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ─── Fine-tuning + Training ────────────────────────── -->
  <section class="about-section about-section--alt">
    <div class="about-inner">
      <div class="section-grid section-grid--visual-text">

        <div class="section-visual">
          <div class="training-panel">
            <div class="training-panel-header">Training Pipeline</div>
            <div class="training-steps">
              <div class="training-step">
                <div class="training-step-num">01</div>
                <div class="training-step-content">
                  <div class="training-step-title">Domain corpus collection</div>
                  <div class="training-step-desc">Gather high-quality in-domain text, clean and deduplicate</div>
                </div>
              </div>
              <div class="training-connector"></div>
              <div class="training-step">
                <div class="training-step-num">02</div>
                <div class="training-step-content">
                  <div class="training-step-title">Instruction dataset construction</div>
                  <div class="training-step-desc">Format examples as prompt–completion pairs with domain-specific Q&A</div>
                </div>
              </div>
              <div class="training-connector"></div>
              <div class="training-step">
                <div class="training-step-num">03</div>
                <div class="training-step-content">
                  <div class="training-step-title">Supervised fine-tuning (SFT)</div>
                  <div class="training-step-desc">LoRA or full fine-tune on base model; evaluate on held-out domain set</div>
                </div>
              </div>
              <div class="training-connector"></div>
              <div class="training-step">
                <div class="training-step-num">04</div>
                <div class="training-step-content">
                  <div class="training-step-title">RLHF / DPO alignment</div>
                  <div class="training-step-desc">Preference tuning to align tone, refusal behavior, and domain accuracy</div>
                </div>
              </div>
              <div class="training-connector"></div>
              <div class="training-step">
                <div class="training-step-num">05</div>
                <div class="training-step-content">
                  <div class="training-step-title">Eval + red-teaming</div>
                  <div class="training-step-desc">Benchmark against domain-specific metrics; probe for edge cases</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="section-text">
          <div class="section-label">FINE-TUNING</div>
          <h2 class="section-heading">Training AI into subject matter expertise</h2>
          <p class="section-body">
            Retrieval can answer questions about your data. Fine-tuning shapes how the model
            reasons, responds, and represents your domain. The two approaches are complementary.
            Most production systems need both.
          </p>
          <p class="section-body">
            We work with LoRA (Low-Rank Adaptation) for efficient fine-tuning of large models
            without full parameter updates, making it practical to specialize a strong base model
            on domain-specific instruction data. For smaller models that need to run on-premise
            or with tight latency requirements, we handle full fine-tuning and quantization.
          </p>
          <p class="section-body">
            The result is a model that writes in your brand voice, knows your terminology,
            handles your edge cases, and refuses gracefully when a question falls outside its
            competence, rather than hallucinating a confident-sounding wrong answer.
          </p>
          <div class="section-cta">
            <ButtonMinimal label="Talk to us about training" variant="primary" href="/contact" arrow={true} />
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ─── Team / CTA ─────────────────────────────────────── -->
  <section class="about-section about-cta-section">
    <div class="about-inner">
      <div class="about-cta-card">
        <div class="about-cta-label">SHOPSUPPORT.AI</div>
        <h2 class="about-cta-heading">Built for dispensaries and wineries.</h2>
        <p class="about-cta-body">
          We work with a focused set of regulated retail stores — connecting to your POS,
          training on your catalog, and deploying shopping assistants that drive measurable
          conversion lift. Tell us about your store.
        </p>
        <div class="about-cta-buttons">
          <ButtonMinimal label="Start free trial" variant="primary" href="/contact" arrow={true} />
          <ButtonMinimal label="See what we build" variant="outline" href="/services" />
        </div>
      </div>
    </div>
  </section>

</main>

<Footer />

<style>
  .about-page {
    background-color: #09090f;
    min-height: 100vh;
  }

  /* ─── Hero ─────────────────────────────────────────────── */
  .about-hero {
    padding: 6rem 1.5rem 4rem;
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .about-hero-inner {
    max-width: 52rem;
    margin: 0 auto;
  }

  .about-label {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #00d4aa;
    margin-bottom: 1.5rem;
  }

  .about-heading {
    font-size: clamp(2.25rem, 5vw, 3.5rem);
    font-weight: 600;
    color: #ffffff;
    letter-spacing: -0.03em;
    line-height: 1.1;
    margin: 0 0 1.25rem;
  }

  .heading-teal {
    color: #00d4aa;
  }

  .about-subheading {
    font-size: 18px;
    color: #94a3b8;
    line-height: 1.7;
    max-width: 44rem;
    margin: 0 auto;
  }

  /* ─── Section base ──────────────────────────────────────── */
  .about-section {
    padding: 5rem 1.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  }

  .about-section--alt {
    background-color: #0d0d14;
  }

  .about-inner {
    max-width: 80rem;
    margin: 0 auto;
  }

  .section-label {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #00d4aa;
    margin-bottom: 0.875rem;
  }

  .section-heading {
    font-size: clamp(1.5rem, 3vw, 2.25rem);
    font-weight: 600;
    color: #ffffff;
    letter-spacing: -0.02em;
    line-height: 1.2;
    margin: 0 0 1.25rem;
  }

  .section-body {
    font-size: 16px;
    color: #94a3b8;
    line-height: 1.75;
    margin: 0 0 1rem;
  }

  .section-body--centered {
    text-align: center;
    max-width: 52rem;
    margin: 0 auto 0;
  }

  .section-cta {
    margin-top: 2rem;
  }

  /* ─── Section grid layouts ──────────────────────────────── */
  .section-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3.5rem;
    align-items: start;
  }

  @media (min-width: 1024px) {
    .section-grid--text-visual {
      grid-template-columns: 1fr 420px;
    }

    .section-grid--visual-text {
      grid-template-columns: 420px 1fr;
    }
  }

  .section-center-header {
    text-align: center;
    margin-bottom: 3.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }

  /* ─── Research panel ────────────────────────────────────── */
  .research-panel {
    background-color: #111117;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 1rem;
    overflow: hidden;
  }

  .research-panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.875rem 1.25rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .research-panel-title {
    font-size: 13px;
    font-weight: 500;
    color: #ffffff;
  }

  .research-live-badge {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #00d4aa;
  }

  .research-live-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #00d4aa;
    animation: pulse 1.5s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }

  .research-items {
    padding: 0.5rem 1.25rem 0.75rem;
    display: flex;
    flex-direction: column;
  }

  .research-item {
    display: flex;
    gap: 0.75rem;
    padding: 0.75rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  }

  .research-item:last-child {
    border-bottom: none;
  }

  .research-item-teal-bar {
    width: 2px;
    border-radius: 1px;
    background-color: #00d4aa;
    flex-shrink: 0;
    align-self: stretch;
    min-height: 36px;
  }

  .research-item-teal-bar--dim {
    background-color: rgba(0, 212, 170, 0.3);
  }

  .research-item-content {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .research-item-title {
    font-size: 12px;
    font-weight: 500;
    color: #e2e8f0;
    line-height: 1.4;
  }

  .research-item-meta {
    font-size: 11px;
    color: #475569;
  }

  .research-footer {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.625rem 1.25rem;
    border-top: 1px solid rgba(255, 255, 255, 0.04);
  }

  .research-footer-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #00d4aa;
    flex-shrink: 0;
    animation: pulse 1.5s ease-in-out infinite;
  }

  .research-footer-text {
    font-size: 11px;
    color: #334155;
  }

  /* ─── Vision cards ──────────────────────────────────────── */
  .vision-cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  @media (min-width: 768px) {
    .vision-cards {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .vision-card {
    background-color: #111117;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 1rem;
    padding: 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
    transition: border-color 0.2s ease;
  }

  .vision-card:hover {
    border-color: rgba(0, 212, 170, 0.12);
  }

  .vision-card-icon {
    width: 40px;
    height: 40px;
    background: rgba(0, 212, 170, 0.08);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .vision-card-title {
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    margin: 0;
  }

  .vision-card-body {
    font-size: 14px;
    color: #64748b;
    line-height: 1.7;
    margin: 0;
  }

  /* ─── RAG paths ─────────────────────────────────────────── */
  .rag-paths {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 3.5rem;
  }

  @media (min-width: 900px) {
    .rag-paths {
      flex-direction: row;
      align-items: stretch;
      gap: 0;
    }
  }

  .rag-path-card {
    flex: 1;
    background-color: #111117;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 1rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .rag-path-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 500;
    color: #334155;
    padding: 0 1.25rem;
    flex-shrink: 0;
  }

  @media (max-width: 899px) {
    .rag-path-divider {
      padding: 0;
    }
  }

  .rag-path-badge {
    display: inline-block;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    padding: 3px 10px;
    border-radius: 9999px;
    background: rgba(0, 212, 170, 0.1);
    color: #00d4aa;
    border: 1px solid rgba(0, 212, 170, 0.2);
    width: fit-content;
  }

  .rag-path-badge--b {
    background: rgba(255, 255, 255, 0.05);
    color: #94a3b8;
    border-color: rgba(255, 255, 255, 0.1);
  }

  .rag-path-title {
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
    margin: 0;
  }

  .rag-path-desc {
    font-size: 14px;
    color: #64748b;
    line-height: 1.7;
    margin: 0;
  }

  .rag-path-flow {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: wrap;
    padding: 0.75rem;
    background: #0d0d14;
    border-radius: 0.625rem;
    border: 1px solid rgba(255, 255, 255, 0.04);
  }

  .rag-flow-step {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 11px;
    color: #94a3b8;
    background: rgba(255, 255, 255, 0.04);
    border-radius: 6px;
    padding: 5px 8px;
  }

  .rag-flow-icon {
    color: #00d4aa;
    display: flex;
    align-items: center;
  }

  .rag-flow-arrow {
    font-size: 12px;
    color: #334155;
  }

  .rag-path-note {
    font-size: 11px;
    color: #475569;
    letter-spacing: 0.04em;
  }

  /* ─── Chunking detail ───────────────────────────────────── */
  .chunking-detail {
    background-color: #111117;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 1rem;
    padding: 2.5rem;
  }

  .chunking-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: #ffffff;
    margin: 0 0 1rem;
  }

  .chunking-body {
    font-size: 15px;
    color: #64748b;
    line-height: 1.75;
    margin: 0 0 1rem;
  }

  .chunking-visual {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-top: 1.5rem;
    flex-wrap: wrap;
  }

  .chunk-doc {
    flex: 1;
    min-width: 200px;
    background: #0d0d14;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 0.75rem;
    overflow: hidden;
  }

  .chunk-doc-label {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #475569;
    padding: 0.625rem 0.875rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  }

  .chunk-rows {
    padding: 0.5rem 0.875rem;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .chunk-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .chunk-tag {
    font-size: 10px;
    color: #334155;
    font-family: monospace;
    width: 32px;
    flex-shrink: 0;
  }

  .chunk-bar {
    height: 6px;
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.06);
    flex: 1;
  }

  .chunk-bar--full { width: 100%; }
  .chunk-bar--med { width: 70%; }

  .chunk-row--active .chunk-bar {
    background: rgba(0, 212, 170, 0.25);
  }

  .chunk-match {
    font-size: 10px;
    color: #00d4aa;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .chunk-arrow-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  .chunk-arrow {
    font-size: 20px;
    color: #334155;
  }

  .chunk-arrow-label {
    font-size: 10px;
    color: #334155;
    white-space: nowrap;
  }

  .chunk-context {
    flex: 1;
    min-width: 180px;
    background: #0d0d14;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 0.75rem;
    overflow: hidden;
  }

  .chunk-context-blocks {
    padding: 0.75rem 0.875rem;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .chunk-context-block {
    font-size: 11px;
    color: #00d4aa;
    background: rgba(0, 212, 170, 0.08);
    border-radius: 6px;
    padding: 6px 10px;
    border-left: 2px solid #00d4aa;
  }

  .chunk-context-block--dim {
    color: #475569;
    background: rgba(255, 255, 255, 0.03);
    border-left-color: #475569;
  }

  .chunk-context-footer {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 0.5rem 0.875rem;
    border-top: 1px solid rgba(255, 255, 255, 0.04);
    font-size: 11px;
    color: #334155;
  }

  .chunk-context-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #00d4aa;
    flex-shrink: 0;
    animation: pulse 1.5s ease-in-out infinite;
  }

  /* ─── Training panel ────────────────────────────────────── */
  .training-panel {
    background-color: #111117;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 1rem;
    overflow: hidden;
  }

  .training-panel-header {
    font-size: 13px;
    font-weight: 500;
    color: #ffffff;
    padding: 0.875rem 1.25rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .training-steps {
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .training-step {
    display: flex;
    gap: 0.875rem;
    align-items: flex-start;
  }

  .training-step-num {
    font-size: 11px;
    font-weight: 600;
    color: #00d4aa;
    font-family: monospace;
    flex-shrink: 0;
    margin-top: 2px;
    width: 20px;
  }

  .training-step-content {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding-bottom: 1rem;
  }

  .training-step-title {
    font-size: 13px;
    font-weight: 500;
    color: #e2e8f0;
  }

  .training-step-desc {
    font-size: 12px;
    color: #475569;
    line-height: 1.5;
  }

  .training-connector {
    width: 1px;
    height: 12px;
    background: rgba(0, 212, 170, 0.15);
    margin-left: 9px;
    margin-bottom: 0;
  }

  /* ─── CTA section ───────────────────────────────────────── */
  .about-cta-section {
    border-bottom: none;
  }

  .about-cta-card {
    background-color: #111117;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 1.5rem;
    padding: 3.5rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    max-width: 52rem;
    margin: 0 auto;
  }

  .about-cta-label {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #00d4aa;
  }

  .about-cta-heading {
    font-size: clamp(1.75rem, 3vw, 2.5rem);
    font-weight: 600;
    color: #ffffff;
    letter-spacing: -0.025em;
    margin: 0;
  }

  .about-cta-body {
    font-size: 16px;
    color: #64748b;
    line-height: 1.7;
    max-width: 40rem;
    margin: 0;
  }

  .about-cta-buttons {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 0.5rem;
  }
</style>
