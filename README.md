<div align="center">

  <img src="public/brand/logo-full.png" alt="Bannu Digital Hub Logo" width="380" />

  # Bannu Digital Hub

  **Connecting freelancers, developers, designers, e-commerce sellers, and students across Bannu and Southern Khyber Pakhtunkhwa.**

  [![Next.js](https://img.shields.io/badge/Next.js-16.4.3-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.3.0-blue?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://gsap.com/)
  [![Lenis](https://img.shields.io/badge/Lenis-Smooth_Scroll-black?style=for-the-badge)](https://lenis.darkroom.engineering/)

  [Explore Live Website](https://www.bannudigitalhub.com/) • [Report Bug](https://github.com/AIwithKashan/bannu-digital-hub/issues) • [Request Feature](https://github.com/AIwithKashan/bannu-digital-hub/issues)

</div>

---

## 📌 About The Project

**Bannu Digital Hub (BDH)** is a grassroots community initiative founded by **Ali Qureshi** to build a modern, collaborative tech ecosystem in Bannu, Khyber Pakhtunkhwa. 

This repository contains the complete source code for the official Bannu Digital Hub multi-page platform. Designed with an editorial, light-first aesthetic and engineered to agency-grade quality, the site features rich interactive motion, full-screen background video experiences, interactive Roman Urdu roadmaps, verified local directories, and the official 25-section constitution.

---

## ✨ Key Features

- **🎨 Bespoke Visual Identity:**
  - Light-first editorial palette (`#f4f7f3` paper, `#0a1c13` deep ink, `#00c75a` calibrated brand green).
  - Signature architectural motif: custom crenellated fort battlement borders (`.battlement`) and geometric mountain ridgeline vector art (`<Ridgeline />`).
  - High-readability typography pairing `Bricolage Grotesque` (display), `Geist` (sans), and `Geist Mono` (tabular numeric metrics).

- **⚡ Advanced Motion & Interactive Engine:**
  - Smooth inertia scrolling via **Lenis** synced with GSAP's animation ticker.
  - Scroll-triggered split-text line reveals (`[data-split]`).
  - Scroll-scrubbed narrative word fill (`[data-scrub-words]`).
  - Cinematic image wipe reveals with parallax depth.
  - Curtain page transitions between routes (`<TransitionProvider />`).
  - Interactive magnetic cursor CTAs and animated numerical counters.

- **🎥 Multi-Placement Optimized Video System:**
  - 4 high-impact background video placements (Hero, Studio Showcase, Community, Closing CTA).
  - Multi-tier responsive encoding (Desktop 720p MP4, Mobile 640p MP4, VP9 WebM, and poster fallbacks).
  - Automatic `IntersectionObserver` pause/play, Save-Data bandwidth detection, and WCAG-compliant manual pause controls.

- **🗺️ Interactive E-Commerce Roadmaps:**
  - Complete 7-phase **Shopify** (26 actionable steps) and **Amazon** (22 actionable steps) roadmaps written in clear Roman Urdu.
  - Built-in browser step tracker with persistent `localStorage` progress saving.

- **📦 Local Directories & Resource Toolkit:**
  - Searchable, categorized directories for tools and 20 verified Pakistani suppliers/markets with direct WhatsApp templates.
  - Downloadable resource packs, freelancing guides, and community impact reports.

- **🏛️ Transparent Governance:**
  - Complete 25-clause Founding Constitution (`BDH-CONST-2026`) with interactive section navigation.

- **📱 100% Responsive & Accessible:**
  - Tested across 13 distinct viewport widths (`320px` to `2560px`) with zero layout overflow and touch-friendly targets.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16 (App Router & Turbopack)](https://nextjs.org/)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [GSAP 3](https://gsap.com/) (`ScrollTrigger`, `SplitText`) & [Lenis](https://lenis.darkroom.engineering/)
- **Iconography:** [@phosphor-icons/react](https://phosphoricons.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

---

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

Ensure you have the following installed on your system:
- **Node.js**: `v18.18.0` or higher (Node.js 20+ LTS recommended)
- **Package Manager**: `npm` (comes with Node.js), `pnpm`, or `yarn`
- **Git**: Installed and configured

Check your versions:
```bash
node -v
npm -v
git --version
```

---

### Installation & Dependency Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AIwithKashan/bannu-digital-hub.git
   ```

2. **Navigate into the project directory:**
   ```bash
   cd bannu-digital-hub
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

   > **Note:** If you prefer using other package managers:
   > - `pnpm install`
   > - `yarn install`
   > - `bun install`

---

### Running the Application

#### 1. Development Mode
Start the local Next.js development server with Turbopack:
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:3000
```
The page auto-updates in real time as you edit files in `src/`.

#### 2. Production Build
Test and verify the production bundle:
```bash
npm run build
```
This optimizes images, compiles TypeScript, treeshakes assets, and pre-renders static HTML pages.

#### 3. Start Production Server
Run the compiled production build locally:
```bash
npm start
```
The production server will listen on `http://localhost:3000`.

#### 4. Linting & Type Checking
Verify code style and TypeScript types:
```bash
npm run lint
npx tsc --noEmit
```

---

## 📁 Project Structure

```text
bannu-digital-hub/
├── docs/                     # Full reference documentation & data
│   └── BANNU_DIGITAL_HUB_FULL_DATA.md
├── public/                   # Static assets served directly
│   ├── brand/                # Official logos, badges, and icons
│   ├── media/
│   │   ├── img/              # Optimized WebP editorial imagery
│   │   └── video/            # Encoded MP4, WebM, and video posters
│   ├── favicon.ico           # Multi-resolution favicon (16-64px)
│   └── og.png                # OpenGraph social share card (1200x630)
├── src/
│   ├── app/                  # Next.js App Router routes & layouts
│   │   ├── about/            # About us page
│   │   ├── advertise/        # Sponsorship & partner page
│   │   ├── contact/          # Interactive contact form
│   │   ├── disciplines/      # 6 Core Crafts & detail routes
│   │   ├── donate/           # Transparent Easypaisa donation hub
│   │   ├── events/           # Meetup & workshop schedules
│   │   ├── female-community/ # Dedicated women-in-tech initiative
│   │   ├── guides/           # Freelancing & e-commerce guides
│   │   ├── impact/           # Community milestones & stats
│   │   ├── join/             # Member onboarding
│   │   ├── members/          # Talent directory
│   │   ├── opportunities/    # Remote jobs & leads board
│   │   ├── packs/            # Starter resource packs
│   │   ├── policy/           # 25-section BDH Constitution
│   │   ├── projects/         # Portfolio & project showcases
│   │   ├── resources/        # Resource library hub
│   │   ├── roadmaps/         # Interactive Roman Urdu trackers
│   │   ├── tools/            # Curated software toolkit
│   │   ├── vendors/          # Pakistani wholesale supplier registry
│   │   ├── globals.css       # Design tokens & responsive styles
│   │   ├── layout.tsx        # Root layout, fonts & SEO metadata
│   │   ├── not-found.tsx     # Custom 404 page
│   │   ├── page.tsx          # Homepage
│   │   ├── robots.ts         # Automated robots.txt
│   │   └── sitemap.ts        # Automated sitemap.xml
│   ├── components/           # Reusable UI components
│   │   ├── home/             # Homepage sections
│   │   ├── layout/           # Header, Footer, Page Transition
│   │   ├── motion/           # MotionProvider (Lenis + GSAP)
│   │   ├── pages/            # Tracker, Explorers, HandoffForm
│   │   └── ui/               # Buttons, Video, Photos, Accordion
│   ├── data/                 # Structured content, constitution, roadmaps
│   └── lib/                  # SEO helpers, animations, transitions
├── eslint.config.mjs         # ESLint configuration
├── next.config.ts            # Next.js build & caching configuration
├── package.json              # Project dependencies & scripts
├── README.md                 # Project documentation
└── tsconfig.json             # TypeScript compiler settings
```

---

## 🌐 Community & Contact

- **Founder:** Ali Qureshi
- **Address:** Asmatullah Plaza, 2nd Floor, Railway Road, Bannu City, Khyber Pakhtunkhwa 28100, Pakistan
- **Phone:** `+92 335 9915641`
- **Email:** [support@bannudigitalhub.com](mailto:support@bannudigitalhub.com)
- **Official Website:** [https://www.bannudigitalhub.com/](https://www.bannudigitalhub.com/)

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).
Feel free to use the code to empower local tech communities across Pakistan and beyond.
