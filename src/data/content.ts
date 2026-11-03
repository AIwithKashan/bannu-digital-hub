/**
 * All copy below comes from the existing Bannu Digital Hub website and its
 * constitution. Anything marked PLACEHOLDER is intentionally generic and meant
 * to be replaced once the community confirms the real data.
 */

export const STATS = [
  { value: 67, suffix: "+", label: "Members at the first community meetup" },
  { value: 16, suffix: "+", label: "Brands that supported the launch" },
  { value: 6, suffix: "", label: "Learning disciplines" },
  { value: 1, suffix: "", label: "Community event held so far" },
] as const;

export const MANIFESTO =
  "For years, digital practitioners in Bannu worked alone. Learning, client payments and account verification were solo battles. Bannu Digital Hub brings freelancers, developers, designers and students under one umbrella.";

export const PILLARS = [
  {
    key: "freelancers",
    title: "Freelancers community",
    body: "Connect with experienced Upwork, Fiverr and direct-contract freelancers from Bannu to share payment methods, proposal tips and client retention strategies.",
    image: "/media/img/desk-freelancer.webp",
    alt: "Hands typing on a laptop at a tidy wooden desk beside a window",
    href: "/guides",
    cta: "Read the guides",
  },
  {
    key: "learning",
    title: "Skills and learning",
    body: "Practical, project-based workshops covering modern web frameworks, Shopify store builds, digital marketing campaigns and AI tools.",
    image: "/media/img/workshop-training.webp",
    alt: "A training room with attendees working on laptops while an instructor presents",
    href: "/roadmaps",
    cta: "Explore roadmaps",
  },
  {
    key: "directory",
    title: "Talent directory",
    body: "A verified public directory showcasing local developers, designers and digital specialists to clients looking for talent.",
    image: "/media/img/talent-directory.webp",
    alt: "A laptop on a bright desk showing a grid of abstract profile cards",
    href: "/members",
    cta: "Open the directory",
  },
  {
    key: "meetups",
    title: "Physical tech meetups",
    body: "Regular in-person meetups, code sprints and masterclasses held in Bannu to build real relationships and collaborative projects.",
    image: "/media/img/meetup-hall.webp",
    alt: "Attendees seated in a bright hall facing a presentation screen",
    href: "/events",
    cta: "See events",
  },
  {
    key: "mentorship",
    title: "Mentorship and guidance",
    body: "Senior digital creators mentor juniors and students without gatekeeping, with honest career advice and skill roadmaps.",
    image: "/media/img/mentorship.webp",
    alt: "Two colleagues collaborating at a laptop in a sunlit office",
    href: "/about",
    cta: "Our values",
  },
  {
    key: "business",
    title: "Local business modernization",
    body: "Helping Bannu-based manufacturers, wholesale traders and small businesses build digital storefronts and scale online.",
    image: "/media/img/local-business.webp",
    alt: "A shop owner in a Pakistani bazaar using a tablet beside neatly stacked shelves",
    href: "/vendors",
    cta: "Trusted vendors",
  },
] as const;

export const VALUES = [
  {
    title: "Community first",
    body: "Knowledge expands when shared freely. Senior practitioners mentor emerging talent without gatekeeping.",
  },
  {
    title: "Practical focus",
    body: "We concentrate on skills that generate real client revenue, remote jobs and sustainable digital businesses.",
  },
  {
    title: "Authenticity and transparency",
    body: "No get-rich-quick scams or unverified claims. Honest, realistic guidance on the dedication needed to succeed.",
  },
  {
    title: "Inclusive collaboration",
    body: "Open to every student, freelancer, woman in tech and creative in Bannu and surrounding Southern KP regions.",
  },
] as const;

export const GOALS = [
  "Train and mentor 500+ students and graduates in high-income remote digital skills.",
  "Organize regular physical tech meetups, code sprints and freelancing masterclasses in Bannu.",
  "Maintain a searchable directory of verified local talent to connect Bannu professionals with international companies.",
  "Help local small businesses and manufacturers in Bannu digitize through e-commerce and online marketing.",
] as const;

