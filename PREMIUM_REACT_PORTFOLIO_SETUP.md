# Premium React Portfolio — Complete Setup Guide

This guide will help you create a **premium, lightweight, dark blue + light blue portfolio** using React and free tools.

The portfolio is designed for:

- Full-Stack Software Engineering
- AI Engineering
- Machine Learning
- Data Science
- Data Analytics
- Data Engineering
- Project videos
- Public and private GitHub projects
- Netlify hosting

---

# 1. Technology Stack

Use this stack because it is lightweight, modern, free, and easy to deploy.

| Purpose | Technology |
|---|---|
| Frontend | React |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Animation | Motion |
| Icons | Lucide React |
| Routing | React Router |
| Forms | Netlify Forms |
| Hosting | Netlify |
| Version Control | Git + GitHub |
| Fonts | Google Fonts |
| Project Data | Local JavaScript / JSON |
| Video | Optimized MP4 / external video hosting |
| Code Formatting | Prettier |
| Code Quality | ESLint |

Do **not** add Three.js initially. The premium glass / futuristic look can be created with CSS, gradients, blur, transitions and Motion while keeping the website fast.

---

# 2. Design Direction

The portfolio should use a premium dark futuristic design.

## Main Colors

```text
Main background:      #020617
Secondary background: #06111F
Card background:      rgba(8, 25, 45, 0.65)

Primary blue:         #2563EB
Light blue:           #38BDF8
Bright cyan:          #7DD3FC

Primary text:         #F8FAFC
Secondary text:       #94A3B8

Border:               rgba(56, 189, 248, 0.18)
```

## Visual Style

Use:

- Dark navy background
- Light blue glow
- Glassmorphism
- Transparent cards
- Thin blue borders
- Subtle shadows
- Soft gradients
- Mouse-follow light effects
- Smooth card hover
- Minimal animation
- Clean typography
- Large headings
- Plenty of spacing

Avoid:

- Too many animations
- Large background videos
- Heavy WebGL
- Excessive glowing
- Large image files
- Autoplay project videos

---

# 3. Install Development Environment

If your computer is not prepared yet, install these first.

## 3.1 Install Node.js

Download and install the **LTS version** of Node.js.

After installation, open **PowerShell** or **Command Prompt**.

Check Node:

```powershell
node --version
```

Check npm:

```powershell
npm --version
```

You should see version numbers.

Example:

```text
v24.x.x
11.x.x
```

If the commands are not recognized, restart your terminal or restart Windows.

---

# 4. Install Git

Install Git for Windows.

After installation:

```powershell
git --version
```

Example:

```text
git version 2.x.x
```

---

# 5. Install VS Code

Install Visual Studio Code.

Recommended free extensions:

```text
ES7+ React/Redux/React-Native Snippets
Prettier - Code formatter
Tailwind CSS IntelliSense
GitLens
Error Lens
Material Icon Theme
```

Do not install too many extensions because they can make VS Code slower.

---

# 6. Create Your Project Folder

Choose the location where you keep your projects.

Example:

```powershell
cd "D:\my projects\github projects"
```

Create the React project:

```powershell
npm create vite@latest naweed-portfolio -- --template react
```

Move inside it:

```powershell
cd naweed-portfolio
```

Install the default dependencies:

```powershell
npm install
```

Run the project:

```powershell
npm run dev
```

Vite will display a local URL similar to:

```text
http://localhost:5173
```

Open it in your browser.

---

# 7. Open Project in VS Code

Inside the project folder:

```powershell
code .
```

If `code .` is not recognized, open VS Code manually and choose:

```text
File
→ Open Folder
→ naweed-portfolio
```

---

# 8. Install Required Packages

Install React Router:

```powershell
npm install react-router-dom
```

Install Motion:

```powershell
npm install motion
```

Install Lucide icons:

```powershell
npm install lucide-react
```

Install React Helmet for SEO:

```powershell
npm install react-helmet-async
```

---

# 9. Install Tailwind CSS

Install Tailwind and its Vite integration:

```powershell
npm install tailwindcss @tailwindcss/vite
```

---

# 10. Configure Tailwind

Open:

```text
vite.config.js
```

Replace it with:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

---

# 11. Configure Global CSS

Open:

```text
src/index.css
```

Remove the existing Vite styles.

Add:

```css
@import "tailwindcss";

:root {
  font-family: Inter, system-ui, sans-serif;
  color: #f8fafc;
  background: #020617;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;

  background:
    radial-gradient(
      circle at 20% 15%,
      rgba(37, 99, 235, 0.17),
      transparent 30%
    ),
    radial-gradient(
      circle at 80% 25%,
      rgba(56, 189, 248, 0.10),
      transparent 26%
    ),
    #020617;

  color: #f8fafc;
}

* {
  box-sizing: border-box;
}

::selection {
  background: #38bdf8;
  color: #020617;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea {
  font: inherit;
}
```

