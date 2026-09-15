import type { Scene } from '$lib/tailwind/AgentWidget/AgentWidget.svelte';

/**
 * One record per vertical. Drives the hero tabs, the home-page industry grid,
 * the navigation dropdown and the deep dives on /industries, so a vertical is
 * added or reworded in exactly one place.
 *
 * Copy rule for this file: no em dashes anywhere (see CLAUDE.md).
 */

export interface MockProduct {
  name: string;
  price: string;
  score: string;
}

export interface Vertical {
  id: string;
  /** Short label for tabs, nav and cards. */
  label: string;
  /** What the agent is called in this vertical. */
  agent: string;
  /** Section eyebrow on /industries. */
  eyebrow: string;
  /** Hero tab copy. */
  hero: {
    title: string;
    desc: string;
    bullets: string[];
  };
  /** Home grid card copy. */
  card: string;
  /** The simulated widget conversation. */
  scene: Scene;
  /** /industries deep dive. */
  deep: {
    heading: string;
    paragraphs: string[];
    pills: string[];
    mock: {
      title: string;
      sub: string;
      intentLabel: string;
      intent: string;
      products: MockProduct[];
      checkLabel: string;
      chips: string[];
      footer: string;
    };
  };
  /** Which catalog and commerce systems the agent reads in this vertical. */
  integrations: string[];
  /** Whether the vertical is live with customers today. */
  status: 'live' | 'pilot' | 'poc';
}

