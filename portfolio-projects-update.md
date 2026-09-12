# Portfolio Projects Section Update

Update the **Projects section** of my portfolio website.

I have built projects using different technology combinations, including:

- Laravel
- Next.js
- Next.js + Laravel
- React.js
- React.js + Python
- Python
- AI / Machine Learning
- Next.js + TypeScript
- MERN Stack
- MySQL
- PostgreSQL
- REST APIs
- Other full-stack combinations

Do **not** categorize projects mainly by programming language or framework because one project may use several technologies.

---

## Project Filters

Use these project filter categories:

- All
- Freelance
- Full Stack
- AI / Smart Apps
- Web Apps

A project can belong to multiple categories.

Keep the filter system scalable so I can add more categories later if needed.

---

# Current Projects to Show

For now, prioritize these projects in the portfolio:

1. POS System
2. Course Management System
3. Opening Invitation System
4. AI Task & Expense Manager
5. Birthday Wish App

I will provide screenshots/images for these projects to display on the project cards.

I also have demo videos for these projects.

---

## 1. POS System

### Categories

- Freelance
- Full Stack
- Web Apps

### Technologies

- Laravel
- PHP
- MySQL
- JavaScript

### Description

A complete Point of Sale system designed for retail businesses with inventory management, sales processing, product management, reporting, and business operations.

### Image

Use:

`/images/projects/pos-system.png`

### Demo Video

Use:

`/videos/pos-system.mp4`

### Case Study

`/projects/pos-system`

---

## 2. Course Management System

### Categories

- Freelance
- Full Stack
- Web Apps

### Technologies

- Laravel
- PHP
- MySQL
- JavaScript

### Description

A complete course management platform designed to manage students, instructors, courses, payments, commissions, learning activities, and administrative operations.

### Image

Use:

`/images/projects/course-management.png`

### Demo Video

Use:

`/videos/course-management.mp4`

### Case Study

`/projects/course-management`

---

## 3. Opening Invitation System

### Categories

- Freelance
- Full Stack
- Web Apps

### Technologies

- Next.js
- React
- TypeScript
- Database technologies already used in the project

### Description

A personalized event invitation and guest management platform with individual invitation links, guest management, RSVP responses, attendance tracking, responsive invitation pages, and an admin dashboard.

### Image

Use:

`/images/projects/opening-invitation.png`

### Demo Video

Use:

`/videos/opening-invitation.mp4`

### Case Study

`/projects/opening-invitation`

---

## 4. AI Task & Expense Manager

### Categories

- AI / Smart Apps
- Full Stack
- Web Apps

### Technologies

- React
- Python
- REST API
- Database
- AI / Smart Features

### Description

A productivity platform combining task management and expense tracking with analytics and intelligent features.

The system currently includes task and expense management functionality.

I plan to add more smart and AI-powered features later, so the project architecture and project data must allow technologies, features, descriptions, and categories to be updated easily.

### Image

Use:

`/images/projects/task-expense-manager.png`

### Demo Video

Use:

`/videos/task-expense-manager.mp4`

### Case Study

`/projects/task-expense-manager`

---

## 5. Birthday Wish App

### Categories

- Web Apps

### Technologies

- React.js
- JavaScript
- CSS Animations

Add Tailwind CSS only if it is actually used in the existing project.

### Description

An interactive birthday greeting web application built with React.js featuring personalized wishes, animations, visual effects, and an engaging celebration experience.

### Image

Use:

`/images/projects/birthday-wish.png`

### Demo Video

Use:

`/videos/birthday-wish.mp4`

### Case Study

`/projects/birthday-wish`

---

# Project Card Design

Redesign every project card so that the **project image is the main visual element**.

Use this structure:

1. Project screenshot/image
2. Featured / Freelance / Private badges where applicable
3. Project categories
4. Project title
5. Short project description
6. Technology tags
7. Watch Demo button
8. Case Study button

The design must look:

- Modern
- Premium
- Professional
- Clean
- Suitable for a Software Engineer / Full-Stack Developer portfolio

Keep the cards fully responsive across:

- Desktop
- Laptop
- Tablet
- Mobile

---

# Project Card Images

I will provide images/screenshots for each project.

Store them inside:

`public/images/projects/`

Example structure:

