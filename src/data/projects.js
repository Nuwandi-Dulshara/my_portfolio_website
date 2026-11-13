export const PROJECT_FILTERS = [
  "All",
  "Freelance",
  "Full Stack",
  "AI / Smart Apps",
  "Web Apps",
];

export const PROJECT_CATEGORIES = [
  {
    id: "freelance",
    title: "Freelance Projects",
    badge: "Client Solutions",
    description:
      "Production-grade, bespoke client solutions delivering end-to-end business value, reliable workflows, and operational excellence.",
    projectIds: ["pos-system", "course-management", "opening-invitation"],
  },
  {
    id: "ai-smart",
    title: "AI & Smart Applications",
    badge: "Machine Learning & Full Stack",
    description:
      "Intelligent applications combining modern web architecture with machine learning capabilities for analytics and smart workflows.",
    projectIds: ["task-expense-manager"],
  },
  {
    id: "web-apps",
    title: "Web Applications",
    badge: "Interactive & Creative",
    description:
      "Engaging, high-performance web applications built with modern frontend frameworks, rich animations, and responsive design.",
    projectIds: ["personal-document-tracker", "profile-studio", "birthday-wish"],
  },
];

// Replace each *_VIDEO_FILE_ID with its individual Google Drive video file ID.
// Use /file/d/FILE_ID/preview URLs, never a folder URL. Set to null to disable a demo.
export const projects = [
  {
    id: "profile-studio",
    displayName: "Profile Studio Pro",
    categoryGroup: "web-apps",
    title: "Profile Studio Pro (dj_profilemaker)",
    shortDescription:
      "A full-stack SaaS digital identity, portfolio, and resume builder featuring a real-time split-screen editor, 10 instant visual themes, custom vanity URLs (/p/<slug>), QR business cards, visitor analytics, and one-click A4 PDF resume exports with clickable hyperlinks.",
    fullDescription:
      "Profile Studio Pro (dj_profilemaker) is a modern, full-stack digital profile and resume builder designed to help professionals, software engineers, designers, and executives craft and share their personal brand online. Instead of forcing users to choose between static PDF resume generators and complicated website builders, Profile Studio Pro provides a real-time split-screen builder, 10 instant visual themes, custom vanity URLs (/p/<slug>), QR code business cards, visitor analytics, and one-click A4 PDF resume exports with clickable hyperlinks.",
    categories: ["Full Stack", "Web Apps"],
    technologies: [
      "React 19",
      "TypeScript 6",
      "Vite 8",
      "Python",
      "Django 5.2",
      "Django REST Framework",
      "MySQL",
      "React Router v7",
      "@dnd-kit",
      "html2canvas",
      "jsPDF",
      "ReportLab",
      "drf-spectacular",
    ],
    image: "/images/projects/profile-studio.png",
    demoVideoUrl: "https://drive.google.com/file/d/1KtE9NXeDTwXtT-rCZdphUs9q59DN0zlL/preview",
    github: "https://github.com/Nuwandi-Dulshara/dj_profilemaker/",
    liveDemo: null,
    featured: true,
    caseStudy: "/projects/profile-studio",
    userRoles: ["Authenticated Profile Owner", "Public Portfolio Visitor"],
    workflow: [
      "Authenticate via DRF Token Auth stored in localStorage (profile_studio_token) and validated on startup via /api/auth/me/ with automatic 401 interception",
      "Create, search (?search=), manage, and publish multiple distinct role-specific profiles from a centralized Dashboard",
      "Enter biography, skills, work history, education, projects, and social links once into the single-source-of-truth reactive state in Builder.tsx",
      "Crop a 1:1 avatar in ImageCropperModal.tsx (validated for JPEG/PNG/WebP < 2 MB and decoded on the backend via Base64ImageField) and reorder skills or experiences via @dnd-kit",
      "Switch instantaneously across 10 curated visual templates (Professional, Creative, Minimal, Modern, Executive, Developer, Elegant, Magazine, Bold, Startup) in the live preview without losing data",
      "Publish to a collision-free vanity URL (/p/<slug>), generate a downloadable PNG QR business card, and track real-time visitor telemetry (IP, User-Agent, views_count) and contact messages",
      "Export a high-DPI A4 PDF resume on the client with smart single-page scaling (within 15% of A4 height), multi-page slicing, and coordinate-mapped clickable hyperlinks (jsPDF.link()), or download a server-generated vector PDF via ReportLab",
    ],
    modules: [
      {
        title: "Split-Screen Live Builder & 10-Theme Engine",
        description:
          "Built across Builder.tsx, ProfileForm.tsx, and ProfilePreview.tsx. Maintains a single reactive Profile state where every keystroke, slider adjustment, or drag-and-drop reorder immediately re-renders across 10 themes: professional, creative, minimal, modern, executive, developer, elegant, magazine, bold, and startup.",
      },
      {
        title: "Single-Payload Nested Serialization & Base64ImageField",
        description:
          "Solves multipart/form-data limitations for deeply nested arrays by encoding cropped 1:1 avatars as Base64 data URLs on the frontend and decoding them into UUID ContentFiles (/media/profiles/) via a custom DRF Base64ImageField, while preserving existing /media/ or http URLs on edits and mapping camelCase to snake_case.",
      },
      {
        title: "Collision-Free Vanity Slug Generation",
        description:
          "Implemented in Profile.generate_unique_slug and ProfileSerializer.validate_slug. Regex-sanitizes custom vanity slugs (/p/alex-morgan) or auto-slugifies the profile name, checking MySQL for collisions and appending -2, -3 automatically while excluding the current instance on updates.",
      },
      {
        title: "Dual-Mode PDF Resume Export Engine",
        description:
          "Client-side pdfExport.ts renders at scale: 2 (1024px width) via html2canvas, applies smart single-page scaling (scaledHeight <= printableHeight * 1.15) or multi-page slicing (> 25mm overflow), and maps DOM getBoundingClientRect() coordinates into A4 millimeter space to overlay clickable jsPDF.link() annotations. Server-side /api/profiles/<id>/pdf/ generates vector PDFs via ReportLab.",
      },
      {
        title: "Authentication & Global Theme System",
        description:
          "Token-based authentication (accounts/views.py, AuthContext.tsx) with startup session verification and 401 interception in client.ts, paired with ThemeContext.tsx persisting Dark/Light preferences in localStorage across Home, Dashboard, Builder, Settings, and Public Profile views.",
      },
      {
        title: "Engagement Suite, QR Cards & Visitor Telemetry",
        description:
          "Every published /p/<slug> profile includes downloadable client/server PNG QR codes, an embedded visitor ContactModal, and PublicProfileView telemetry that increments views_count, logs IP and User-Agent into ProfileView, and aggregates Dashboard statistics.",
      },
    ],
    stackDetails: [
      {
        name: "Frontend UI (React 19 + TypeScript 6 + Vite 8)",
        purpose: "Component architecture, strict typing (templates.ts), and fast HMR",
      },
      {
        name: "Routing (React Router v7)",
        purpose: "Public routes (/, /p/:slug, /login) and guarded routes (ProtectedRoute.tsx)",
      },
      {
        name: "Drag & Drop (@dnd-kit/core, @dnd-kit/sortable)",
        purpose: "Accessible pointer and keyboard reordering of Skills and Work Experiences",
      },
      {
        name: "Image Processing (react-easy-crop + Base64)",
        purpose: "Interactive 1:1 avatar cropping on client, decoded via Base64ImageField on backend",
      },
      {
        name: "PDF & QR Generation (html2canvas, jspdf, qrcode.react / reportlab, qrcode)",
        purpose: "Dual-mode client and server PDF resume generation and QR code PNG downloads",
      },
      {
        name: "Backend API (Django 5.2 + Django REST Framework)",
        purpose: "RESTful viewsets, token authentication, and nested object persistence",
      },
      {
        name: "Database (MySQL — profile_studio_db)",
        purpose: "utf8mb4 relational persistence with UUID primary keys and cascading foreign keys",
      },
      {
        name: "API Documentation (drf-spectacular)",
        purpose: "Auto-generated OpenAPI 3.0 schema, Swagger UI (/api/docs/), and ReDoc (/api/redoc/)",
      },
    ],
    databaseSchema: [
      {
        table: "Profile",
        details:
          "PK: id (UUIDField) | FK: user (auth.User, CASCADE) | Core Fields: name, title, bio, email, phone, location, photo (ImageField), template_id (10 choices) | Routing & Telemetry: slug (Unique indexed SlugField), views_count (PositiveIntegerField), is_published, created_at, updated_at",
      },
      {
        table: "Skill",
        details: "PK: id (UUID) | FK: profile_id | Fields: name, level (0–100%), order",
      },
      {
        table: "SocialLink",
        details: "PK: id (UUID) | FK: profile_id | Fields: platform, url, order",
      },
      {
        table: "Experience",
        details: "PK: id (UUID) | FK: profile_id | Fields: role, company, start_date, end_date, current, description, order",
      },
      {
        table: "Education",
        details: "PK: id (UUID) | FK: profile_id | Fields: institution, degree, field_of_study, start_date, end_date, order",
      },
      {
        table: "Project",
        details: "PK: id (UUID) | FK: profile_id | Fields: title, description, image, demo_url, github_url, tags, order",
      },
      {
        table: "ProfileView",
        details: "PK: id (BigAutoField) | FK: profile_id | Fields: ip_address, user_agent, timestamp",
      },
      {
        table: "ContactMessage",
        details: "PK: id (UUID) | FK: profile_id | Fields: sender_name, sender_email, subject, message, created_at",
      },
    ],
    apiEndpoints: [
      { endpoint: "/api/", method: "GET", permission: "AllowAny", description: "Health check and API endpoint directory" },
      { endpoint: "/api/auth/register/", method: "POST", permission: "AllowAny", description: "Register user (name, email, password) & return token" },
      { endpoint: "/api/auth/login/", method: "POST", permission: "AllowAny", description: "Authenticate user by email & password & return token" },
      { endpoint: "/api/auth/logout/", method: "POST", permission: "IsAuthenticated", description: "Invalidate current user's DRF token" },
      { endpoint: "/api/auth/me/", method: "GET", permission: "IsAuthenticated", description: "Fetch current logged-in user details" },
      { endpoint: "/api/auth/settings/", method: "PUT", permission: "IsAuthenticated", description: "Update user's name, email, or password" },
      { endpoint: "/api/auth/forgot-password/", method: "POST", permission: "AllowAny", description: "Send password reset email (enumeration-safe)" },
      { endpoint: "/api/auth/reset-password/", method: "POST", permission: "AllowAny", description: "Update user password" },
      { endpoint: "/api/auth/resend-verification/", method: "POST", permission: "IsAuthenticated", description: "Resend account verification email" },
      { endpoint: "/api/profiles/", method: "GET, POST", permission: "IsAuthenticated", description: "List user's profiles (supports ?search=) or create one" },
      { endpoint: "/api/profiles/<uuid>/", method: "GET, PUT, DELETE", permission: "IsAuthenticated", description: "Retrieve, update (with nested lists), or delete a profile" },
      { endpoint: "/api/profiles/<uuid>/qr/", method: "GET", permission: "AllowAny", description: "Generate and return a PNG QR code for /p/<slug>" },
      { endpoint: "/api/profiles/<uuid>/pdf/", method: "GET", permission: "AllowAny", description: "Generate and download server-side PDF resume" },
      { endpoint: "/api/profiles/dashboard/stats/", method: "GET", permission: "IsAuthenticated", description: "Aggregate profile, skill, project, view, and template counts" },
      { endpoint: "/api/public/p/<slug>/", method: "GET", permission: "AllowAny", description: "Fetch public profile by slug & record view analytics" },
      { endpoint: "/api/public/p/<slug>/contact/", method: "POST", permission: "AllowAny", description: "Submit a contact message to the profile owner" },
      { endpoint: "/api/docs/ & /api/redoc/", method: "GET", permission: "AllowAny", description: "Interactive Swagger UI and ReDoc OpenAPI documentation" },
    ],
    screenshots: [],
    problem:
      "1) Static vs. Interactive Trade-off: Traditional resume tools output flat PDFs that cannot be shared as live web portfolios, while website builders require hours of manual layout tuning. 2) Broken Hyperlinks in Canvas PDF Exports: Most client-side HTML-to-PDF tools rasterize the DOM into a flat image, destroying clickable links to GitHub, LinkedIn, email, and live project demos. 3) Rigid Templates: Users often have to re-enter their data when switching designs or managing multiple role-specific profiles (e.g., one profile for Frontend Engineering and another for Technical Consulting). 4) Lack of Networking & Analytics Tools: Standard portfolios rarely include built-in QR code generation for in-person events or view-tracking telemetry.",
    solution:
      "Profile Studio Pro solves these challenges with: 1) A Single-Source-of-Truth Data Model where users enter their biography, skills, work history, education, projects, and social links once, and toggle across 10 curated templates instantaneously without losing data. 2) A Multi-Profile Workspace allowing a single account to create, search, manage, and publish multiple distinct profiles from a centralized Dashboard. 3) A Coordinate-Mapped Interactive PDF Engine (pdfExport.ts) combining high-DPI html2canvas rendering with DOM bounding-box calculation to overlay active, clickable hyperlink annotations (jsPDF.link()) onto single-page or multi-page A4 PDFs. 4) A Built-in Engagement Suite where every published profile receives a unique slug (/p/<slug>), downloadable PNG QR code, real-time view counter, and embedded visitor contact modal.",
    architecture:
      "Decoupled Client–Server REST Architecture: React 19 + TypeScript 6 + Vite 8 Frontend (Auth & Theme Context, Split-Screen Builder, 10-Theme Live Preview, Client PDF & QR Engine) → REST API Client (fetch + DRF Token) → Django 5.2 + DRF REST API Backend (accounts App: Token Auth, Reset, User Settings; profiles App: Nested Serializers, ReportLab, QR, View Telemetry, Contact; OpenAPI 3.0 Docs: Swagger UI & ReDoc) → MySQL Database (profile_studio_db, utf8mb4, UUID primary keys, 8 relational tables) + Local Media Storage.",
    features: [
      "Real-time split-screen builder with instant reactive preview",
      "10 curated visual themes (professional, creative, minimal, modern, executive, developer, elegant, magazine, bold, startup)",
      "Multi-profile workspace with server-side search (?search=) and telemetry",
      "Accessible pointer and keyboard drag-and-drop sorting (@dnd-kit)",
      "1:1 client-side avatar cropping (react-easy-crop) with backend Base64ImageField decoding",
      "Single-payload nested JSON serialization with camelCase-to-snake_case DRF source mapping",
      "Collision-free custom or auto-generated vanity URLs (/p/<slug>)",
      "Coordinate-mapped client A4 PDF export with smart 15% single-page scaling, multi-page slicing, and clickable hyperlinks",
      "Server-side ReportLab vector PDF resume export (/api/profiles/<id>/pdf/)",
      "Client and server PNG QR code business card generation (/api/profiles/<id>/qr/)",
      "Visitor analytics tracking views_count, IP address, and User-Agent",
      "Embedded public visitor contact modal and message persistence",
      "Persistent Dark / Light theme switching and OpenAPI 3.0 Swagger UI & ReDoc documentation",
    ],
    challenges:
      "1) Single-Payload Nested Serialization & Image Uploads: Uploading an image file normally requires multipart/form-data, making deeply nested arrays (skills, experiences, education, projects, links) cumbersome. Solved via client-side validation (< 2 MB JPEG/PNG/WebP), 1:1 cropping into Base64, and a custom backend Base64ImageField that decodes new payloads into UUID ContentFiles while preserving existing /media/ or http URLs during edits. 2) Preserving Clickable Links & Pagination in Canvas PDFs: Solved by rendering at scale: 2 (1024px window width), applying smart single-page scaling when within 15% of A4 height or slicing across pages when overflow exceeds 25mm, and mapping each anchor's DOM getBoundingClientRect() into A4 millimeter coordinates via jsPDF.link(). 3) Collision-Free Vanity Slugs: Implemented automatic MySQL collision detection that appends -2, -3 suffixes for duplicate slugs and excludes the current profile instance during updates.",
    results:
      "Profile Studio Pro delivers a unified, full-stack SaaS digital identity platform that bridges static resume generators and live portfolio websites. It combines a 10-theme reactive builder, dual-mode interactive PDF generation, QR code networking, and visitor telemetry backed by an 8-table MySQL schema and 17 documented REST API endpoints.",
    limitations:
      "Technical Audit & Future Roadmap: 1) Connect Frontend Modals & Settings to Existing Backend Endpoints: Wire Settings.tsx and ContactModal.tsx (currently using client-side setTimeout simulations) to the already-implemented PUT /api/auth/settings/, POST /api/auth/resend-verification/, and POST /api/public/p/<slug>/contact/ (profilesApi.submitContactMessage) endpoints. 2) Tokenized Password Reset: Upgrade ForgotPasswordView and ResetPasswordView to generate and verify cryptographic tokens using django.contrib.auth.tokens.default_token_generator and uidb64. 3) Database Concurrency & Transactional Integrity: Wrap ProfileSerializer.create and ProfileSerializer.update in django.db.transaction.atomic() so nested updates are all-or-nothing, and replace views_count=profile.views_count + 1 in PublicProfileView with F('views_count') + 1 to prevent race conditions. 4) Production Security Configuration: Move SECRET_KEY, DEBUG, and ALLOWED_HOSTS in settings.py to .env variables alongside the MySQL configuration.",
    role: "Full-Stack Developer — React 19 & TypeScript frontend architecture, 10-theme live builder, coordinate-mapped interactive PDF engine, Django 5.2 REST API, nested serialization, and MySQL database design.",
  },
  {
    id: "pos-system",
    displayName: "POS System",
    categoryGroup: "freelance",
    title: "Hardware POS & Inventory System",
    shortDescription:
      "A Laravel-based point-of-sale and inventory platform for hardware retail, covering product variants, billing, returns, staff permissions, stock control, and operational reporting.",
    fullDescription:
      "A complete business system built for a hardware retail operation. It centralizes the product catalog, stock, sales, held bills, returns, refunds, staff access, audit activity, and management reporting in one secure application.",
    categories: ["Freelance", "Full Stack", "Web Apps"],
    technologies: ["PHP 8.2", "Laravel 12", "MySQL", "Blade", "Tailwind CSS", "Alpine.js", "Vite"],
    image: "/images/projects/pos-system.png",
    demoVideoUrl: "https://drive.google.com/file/d/1zEWUOFqN_1NqIRyslK38QqYnQLEF9M__/preview",
    github: null,
    liveDemo: null,
    privateRepository: true,
    featured: true,
    caseStudy: "/projects/pos-system",
    userRoles: ["Administrator", "Cashier", "Manager", "Stock Keeper"],
    workflow: [
      "Admin adds or updates products and categories",
      "Staff selects items and creates a sale",
      "The system calculates discounts, tax, totals, payment, and profit",
      "Held or incomplete bills can be saved and reopened",
      "Returns, exchanges, and refunds are recorded and traced",
      "Management reviews sales summaries, activity, and stock conditions",
    ],
    modules: [
      { title: "Product Management", description: "Models suppliers, units, categories, products, and variants for hardware items with different sizes, models, and prices." },
      { title: "Sales Processing", description: "Captures invoice numbers, payment methods, subtotal, discount, tax, grand total, paid amount, balance, and profit." },
      { title: "Access Control", description: "Uses role checks, permission evaluation, and route controls to separate staff responsibilities." },
      { title: "Reporting & Monitoring", description: "Provides dashboards, sales summaries, activity logs, stock alerts, and return and refund tracking." },
    ],
    stackDetails: [
      { name: "PHP 8.2", purpose: "Core server-side language" },
      { name: "Laravel 12", purpose: "MVC framework, routing, authentication, and business logic" },
      { name: "Eloquent ORM", purpose: "Models and relational data access" },
      { name: "Blade", purpose: "Server-rendered application views" },
      { name: "Tailwind CSS", purpose: "Responsive interface styling" },
      { name: "Alpine.js", purpose: "Lightweight interface interactions" },
      { name: "Vite", purpose: "Frontend development and asset builds" },
      { name: "Axios", purpose: "Frontend HTTP requests" },
    ],
    screenshots: [],
    problem:
      "Hardware retailers need to track large product catalogs and variants accurately while handling taxes, discounts, profit, returns, and staff responsibilities. Manual or disconnected processes increase the risk of stock errors, incorrect totals, lost sales, and untraceable refunds.",
    solution:
      "The application brings sales, inventory, permissions, and reporting into a single role-aware workflow. Staff can process transactions and recover held bills, while managers retain visibility into stock health, refunds, sales summaries, and recorded activity.",
    architecture:
      "Laravel 12 MVC application → Blade and Tailwind CSS interface → Eloquent ORM → relational database. Route and permission checks separate administrator, cashier, manager, and stock-keeper responsibilities.",
    features: [
      "Products, categories, suppliers, units, and variants",
      "Sales entry, billing, discounts, tax, payment, and profit tracking",
      "Held bills and invoice recovery",
      "Returns, exchanges, and traceable refunds",
      "Stock alerts and damaged stock handling",
      "Role and permission-based access",
      "Dashboards, sales summaries, and activity logs",
    ],
    challenges:
      "The system had to preserve financial correctness across sales and refunds, support product variation and price differences, maintain clear stock visibility, and enforce different levels of access without slowing down daily counter operations.",
    results:
      "The completed platform provides one controlled workflow for day-to-day hardware retail operations, with stronger inventory visibility, reliable transaction handling, clear staff authorization, and actionable operational reporting.",
    role: "Full-Stack Developer — system design, backend logic, database structure, and business workflow implementation.",
  },
  {
    id: "course-management",
    displayName: "Course Management System",
    categoryGroup: "freelance",
    title: "OAS Academy",
    shortDescription:
      "A full-stack learning and academy management platform connecting course discovery, enrollment, installment payments, video learning, staff commissions, and administration.",
    fullDescription:
      "OAS Academy is a web platform for a trading education academy. It combines a public website, online learning, student enrollment, course payments, batch-based content access, and role-specific internal administration in one application.",
    categories: ["Freelance", "Full Stack", "Web Apps"],
    technologies: ["PHP 8.2+", "Laravel 12", "MySQL", "Blade", "Bootstrap", "Tailwind CSS", "JavaScript"],
    image: "/images/projects/course-management.png",
    demoVideoUrl: "https://drive.google.com/file/d/16tfn5xgP-3MLmmlBdwqGlwkck8O2VAZS/preview",
    github: null,
    liveDemo: null,
    privateRepository: true,
    featured: true,
    caseStudy: "/projects/course-management",
    userRoles: [
      "Administrator",
      "Manager",
      "Instructor",
      "Student",
      "Call Center Staff",
      "Student Supporter",
    ],
    workflow: [
      "Visitors discover courses through the public academy website",
      "Students select a course and complete enrollment",
      "Payments are submitted through PayHere or payment-proof workflows",
      "Payment and enrollment decisions are validated and recorded",
      "Approved students receive the correct batch and learning access",
      "Students access modules, videos, and learning materials",
      "Staff manage batches, announcements, commissions, and academy operations",
    ],
    modules: [
      { title: "Public Website & CMS", description: "Course listings, course details, blogs, reviews, feedback videos, contact forms, and editable public website sections." },
      { title: "Course & Batch Management", description: "Courses, variants, pricing, modules, videos, materials, student and instructor assignments, batch links, and visibility rules." },
      { title: "Student & Instructor Portals", description: "Enrolled learning content, cart, payments, invoices, profiles, assigned courses, curricula, and batch workflows." },
      { title: "Payments & Refunds", description: "PayHere integration, payment-proof uploads, approval workflows, installments, invoices, status reconciliation, and refund records." },
      { title: "Commission Management", description: "Agent and supporter commissions, tier rules, eligibility, duplicate checks, payout histories, and PDF paysheets." },
      { title: "Access & Notifications", description: "Role restrictions, account status checks, email OTP recovery, and notifications for payments, enrollments, announcements, and commissions." },
    ],
    stackDetails: [
      { name: "PHP 8.2+ & Laravel 12", purpose: "MVC application, routing, validation, authentication, and service logic" },
      { name: "Blade, Bootstrap & Tailwind", purpose: "Server-rendered, responsive public and dashboard interfaces" },
      { name: "MySQL & Eloquent ORM", purpose: "Relational academy data, model relationships, and queries" },
      { name: "PayHere", purpose: "Checkout, payment notifications, and status reconciliation" },
      { name: "Bunny Stream & TUS", purpose: "Video hosting and resumable large-video uploads" },
      { name: "Firebase / Google Cloud Storage", purpose: "Cloud file storage and temporary signed URLs" },
      { name: "Laravel DomPDF", purpose: "PDF invoices and commission paysheets" },
      { name: "PHPUnit", purpose: "Automated coverage for payments, permissions, courses, batches, commissions, authentication, and website management" },
    ],
    screenshots: [],
    problem:
      "The academy needed to coordinate course content, registrations, batch assignments, installment payments, learning access, staff responsibilities, and commissions. Managing these separately made it difficult to keep payment status, enrollment records, and content access synchronized.",
    solution:
      "The platform centralizes academic and administrative operations with role-specific portals. It connects course discovery and enrollment to payment approval, batch assignment, learning access, staff commissions, notifications, and editable website content.",
    architecture:
      "Laravel 12 MVC application → server-rendered Blade interface → Eloquent ORM and MySQL → dedicated payment, video, storage, and commission services. PayHere, Bunny Stream, and Firebase / Google Cloud Storage support external payment, media, and file workflows.",
    features: [
      "Editable public website, courses, blogs, reviews, and contact forms",
      "Course variants, pricing, modules, videos, and materials",
      "Batch assignments and content visibility controls",
      "Student and instructor portals",
      "PayHere payments, proof uploads, installments, invoices, and refunds",
      "Agent and supporter commission rules and PDF paysheets",
      "Role-based access, OTP recovery, and operational notifications",
    ],
    challenges:
      "Key engineering challenges included connecting installment status to learning access, validating PayHere callbacks and amounts, reconciling payment status, supporting resumable large-video uploads, calculating tiered staff commissions without duplicates, enforcing multiple staff roles, and securely serving cloud files.",
    results:
      "The completed application connects course discovery, enrollment, payment processing, learning access, staff workflows, and academy administration. Automated tests are included for payments, permissions, courses, batches, commissions, authentication, and website management; no user, revenue, or time-saving metrics were documented.",
    role: "Full-Stack Developer — backend systems, database design, and business workflow development for the platform.",
  },
  {
    id: "opening-invitation",
    displayName: "Opening Invitation System",
    categoryGroup: "freelance",
    title: "Salon Calm Place Invitation",
    shortDescription:
      "A full-stack digital invitation and RSVP platform for a salon grand opening, with personalized family links, member-level attendance, QR sharing, and organizer analytics.",
    fullDescription:
      "Salon Calm Place is a full-stack invitation platform created for a salon grand opening in Melsiripura, Sri Lanka. It connects a personalized guest experience with an administrative dashboard for managing families, responses, invitation activity, and attendance planning.",
    categories: ["Freelance", "Full Stack", "Web Apps"],
    technologies: ["Next.js 16", "React 19", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Framer Motion"],
    image: "/images/projects/opening-invitation.png",
    demoVideoUrl: "https://drive.google.com/file/d/1FUZwxZ6MEPw1sKNuB4f3EtdyGeHtn8Qz/preview",
    github: null,
    liveDemo: null,
    privateRepository: true,
    featured: true,
    caseStudy: "/projects/opening-invitation",
    userRoles: ["Invited Guest", "Organizer / Administrator"],
    workflow: [
      "The organizer creates a family invitation and adds its members",
      "The system generates a unique six-character invitation token",
      "The invitation is shared through a link, WhatsApp message, or QR code",
      "The family opens its personalized invitation and views the event details",
      "The guest selects which family members will attend and submits the RSVP",
      "The server validates the invitation, deadline, prior response, and selected members",
      "The dashboard updates response statuses, attendance totals, charts, and notifications",
      "The organizer exports guest information when needed",
    ],
    modules: [
      { title: "Personalized Invitations", description: "Unique family links, personalized greetings, event information, videos, salon services, a countdown, and venue navigation." },
      { title: "Family RSVP", description: "Family-level invitations with member-level attendance selection, confirmation or decline actions, and guarded submissions." },
      { title: "Guest Administration", description: "Create, edit, and delete families and individual members while monitoring invitation views and response status." },
      { title: "Attendance Analytics", description: "Attendance totals, RSVP charts, response summaries, and notifications refreshed through polling." },
      { title: "Sharing & Export", description: "Prepared WhatsApp messages, downloadable QR codes, invitation link copying, and Excel guest exports." },
      { title: "Security & Settings", description: "Supabase authentication, row-level security policies, session handling, password changes, and configurable RSVP deadlines." },
    ],
    stackDetails: [
      { name: "Next.js 16 & React 19", purpose: "App Router, server and client components, dynamic invitations, and route handlers" },
      { name: "TypeScript", purpose: "Typed application logic and data models" },
      { name: "Supabase & PostgreSQL", purpose: "Authentication, relational data, policies, functions, and triggers" },
      { name: "Tailwind CSS & shadcn/ui", purpose: "Responsive layouts and reusable interface components" },
      { name: "Framer Motion", purpose: "Invitation animations and interface transitions" },
      { name: "Recharts", purpose: "RSVP and attendance visualization" },
      { name: "qrcode.react", purpose: "Invitation QR code generation and download" },
      { name: "SheetJS", purpose: "Excel guest-list generation and export" },
    ],
    screenshots: [],
    problem:
      "The salon needed an invitation that communicated the occasion while giving the organizer accurate attendance information. Family invitations added complexity because one invitation could represent several people with different attendance decisions.",
    solution:
      "The application links every personalized family invitation to its members and RSVP response. Guests receive an engaging mobile-friendly experience, while the organizer manages families, monitors responses, reviews attendance analytics, shares invitations, and exports records from one dashboard.",
    architecture:
      "Next.js App Router → React server and client components → Next.js route handlers → Supabase Authentication and PostgreSQL. The schema connects profiles, event settings, families, family members, and notifications with indexes, triggers, and row-level security policies.",
    features: [
      "Unique six-character family invitation links",
      "Member-level attendance selection",
      "Invitation views and response-status tracking",
      "Countdown, videos, services, and Google Maps venue access",
      "RSVP totals, charts, and response notifications",
      "WhatsApp sharing and downloadable QR codes",
      "Configurable response deadlines",
      "Excel guest-list exports",
    ],
    challenges:
      "The project required a family-based data model, secure personalized access, strict server-side RSVP validation, protected administration, timely response visibility, and practical sharing and export tools. It also had to remain polished and easy to use on mobile devices.",
    results:
      "The implemented application brings invitation presentation, family attendance collection, and event administration into one system designed to reduce manual coordination. Measured response rates, time savings, and guest totals were not documented and are therefore not claimed.",
    role: "Full-Stack Developer — frontend architecture, user flows, and platform development for invitation management.",
  },
  {
    id: "task-expense-manager",
    displayName: "AI Task & Expense Manager",
    categoryGroup: "ai-smart",
    title: "Organix AI",
    shortDescription:
      "A full-stack task, time, and expense management platform with monthly budgets, financial dashboards, category prediction, and unusual-spending detection.",
    fullDescription:
      "Organix AI combines daily planning, task and time management, personal expense tracking, budgets, reporting, and machine-learning assistance in one application. It helps users organize responsibilities while gaining a clearer view of how they spend money and time.",
    categories: ["AI / Smart Apps", "Full Stack", "Web Apps"],
    technologies: ["React 19", "FastAPI", "Python", "SQLAlchemy", "SQLite", "Pandas", "scikit-learn"],
    image: "/images/projects/task-expense-manager.png",
    demoVideoUrl: "https://drive.google.com/file/d/1L6sLGNka1tSelWsWiHRgzoQuD80wly3-/preview",
    github: null,
    liveDemo: null,
    privateRepository: true,
    featured: true,
    caseStudy: "/projects/task-expense-manager",
    workflow: [
      "The user registers or signs in with a database-backed session",
      "Tasks are created with categories, priorities, deadlines, statuses, and time estimates",
      "Expenses are recorded with descriptions, amounts, dates, categories, and payment methods",
      "The category model can suggest an expense category with a confidence score",
      "Once enough history exists, anomaly detection can flag unusual transactions for review",
      "Budgets and dashboards show spending totals, trends, alerts, and insights",
      "Filtered expense records can be exported as CSV",
    ],
    modules: [
      { title: "Task & Daily Planning", description: "Create, edit, delete, search, filter, and sort tasks with priorities, deadlines, statuses, calendar views, time estimates, and overdue notifications." },
      { title: "Expense Management", description: "Record and filter expenses by category, payment method, date, amount, and anomaly status with secure authenticated API requests." },
      { title: "Budgets & Dashboard", description: "Set monthly overall or category budgets and review totals, transaction counts, averages, recent expenses, and budget alerts." },
      { title: "Category Prediction", description: "TF-IDF converts transaction descriptions into text features and Logistic Regression predicts a category with a confidence score." },
      { title: "Anomaly Detection", description: "Isolation Forest evaluates amount, category, and day of month after at least ten historical transactions are available." },
      { title: "Insights & Reporting", description: "Pandas-based rules identify spending patterns, Matplotlib generates charts, and users can export expense records to CSV." },
    ],
    stackDetails: [
      { name: "React 19 & React Router 7", purpose: "Component-based interface and client-side navigation" },
      { name: "FastAPI & Uvicorn", purpose: "REST-style endpoints, request handling, and ASGI serving" },
      { name: "Pydantic 2", purpose: "Request and response validation" },
      { name: "SQLAlchemy 2 & SQLite", purpose: "Relational models, queries, sessions, and persistence" },
      { name: "Pandas", purpose: "Spending aggregation, feature preparation, insights, and CSV export" },
      { name: "scikit-learn", purpose: "Category classification and unusual-expense detection" },
      { name: "Joblib", purpose: "Saving and loading the trained category model" },
      { name: "Matplotlib", purpose: "Generating financial charts as PNG images" },
      { name: "Pytest", purpose: "Tests for expenses, validation, budgets, dashboards, insights, prediction, and anomaly detection" },
    ],
    screenshots: [],
    problem:
      "Managing deadlines, time usage, and personal spending in separate applications creates fragmented records and makes it harder to understand daily progress, budget consumption, and changing spending patterns.",
    solution:
      "Organix AI connects productivity and financial tracking through one React interface and a structured FastAPI backend. It adds budgets, dashboards, reporting, statistical insights, and machine-learning assistance while retaining fallbacks for missing history or failed predictions.",
    architecture:
      "React 19 frontend → Fetch API and JSON → FastAPI endpoints → Pydantic validation and business services → SQLAlchemy ORM → SQLite. The expense module separates pages, API integration, repositories, analytics services, and machine-learning code.",
    features: [
      "Task search, filtering, sorting, priorities, deadlines, and statuses",
      "Daily activity, calendar, time estimates, and spent-time summaries",
      "Overdue and missed-task notifications",
      "Expense filtering and monthly category budgets",
      "Financial totals, charts, alerts, and spending insights",
      "TF-IDF and Logistic Regression category suggestions",
      "Isolation Forest unusual-expense detection",
      "CSV reporting and downloadable charts",
    ],
    challenges:
      "The implementation had to translate data cleanly between frontend and backend formats, validate API inputs, manage bearer-token sessions, protect passwords, support insufficient-history and prediction fallbacks, and keep analytics useful when no expense data exists.",
    results:
      "The implemented application integrates personal productivity and financial tracking with statistical reporting and machine-learning assistance. The repository contains automated tests, but they were not executed for the supplied case study, and it provides no adoption figures, measured productivity gains, or model-accuracy results.",
    limitations:
      "Expense and budget records are user-associated, but the current task model has no user ownership field and task endpoints do not enforce authentication. Appropriate next steps include user-specific task access, held-out model evaluation, and updating outdated expense documentation.",
    role: "Full-Stack Developer — architecture, UI development, data flow design, and intelligent feature planning.",
  },
  {
    id: "personal-document-tracker",
    displayName: "Document Expiry Tracker",
    categoryGroup: "web-apps",
    title: "Personal Document Expiry Tracker",
    shortDescription:
      "A full-stack Angular 21 and .NET 10 web application that manages time-sensitive documents, calculating calendar-accurate notifications without UTC drift and tracking unread urgency states.",
    fullDescription:
      "The Personal Document Expiry Tracker is a full-stack web application that helps users manage time-sensitive personal documents such as passports, driving licences, insurance policies, certificates, warranties, memberships, and vehicle documents. Connected to an ASP.NET Core REST API and MySQL database, it applies authentication, ownership checks, date-only status evaluations, single-record read tracking, and real-time dashboard reminders.",
    categories: ["Full Stack", "Web Apps"],
    technologies: [
      "Angular 21",
      ".NET 10",
      "C#",
      "ASP.NET Core Web API",
      "Entity Framework Core 9",
      "MySQL",
      "TypeScript 5.9",
      "Angular Material",
      "Angular Signals",
      "RxJS",
      "JWT Bearer",
      "Vitest",
      "Playwright",
    ],
    image: "/images/projects/personal-document-tracker.png",
    demoVideoUrl: "https://drive.google.com/file/d/1IpwPn5y9ocrWn8S5_2459KLBBJ92aMB-/preview",
    github: "https://github.com/Nuwandi-Dulshara/personal-document-expiry-tracker",
    liveDemo: null,
    privateRepository: false,
    featured: true,
    caseStudy: "/projects/personal-document-tracker",
    userRoles: ["Registered User / Account Holder"],
    workflow: [
      "User registers and signs in via JWT bearer authentication with ASP.NET Core password hashing",
      "User creates or edits personal documents with issue date, expiry date, reminder date, and category",
      "Validation enforces that expiry date follows issue date and reminder date precedes or matches expiry",
      "Calendar-date calculation engine applies DateOnly logic to classify status without UTC drift",
      "Status transitions (ReminderActive, ExpiresToday, Expired) trigger header bell and dashboard updates",
      "Single-record read-state mechanism tracks LastReadStatus, re-alerting user when urgency changes",
      "User reviews reminders, updates or renews records, and maintains private, isolated document vaults",
    ],
    modules: [
      {
        title: "Document Lifecycle & Validation",
        description:
          "Full CRUD operations, categorization, search, filtering, and validation requiring valid sequence between issue, reminder, and expiry dates.",
      },
      {
        title: "DateOnly Notification Engine",
        description:
          "Evaluates ReminderActive, ExpiresToday, and Expired states strictly through calendar-date calculations, preventing notifications from appearing one day early due to UTC shifts.",
      },
      {
        title: "State-Transition Read Tracking",
        description:
          "Enforces a single DocumentNotification record per document storing LastReadStatus; preserves read status until urgency transitions, preventing database notification spam.",
      },
      {
        title: "Dashboard & Urgency Views",
        description:
          "Real-time summary metrics for Expiring Soon, Expiring Today, and Expired documents, paired with a dedicated Reminders page and header notification bell.",
      },
      {
        title: "Authentication & Account Security",
        description:
          "ASP.NET Core password hashing with PasswordHasher<TUser>, JWT bearer authentication, Angular route guards, and strict user-isolated database queries.",
      },
      {
        title: "Settings & Profile Management",
        description:
          "Configurable default reminder windows, custom warning preferences, and user profile management.",
      },
    ],
    stackDetails: [
      {
        name: "Frontend",
        purpose:
          "Angular 21, TypeScript 5.9, Angular Material, Angular CDK, Angular Router, Angular Forms, Signals, RxJS, SCSS",
      },
      {
        name: "Backend",
        purpose:
          "C#, .NET 10, ASP.NET Core Web API, Entity Framework Core 9",
      },
      {
        name: "Database",
        purpose:
          "MySQL, Pomelo EF Core MySQL provider, EF Core migrations",
      },
      {
        name: "Security",
        purpose:
          "JWT bearer authentication and ASP.NET Core password hashing",
      },
      {
        name: "API Documentation",
        purpose:
          "Swagger/OpenAPI with JWT Bearer authorization support",
      },
      {
        name: "Testing",
        purpose:
          "Vitest, jsdom, and Playwright for unit and end-to-end testing",
      },
      {
        name: "Development Tools",
        purpose:
          "Angular CLI, .NET CLI, npm, Prettier, Git, MySQL Workbench, and WampServer",
      },
    ],
    screenshots: [],
    problem:
      "People often manage important documents in different places and rely on memory or calendar entries to renew them. Missing an expiry date can cause travel disruption, legal issues, loss of insurance coverage, or extra renewal costs. Furthermore, many web-based reminder systems suffer from time-zone drift—causing notifications to trigger one day early when UTC dates are parsed across local time zones—or bloat databases with redundant daily notification records.",
    solution:
      "The system couples an Angular 21 frontend with an ASP.NET Core Web API (.NET 10) and a MySQL database using EF Core 9. Document dates remain the authoritative source of truth. By treating dates as calendar entities using C# DateOnly and component-based frontend calculations, the system completely prevents notifications from appearing one day early. It uses a single-row read-state model that tracks LastReadStatus, avoiding daily database clutter while ensuring users are alerted immediately upon every critical status transition (ReminderActive → ExpiresToday → Expired).",
    architecture:
      "Angular 21 SPA (standalone components, signals, Angular Material, SCSS) → HTTPS / JSON REST API with JWT Bearer tokens → ASP.NET Core Web API (.NET 10 controllers & business services) → Entity Framework Core 9 (Pomelo MySQL provider & migrations) → MySQL database. All date calculations extract year/month/day calendar components and leverage C# DateOnly to eliminate UTC time-zone drift.",
    features: [
      "User registration & login with JWT bearer authentication and ASP.NET Core password hashing",
      "Complete document CRUD with category assignment, search, filtering, and sorting",
      "Strict sequence validation (Expiry > Issue, Reminder <= Expiry)",
      "Calendar-date calculation using C# DateOnly to prevent one-day-early expiry notifications",
      "Notification bell with real-time unread badge count in authenticated header",
      "Interactive Dashboard totals for Expiring Soon, Expiring Today, and Expired",
      "Dedicated Reminders page grouped by Expires Today, Expired, and Reminder Active",
      "Single-row notification read-state tracking that re-alerts on status transitions",
      "Strict user-specific data isolation on all endpoints and queries",
      "Interactive Swagger/OpenAPI documentation with JWT Bearer authorization support",
      "Comprehensive automated testing with Vitest, jsdom, and Playwright",
    ],
    challenges:
      "Key engineering challenges included: 1) Preventing one-day-early expiry notifications caused by UTC timestamp conversions across different local time zones by enforcing calendar-date extraction and C# DateOnly. 2) Eliminating database bloat caused by generating daily notification instances by storing only the LastReadStatus. 3) Building reactive notification indicators across the header bell, Dashboard, and Reminders views that automatically recalculate at local midnight, on login, or when documents are updated. 4) Enforcing strict data isolation so that every query and mutation is bound to the authenticated user ID.",
    results:
      "The finished system provides a centralized, secure workspace for monitoring personal documents. Built with modern Angular 21 and .NET 10, it successfully eliminates premature UTC-driven notifications, maintains a clean and minimal database footprint through state-transition tracking, and delivers an intuitive, responsive user experience backed by automated tests across Vitest, jsdom, and Playwright.",
    role: "Full-Stack Developer — complete system architecture, Angular 21 frontend UI, .NET 10 REST API backend, EF Core 9 database design, calendar date-only notification engine, and automated testing setup.",
  },
  {
    id: "birthday-wish",
    displayName: "Birthday Wish App",
    categoryGroup: "web-apps",
    title: "Personalized Birthday Surprise",
    shortDescription:
      "A personalized ten-stage birthday journey combining messages, photographs, music, animated reveals, interactive candles, gifts, video, and fireworks.",
    fullDescription:
      "An interactive birthday website personalized for Sudu. It transforms a traditional greeting into a guided celebration that the recipient explores one surprise at a time through memories, multimedia, playful interactions, and replayable reveals.",
    categories: ["Web Apps"],
    technologies: ["React 19", "JavaScript", "Framer Motion", "CSS3", "Canvas API", "Web Audio", "Vite"],
    image: "/images/projects/birthday-wish.png",
    demoVideoUrl: "https://drive.google.com/file/d/1OOaTDhPCitU1ilnnWXi1JCCrtfasJZO7/preview",
    github: null,
    liveDemo: null,
    privateRepository: true,
    featured: false,
    caseStudy: "/projects/birthday-wish",
    userRoles: ["Birthday Recipient"],
    workflow: [
      "Open the welcome screen and start the background music",
      "Reveal the animated birthday greeting and recipient name",
      "Extinguish the interactive cake candles and trigger fireworks",
      "Read the personal message through a typing reveal",
      "Explore captioned photographs in the memory gallery",
      "Watch memories cycle through the animated photo slideshow",
      "Play the birthday video",
      "Open interactive gift boxes to reveal messages and a photograph",
      "Open the envelope-style birthday card and flyer",
      "Reach the final wish, celebrate again, or restart the journey",
    ],
    modules: [
      { title: "Guided Celebration", description: "Ten separate React stages form a clear journey, with a central stage index controlling progress from welcome to final wish." },
      { title: "Interactive Cake", description: "Clickable candles can be extinguished to trigger custom canvas fireworks, confetti, and coordinated celebration audio." },
      { title: "Memories & Messages", description: "A typing-effect message, captioned photo gallery, and animated slideshow present personal content throughout the experience." },
      { title: "Multimedia Control", description: "Shared audio references coordinate background piano music with video playback, fireworks, and sound effects." },
      { title: "Surprise Reveals", description: "Clickable gifts and an envelope-style birthday card progressively reveal messages, a photograph, and a birthday flyer." },
      { title: "Reusable Personalization", description: "The recipient name, message, memories, and gift content are centralized in birthdayData.js for easier customization." },
    ],
    stackDetails: [
      { name: "React 19", purpose: "Component-based stages, state, hooks, and interactive behavior" },
      { name: "Framer Motion", purpose: "Stage transitions, animated elements, and surprise reveals" },
      { name: "JavaScript & JSX", purpose: "Events, timers, application logic, and component markup" },
      { name: "CSS3", purpose: "Responsive layouts, decorative backgrounds, and visual styling" },
      { name: "canvas-confetti", purpose: "Celebration confetti effects" },
      { name: "Canvas 2D API", purpose: "Custom fireworks rendering with requestAnimationFrame" },
      { name: "Web Audio & HTML Media APIs", purpose: "Synthesized sounds, background music, and video playback" },
      { name: "Vite 8", purpose: "Development server and production build tooling" },
    ],
    screenshots: [],
    problem:
      "A simple birthday greeting could not fully express shared memories or create a sense of discovery. The goal was to turn personal messages, photographs, music, and celebration effects into an experience the recipient could explore one surprise at a time.",
    solution:
      "The frontend organizes the celebration into ten reusable React stages. Framer Motion connects each screen, centralized data keeps personal content editable, and coordinated browser media and canvas effects create a continuous interactive journey.",
    architecture:
      "React stage components → central stage-index state → Framer Motion and AnimatePresence transitions → centralized birthdayData.js content → browser audio, video, Canvas 2D, Web Audio, and timer APIs. The application is frontend-only with no backend or database.",
    features: [
      "Ten-stage guided birthday journey",
      "Animated personalized greeting and typing-effect message",
      "Clickable cake candles, fireworks, and confetti",
      "Captioned memory gallery and photo slideshow",
      "Birthday video player with coordinated music playback",
      "Interactive gift boxes and envelope-style card reveal",
      "Replayable final celebration",
      "Centralized content configuration and responsive layouts",
    ],
    challenges:
      "The implementation had to organize a long interactive journey, keep transitions connected, coordinate music with video and fireworks, combine canvas and confetti effects, centralize personal content for reuse, and support different screen sizes.",
    results:
      "The finished frontend delivers a replayable personalized celebration with reusable components, coordinated multimedia, animated stage transitions, and interactive surprises. It demonstrates React state management, browser media handling, canvas animation, and component-based interface development.",
    limitations:
      "The application references /birthday.mp4, but that file was absent from the reviewed project files. No user research, performance measurements, or engagement results were supplied, so measurable impact is not claimed.",
    role: "Frontend Developer — interactive design, animation implementation, and user experience development.",
  },
];
