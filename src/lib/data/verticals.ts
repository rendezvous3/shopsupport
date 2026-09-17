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
    id: 'retail',
    label: 'Retail',
    agent: 'AI Personal Shopper',
    eyebrow: 'RETAIL',
    status: 'pilot',
    hero: {
      title: 'A personal shopper for the whole store',
      desc: 'Tell it what you need and who it is for. It shops the whole store for you, department by department, and explains why each pick fits. In the shopper\'s language, inside the rules of every category.',
      bullets: [
        'One expert per department: baby, household, personal care, health, beauty and more',
        'A single need becomes a cart across departments',
        'Speaks the shopper\'s language, keeps the store\'s product names'
      ]
    },
    card: 'A personal shopper over the whole catalog: one expert per department, a single need turned into a cart, sold from live stock in any language.',
    scene: {
      agentName: 'AI Personal Shopper',
      turns: [
        { role: 'user', text: 'What do I need for a newborn\'s first bath?' },
        { role: 'ai', text: 'A very mild baby wash, a soft hooded towel, and wipes for quick clean ups. All in stock:' }
      ],
      recLabel: 'Your personal shopper suggests',
      products: [
        { brand: 'BABYLOVE', name: 'Bath & Shampoo 2 in 1 Ultra Sensitive, 250 ml', tags: ['BABY', 'WASH'], price: '€1.90', spec: '250 ml', tint: 'b' },
        { brand: 'FREEON', name: 'Hooded Towel, Teddy', tags: ['BABY', 'TOWEL'], price: '€26.95', spec: '1 pc', tint: 'a' },
        { brand: 'PAMPERS', name: 'Sensitive Wipes, 80 pcs', tags: ['BABY', 'WIPES'], price: '€2.50', spec: '80 pcs', tint: 'd' }
      ],
      compliance: 'Product information from the label. Baby care answered neutrally, as the rules for that category require.',
      placeholder: 'Describe what you need, for whom, and for what',
      disclaimer: 'AI personal shopper. Disclosed as AI under EU rules.'
    },
    deep: {
      heading: 'A personal shopper for every department',
      paragraphs: [
        'A retail catalog is wide: thousands of products across departments, each with its own vocabulary and its own rules. Shoppers describe a situation ("everything for a newborn\'s first bath", "a detergent for wool and delicates") and site search wants the product\'s name. The personal shopper hands the need to the right department expert, answers from what is actually in stock with the reason each pick fits, and builds the cart across departments when the need spans them.',
        'Claims are governed per category. Cosmetics stay inside cosmetics claims rules, supplements use authorised health claim wording only, baby food is presented neutrally, biocides carry their mandatory safety sentence, and non prescription health products are described from the label, with anything beyond it referred to a pharmacist. Every release passes a claims test suite before it ships.',
        'Ready for European stores: AI disclosure under the AI Act, data kept in the EU, no identity data collected, accessible to WCAG 2.1 AA. Several languages on one catalog, with the store\'s own product names, so every shopper sees the same products at the same prices.'
      ],
      pills: ['Every department', 'Carts from one need', 'Any language'],
      mock: {
        title: 'Personal Shopper',
        sub: 'Department expert: baby care · live catalog',
        intentLabel: 'Session intent detected',
        intent: 'Newborn · First bath · Ultra sensitive · Cart',
        products: [
          { name: 'babylove Bath & Shampoo 2 in 1', price: '€1.90', score: '97%' },
          { name: 'HiPP Bath, high tolerance', price: '€4.45', score: '92%' },
          { name: 'FreeON Hooded Towel, Teddy', price: '€26.95', score: '88%' }
        ],
        checkLabel: 'Claims check passed',
        chips: ['Baby care: neutral wording', 'Label wording only', 'AI disclosure shown'],
        footer: 'Synced 14,500 SKUs · 200 categories'
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
        'Compliance sits in the answer, not in the footer: age verification before any recommendation, shipping eligibility by destination state or country, quantity limits where they apply, and responsible drinking language. Allocations, club pricing and case discounts are catalog facts the agent reads, never promises it invents.',
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
    card: 'Occasion, fit and climate become a complete look, size checked per item. Fewer returns, bigger carts.',
    scene: {
      agentName: 'AI Stylist',
      turns: [
        { role: 'user', text: 'Smart casual for a rainy weekend in Amsterdam, I am usually a medium' },
        { role: 'ai', text: 'Rain ready and smart casual, all three in your size:' }
      ],
      recLabel: 'AI Stylist picks',
      products: [
        { brand: 'RAINS', name: 'Long Jacket, Olive', tags: ['OUTERWEAR', 'WATERPROOF'], price: '€115', spec: 'M in stock', tint: 'd' },
        { brand: 'NN07', name: 'Theo Regular Chino, Navy', tags: ['TROUSERS', 'REGULAR'], price: '€129', spec: 'W32 in stock', tint: 'a' },
        { brand: 'VEJA', name: 'V10 Leather, White', tags: ['SNEAKERS', 'LEATHER'], price: '€150', spec: 'EU 43 in stock', tint: 'b' }
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
        'Merchandising rules are respected: new season first, markdowns when the shopper asks for a budget, brand exclusions and regional catalogs. Every look ends in an add to bag for the whole outfit or a saved shortlist.'
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
          { name: 'Veja V10 Leather, White', price: '€150', score: '88%' }
        ],
        checkLabel: 'Fit check passed',
        chips: ['M in stock', 'W32 in stock', 'EU 43 in stock'],
        footer: 'Synced 8,900 SKUs · sizes live'
      }
    },
    integrations: ['Shopify', 'Salesforce Commerce', 'Magento', 'Centra']
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
      pills: ['Occasion engine', 'Materials explained', 'Delivery date aware'],
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
        { role: 'user', text: 'Something uplifting for a hike, pre rolls?' },
        { role: 'ai', text: 'Got it, uplifting pre rolls. Here is what is in stock right now, within your daily limit:' }
      ],
      recLabel: 'AI Budtender recommendations',
      products: [
        { brand: 'LOWELL FARMS', name: 'Sativa Pre Roll Pack 3.5g', tags: ['PRE ROLL', 'SATIVA'], price: '$38.00', spec: 'THC 24%', tint: 'a' },
        { brand: 'JEETER', name: 'Maui Wowie Infused Pre Roll 1g', tags: ['PRE ROLL', 'SATIVA'], price: '$18.00', spec: 'THC 38%', tint: 'b' },
        { brand: 'PACIFIC STONE', name: 'Blue Dream Pre Rolls 14 pk', tags: ['PRE ROLL', 'HYBRID'], price: '$45.00', spec: 'THC 21%', tint: 'c' }
      ],
      compliance: 'For adults 21+. Within today\'s purchase limit. Not medical advice.',
      placeholder: 'Ask about a strain, format or effect',
      disclaimer: 'AI assistant, not a human. Not medical advice.'
    },
    deep: {
      heading: 'Turn every shopper into a guided buyer',
      paragraphs: [
        'Dispensary shoppers don\'t browse like typical ecommerce customers. They ask about effects, potency, consumption method, and what\'s actually in stock right now. shopsupport.ai agents connect to Dutchie and answer with live inventory, never recommending an out of stock strain.',
        'Compliance is built in. Agents enforce daily purchase limits, age verification prompts, and state specific regulations before every recommendation. A shopper asking for "something strong" gets matched to products within their remaining daily allowance, not just the highest THC on the menu.',
        'Strain discovery goes beyond category filters. Our agents understand indica vs. sativa effects, terpene profiles, and cross category intent, surfacing edibles, vapes, and flower that match what the customer is actually trying to accomplish.'
      ],
      pills: ['+23% AOV', '<200ms POS sync', '99.2% accuracy'],
      mock: {
        title: 'Product Intelligence',
        sub: 'Real time recommendation engine',
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
  }
];

export const verticalById = (id: string): Vertical | undefined => verticals.find((v) => v.id === id);
