export const SITE_CONFIG = {
  name: "nivinvysakh",
  title: "A Future DevOps & Platform Engineer",
  tagline: "Automating the world, one pipeline at a time.",
  description: "Minimalist Dracula-themed portfolio matching nivinvysakh/README.md with live Spotify playing status, Discord presence, contribution graph, and skills.",
  email: "nivinvysakh@icloud.com",

  discordId: "957196694393614367",
  avatarUrl: "https://github.com/nivinvysakh.png",

  // Firebase Realtime Database Environment Config
  firebaseConfig: {
    apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY || "AIzaSyDzEWLZuWSZYGj0g09rinWbCQ2G-DPyrzQ",
    authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN || "portfoliowebsitedata-20961.firebaseapp.com",
    databaseURL: import.meta.env.PUBLIC_FIREBASE_DATABASE_URL || "https://portfoliowebsitedata-20961-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID || "portfoliowebsitedata-20961",
    storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET || "portfoliowebsitedata-20961.firebasestorage.app",
    messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "590785459682",
    appId: import.meta.env.PUBLIC_FIREBASE_APP_ID || "1:590785459682:web:f617b15491ea36890ef5bb",
  },

  favoriteSongs: [
    { song: "Panic", artist: "EsDeeKid" },
    { song: "OH I DID", artist: "Yeat" },
    { song: "Cali Man", artist: "EsDeekid" },
    { song: "HIGHEST IN THE ROOM", artist: "Travis Scott" },
    { song: "GIRLS", artist: "The Kid LAROI" }
  ],

  readmeInfo: {
    greeting: "Hello there 👋",
    status_ico: "🍃",
    status: "Making Templates for Everyone ...",
    focus: "Infrastructure as Code & CI/CD",
    cloud: "AWS • Docker • Kubernetes",
    scripting: "Python • Bash • SQL",
    vibe: "S1000RR Enthusiast 🏍️",
    learning: "Terraform & Cloud Automation"
  },

  socials: [
    { name: "Instagram", url: "https://www.instagram.com/nivinvysakh" },
    { name: "GitHub", url: "https://github.com/nivinvysakh" },
    { name: "DevTo", url: "https://dev.to/eclipsethatscool" },
    { name: "Twitter / X", url: "https://x.com/nivinvysakh" },
    { name: "Spotify", url: "https://open.spotify.com/user/j0u77uc3cgfpkknhv10c3v32o" }
  ],

  techStack: [
    { name: "AWS", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/aws-icon.png" },
    { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
    { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes/326CE5" },
    { name: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions/2088FF" },
    { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus/00599C" },
    { name: "Terraform", icon: "https://cdn.simpleicons.org/terraform/844FBA" },
    { name: "Linux", icon: "https://cdn.simpleicons.org/linux/FCC624" },
    { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" }
  ],

  skills: [
    {
      category: "Cloud & DevOps",
      items: ["Docker", "Kubernetes", "AWS Services", "Terraform", "CI/CD Pipelines", "Linux Administration"]
    },
    {
      category: "Scripting & Backend",
      items: ["C++", "Python", "Bash Scripting", "Node.js / Express", "SQL / PostgreSQL", "REST APIs"]
    },
    {
      category: "Frontend & Tools",
      items: ["Astro.js", "Tailwind CSS", "TypeScript", "React.js", "Git & GitHub"]
    }
  ],

  projects: [
    {
      title: "Astro Tui Portfolio",
      description: "Retro TUI & CLI Developer Portfolio Template powered by Astro 5 & Tailwind CSS v4.",
      tags: ["Astro", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/nivinvysakh/astro-tui-portfolio",
      demo: "https://astro-tui-portfolio.netlify.app",
      openForCollab: true
    },
    {
      title: "Give Me Badge",
      description: "Pretty simple Discord bot to get the active developer badge",
      tags: ["Python", "Discordpy"],
      github: "https://github.com/AlexFlipnote/GiveMeBadge",
      archived: true
    },
    {
      title: "Dinosaurs",
      description: "A collection of Orpheus (Hack Club's mascot) drawings! Look at them at rawr.hackclub.com :)",
      tags: ["Images", "Markdown"],
      github: "https://github.com/hackclub/dinosaurs",
      demo: "https://draw-dino.hackclub.com",
      openForCollab: true
    },
    {
      title: "bottom_bar_with_sheet",
      description: "Flutter custom BottomBar Navigation Widget",
      tags: ["c++", "Dart", "Flutter", "CMake", "C"],
      github: "https://github.com/Frezyx/bottom_bar_with_sheet",
      openForCollab: true
    }
  ]
};
