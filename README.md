# Portfolio

A personal portfolio built with React + Vite. Dark theme, cyan accent, Sora/Inter/JetBrains Mono type system.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Project structure

```
src/
  data/content.js     <- ALL your text content lives here (name, bio, skills, projects, experience, links)
  components/          <- one component + one CSS file per section
  App.jsx               <- wires sections together
  index.css             <- design tokens (colors, fonts, spacing) + global styles
```

## To make it yours

1. Edit `src/data/content.js` with your real info.
2. Drop your photo in `public/` and set `about.photoUrl` in content.js.
3. Drop your resume PDF in `public/` and update `profile.resumeUrl`.
4. Add project screenshots to `public/` and set each project's `image` field.
5. Set up EmailJS (see `src/components/Contact.jsx` comments) for the contact form to actually send email.

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Deploy that folder to Vercel, Netlify, or GitHub Pages.

See `PHASES.md` for a step-by-step build/customization roadmap.
