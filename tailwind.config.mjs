/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dracula: {
          bg: '#282a36',
          bgDarker: '#1e1f29',
          card: '#21222c',
          selection: '#44475a',
          fg: '#f8f8f2',
          comment: '#6272a4',
          cyan: '#8be9fd',
          green: '#50fa7b',
          orange: '#ffb86c',
          pink: '#ff79c6',
          purple: '#bd93f9',
          red: '#ff5555',
          yellow: '#f1fa8c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'dracula-glow': '0 0 25px -5px rgba(189, 147, 249, 0.25)',
        'dracula-pink': '0 0 25px -5px rgba(255, 121, 198, 0.25)',
        'dracula-cyan': '0 0 25px -5px rgba(139, 233, 253, 0.25)',
        'dracula-green': '0 0 25px -5px rgba(80, 250, 123, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'equalizer-1': 'equalize 1.2s ease-in-out infinite alternate',
        'equalizer-2': 'equalize 0.9s ease-in-out infinite alternate',
        'equalizer-3': 'equalize 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        equalize: {
          '0%': { height: '3px' },
          '100%': { height: '16px' },
        },
      },
    },
  },
  plugins: [],
};
