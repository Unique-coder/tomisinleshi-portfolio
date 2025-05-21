# Personal Website

A modern, responsive personal website built with Next.js 14, TypeScript, and TailwindCSS. Features a clean, minimal design with dark mode support.

## Features

- 🌙 Dark mode with system preference sync
- 📱 Fully responsive design
- 🎨 Clean, minimal tech founder aesthetic
- ⚡️ Built with Next.js 14 App Router
- 🔍 SEO optimized
- 📊 Analytics with Vercel Analytics
- 📝 Contact form with Formspree integration
- 🎯 Performance monitoring with Vercel Speed Insights

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [TailwindCSS](https://tailwindcss.com/) - Styling
- [next-themes](https://github.com/pacocoursey/next-themes) - Dark mode
- [Vercel Analytics](https://vercel.com/analytics) - Analytics
- [Formspree](https://formspree.io/) - Form handling

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/personal-website.git
   cd personal-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:
   ```env
   FORMSPREE_ENDPOINT=your_formspree_endpoint
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This website is optimized for deployment on Vercel. Simply push to your GitHub repository and import the project on Vercel for automatic deployments.

## Customization

1. Update your personal information in `src/app/page.tsx`
2. Modify the highlights in `src/app/highlights/page.tsx`
3. Update contact information in `src/app/contact/page.tsx`
4. Replace social links in `src/components/Header.tsx`
5. Add your profile image as `public/profile.jpg`

## License

MIT License - feel free to use this for your own personal website!