---

# 12. Remove Default Vite Content

Open:

```text
src/App.jsx
```

Replace it temporarily with:

```jsx
function App() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-sky-400 tracking-[0.3em] uppercase text-sm">
          Portfolio
        </p>

        <h1 className="mt-4 text-5xl md:text-7xl font-bold">
          Naweed Ahamed
        </h1>

        <p className="mt-5 text-slate-400 text-lg">
          Full-Stack Software Engineer
        </p>
      </div>
    </main>
  );
}

export default App;
```

Run:

```powershell
npm run dev
```

You should now see your first dark portfolio screen.

---

# 13. Recommended Folder Structure

Create this structure:

```text
naweed-portfolio/
│
├── public/
│   ├── images/
│   │   ├── profile/
│   │   ├── projects/
│   │   └── backgrounds/
│   │
│   ├── videos/
│   ├── resume/
│   └── favicon/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── ui/
│   │   │   ├── GlassCard.jsx
│   │   │   ├── GlowButton.jsx
│   │   │   ├── SectionTitle.jsx
│   │   │   ├── TechBadge.jsx
│   │   │   └── SearchBar.jsx
│   │   │
│   │   └── projects/
│   │       ├── ProjectCard.jsx
│   │       ├── ProjectGrid.jsx
│   │       └── VideoModal.jsx
│   │
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── AIJourney.jsx
│   │   └── Contact.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── ProjectDetails.jsx
│   │
│   ├── data/
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── experience.js
│   │   └── socials.js
│   │
│   ├── hooks/
│   │   ├── useMousePosition.js
│   │   └── useScrollPosition.js
│   │
│   ├── utils/
│   │   └── helpers.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

# 14. Website Sections

Build the portfolio in this order.

```text
01 Navbar
02 Hero
03 About
04 Featured Projects
05 All Projects + Search
06 Engineering Skills
07 AI / ML / Data Journey
08 Experience
09 Education
10 Contact
11 Footer
```

---

# 15. Hero Section

The hero should feel like a premium engineering dashboard.

Example content:

```text
NAWEED AHAMED

FULL-STACK SOFTWARE ENGINEER

Building intelligent,
data-driven digital products.

React • Python • Django • Node.js • AI • ML • Data
```

Buttons:

```text
Explore My Work
Download CV
```

Social links:

```text
GitHub
LinkedIn
Email
```

---

# 16. Floating Glass Profile Card

Create a profile card inspired by futuristic transparent UI.

Example:

```text
NAWEED.DEV

Naweed Ahamed
Full-Stack Software Engineer

Software Engineering
AI / ML
Data Systems

Sri Lanka

GitHub
LinkedIn
Email
```

Use:

```css
background: rgba(8, 25, 45, 0.55);
border: 1px solid rgba(56, 189, 248, 0.18);
backdrop-filter: blur(20px);
```

Add:

```css
box-shadow:
  0 20px 70px rgba(0, 0, 0, 0.35),
  inset 0 1px 0 rgba(255, 255, 255, 0.08);
```

Use subtle card tilt only on desktop.

---

# 17. About Section

Suggested text:

```text
I am a Full-Stack Software Engineer focused on building practical,
scalable and user-focused digital products.

My experience spans frontend development, backend systems, databases,
REST APIs and complete application development.