export const NEWS = [
  {
    tag: "Event",
    date: "2026-10-20",
    title: "Community meetup: a successful first event",
    body: "More than 67 members attended at Amir Marriage Hall, Bannu City. Sessions covered freelancing, e-commerce and networking.",
    href: "/events",
  },
  {
    tag: "Education",
    date: "2026-10-31",
    title: "Shopify A-to-Z roadmap published",
    body: "A complete Shopify business roadmap in Roman Urdu: seven phases of actionable steps, now free to follow.",
    href: "/roadmaps",
  },
  {
    tag: "Website",
    date: "2026-11-01",
    title: "New sections go live",
    body: "Roadmaps, vendors, tools, guides, donate and more sections have been added to the community website.",
    href: "/resources",
  },
  {
    tag: "Community",
    date: "2026-11-01",
    title: "Community feed launch",
    body: "Members will be able to share posts, questions and updates in the feed. Register to take part.",
    href: "/join",
  },
] as const;

export const FAQ = [
  {
    q: "What is Bannu Digital Hub?",
    a: "Bannu Digital Hub (BDH) is the grassroots community platform connecting freelancers, software developers, UI/UX designers and students across Bannu and Southern Khyber Pakhtunkhwa to global clients and practical mentorship.",
  },
  {
    q: "Where is Bannu Digital Hub physically located?",
    a: "Asmatullah Plaza, 2nd Floor, Railway Road, Bannu City, Khyber Pakhtunkhwa 28100, Pakistan.",
  },
  {
    q: "How can I hire verified developers and freelancers from Bannu?",
    a: "Browse the member directory to view portfolios, verified badges and skill sets such as React, Next.js, Python, Shopify and graphic design, then contact talent directly.",
  },
  {
    q: "How do I join the community?",
    a: "Apply on the join page or participate in the WhatsApp community to connect with local creators and attend meetups.",
  },
  {
    q: "Are the workshops and events free?",
    a: "Yes. Community meetups, code masterclasses and digital skills workshops hosted by Bannu Digital Hub are free to support local youth development.",
  },
  {
    q: "Is Bannu Digital Hub a registered organization?",
    a: "BDH is an independent community initiative organized by local practitioners. It does not claim official government affiliation or formal NGO registration.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "BDH meetup me mujhe pehli dafa pata chala ke Bannu me bhi itne talented log hain. Ab hum ek dusre se seekhte hain.",
    who: "Community member",
    role: "Meetup attendee, Oct 2026",
  },
  {
    quote:
      "Shopify roadmap ne meri soch badal di. Ab mujhe pata hai ke pehla step kya hona chahiye.",
    who: "Aspiring seller",
    role: "Roadmap reader",
  },
] as const;

export const MEMBER_DISCIPLINES = [
  "Web Development",
  "Software Development",
  "Graphic Design",
  "Digital Marketing",
  "Shopify & E-commerce",
  "Content Creation",
  "Video Editing",
  "AI & Technology",
  "Freelancing",
] as const;

export const OPPORTUNITY_TYPES = [
  "Remote jobs",
  "Freelance projects",
  "Internships",
  "Training opportunities",
  "Scholarships and workshops",
  "Collaboration requests",
] as const;

/* ---------------- Tools (real data from the community site) ---------------- */
export type Tool = {
  name: string;
  category: string;
  description: string;
  url: string;
  free: boolean;
};

