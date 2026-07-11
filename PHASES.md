# Build Roadmap — Portfolio Project

The scaffold in this repo already covers Phases 0–3 (structure, design system, all
sections wired up with placeholder content). Use the phases below as a checklist —
hand each one to an AI coding assistant (Claude Code, Cursor, etc.) one at a time,
in your project folder, so it stays focused and easy to review.

---

### Phase 0 — Environment Setup ✅ (done in this scaffold)
- Vite + React project structure
- Design tokens (colors, fonts) in `src/index.css`
- Folder structure: `components/`, `data/`

**Your step:** run `npm install` then `npm run dev` to confirm it boots.

---

### Phase 1 — Content Pass
Replace every placeholder in `src/data/content.js`:
- `profile` — name, role, tagline, location, email, social links
- `about` — real bio, photo path
- `skills` — your real stack, grouped sensibly
- `projects` — 3–6 real projects with descriptions, tech, links
- `experience` — real jobs/education with dates

**Prompt to give an AI assistant:**
> "Here's my resume/LinkedIn content: [paste]. Update src/data/content.js to use this instead of the placeholders. Keep the same data shape."

---

### Phase 2 — Assets
- Add your profile photo to `public/` (e.g. `public/profile.jpg`), then set `about.photoUrl` in content.js
- Add your resume PDF to `public/` (e.g. `public/resume.pdf`), then set `profile.resumeUrl`
- Add project screenshots to `public/projects/`, set each project's `image` field

---

### Phase 3 — EmailJS (Contact Form)
1. Create a free account at emailjs.com
2. Add an Email Service (Gmail is easiest) → copy the **Service ID**
3. Create an Email Template with fields `user_name`, `user_email`, `message` → copy the **Template ID**
4. Copy your **Public Key** from Account → General
5. Paste all three into `src/components/Contact.jsx` (top of the file, clearly marked)

**Prompt to give an AI assistant:**
> "I have these EmailJS keys: Service=___, Template=___, Public=___. Wire them into Contact.jsx."

---

### Phase 4 — Visual Polish
- Review spacing/type at mobile, tablet, and desktop widths
- Add scroll-reveal animations to sections (e.g. IntersectionObserver + a `.reveal` CSS class) if you want more motion — keep it subtle, one clear entrance per section
- Swap the accent color in `src/index.css` (`--accent`, `--accent-blue`) if you want to try variants
- Double check focus states are visible when tabbing through the site (already scaffolded, but re-check after content changes)

**Prompt to give an AI assistant:**
> "Add subtle scroll-reveal fade-up animations to each section as it enters the viewport, respecting prefers-reduced-motion."

---

### Phase 5 — SEO & Meta
- Update `<title>` and meta description in `index.html`
- Add Open Graph tags (`og:title`, `og:image`, `og:description`) for link previews
- Generate a proper favicon (replace `public/favicon.svg`)
- Add a `sitemap.xml` / `robots.txt` if you care about search indexing

---

### Phase 6 — Deploy
1. Push the repo to GitHub
2. Go to vercel.com → New Project → import the repo
3. Vercel auto-detects Vite (`npm run build`, output `dist/`) — just deploy
4. (Optional) connect a custom domain in Vercel's project settings

**Prompt to give an AI assistant:**
> "Walk me through connecting my GitHub repo to Vercel and setting a custom domain."

---

### Phase 7 — Post-launch (optional)
- Add a lightweight analytics snippet (e.g. Plausible or Vercel Analytics) to see visitor traffic
- Add a blog/writing section if you want to publish posts later
- Periodically refresh `projects` in content.js as you ship new things

---

## Quick reference: where things live

| Want to change...        | Edit this file                          |
|---------------------------|------------------------------------------|
| Any text content           | `src/data/content.js`                    |
| Colors / fonts / spacing   | `src/index.css`                          |
| Hero section layout        | `src/components/Hero.jsx` / `.css`       |
| Contact form logic         | `src/components/Contact.jsx`             |
| Nav links                  | `src/components/Navbar.jsx`              |