I am currently expanding deeper into Artificial Intelligence,
Machine Learning, Data Science and Data Engineering, with a strong
interest in building intelligent, data-driven systems that solve
real-world problems.
```

---

# 18. Project Categories

Use filtering buttons:

```text
All
Full Stack
AI / ML
Data
Mobile
Research
Web
```

---

# 19. Project Search

Create a glass search bar inspired by futuristic liquid UI.

Placeholder:

```text
Search projects, technologies or skills...
```

Visitors should be able to search:

```text
React
Python
AI
CNN
Django
MySQL
Data
Flutter
Node
```

Projects should filter immediately.

---

# 20. Store Projects as Data

Do not hard-code every project card.

Create:

```text
src/data/projects.js
```

Example:

```javascript
export const projects = [
  {
    id: "mycotrack",
    title: "MycoTrack",
    shortDescription:
      "AI-powered fungal skin disease detection and analysis platform.",

    categories: ["AI / ML", "Mobile", "Full Stack"],

    technologies: [
      "Flutter",
      "Node.js",
      "Express",
      "MySQL",
      "Python",
      "CNN",
      "Grad-CAM",
    ],

    thumbnail: "/images/projects/mycotrack.webp",

    video: "/videos/mycotrack-demo.mp4",

    github: null,

    liveDemo: null,

    privateRepository: true,

    featured: true,
  },

  {
    id: "ayurgenix-ai",
    title: "AyurGenix AI",
    shortDescription:
      "AI-powered Ayurvedic health assessment and recommendation system.",

    categories: ["AI / ML", "Data", "Full Stack"],

    technologies: [
      "Python",
      "Streamlit",
      "Scikit-learn",
      "Pandas",
      "PostgreSQL",
    ],

    thumbnail: "/images/projects/ayurgenix.webp",

    video: null,

    github: "YOUR_GITHUB_LINK",

    liveDemo: null,

    privateRepository: false,

    featured: true,
  },
];
```

---

# 21. Projects With Private GitHub Repositories

Never expose private source code.

Set:

```javascript
github: null,
privateRepository: true,
```

Display:

```text
Private Repository
Source code cannot be publicly shared.
```

Instead show:

```text
Watch Demo
View Case Study
Technologies
Architecture
My Contribution
Features
Challenges
Results
```

This still gives recruiters strong evidence of your work.

---

# 22. Projects Without Videos

Not every project needs everything.

A project can have:

```text
GitHub only
```

or:

```text
Demo Video only
```

or:

```text
Live Demo + GitHub
```

or:

```text
Private Repository + Video + Case Study
```

Your React components should only display buttons that exist.

---

# 23. Project Video Strategy

You have many project videos, so performance is important.

Do **not** automatically load all videos.

Project cards should initially show a lightweight image:

```text
project-thumbnail.webp
```

Only load the actual video after:

```text
Watch Demo
```

is clicked.

---

# 24. Optimize Videos

Do not upload huge raw recordings.

Recommended portfolio video:

```text
Length:     30–90 seconds
Resolution: 720p or 1080p
Format:     MP4
Codec:      H.264
```

Try to keep most project videos around:

```text
5 MB – 20 MB
```

instead of:

```text
100 MB – 500 MB
```

---

# 25. Free Video Optimization Tool

Use **HandBrake**.

Recommended settings:

```text
Preset:
Fast 1080p30

Format:
MP4

Video:
H.264

Framerate:
30 FPS
```

For very large recordings you can use:

```text
Fast 720p30
```

---

# 26. Images

Use:

```text
.webp
```

whenever possible.

Recommended project thumbnail size:

```text
1200 × 675
```

Keep most thumbnails below:

```text
300 KB
```

---

# 27. Skills Section

Do not use fake percentages such as:

```text
React 95%
Python 90%
```

Instead group technologies.

## Frontend

```text
React
Next.js
JavaScript
TypeScript
Tailwind CSS
HTML
CSS
```

## Backend

```text
Python
Django
Node.js
Express
REST APIs
```

## Databases

```text
MySQL
PostgreSQL
SQLite
Supabase
```

## AI / ML

```text
Python
Pandas
NumPy
Scikit-learn
CNN
Computer Vision
Grad-CAM
```

## Data

```text
Pandas
SQL
Data Cleaning
EDA
Data Visualization
```

## Tools

```text
Git
GitHub
Postman
VS Code
Netlify
Figma
```

Only display technologies you genuinely use.

---

# 28. Technology Interaction Idea

When a user selects:

```text
Python
```

show:

```text
Used in

MycoTrack
AyurGenix AI
Expense Tracker
ML Experiments
Data Analysis Projects
```

This makes the skills section interactive and useful.

---

# 29. Career Positioning

Use this as your main professional title:

```text
Full-Stack Software Engineer
```

Recommended secondary sentence:

```text
Building intelligent, data-driven digital systems.
```

Then:

```text
Current Focus

Artificial Intelligence
Machine Learning
Data Science
Data Engineering
Data Analytics
```

This communicates your career direction without claiming experience you have not yet gained.

---

# 30. AI / ML / Data Journey Section

Create a dedicated section:

```text
THE NEXT LAYER

From Software Engineering
to Intelligent Systems.

Current Focus

AI Engineering
Machine Learning
Deep Learning
Computer Vision
Explainable AI
Data Analysis
Data Science
Data Engineering
Model Deployment
```

Add your relevant projects under it.

---

# 31. Experience Timeline

Use a vertical timeline instead of basic cards.

Example:

```text
2026
 │
 ● Full-Stack Software Projects
 │
 ● Python Developer Internship
 │
 ● Software Engineering Degree
 │
 ● Business / Sales / Operations Experience
 │