export const TOOLS: Tool[] = [
  { name: "Canva", category: "Design", description: "Posters, logos, thumbnails and social media designs, even without design skills.", url: "https://www.canva.com", free: true },
  { name: "CapCut", category: "Video", description: "Edit Reels and TikTok videos. Free, easy and powerful.", url: "https://www.capcut.com", free: true },
  { name: "ChatGPT", category: "AI", description: "Content ideas, captions, emails and scripts from an AI assistant.", url: "https://chat.openai.com", free: true },
  { name: "Remove.bg", category: "Design", description: "Remove a photo background in one click.", url: "https://www.remove.bg", free: true },
  { name: "TinyPNG", category: "Design", description: "Compress images without losing quality, for faster websites.", url: "https://tinypng.com", free: true },
  { name: "Trello", category: "Productivity", description: "Organize tasks and projects with kanban boards.", url: "https://trello.com", free: true },
  { name: "Google Workspace", category: "Productivity", description: "Docs, Sheets and Drive for team collaboration.", url: "https://workspace.google.com", free: true },
  { name: "Meta Business Suite", category: "Marketing", description: "Schedule Facebook and Instagram posts and manage ads.", url: "https://business.facebook.com", free: true },
  { name: "TikTok", category: "Marketing", description: "Free organic reach: bring in sales with product videos.", url: "https://www.tiktok.com", free: true },
  { name: "Payoneer", category: "Payments", description: "Receive international payments as a freelancer.", url: "https://www.payoneer.com", free: true },
  { name: "JazzCash", category: "Payments", description: "Local payments, mobile top-up and money transfer.", url: "https://www.jazzcash.com.pk", free: true },
  { name: "Easypaisa", category: "Payments", description: "A digital wallet and the most popular one in Pakistan.", url: "https://www.easypaisa.com.pk", free: true },
  { name: "Namecheap", category: "Web", description: "Affordable domains. A .com costs roughly \$10 per year.", url: "https://www.namecheap.com", free: false },
  { name: "Vercel", category: "Web", description: "Host websites for free. Fast and reliable.", url: "https://vercel.com", free: true },
  { name: "Shopify", category: "E-commerce", description: "Build your own online store, with a 3-day free trial.", url: "https://www.shopify.com", free: false },
  { name: "Daraz Seller Center", category: "E-commerce", description: "Sell on Daraz, Pakistan's biggest marketplace.", url: "https://seller.daraz.pk", free: true },
];

export const TOOL_CATEGORIES = ["All", "Design", "Video", "AI", "Marketing", "Productivity", "Payments", "Web", "E-commerce"] as const;

/* ---------------- Vendors ---------------- */
export type Vendor = {
  name: string;
  category: "Printing" | "Courier" | "Product Sourcing";
  description: string;
  location: string;
  verified: boolean;
};

export const VENDORS: Vendor[] = [
  { name: "Afaq Ahmed Printing Press", category: "Printing", description: "Panaflex, event cards, banners and marketing print material. The 96 cards for the BDH Oct 2026 event were printed here.", location: "Bannu City", verified: true },
  { name: "TCS Courier", category: "Courier", description: "Nationwide COD and parcel delivery. A reliable pickup service for e-commerce sellers.", location: "Nationwide", verified: true },
  { name: "Leopards Courier", category: "Courier", description: "COD delivery across Pakistan. Popular with online sellers for competitive rates.", location: "Nationwide", verified: true },
  { name: "PostEx", category: "Courier", description: "Tech-enabled courier with real-time tracking, focused on e-commerce.", location: "Nationwide", verified: false },
  { name: "Shah Alam Market Suppliers", category: "Product Sourcing", description: "Lahore's wholesale market for electronics accessories, fashion and general items.", location: "Lahore", verified: false },
  { name: "Bolton Market Suppliers", category: "Product Sourcing", description: "Karachi's wholesale market for cosmetics, garments and household items.", location: "Karachi", verified: false },
];

export const VENDOR_CATEGORIES = ["All", "Printing", "Courier", "Product Sourcing"] as const;

