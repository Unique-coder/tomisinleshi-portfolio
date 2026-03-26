import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          light: '#FFFFFF',
          dark: '#343D4D',
        },
        ink: {
          primary: '#343D4D',
          muted: '#9CA3AF',
          cream: '#F5F0E8',
        },
        border: {
          light: '#E5E7EB',
          dark: '#4A5568',
        },
      },
      fontFamily: {
        sans: ['Tahoma', 'Geneva', 'sans-serif'],
      },
      keyframes: {
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease forwards',
      },
    },
  },
  plugins: [],
};

export default config;