export const verticals: Vertical[] = [
  {
    id: 'cannabis',
    label: 'Cannabis dispensaries',
    agent: 'AI Budtender',
    eyebrow: 'CANNABIS DISPENSARIES',
    status: 'live',
    hero: {
      title: 'The AI Budtender, connected to your POS',
      desc: 'Shoppers ask about effects, potency and format. The agent answers from your live menu, enforces purchase limits and state warnings, and hands over a qualified cart.',
      bullets: [
        'Live Dutchie menu: potency, price and stock in every answer',
        'Daily purchase limits and state warnings before the recommendation',
        'Guided finder: category, effects, THC tier, then price'
      ]
    },
    card: 'Effects, potency and format from the live POS menu. Purchase limits and state warnings enforced in the answer.',
    scene: {
      agentName: 'AI Budtender',
      turns: [
        { role: 'user', text: 'Something uplifting for a hike, pre-rolls?' },
        { role: 'ai', text: 'Got it, uplifting pre-rolls. Here is what is in stock right now, within your daily limit:' }
      ],
      recLabel: 'AI Budtender recommendations',
      products: [
        { brand: 'LOWELL FARMS', name: 'Sativa Pre-Roll Pack 3.5g', tags: ['PRE-ROLL', 'SATIVA'], price: '$38.00', spec: 'THC 24%', tint: 'a' },
        { brand: 'JEETER', name: 'Maui Wowie Infused Pre-Roll 1g', tags: ['PRE-ROLL', 'SATIVA'], price: '$18.00', spec: 'THC 38%', tint: 'b' },
        { brand: 'PACIFIC STONE', name: 'Blue Dream Pre-Rolls 14 pk', tags: ['PRE-ROLL', 'HYBRID'], price: '$45.00', spec: 'THC 21%', tint: 'c' }
      ],
      compliance: 'For adults 21+. Within today\'s purchase limit. Not medical advice.',
      placeholder: 'Ask about a strain, format or effect',
      disclaimer: 'AI assistant, not a human. Not medical advice.'
    },
    deep: {
      heading: 'Turn every shopper into a guided buyer',
      paragraphs: [
        'Dispensary shoppers don\'t browse like typical e-commerce customers. They ask about effects, potency, consumption method, and what\'s actually in stock right now. shopsupport.ai agents connect to Dutchie and answer with live inventory, never recommending an out-of-stock strain.',
        'Compliance is built in. Agents enforce daily purchase limits, age verification prompts, and state-specific regulations before every recommendation. A shopper asking for "something strong" gets matched to products within their remaining daily allowance, not just the highest THC on the menu.',
        'Strain discovery goes beyond category filters. Our agents understand indica vs. sativa effects, terpene profiles, and cross-category intent, surfacing edibles, vapes, and flower that match what the customer is actually trying to accomplish.'
      ],
      pills: ['+23% AOV', '<200ms POS sync', '99.2% accuracy'],
      mock: {
        title: 'Product Intelligence',
        sub: 'Real-time recommendation engine',
        intentLabel: 'Session intent detected',
        intent: 'Relaxing · Evening · Under $40 · In stock',
        products: [
          { name: 'Blue Dream 3.5g', price: '$32.00', score: '97%' },
          { name: 'Granddaddy Purp', price: '$28.00', score: '89%' },
          { name: 'Calm Gummies 10pk', price: '$24.00', score: '81%' }
        ],
        checkLabel: 'Compliance check passed',
        chips: ['Within daily limit', 'Age verified', 'Dutchie synced'],
        footer: 'Synced 1,247 SKUs · 143ms'
      }
    },
    integrations: ['Dutchie', 'Jane', 'BLAZE', 'Treez']
  },
  {
    id: 'drugstore',
    label: 'Drugstore & beauty',
    agent: 'AI Advisor',
    eyebrow: 'DRUGSTORE, BEAUTY & PERSONAL CARE',
    status: 'pilot',
    hero: {
      title: 'A product advisor for a 15,000-SKU drugstore',
      desc: 'Skin type, sensitivities, budget and language become filters over the whole catalog. Product claims stay inside cosmetics, supplement and infant-formula rules.',
      bullets: [
        'Nine specialists: skin, hair, body, baby, household, health and nutrition',
        'Claims policy per category: cosmetics, supplements, infant formula, biocides',
        'Any language, dialect-aware: the reply moves, product names do not'
      ]
    },
    card: 'Nine specialists over a 15,000-SKU catalog. Claims stay inside cosmetics, supplement and infant-formula rules, in any language.',
    scene: {
      agentName: 'AI Advisor',
      turns: [
        { role: 'user', text: 'I have dry, sensitive skin. What do you recommend for winter?' },
        { role: 'ai', text: 'For dry, sensitive skin in winter, a richer cream that supports the skin barrier, with SPF by day:' }
      ],
      recLabel: 'Face care specialist recommends',
      products: [
        { brand: 'BALEA', name: 'Intensive Day Cream, Urea + SPF 15, 50 ml', tags: ['FACE', 'SENSITIVE'], price: '€2.95', spec: 'SPF 15', tint: 'b' },
        { brand: 'NIVEA', name: 'Daily Essentials Night Cream, Dry & Sensitive, 50 ml', tags: ['FACE', 'NIGHT'], price: '€7.15', spec: '50 ml', tint: 'a' },
        { brand: 'SKINTEGRA', name: 'Una Nourishing Protective Cream, 50 ml', tags: ['FACE', 'BARRIER'], price: '€24.50', spec: '50 ml', tint: 'd' }
      ],
      compliance: 'Product information from the label. For a described symptom, ask a pharmacist.',
      placeholder: 'Describe your skin, hair or what you need',
      disclaimer: 'AI advisor. Disclosed under EU AI Act Article 50.'
    },
    deep: {
      heading: 'One advisor for a wide, regulated catalog',
      paragraphs: [
        'A drugstore catalog is wide and regulated at the same time: 15,000 products across skin, hair, baby, household, health and nutrition, each category with its own claim rules. Shoppers describe a situation ("dry, sensitive skin in winter", "something for my baby\'s cradle cap") and site search wants the product\'s name. The agent routes the need to a specialist for that part of the catalog and answers from what is actually in stock, with the reason each product fits.',
        'Claims are governed per category. Cosmetics stay inside Regulation 1223/2009 and the common-criteria claims rules, supplements use authorised health-claim wording only, infant formula is presented neutrally with no promotion or comparatives, biocides carry their mandatory safety sentence, and non-prescription medicines are described from the label and referred to a pharmacist for anything beyond it. A forbidden-claim test suite runs on every release.',
        'Built for the EU rulebook from the first line: AI Act Article 50 disclosure and marking, EU-jurisdiction storage, no identity data, WCAG 2.1 AA, and a language layer that expands dialects instead of substituting them, so the ekavian "mleko za bebe" finds infant nutrition, not a laundry detergent.'
      ],
      pills: ['14,555 SKUs live', '4 languages', 'AI Act Art. 50 ready'],
      mock: {
        title: 'Product Intelligence',
        sub: 'Specialist: face care · live demo',
        intentLabel: 'Session intent detected',
        intent: 'Dry skin · Sensitive · Winter · Under €10',
        products: [
          { name: 'Balea Day Cream Urea + SPF 15', price: '€2.95', score: '97%' },
          { name: 'Balea Night Cream 5% Urea', price: '€2.95', score: '91%' },
          { name: 'NIVEA Daily Essentials Night', price: '€7.15', score: '84%' }
        ],
        checkLabel: 'Claims check passed',
        chips: ['Cosmetics 1223/2009', 'Label wording only', 'AI disclosure shown'],
        footer: 'Indexed 14,555 SKUs · 200 categories'
      }
    },
    integrations: ['WooCommerce', 'Shopify', 'Magento', 'Product feeds']
  },
  {
    id: 'beverage',
    label: 'Wine & beverage',
    agent: 'AI Sommelier',
    eyebrow: 'WINE, SPIRITS & BEVERAGE',
    status: 'poc',
    hero: {
      title: 'A sommelier that knows your cellar and your shipping map',
      desc: 'Occasion, meal, taste and budget become a shortlist from live stock. Age gating and destination shipping rules are checked before the recommendation.',
      bullets: [
        'Pairing and taste profile from producer data and tasting notes',
        'Age gate and shipping eligibility per destination, enforced in the answer',
        'Clubs, allocations and case pricing handled as catalog facts'
      ]
    },
    card: 'Occasion, meal and taste become a shortlist from live stock, with age gating and shipping rules checked first.',
    scene: {
      agentName: 'AI Sommelier',
      turns: [
        { role: 'user', text: 'A dry red under $35 for grilled lamb, nothing too tannic' },
        { role: 'ai', text: 'Grilled lamb wants fruit and moderate tannin. Under $35 and in stock:' }
      ],
      recLabel: 'AI Sommelier recommendations',
      products: [
        { brand: 'DOMAINE DE LA JANASSE', name: 'Côtes du Rhône Rouge 2022', tags: ['RED', 'GRENACHE'], price: '$24.00', spec: '13.5% · 750 ml', tint: 'c' },
        { brand: 'BODEGAS MUGA', name: 'Rioja Reserva 2019', tags: ['RED', 'TEMPRANILLO'], price: '$32.00', spec: '14% · 750 ml', tint: 'a' },
        { brand: 'ALPHA ZETA', name: 'Valpolicella Ripasso 2021', tags: ['RED', 'CORVINA'], price: '$21.00', spec: '13.5% · 750 ml', tint: 'b' }
      ],
      compliance: '21+ only. Ships to your state. Please drink responsibly.',
      placeholder: 'Describe the meal, the occasion or the taste',
      disclaimer: 'AI sommelier. Availability and shipping checked against store policy.'
    },
    deep: {
      heading: 'Sell the pairing, not the shelf',
      paragraphs: [
        'Wine and spirits shoppers rarely search by producer. They describe a dinner, a gift, a mood or a price, and expect the shortlist a good floor sommelier would give: grape, region, style, why it fits. The agent turns that description into structured intent, filters live stock, and explains the pairing in one reply.',
        'Compliance sits in the answer, not in the footer: age verification before any recommendation, shipping eligibility by destination state or country, quantity limits where they apply, and responsible-drinking language. Allocations, club pricing and case discounts are catalog facts the agent reads, never promises it invents.',
        'Taste is data. Producer notes, tasting descriptors, sweetness, body and tannin become filters, so "something like the Barolo I had, but cheaper" resolves to a Langhe Nebbiolo at a third of the price, in stock.'
      ],
      pills: ['Pairing engine', 'Age + shipping gate', 'Club and allocation aware'],
      mock: {
        title: 'Cellar Intelligence',
        sub: 'Pairing and availability engine',
        intentLabel: 'Session intent detected',
        intent: 'Grilled lamb · Dry red · Under $35 · Ships to CO',
        products: [
          { name: 'Côtes du Rhône Rouge 2022', price: '$24.00', score: '96%' },
          { name: 'Rioja Reserva 2019', price: '$32.00', score: '90%' },
          { name: 'Valpolicella Ripasso 2021', price: '$21.00', score: '85%' }
        ],
        checkLabel: 'Compliance check passed',
        chips: ['21+ verified', 'Ships to CO', 'Within limit'],
        footer: 'Synced 2,340 SKUs · 3 locations'
      }
    },
    integrations: ['Shopify', 'WooCommerce', 'Commerce7', 'WineDirect']
  },
  {
    id: 'fashion',
    label: 'Fashion & apparel',
    agent: 'AI Stylist',
    eyebrow: 'FASHION & APPAREL',
    status: 'poc',
    hero: {
      title: 'A stylist that sells the outfit, not the SKU',
      desc: 'Occasion, fit, size and climate become an outfit from live inventory, with size availability checked per item. Fewer returns, more complete looks.',
      bullets: [
        'Fit and size guidance from size charts and what similar customers kept',
        'Outfit building: the jacket, the trousers and the shoes that go together',
        'Occasion and climate as filters: "rainy city weekend, smart casual"'
      ]
    },
    card: 'Occasion, fit and climate become a complete look, size-checked per item. Fewer returns, bigger baskets.',
    scene: {
      agentName: 'AI Stylist',
      turns: [
        { role: 'user', text: 'Smart casual for a rainy weekend in Amsterdam, I am usually a medium' },
        { role: 'ai', text: 'Rain-ready and smart casual, all three in your size:' }
      ],
      recLabel: 'AI Stylist picks',
      products: [
        { brand: 'RAINS', name: 'Long Jacket, Olive', tags: ['OUTERWEAR', 'WATERPROOF'], price: '€115', spec: 'M in stock', tint: 'd' },
        { brand: 'NN07', name: 'Theo Regular Chino, Navy', tags: ['TROUSERS', 'REGULAR'], price: '€129', spec: 'W32 in stock', tint: 'a' },
        { brand: 'VEJA', name: 'V-10 Leather, White', tags: ['SNEAKERS', 'LEATHER'], price: '€150', spec: 'EU 43 in stock', tint: 'b' }
      ],
      compliance: 'Sizes checked against live stock. Free returns within 30 days.',
      placeholder: 'Describe the occasion, the weather or your size',
      disclaimer: 'AI stylist. Fit notes from size charts and customer feedback.'
    },
    deep: {
      heading: 'Sell the look, size it right',
      paragraphs: [
        'Apparel shoppers know the occasion and how they want to feel, not the product name. The agent turns "wedding guest in July, not too formal" into a complete look from live inventory, checks the size for each piece, and explains why the pieces work together.',
        'Fit is the return problem, so the agent reads size charts, model measurements and what customers of a similar size kept, and says when to size up or down. Returns fall when the first order fits.',
        'Merchandising rules are respected: new season first, markdowns when the shopper asks for a budget, brand exclusions and regional catalogs. Every look ends in an add-to-bag for the whole outfit or a saved shortlist.'
      ],
      pills: ['Outfit builder', 'Size confidence', 'Lower returns'],
      mock: {
        title: 'Style Intelligence',
        sub: 'Outfit and fit engine',
        intentLabel: 'Session intent detected',
        intent: 'Smart casual · Rain · Medium · Under €400',
        products: [
          { name: 'Rains Long Jacket, Olive', price: '€115', score: '96%' },
          { name: 'NN07 Theo Chino, Navy', price: '€129', score: '92%' },
          { name: 'Veja V-10 Leather, White', price: '€150', score: '88%' }
        ],
        checkLabel: 'Fit check passed',
        chips: ['M in stock', 'W32 in stock', 'EU 43 in stock'],
        footer: 'Synced 8,900 SKUs · sizes live'
      }
    },
    integrations: ['Shopify', 'Salesforce Commerce', 'Magento', 'Centra']
  },
  {
    id: 'sporting',
    label: 'Sporting goods & outdoor',
    agent: 'AI Gear Advisor',
    eyebrow: 'SPORTING GOODS & OUTDOOR',
    status: 'poc',
    hero: {
      title: 'A gear advisor for skill level, terrain and conditions',
      desc: 'Skis, bikes, boots and layers chosen the way a shop expert chooses them: ability, where it will be used, body data and budget, against live stock.',
      bullets: [
        'Ability and terrain as filters: intermediate, groomers, wants to progress in powder',
        'Compatibility checks: bindings and boot soles, wheel size, mounting',
        'Sizing from height, weight and skill, not just the chart'
      ]
    },
    card: 'Ability, terrain and body data become the right ski, bike or boot, with compatibility rules enforced.',
    scene: {
      agentName: 'AI Gear Advisor',
      turns: [
        { role: 'user', text: 'Intermediate skier, mostly groomers, want to get into powder. 178 cm, 80 kg' },
        { role: 'ai', text: 'An all-mountain ski around 170 to 175 cm with a 90 to 100 mm waist suits that. In stock:' }
      ],
      recLabel: 'AI Gear Advisor recommendations',
      products: [
        { brand: 'VÖLKL', name: 'M7 Mantra, 170 cm', tags: ['ALL-MOUNTAIN', '96 MM'], price: '€699', spec: '170 cm in stock', tint: 'a' },
        { brand: 'SALOMON', name: 'QST 92, 169 cm', tags: ['ALL-MOUNTAIN', '92 MM'], price: '€549', spec: '169 cm in stock', tint: 'c' },
        { brand: 'NORDICA', name: 'Enforcer 94, 172 cm', tags: ['ALL-MOUNTAIN', '94 MM'], price: '€649', spec: '172 cm in stock', tint: 'b' }
      ],
      compliance: 'Binding mounting and DIN setting done in store. Boot sole type checked at checkout.',
      placeholder: 'Describe your level, terrain and what you own',
      disclaimer: 'AI gear advisor. Sizing from your inputs and manufacturer charts.'
    },
    deep: {
      heading: 'The shop expert, for every visitor',
      paragraphs: [
        'Outdoor and sports retail is a fit problem with technical constraints. Shoppers describe their level, where they ride or run, and what they already own. The agent turns that into the attributes an expert would use, ski waist width and length, bike frame size and geometry, boot last width, and matches live stock.',
        'Compatibility is enforced: bindings that fit the boot sole norm, wheels that fit the frame, layers that match the temperature range. When nothing matches everything, the agent names the trade-off it made instead of showing silent near-misses.',
        'Seasonality and services are part of the answer: rental vs. purchase, mounting and tuning, warranty terms, and pick-up in the store nearest to the slope or the trail.'
      ],
      pills: ['Compatibility rules', 'Sizing engine', 'Season aware'],
      mock: {
        title: 'Gear Intelligence',
        sub: 'Fit and compatibility engine',
        intentLabel: 'Session intent detected',
        intent: 'Intermediate · Groomers + powder · 178 cm / 80 kg',
        products: [
          { name: 'Völkl M7 Mantra, 170 cm', price: '€699', score: '95%' },
          { name: 'Nordica Enforcer 94, 172 cm', price: '€649', score: '91%' },
          { name: 'Salomon QST 92, 169 cm', price: '€549', score: '87%' }
        ],
        checkLabel: 'Compatibility check passed',
        chips: ['Length 168 to 175', 'Waist 90 to 100 mm', 'GripWalk sole OK'],
        footer: 'Synced 6,100 SKUs · 4 stores'
      }
    },
    integrations: ['Shopify', 'Lightspeed', 'Magento', 'Product feeds']
  },
  {
    id: 'jewelry',
    label: 'Jewelry & watches',
    agent: 'AI Concierge',
    eyebrow: 'JEWELRY & WATCHES',
    status: 'poc',
    hero: {
      title: 'A concierge for gifts, occasions and materials',
      desc: 'Occasion, recipient, metal, stone and budget become a shortlist with provenance and sizing guidance. High consideration, handled with the care a boutique gives.',
      bullets: [
        'Occasion and recipient understanding: anniversary, first watch, milestone',
        'Materials explained: gold purity, stone grading, movement type',
        'Sizing help, engraving and delivery dates in the same conversation'
      ]
    },
    card: 'Occasion, recipient and budget become a shortlist with materials explained, sizing and delivery dates handled.',
    scene: {
      agentName: 'AI Concierge',
      turns: [
        { role: 'user', text: '10th anniversary gift, she wears silver, around $500' },
        { role: 'ai', text: 'Silver is what she wears, so silver it is. Under $500 and ready to ship:' }
      ],
      recLabel: 'AI Concierge shortlist',
      products: [
        { brand: 'MONICA VINADER', name: 'Siren Wire Bracelet, Sterling Silver', tags: ['BRACELET', 'SILVER'], price: '$245', spec: 'Engravable', tint: 'b' },
        { brand: 'MEJURI', name: 'Bold Tube Hoops, Sterling Silver', tags: ['EARRINGS', 'SILVER'], price: '$178', spec: 'Ships in 2 days', tint: 'a' },
        { brand: 'TISSOT', name: 'PR 100 Lady, 34 mm', tags: ['WATCH', 'QUARTZ'], price: '$395', spec: 'Sapphire crystal', tint: 'd' }
      ],
      compliance: 'Prices include VAT. Engraving adds 2 days to delivery.',
      placeholder: 'Who is it for, and what is the occasion?',
      disclaimer: 'AI concierge. Certifications and materials from supplier data.'
    },
    deep: {
      heading: 'Boutique care, at every hour',
      paragraphs: [
        'Jewelry and watches are bought for someone else, on a date that matters. The agent asks the two questions a good boutique asks, who is it for and what is the occasion, then works within the budget across the metals, stones and styles the shop actually has.',
        'Materials are explained, not marketed: gold purity, plating, stone grading, movement type, water resistance. Certifications and provenance come from supplier data and are shown as such.',
        'The practical parts close the sale: ring sizing guidance, engraving options, gift wrapping, delivery dates and the returns policy, all in the same conversation, with the shortlist saved for a partner to approve.'
      ],
      pills: ['Occasion engine', 'Materials explained', 'Delivery-date aware'],
      mock: {
        title: 'Concierge Intelligence',
        sub: 'Occasion and materials engine',
        intentLabel: 'Session intent detected',
        intent: 'Anniversary · Silver · Under $500 · Ships in 2 days',
        products: [
          { name: 'Siren Wire Bracelet', price: '$245', score: '95%' },
          { name: 'Bold Tube Hoops', price: '$178', score: '90%' },
          { name: 'Tissot PR 100 Lady 34 mm', price: '$395', score: '86%' }
        ],
        checkLabel: 'Availability check passed',
        chips: ['In stock', 'Engravable', 'Ships in 2 days'],
        footer: 'Synced 1,860 SKUs · certified data'
      }
    },
    integrations: ['Shopify', 'Magento', 'BigCommerce', 'Product feeds']
  },
  {
    id: 'automotive',
    label: 'Automotive dealerships',
    agent: 'AI Vehicle Advisor',
    eyebrow: 'AUTOMOTIVE DEALERSHIPS',
    status: 'poc',
    hero: {
      title: 'A vehicle advisor for the 71% who arrive undecided',
      desc: 'Use case, priorities and budget become vehicles from live inventory, with the trade-off named. Test drives booked in-session, leads delivered with the full story.',
      bullets: [
        'Natural language to vehicle attributes: AWD, third row, tow rating, range',
        'Live inventory and approved pricing only, no invented stock',
        'Test drive booking and context-rich leads into the CRM'
      ]
    },
    card: 'Use case and budget become vehicles from live inventory, test drives booked in-session, leads arrive with context.',
    scene: {
      agentName: 'AI Vehicle Advisor',
      turns: [
        { role: 'user', text: 'We are in the mountains most winter weekends, need something that handles snow, under $40k' },
        { role: 'ai', text: 'Snow and canyon roads mean AWD and ground clearance. Under $40k and on the lot today:' }
      ],
      recLabel: 'AI Vehicle Advisor matches',
      products: [
        { brand: 'SUBARU', name: '2023 Outback Onyx XT, 18k mi', tags: ['WAGON', 'AWD'], price: '$34,900', spec: '8.7 in clearance', tint: 'a' },
        { brand: 'TOYOTA', name: '2022 RAV4 Adventure, 24k mi', tags: ['SUV', 'AWD'], price: '$33,500', spec: 'Tow 3,500 lb', tint: 'c' },
        { brand: 'MAZDA', name: '2024 CX-50 Turbo, 6k mi', tags: ['SUV', 'AWD'], price: '$37,800', spec: 'Snow mode', tint: 'b' }
      ],
      compliance: 'Prices exclude tax and fees. Availability confirmed this morning.',
      placeholder: 'Describe how you will use the car',
      disclaimer: 'AI vehicle advisor. Inventory and pricing from the dealership\'s DMS.'
    },
    deep: {
      heading: 'Host the research on your own lot',
      paragraphs: [
        'Seventy-one percent of car buyers start undecided and spend more than seven hours researching online before they visit a store. The agent hosts that research on the dealership\'s own site: use case, priorities and budget become vehicle attributes, matched against live inventory and approved pricing.',
        'When nothing matches everything, the agent names the relaxed constraint instead of showing silent near-misses. Every recommendation is explained against the stated need, and the next step is booked in-session: a test drive, a payment estimate, a saved shortlist.',
        'Leads arrive with context: use case, budget, shortlisted VINs and the requested test-drive slot, so the sales team opens with the customer\'s own words instead of "how can I help". Every conversation feeds a demand dashboard of body styles, features, affordability and missing inventory.'
      ],
      pills: ['Live inventory', 'Test drives booked', 'Context-rich leads'],
      mock: {
        title: 'Inventory Intelligence',
        sub: 'Use case to vehicle attributes',
        intentLabel: 'Session intent detected',
        intent: 'Winter weekends · AWD · Under $40k · Family',
        products: [
          { name: '2023 Subaru Outback Onyx XT', price: '$34,900', score: '96%' },
          { name: '2022 Toyota RAV4 Adventure', price: '$33,500', score: '91%' },
          { name: '2024 Mazda CX-50 Turbo', price: '$37,800', score: '88%' }
        ],
        checkLabel: 'Inventory check passed',
        chips: ['On the lot', 'Approved pricing', 'Test drive Sat 10:00'],
        footer: 'Synced 312 vehicles · 2 rooftops'
      }
    },
    integrations: ['CDK', 'Tekion', 'DealerSocket', 'Inventory feeds']
  }
];

export const verticalById = (id: string): Vertical | undefined => verticals.find((v) => v.id === id);
