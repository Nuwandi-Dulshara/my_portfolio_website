# Nuwandi Dulshara — Portfolio

A premium, dark-navy + light-blue portfolio built with **React + Vite + Tailwind CSS v4 + Motion**.

## Tech Stack

| Purpose | Technology |
|---|---|
| Frontend | React 18 |
| Build Tool | Vite |
| Styling | Tailwind CSS v4 |
| Animation | Motion |
| Icons | Lucide React |
| Routing | React Router v6 |
| Forms | Netlify Forms |
| Hosting | Netlify |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/     # Navbar, Footer
│   ├── ui/         # GlassCard, GlowButton, SearchBar, TechBadge, SectionTitle
│   └── projects/   # ProjectCard, ProjectGrid, VideoModal
├── sections/       # Hero, About, Projects, Skills, AIJourney, Experience, Contact
├── pages/          # Home, ProjectDetails
├── data/           # projects.js, skills.js, experience.js, socials.js
├── hooks/          # useMousePosition, useScrollPosition
└── utils/          # helpers.js
```

## Customise

### Add your real data
1. **Projects** → `src/data/projects.js`
2. **Experience** → `src/data/experience.js` (update company names and periods)
3. **Skills** → `src/data/skills.js`
4. **Socials** → `src/data/socials.js` (update GitHub/LinkedIn/email links)

### Add your images
- Place `.webp` thumbnails in `public/images/projects/`
- Add OG image at `public/images/og-image.webp`
- See `public/images/projects/README.md` for required filenames

### Add your videos
**Option 1 — Google Drive:**
1. Upload to Google Drive → Share as "Anyone with link"
2. Copy `FILE_ID` from the share URL
3. Set `video: "https://drive.google.com/file/d/FILE_ID/preview"` and `videoType: "gdrive"` in `projects.js`

**Option 2 — Local MP4:**
- Place compressed `.mp4` files in `public/videos/`
- Set `video: "/videos/your-video.mp4"` and `videoType: "mp4"` in `projects.js`

### Add your resume
- Place PDF at `public/resume/nuwandi-dulshara-resume.pdf`

## Deployment — Netlify

1. Push to GitHub
2. Connect repo on Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. The `public/_redirects` file handles React Router routing automatically

## Design

- Background: `#020617` (dark navy)
- Primary: `#2563EB` (blue)
- Accent: `#38BDF8` (light blue / sky)
- Text: `#F8FAFC`
- Glassmorphism cards with `backdrop-filter: blur(20px)`
- Fonts: Space Grotesk (headings) + Inter (body)