/* ---------------- Guides (Roman Urdu, as published) ---------------- */
export const GUIDES = [
  {
    title: "Upwork Par Pehla Client Kaise Hasil Karein",
    category: "Freelancing",
    time: "15 min read",
    intro: "Upwork duniya ka sab se bara freelancing platform hai. Ye guide tumhe zero se pehle $100 tak le jayegi.",
    steps: [
      "Profile 100% complete karo: professional photo, clear title (e.g. \"Shopify Developer | E-commerce Specialist\"), aur portfolio ke 3-4 samples.",
      "Skill tests do aur hourly rate competitive rakho start me ($10-15/hr), pehle reviews ke baad barhao.",
      "Roz 10 proposals bhejo. Har proposal client ke project ko parh kar likho. Copy-paste proposals kabhi kaam nahi karte.",
      "Proposal ka formula: pehli 2 lines me client ka masla repeat karo, phir apna relevant tajurba batao, ek sawal pucho, aur CTA (call ki offer) do.",
      "Pehle 3 clients se 5-star reviews lo. Choti jobs bhi accept karo. Reviews ke baad rates double kar sakte ho.",
      "Connects bachat se use karo. Sirf un jobs par bid karo jahan tum genuinely fit ho.",
    ],
  },
  {
    title: "Fiverr Gig Jo Rank Kare",
    category: "Freelancing",
    time: "12 min read",
    intro: "Fiverr par gig banana asaan hai, rank karna mushkil. Ye steps follow karo.",
    steps: [
      "Ek specific service chuno. \"I will design a Shopify store\" behtar hai \"I will do web development\" se.",
      "Gig title me keywords use karo jo buyers search karte hain. Fiverr search bar me type karke suggestions dekho.",
      "3 pricing packages banao: Basic (chota kaam), Standard (popular), Premium (complete solution).",
      "Gig images/video khud banao. Canva se 3 professional thumbnails. Video wali gigs 40% zyada orders leti hain.",
      "Description me \"I\" se zyada \"You\" likho. Buyer ko faida nazar aana chahiye.",
      "Pehle order ke liye Fiverr forum aur social media par apni gig share karo. Buyer requests roz check karo.",
    ],
  },
  {
    title: "International Payments: Payoneer Setup Guide",
    category: "Payments",
    time: "10 min read",
    intro: "Upwork/Fiverr se paise Pakistan kaise lao? Payoneer ka complete setup.",
    steps: [
      "Payoneer.com par account banao. CNIC aur bank account details chahiye hongi.",
      "Verification me 1-3 din lagte hain. Email aur phone verify karna mat bhoolo.",
      "Upwork/Fiverr ke payment settings me Payoneer connect karo.",
      "Upwork se Payoneer me transfer: $1-2 fee, 1-2 din. Phir Payoneer se apne Pakistani bank me: interbank rate par.",
      "Tip: bara amount ek sath nikalo. Har transfer par fixed fee lagti hai.",
      "Tax ke liye: freelancing income par Pakistan me tax benefits hain (PSEB registration se). Apne accountant se mashwara karo.",
    ],
  },
  {
    title: "COD E-commerce: Pehla Order Se Delivery Tak",
    category: "E-commerce",
    time: "14 min read",
    intro: "Cash on Delivery Pakistan me e-commerce ka king hai. Pura flow samjho.",
    steps: [
      "Product select karo: Rs. 1,500-4,000 range, halka wazan, masla hal karne wala.",
      "Supplier se wholesale rate lo. Kam se kam 40% margin rakho (product cost ka 2.5x selling price).",
      "Shopify ya Daraz par list karo, achi photos aur Urdu/English mix description ke sath.",
      "Order aaye to same day pack karo. Courier (TCS/Leopards/PostEx) book karo.",
      "Customer ko WhatsApp par tracking bhejo. Delivery se pehle ek reminder message bhejo, return ratio kam hoga.",
      "Har hafte hisab karo: ad spend, product cost, courier, returns. Jo product profit na de, use hatao.",
    ],
  },
  {
    title: "Client Se Baat Kaise Karein (Communication Guide)",
    category: "Freelancing",
    time: "8 min read",
    intro: "Ache freelancers aur great freelancers me farq sirf communication ka hai.",
    steps: [
      "Pehle message me hamesha client ka naam use karo aur unke project ka ek specific point mention karo.",
      "Sawal puchne se mat daro. Ache sawal expertise zahir karte hain.",
      "Deadlines hamesha thodi zyada batao (buffer rakho), phir jaldi deliver karo. Client impress hoga.",
      "Har milestone par update do. Client ko kabhi \"kya ho raha hai?\" puchna na pare.",
      "Masla ho to chupao mat. Foran batao aur solution bhi do. Honesty trust banati hai.",
      "Project khatam hone par review mango, politely, ek simple message me.",
    ],
  },
] as const;

