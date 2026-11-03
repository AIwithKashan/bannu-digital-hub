export type Discipline = {
  slug: string;
  title: string;
  short: string;
  line: string;
  summary: string;
  image: string;
  alt: string;
  skills: string[];
  outcomes: string[];
  related: { label: string; href: string; note: string }[];
};

/**
 * Descriptions come from the community site. Skill lists only use technologies
 * the site already names. Detailed curricula are marked as coming soon rather
 * than invented.
 */
export const DISCIPLINES: Discipline[] = [
  {
    slug: "web-mobile-dev",
    title: "Web & Mobile Development",
    short: "Web & Mobile",
    line: "From landing pages to full-stack platforms.",
    summary:
      "Modern websites, web apps and mobile apps, from landing pages to full-stack platforms built with React, Next.js, Flutter and more.",
    image: "/media/img/desk-freelancer.webp",
    alt: "Hands typing on a laptop at a tidy wooden desk beside a window",
    skills: ["React", "Next.js", "Flutter", "Python"],
    outcomes: [
      "Build and ship real websites and apps for local and remote clients.",
      "Learn from senior developers in the community without gatekeeping.",
      "Contribute to community projects, including this website.",
    ],
    related: [
      { label: "Vercel", href: "/tools", note: "Free hosting for websites" },
      { label: "Projects", href: "/projects", note: "Community builds you can join" },
    ],
  },
  {
    slug: "shopify-ecommerce",
    title: "Shopify & E-Commerce",
    short: "Shopify & E-commerce",
    line: "Online stores that sell, for local and international markets.",
    summary:
      "Online stores that sell: Shopify setups, product pages, payment gateways and e-commerce growth for local and international markets.",
    image: "/media/img/ecommerce-packing.webp",
    alt: "A table with neatly packed parcels, courier bags and a phone showing a storefront",
    skills: ["Shopify", "Cash on Delivery", "Daraz", "Amazon"],
    outcomes: [
      "Follow a seven-phase Shopify roadmap from niche choice to scaling.",
      "Understand COD flows, couriers and wholesale sourcing in Pakistan.",
      "Find trusted printing, courier and sourcing vendors.",
    ],
    related: [
      { label: "Shopify A-to-Z roadmap", href: "/roadmaps", note: "7 phases, 26 steps" },
      { label: "Trusted vendors", href: "/vendors", note: "Couriers, printing and sourcing" },
      { label: "COD e-commerce guide", href: "/guides", note: "First order to delivery" },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX & Graphic Design",
    short: "UI/UX & Graphics",
    line: "Interfaces and visuals people love.",
    summary:
      "Interfaces and visuals people love: user experience design, branding, social media creatives and design systems.",
    image: "/media/img/design-desk.webp",
    alt: "A UI/UX design desk with a drawing tablet, stylus, wireframes and colour swatches",
    skills: ["User experience", "Branding", "Social creatives", "Design systems"],
    outcomes: [
      "Build a portfolio that clients can verify in the talent directory.",
      "Use free tools such as Canva, Remove.bg and TinyPNG effectively.",
      "Get feedback from practitioners who already work with clients.",
    ],
    related: [
      { label: "Canva design templates", href: "/packs", note: "12 editable templates" },
      { label: "Design tools", href: "/tools", note: "Canva, Remove.bg, TinyPNG" },
    ],
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    short: "Performance Marketing",
    line: "Ads that return more than they cost.",
    summary:
      "Ads that return more than they cost: Meta ads, Google ads, TikTok marketing and funnels tracked against real revenue.",
    image: "/media/img/marketing-analytics.webp",
    alt: "A clean desk with a laptop and phone showing abstract growth charts and a notebook",
    skills: ["Meta ads", "Google ads", "TikTok marketing", "Funnels"],
    outcomes: [
      "Learn to measure campaigns against real revenue, not vanity metrics.",
      "Start small with realistic budgets, as taught in the Shopify roadmap.",
      "Connect with sellers who need marketers and vice versa.",
    ],
    related: [
      { label: "Marketing tools", href: "/tools", note: "Meta Business Suite, TikTok" },
      { label: "Shopify roadmap", href: "/roadmaps", note: "Phase 5: marketing and first sales" },
    ],
  },
  {
    slug: "video-content-editing",
    title: "Video & Content Editing",
    short: "Video & Content",
    line: "Stories told in motion.",
    summary:
      "Stories told in motion: short-form reels, YouTube videos, podcasts and content systems that build audiences.",
    image: "/media/img/video-editing.webp",
    alt: "A bright video editing desk with a wide monitor, headphones and a camera",
    skills: ["Short-form reels", "YouTube", "Podcasts", "CapCut"],
    outcomes: [
      "Edit reels and TikTok videos with free, accessible tools.",
      "Use the Reels Editing Pack for transitions, sounds and hook formulas.",
      "Turn editing skills into paid client work.",
    ],
    related: [
      { label: "Reels Editing Pack", href: "/packs", note: "15 files, free with registration" },
      { label: "CapCut", href: "/tools", note: "Free video editor" },
    ],
  },
  {
    slug: "ai-productivity-tools",
    title: "AI Productivity Tools",
    short: "AI Productivity",
    line: "Work smarter with AI.",
    summary:
      "Work smarter with AI: ChatGPT workflows, automation, AI video and image tools for freelancers and businesses.",
    image: "/media/img/ai-workflow.webp",
    alt: "A minimal bright desk with a laptop showing a soft glowing interface and a small plant",
    skills: ["ChatGPT workflows", "Automation", "AI video", "AI images"],
    outcomes: [
      "Use AI for ideas, captions, emails and scripts without losing your voice.",
      "Learn practical automation for freelance and small business work.",
      "Share what works with the community.",
    ],
    related: [
      { label: "ChatGPT", href: "/tools", note: "AI assistant for content" },
      { label: "Community guides", href: "/guides", note: "Practical, tested steps" },
    ],
  },
];

export const getDiscipline = (slug: string) => DISCIPLINES.find((d) => d.slug === slug);
