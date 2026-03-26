import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
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
    },
  },
  plugins: [],
};

export default config;
