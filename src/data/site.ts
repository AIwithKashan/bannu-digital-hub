export const SITE = {
  name: "Bannu Digital Hub",
  short: "BDH",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bannudigitalhub.com",
  tagline: "Connect · Learn · Collaborate · Grow",
  description:
    "Bannu Digital Hub is a grassroots community connecting freelancers, developers, designers, e-commerce sellers and students across Bannu and Southern Khyber Pakhtunkhwa.",
  founder: "Ali Qureshi",
  email: "support@bannudigitalhub.com",
  phone: "+92 335 9915641",
  phoneTel: "+923359915641",
  address: {
    street: "Asmatullah Plaza, 2nd Floor, Railway Road",
    locality: "Bannu City",
    region: "Khyber Pakhtunkhwa",
    postal: "28100",
    country: "Pakistan",
    countryCode: "PK",
    lat: 32.9861,
    lng: 70.6042,
  },
  links: {
    whatsapp:
      "https://chat.whatsapp.com/DcAsdVs8Y9960Y5bOrtEN6?s=cl&p=a&mlu=4&ilr=4",
    whatsappWomen:
      "https://chat.whatsapp.com/FrDnKO0dCqkKeZHDN3tJd1?s=cl&p=a&mlu=4&ilr=4&iam=2",
    facebook: "https://www.facebook.com/share/1EjwZEgwLy/",
    instagram: "https://www.instagram.com/bannudigitalhub?rpxt=MXZ5b2JiOWl6Ynh2Mg==",
    tiktok: "https://www.tiktok.com/@bannudigitalhub?_r=1&_t=ZS-9Ad7PIXfFll",
    x: "https://x.com/bannudigitalhub",
  },
  donation: {
    easypaisaNumber: "0345 9794572",
    accountTitle: "Amir Khan",
  },
} as const;

export const SOCIALS = [
  { key: "whatsapp", label: "WhatsApp Community", href: SITE.links.whatsapp },
  { key: "facebook", label: "Facebook", href: SITE.links.facebook },
  { key: "instagram", label: "Instagram", href: SITE.links.instagram },
  { key: "tiktok", label: "TikTok", href: SITE.links.tiktok },
  { key: "x", label: "X (Twitter)", href: SITE.links.x },
] as const;

export type NavItem = { label: string; href: string; desc?: string };

export const PRIMARY_NAV: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Disciplines", href: "/disciplines" },
  { label: "Projects", href: "/projects" },
  { label: "Events", href: "/events" },
  { label: "Resources", href: "/resources" },
];

export const COMMUNITY_NAV: NavItem[] = [
  { label: "Talent directory", href: "/members", desc: "Find verified freelancers and developers" },
  { label: "Opportunities", href: "/opportunities", desc: "Remote jobs, gigs and internships" },
  { label: "Women's community", href: "/female-community", desc: "A women-only WhatsApp space" },
  { label: "Our impact", href: "/impact", desc: "Numbers and community stories" },
  { label: "Advertise", href: "/advertise", desc: "Reach Bannu's digital audience" },
  { label: "Donate", href: "/donate", desc: "Keep meetups free" },
];

export const FOOTER_GROUPS: { title: string; items: NavItem[] }[] = [
  {
    title: "Community",
    items: [
      { label: "About us", href: "/about" },
      { label: "Talent directory", href: "/members" },
      { label: "Opportunities", href: "/opportunities" },
      { label: "Events", href: "/events" },
      { label: "Women's community", href: "/female-community" },
      { label: "Our impact", href: "/impact" },
    ],
  },
  {
    title: "Learn",
    items: [
      { label: "Disciplines", href: "/disciplines" },
      { label: "Roadmaps", href: "/roadmaps" },
      { label: "Guides", href: "/guides" },
      { label: "Tools", href: "/tools" },
      { label: "Resource packs", href: "/packs" },
      { label: "Vendors", href: "/vendors" },
    ],
  },
  {
    title: "Get involved",
    items: [
      { label: "Join the community", href: "/join" },
      { label: "Projects", href: "/projects" },
      { label: "Advertise", href: "/advertise" },
      { label: "Donate", href: "/donate" },
      { label: "Contact", href: "/contact" },
      { label: "Constitution", href: "/policy" },
    ],
  },
];