2025
```

For every role include:

```text
Role
Company
Period
Short description
Main responsibilities
Technologies / skills
```

---

# 32. Education Section

Example:

```text
BICT — Software Engineering
University of Kelaniya

Relevant areas:

Software Engineering
Database Systems
Web Development
Software Architecture
Programming
Research
```

---

# 33. Contact Section

Create something more premium than a normal contact form.

Example:

```text
LET'S BUILD SOMETHING.

Have a project, opportunity,
collaboration or idea?

Let's connect.

Email
LinkedIn
GitHub
```

You can also add a Netlify contact form.

---

# 34. Netlify Contact Form

Example:

```jsx
<form
  name="contact"
  method="POST"
  data-netlify="true"
  className="space-y-5"
>
  <input type="hidden" name="form-name" value="contact" />

  <input
    type="text"
    name="name"
    placeholder="Your name"
    required
  />

  <input
    type="email"
    name="email"
    placeholder="Your email"
    required
  />

  <textarea
    name="message"
    placeholder="Tell me about your project..."
    required
  />

  <button type="submit">
    Send Message
  </button>
</form>
```

---

# 35. Page Routing

Recommended routes:

```text
/
```

Home.

```text
/projects
```

All projects.

```text
/projects/:id
```

Individual case study.

Example:

```text
/projects/mycotrack
/projects/ayurgenix-ai
/projects/wedding-platform
```

---

# 36. Individual Project Case Study

Each important project should contain:

```text
Project Name
Short Description

Demo Video

Problem
Solution
My Role
Technologies
Architecture
Features
Challenges
Implementation
Results
Screenshots
Lessons Learned

GitHub
Live Demo
```

For private repositories:

```text
Private Repository
```

instead of showing GitHub.

---

# 37. Animation Rules

Use Motion for:

```text
Fade-in
Slide-up
Card reveal
Modal animation
Page transitions
Project filtering
```

Use CSS for:

```text
Glow
Gradient
Card hover
Glass effect
Button hover
Border effect
```

Do not animate everything.

---

# 38. Premium Button Style

Example:

```jsx
<button
  className="
    rounded-full
    border border-sky-400/30
    bg-sky-400/10
    px-6 py-3
    text-sm font-medium
    text-sky-100
    backdrop-blur-xl
    transition
    hover:border-sky-300/60
    hover:bg-sky-400/20
    hover:shadow-[0_0_35px_rgba(56,189,248,0.18)]
  "
>
  Explore My Work
</button>
```

---

# 39. Premium Glass Card

Example:

```jsx
<div
  className="
    rounded-3xl
    border border-sky-400/15
    bg-slate-950/50
    p-6
    backdrop-blur-2xl
    shadow-2xl
    transition
    hover:border-sky-400/30
  "
>
  Content
</div>
```

---

# 40. Typography

Good free choices:

```text
Inter
Manrope
Space Grotesk
Plus Jakarta Sans
```

Recommended combination:

```text
Headings:
Space Grotesk

Body:
Inter
```

Do not use more than two font families.

---

# 41. Responsive Design

Build mobile-first.

Test at:

```text
320px
375px
425px
768px
1024px
1440px
1920px
```

Desktop hero:

```text
Left:
Headline + description + CTA

Right:
Floating glass profile card
```

Mobile:

```text
Headline

Profile card

CTA

Social links
```

Disable mouse-based tilt effects on mobile.

---

# 42. Accessibility

Always include:

```text
alt text for images
keyboard navigation
visible focus states
proper heading structure
button labels
sufficient contrast
```

Do not sacrifice accessibility for visual design.

---

# 43. SEO

Set a strong title:

```text
Naweed Ahamed | Full-Stack Software Engineer
```

Description:

```text
Portfolio of Naweed Ahamed, a Full-Stack Software Engineer building
modern web applications and exploring AI, machine learning and
data-driven systems.
```

Also add:

```text
Open Graph image
favicon
canonical URL
project metadata
```

---

# 44. Git Setup

Inside your project:

```powershell
git init
```

Check:

```powershell
git status
```

Add files:

```powershell
git add .
```

Commit:

```powershell
git commit -m "Initial portfolio setup"
```

---

# 45. Connect GitHub Repository

Create an empty GitHub repository such as:

```text
naweed-portfolio
```

Do not create another README if your local project already has one.

Then:

```powershell
git branch -M main
```

Add remote:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/naweed-portfolio.git
```

Push:

```powershell
git push -u origin main
```

---

# 46. Recommended Branches

You can use:

```text
main
development
feature/hero
feature/projects
feature/project-details
feature/skills
feature/contact
feature/responsive
feature/performance
```

Create development:

```powershell
git checkout -b development
```

Push:

```powershell
git push -u origin development
```

---

# 47. Netlify Deployment

After your GitHub repository is ready:

1. Sign in to Netlify.
2. Choose **Add new project**.
3. Choose **Import an existing project**.
4. Connect GitHub.
5. Select your portfolio repository.

Build settings:

```text
Build command:
npm run build

Publish directory:
dist
```

Deploy.

---

# 48. React Router Fix for Netlify

Single-page React applications need redirect configuration.

Create:

```text
public/_redirects
```

Add:

```text
/* /index.html 200
```

This prevents 404 errors when directly opening:

```text
/projects/mycotrack
```

---

# 49. Test Production Build Locally

Before deployment:

```powershell
npm run build
```

Then:

```powershell
npm run preview
```

Fix any errors before pushing to GitHub.

---

# 50. Development Workflow

For every new feature:

```powershell
git checkout development
```

Pull latest code:

```powershell
git pull
```

Create feature branch:

```powershell
git checkout -b feature/hero
```

Develop and test.

Then:

```powershell
git add .
```

```powershell
git commit -m "Create premium hero section"
```

Push:

```powershell
git push -u origin feature/hero
```

After verification, merge into development.

---

# 51. Performance Goals

Try to reach:

```text
Lighthouse

Performance       90+
Accessibility     95+
Best Practices    95+
SEO               95+
```

---

# 52. Performance Rules

Do:

```text
Use WebP images
Lazy-load images
Lazy-load videos
Compress videos
Use reusable components
Use local project data
Split pages with lazy imports
Use CSS for simple effects
```

Avoid:

```text
Huge PNG files
GIF backgrounds
Autoplay videos
Loading all videos immediately
Heavy 3D scenes
20 animation libraries
Large unused npm packages
```

---

# 53. Recommended Implementation Order

Do not try to build everything at once.

## Phase 1 — Environment

```text
Install Node.js
Install Git
Install VS Code
Create Vite project
Install dependencies
Configure Tailwind
Run project
```

## Phase 2 — Foundation

```text
Global colors
Typography
Navbar
Reusable GlassCard
Reusable Button
Section Container
Responsive layout
```

## Phase 3 — Hero

```text
Hero text
Profile card
CTA buttons
Social links
Blue glow
Subtle animation
```

## Phase 4 — Projects

```text
projects.js
Project cards
Categories
Search
Video modal
Private repository handling
```

## Phase 5 — Case Studies

```text
ProjectDetails page
Dynamic routing
Project architecture
Screenshots
Challenges
Results
```

## Phase 6 — Professional Sections

```text
About
Skills
AI/Data Journey
Experience
Education
Contact
```

## Phase 7 — Polish

```text
Animations
Hover states
Mobile design
Tablet design
Loading behavior
SEO
Accessibility
```

## Phase 8 — Deployment

```text
GitHub
Production build
Netlify
Domain
Final testing
```

---

# 54. First Commands to Run

If you are starting from zero, these are the important commands.

```powershell
npm create vite@latest naweed-portfolio -- --template react
```

```powershell
cd naweed-portfolio
```

```powershell
npm install
```

```powershell
npm install react-router-dom motion lucide-react react-helmet-async
```

```powershell
npm install tailwindcss @tailwindcss/vite
```

```powershell
npm run dev
```

---

# 55. Final Portfolio Identity

Your website should communicate this immediately:

```text
NAWEED AHAMED

FULL-STACK SOFTWARE ENGINEER

Building intelligent,
data-driven digital systems.

React • Python • Django • Node.js
AI • Machine Learning • Data
```

The overall visual identity should feel:

```text
Premium
Technical
Modern
Futuristic
Minimal
Fast
Professional
Engineering-focused
```

not like a generic portfolio template.

---

# 56. Final Goal

The portfolio should demonstrate not only **what technologies you know**, but also:

```text
What you built
Why you built it
How it works
What architecture you chose
What problems you solved
What your contribution was
What technologies you used
What you learned
How the application performs
```

This will make the portfolio useful for:

```text
Software Engineer roles
Full-Stack Developer roles
AI Engineer opportunities
ML Engineer opportunities
Data Analyst roles
Data Scientist roles
Data Engineer roles
Business Analyst / technical roles
Internships and graduate positions
```

---

# Next Development Step

After completing the environment setup, the first real implementation should be:

```text
01 Global design system
02 Navbar
03 Hero section
04 Floating glass profile card
05 Responsive behavior
```

Only after the hero is polished should you start the project section.
