import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#0b0b0d',
        ember: '#3e1f0f',
        champagne: '#caa87b',
        caramel: '#8a5b3a',
        cream: '#f7ebdc',
      },
      boxShadow: {
        glow: '0 24px 80px rgba(210, 175, 125, 0.18)',
        soft: '0 18px 40px rgba(0, 0, 0, 0.18)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top left, rgba(255, 221, 191, 0.16), transparent 35%), radial-gradient(circle at 80% 10%, rgba(205, 167, 124, 0.18), transparent 28%), linear-gradient(180deg, rgba(18, 15, 13, 0.92), rgba(13, 11, 10, 0.98))',
        'glass-radial': 'radial-gradient(circle at top right, rgba(255, 255, 255, 0.14), transparent 28%)',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