```text
public/
├── images/
│   └── projects/
│       ├── pos-system.png
│       ├── course-management.png
│       ├── opening-invitation.png
│       ├── task-expense-manager.png
│       └── birthday-wish.png
│
└── videos/
    ├── pos-system.mp4
    ├── course-management.mp4
    ├── opening-invitation.mp4
    ├── task-expense-manager.mp4
    └── birthday-wish.mp4
```

Do not use my Windows file path directly in the frontend.

For example, do **not** use:

```text
D:\my projects\gihub projects\next js projects\my_portfolio_website\public\videos
```

Instead, access files from the `public` folder using paths such as:

```text
/images/projects/pos-system.png
/videos/pos-system.mp4
```

---

# Image Design Requirements

The image must be prominently shown at the top of every project card.

Use:

- A consistent aspect ratio
- Rounded corners
- `object-cover`
- Responsive sizing
- Smooth hover transitions
- Subtle image zoom on hover
- No stretching
- No distortion

The screenshot should remain easy to see.

If an image is missing, use a clean project placeholder rather than breaking the UI.

---

# Watch Demo

Display a **Watch Demo** button only when the project has a demo video.

When the user clicks **Watch Demo**:

- Do not redirect to another page
- Open the video in a premium modal/lightbox
- Darken the background
- Apply subtle backdrop blur
- Display the project title
- Show the selected project's demo video
- Use HTML5 video controls
- Allow fullscreen
- Keep the video responsive
- Add a clear close button
- Allow clicking outside the modal to close
- Allow the `Escape` key to close
- Stop the video when the modal closes
- Reset the video when the modal closes
- Ensure audio stops immediately after closing

On mobile, the modal and video must fit correctly within the screen.

---

# Case Study

Keep the **Case Study** button.

Routes should include:

```text
/projects/pos-system
/projects/course-management
/projects/opening-invitation
/projects/task-expense-manager
/projects/birthday-wish
```

Do not break the existing project routing.

---

# Reusable Project Data

Do not hard-code a separate UI component for every project.

Create one reusable project data array/object and render cards from it.

Use a structure similar to:

```ts
{
  id: "pos-system",
  title: "POS System",
  description:
    "A complete Point of Sale system designed for retail businesses with inventory management, sales processing and reporting.",
  image: "/images/projects/pos-system.png",
  demoVideo: "/videos/pos-system.mp4",
  categories: ["Freelance", "Full Stack", "Web Apps"],
  technologies: ["Laravel", "PHP", "MySQL", "JavaScript"],
  featured: true,
  private: true,
  freelance: true,
  caseStudyUrl: "/projects/pos-system"
}
```

For the Birthday Wish App:

```ts
{
  id: "birthday-wish",
  title: "Birthday Wish App",
  description:
    "An interactive birthday greeting application built with React.js featuring personalized wishes, animations and visual effects.",
  image: "/images/projects/birthday-wish.png",
  demoVideo: "/videos/birthday-wish.mp4",
  categories: ["Web Apps"],
  technologies: ["React.js", "JavaScript", "CSS Animations"],
  featured: false,
  private: true,
  freelance: false,
  caseStudyUrl: "/projects/birthday-wish"
}
```

If a future project does not have a video, use:

```ts
demoVideo: null
```

The UI must automatically hide the Watch Demo button when `demoVideo` is null.

---

# Scalability

Keep the project structure flexible because later I will add projects developed using:

- MERN Stack
- Next.js + Laravel
- React + Python
- Python
- AI / ML
- Mobile Development
- Data Analytics
- Research
- Django
- Flutter
- Other technologies

Do not redesign the filtering system every time a new technology is introduced.

Technologies should mainly appear as **tags**, while project filters should describe the **type of project**.

---

# Project Section Heading

Use:

## Projects

For the description below the heading, change the existing sentence to:

> A selection of freelance solutions, full-stack applications, AI-powered systems, and software products I have designed and developed.

---

# Important Requirements

- Only update the Projects section and components directly related to it.
- Do not unnecessarily redesign other portfolio sections.
- Maintain the existing portfolio theme.
- Maintain the current typography.
- Maintain the existing color palette.
- Maintain existing animations where appropriate.
- Keep the layout professional and uncluttered.
- Make the project cards responsive.
- Use reusable components.
- Keep project data easy to edit.
- Images should be visible first.
- Demo videos should open inside a modal.
- Do not expose local Windows paths in frontend code.
- Keep the implementation scalable for future projects.
