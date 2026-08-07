# Nivin | Portfolio & Developer README 🚀

A minimalist, retro Dracula-themed developer portfolio built with **Astro 4**, **Tailwind CSS v3**, and **TypeScript**. Designed to match a GitHub `README.md` profile layout with real-time Discord presence, live Spotify activity, interactive contribution graph, and project showcase.

---

## ✨ Features

- 🎨 **Dracula Theme Palette**: Premium dark mode styling using curated Dracula color tokens (`#282a36`, `#44475a`, `#f8f8f2`, `#bd93f9`, `#ff79c6`, `#8be9fd`, `#50fa7b`).
- ⚡ **Lightning Fast (Astro 4)**: Near-zero JS runtime footprint, static SSR generation, optimized images, and high performance scores.
- 🎵 **Live Discord & Spotify Integration (Lanyard WebSocket)**: Real-time status updates (Online/Idle/DND/Offline), custom status messages, live Spotify playback details, and active game rich presence.
- 📊 **GitHub Contribution Graph**: Dynamic wave graph rendering recent GitHub contribution activity via live API sync with graceful fallbacks.
- 🛠️ **Tech Stack & Bio**: Bulleted overview of core technologies (AWS, Docker, Kubernetes, Terraform, C++, Python, Bash) with responsive badge grids.
- 📱 **Mobile Responsive Design**: Clean drawer menu, touch-friendly layouts, and fluid spacing for all mobile, tablet, and desktop screens.
- ✉️ **Contact Form & Direct Connect**: Working contact form integration with quick email copy to clipboard.

---

## 🛠️ Tech Stack

- **Framework**: [Astro.js 4](https://astro.build)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com)
- **Language**: TypeScript / JavaScript (ES6+)
- **Integrations**: [Lanyard API](https://github.com/Phipeter/lanyard) (Discord RPC WebSocket)
- **Icons**: SimpleIcons & UXWing

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher)

### 1. Clone the repository

```bash
git clone https://github.com/nivinvysakh/PortfolioWebsite.git
cd PortfolioWebsite
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser to view the site.

---

## ⚙️ Configuration & Customization

All personal details, socials, tech stack items, and projects are centralized in [`src/config.ts`](file:///Users/nivin/Desktop/Dev/PortfolioWebsite/src/config.ts):

```typescript
export const SITE_CONFIG = {
  name: "nivinvysakh",
  title: "A Future DevOps & Platform Engineer",
  tagline: "Automating the world, one pipeline at a time.",
  email: "nivinvysakh@icloud.com",
  discordId: "957196694393614367",
  avatarUrl: "https://github.com/nivinvysakh.png",
  // ...
};
```

Update `SITE_CONFIG` with your own GitHub username, Discord ID, email, and social links to personalize the entire portfolio instantly.

---

## 📦 Scripts

- `npm run dev`: Launches the Astro development server.
- `npm run build`: Compiles the static production site to `./dist`.
- `npm run preview`: Previews the build output locally.
- `npm run astro check`: Runs type checking and Astro diagnostic audit.

---

## 📄 License

Distributed under the MIT License. Feel free to fork, customize, and build your own portfolio!
