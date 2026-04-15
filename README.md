# Brian Philip Portfolio

Premium dark-themed personal portfolio built with React, Vite, Tailwind CSS, Framer Motion, and React Icons.

## Features

- Single-page responsive portfolio with smooth-scroll navigation
- Animated hero with typing text and social links
- Skills, projects, education, experience, hobbies, and contact sections
- Loader, sticky navbar, active section highlighting, and scroll-to-top button
- Contact form supports EmailJS or Formspree via environment variables

## Setup

1. Install dependencies
2. Run development server

```bash
npm install
npm run dev
```

## Contact Form Configuration

Add a `.env` file and configure one of the following:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Or Formspree fallback:

```bash
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

If neither is configured, the form falls back to opening the default email client.

## Deployment

> **Important:** This portfolio is configured to deploy to a subfolder (`/Me/`). The `vite.config.ts` includes `base: '/Me/'`. If deploying to root, remove or update this setting.

### Subfolder Deployment (GitHub Pages /me)
```bash
npm run build
# Upload the dist folder to your /me repository
```

### Root Deployment (Vercel / Netlify / Render)
Edit `vite.config.ts` and change:
```typescript
base: '/', // instead of '/Me/'
```
Then deploy normally.

- **Vercel:** Import repo and deploy with default Vite settings
- **Netlify:** Build command `npm run build`, publish directory `dist`
- **Render:** Static site with build command `npm run build`, publish `dist`
