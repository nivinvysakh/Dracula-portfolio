# Nivin | Portfolio & Developer README 🚀

[![Astro CI Build & Check](https://github.com/nivinvysakh/Dracula-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/nivinvysakh/Dracula-portfolio/actions/workflows/ci.yml)
![Docker](https://img.shields.io/badge/Docker-Multi--stage-2496ED?logo=docker&logoColor=white)
![NGINX](https://img.shields.io/badge/NGINX-Alpine-009639?logo=nginx&logoColor=white)
![Astro](https://img.shields.io/badge/Astro-v4.16-BC52EE?logo=astro&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-v3.4-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

A minimalist, retro Dracula-themed developer portfolio built with **Astro 4**, **Tailwind CSS v3**, **TypeScript**, and enterprise **DevOps Docker Containerization**.

---

## ✨ Features

- 🎨 **Dracula Theme Palette**: Premium dark mode styling using curated Dracula color tokens (`#282a36`, `#44475a`, `#f8f8f2`, `#bd93f9`, `#ff79c6`, `#8be9fd`, `#50fa7b`).
- ⚡ **Lightning Fast (Astro 4)**: Near-zero JS runtime footprint, static SSR generation, optimized images, and high performance scores.
- 🎵 **Live Discord & Spotify Integration (Lanyard WebSocket)**: Real-time status updates (Online/Idle/DND/Offline), custom status messages, live Spotify playback details, and active game rich presence.
- 📊 **GitHub Contribution Graph**: Dynamic wave graph rendering recent GitHub contribution activity via live API sync with graceful fallbacks.
- 🐳 **Production Containerization**: Multi-stage `dockerfile` (`node:20-alpine` builder $\rightarrow$ `nginx:alpine` runtime) with NGINX 404 error page routing.
- 🤖 **CI/CD Automation**: GitHub Actions pipeline for automated type checking, build audits, and Dependabot package updates.

---

## 🐳 Docker Setup

You can run the portfolio inside Docker containers for both **development** and **production**:

### 1. Development Container (with Hot Reload)
Run the Astro dev server inside Node 20 Docker container:

```bash
docker compose up -d dracula-portfolio-dev
```
- **Access**: [http://localhost:4321](http://localhost:4321)

### 2. Production Container (NGINX Alpine)
Build & run the optimized production container with custom NGINX 404 page routing:

```bash
docker compose up -d --build dracula-portfolio-prod
```
- **Access**: [http://localhost:8080](http://localhost:8080)
- **Test 404 Page**: [http://localhost:8080/invalid-route](http://localhost:8080/invalid-route) (renders custom floating sad anime 404 page).

### 3. Stop Containers
```bash
docker compose down
```

---

## 🛠️ Local Development (Without Docker)

### Prerequisites

- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher)

### 1. Clone the repository

```bash
git clone https://github.com/nivinvysakh/Dracula-portfolio.git
cd Dracula-portfolio
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

---

## 📦 Scripts

- `npm run dev`: Launches the Astro development server locally.
- `npm run build`: Compiles the static production site to `./dist`.
- `npm run preview`: Previews the build output locally.
- `npm run astro check`: Runs type checking and Astro diagnostic audit.
- `docker compose up -d --build dracula-portfolio-prod`: Builds and launches NGINX production container on `http://localhost:8080`.

---

## 📄 License

Distributed under the MIT License. Feel free to fork, customize, and build your own portfolio!
