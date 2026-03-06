# Keshav Mohta — Portfolio

A modern, responsive developer portfolio built with React, TailwindCSS, and Framer Motion.

## Tech Stack

- **React** — Component-based UI
- **Vite** — Fast build tooling
- **TailwindCSS v4** — Utility-first styling
- **Framer Motion** — Smooth animations
- **React Intersection Observer** — Scroll-triggered effects

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build
```

## Deployment

This project is configured for **GitHub Pages** via GitHub Actions. Every push to `main` triggers an automatic build and deploy.

To set up:

1. Push to a GitHub repository
2. Go to **Settings → Pages → Source** and select **GitHub Actions**
3. Your site will be live after the first workflow run

## Project Structure

```
src/
├── components/       # React components (Navbar, Hero, About, Skills, etc.)
├── data/
│   └── resumeData.js # All portfolio content in one place
├── App.jsx           # Main app layout
├── main.jsx          # Entry point
└── index.css         # Design system & global styles
public/
├── resume/           # Resume PDF
└── favicon.svg       # Site favicon
```

## License

MIT
