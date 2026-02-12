🦶 2Care Foot Health Website

A modern, production-ready website for 2Care Foot Health, built with Next.js and TypeScript. The site provides professional service information, booking access, and SEO-optimized content for clients in Aberdeen & Aberdeenshire.

👉 Live Site:www.2carefoothealth.info

✨ Features

Responsive modern UI (mobile-first)

Hybrid Next.js architecture (App Router + Pages Router)

TypeScript for maintainability

SEO optimization (metadata, sitemap, robots.txt)

Security headers (CSP & best practices)

Optimized images with Next.js <Image />

Embedded video support

Cookie consent system

Fast performance and accessibility optimization

🛠 Tech Stack

Next.js

React

TypeScript

Tailwind CSS

Framer Motion

Lucide Icons

📸 Screenshots

Home Page

Services Page

Mobile View

📁 Project Structure
app/ # Global layout & SEO configuration
layout.tsx
sitemap.ts
robots.ts
favicon.ico

pages/ # Route pages
index.tsx
about.tsx
services.tsx
privacy.tsx

components/ # Reusable UI components
Header.tsx
Footer.tsx
CookieConsent.tsx

public/ # Static assets
images/
videos/
screenshots/

styles/ # Global styling

⚙️ Installation

Clone the repository:

git clone https://github.com/bobprince4u/2care-foothealth.git

Install dependencies:

npm install

Run development server:

npm run dev

Open in browser:

http://localhost:3001

🚀 Deployment (Vercel – Step by Step)

Push your project to GitHub

Go to https://vercel.com

Click New Project

Import your GitHub repository

Keep default settings

Click Deploy

After deployment:

Connect your custom domain

Enable HTTPS

Submit sitemap to Google Search Console

🔐 Security & SEO

This project includes:

Security

Content Security Policy (CSP)

HTTP security headers

XSS and clickjacking protection

SEO

Sitemap generation (/sitemap.xml)

Robots.txt configuration

Structured metadata

Google indexing ready

Optimized images for performance

⚡ Performance Notes

Uses Next.js image optimization

Lazy loading for media assets

Tailwind CSS for efficient styling

Optimized bundle size

Fast page hydration

Run Lighthouse audits to verify:

Chrome DevTools → Lighthouse

🤝 Contribution Guidelines

This project is primarily maintained for business use. However, contributions are welcome.

If contributing:

Fork the repository

Create a new branch:

git checkout -b feature-name

Commit changes:

git commit -m "Add feature"

Push branch:

git push origin feature-name

Open a Pull Request

Please ensure:

Code follows TypeScript best practices

Components are reusable

No breaking UI changes

📦 Build for Production
npm run build
npm start

📄 License

This project is proprietary and developed for 2Care Foot Health.

Unauthorized commercial reuse is not permitted.

👤 Author

Princewill
Software Engineer

Portfolio: (add your portfolio link)

⭐ Acknowledgments

Built with modern web technologies to deliver a fast, secure, and professional business website experience.