export const PACKS = [
  { title: "Freelancer Starter Pack", desc: "Upwork and Fiverr profile templates, proposal samples and a rate calculator.", items: "8 files", locked: false },
  { title: "Canva Design Templates", desc: "Editable social media posts, thumbnails and poster templates.", items: "12 templates", locked: false },
  { title: "Reels Editing Pack", desc: "CapCut transitions, a trending sounds list and hook formulas.", items: "15 files", locked: true },
] as const;

export const AD_TIERS = [
  {
    name: "Community post",
    price: "Rs. 1,000",
    unit: "per post",
    features: ["Featured post on the community feed", "Pinned for 7 days", "Community reach"],
    featured: false,
  },
  {
    name: "Brand partner",
    price: "Rs. 5,000",
    unit: "per month",
    features: ["Logo placement on the website", "4 featured posts in the feed", "Brand mention at events", "WhatsApp group shoutout"],
    featured: true,
  },
  {
    name: "Event sponsor",
    price: "Custom",
    unit: "tailored package",
    features: ["Event stage branding", "Panaflex and banner placement", "Dedicated social media campaign", "Direct audience access"],
    featured: false,
  },
] as const;

export const MEMBER_DEALS = [
  {
    brand: "Ali Corporation Ltd",
    title: "Community member discount",
    desc: "20% discount for BDH members on marketing services: videos, social media management and branding.",
    valid: "Valid until 31 Dec 2026",
    href: "/contact",
  },
  {
    brand: "Bannu Digital Hub",
    title: "First event free entry",
    desc: "Free entry to the next community meetup for new members.",
    valid: "Next event",
    href: "/events",
  },
] as const;

export const PROJECTS = [
  {
    title: "Community website",
    status: "Live",
    tags: ["Web development", "Open to contributors"],
    body: "This website is itself a community project, built so members get a feed, roadmaps and events in one place.",
    image: "/media/img/dashboard-desk.webp",
    alt: "A woman working at a desk with a laptop and dashboards",
    href: "/about",
  },
  {
    title: "October 2026 community meetup",
    status: "Completed",
    tags: ["Event", "Networking"],
    body: "The first big event: 67+ members, 16+ supporting brands, at Amir Marriage Hall in Bannu City.",
    image: "/media/img/meetup-hall.webp",
    alt: "Attendees in a bright hall facing a presentation screen",
    href: "/events",
  },
  {
    title: "Female community group",
    status: "Live",
    tags: ["Community", "Women"],
    body: "A WhatsApp group where Bannu's female creators and freelancers connect, learn and support each other.",
    image: "/media/img/women-learning.webp",
    alt: "Women's hands typing on a laptop and taking notes",
    href: "/female-community",
  },
  {
    title: "Shopify A-to-Z roadmap",
    status: "Live",
    tags: ["Education", "E-commerce"],
    body: "A complete e-commerce roadmap in Roman Urdu, with a progress tracker you can follow step by step.",
    image: "/media/img/ecommerce-packing.webp",
    alt: "A table with neatly packed parcels and a phone showing a storefront",
    href: "/roadmaps",
  },
] as const;
