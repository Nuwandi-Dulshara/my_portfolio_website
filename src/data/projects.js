export const projects = [
  // ── FEATURED PROJECTS ────────────────────────────────────────────────
  {
    id: "pos-system",
    title: "POS System",
    shortDescription:
      "Full-featured Point of Sale system for retail businesses with inventory management, sales tracking, and reporting.",
    fullDescription:
      "A comprehensive Point of Sale application built for retail businesses. The system handles product management, real-time inventory tracking, sales transactions, customer management, and generates detailed business reports. Designed for speed and reliability in a live retail environment.",
    categories: ["Full Stack", "Web"],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "REST API",
      "Tailwind CSS",
    ],
    thumbnail: "/images/projects/pos-system.webp",
    // Google Drive preview link — format: https://drive.google.com/file/d/FILE_ID/preview
    video: "GOOGLE_DRIVE_LINK_POS",
    videoType: "gdrive",
    github: null,
    liveDemo: null,
    privateRepository: true,
    featured: true,
    problem:
      "Small and medium retail businesses needed an affordable, reliable POS system that handles daily operations without complex setup or recurring subscription costs.",
    solution:
      "A self-hosted full-stack POS application with an intuitive cashier interface, inventory management, and business analytics dashboard.",
    architecture:
      "React frontend → Node.js/Express REST API → MySQL database. Role-based access for admin and cashier users.",
    features: [
      "Real-time inventory tracking and alerts",
      "Sales transaction management",
      "Customer and supplier management",
      "Detailed sales reports and analytics",
      "Product categories and barcode support",
      "Role-based access (admin / cashier)",
      "Daily, weekly, and monthly summaries",
    ],
    challenges:
      "Ensuring transaction reliability and data consistency. Building a fast, keyboard-friendly cashier interface for high-speed retail use.",
    results:
      "Fully functional POS system deployed and used in a real retail environment.",
    role: "Full-Stack Developer — system design, React frontend, Node.js API, and MySQL schema.",
  },
  {
    id: "course-management",
    title: "Course Management Platform",
    shortDescription:
      "Trading-focused course management system for educators and students with content delivery and progress tracking.",
    fullDescription:
      "A specialized course management platform tailored for trading education. Instructors can publish courses, lessons, and resources. Students can enroll, track their progress, and access structured learning materials. Built to support video content and structured curriculum delivery.",
    categories: ["Full Stack", "Web"],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "JWT",
      "REST API",
      "Tailwind CSS",
    ],
    thumbnail: "/images/projects/course-management.webp",
    video: "GOOGLE_DRIVE_LINK_COURSE",
    videoType: "gdrive",
    github: null,
    liveDemo: null,
    privateRepository: true,
    featured: true,
    problem:
      "Trading educators needed a structured platform to deliver courses, track student progress, and manage course content without paying for expensive LMS subscriptions.",
    solution:
      "A custom full-stack LMS with instructor and student roles, course builder, lesson management, and progress tracking.",
    architecture:
      "React SPA → Express REST API → MySQL. JWT authentication with instructor and student role-based dashboards.",
    features: [
      "Course and lesson management",
      "Student enrollment and progress tracking",
      "Video and resource content delivery",
      "Instructor and student dashboards",
      "Quiz and assessment support",
      "Certificate generation",
    ],
    challenges:
      "Designing a flexible course builder that supports multiple content types. Implementing smooth video delivery without heavy third-party dependencies.",
    results:
      "Functional LMS platform with complete instructor and student flows, deployed and tested end-to-end.",
    role: "Full-Stack Developer — React frontend, Node.js API, MySQL schema, and role-based authentication.",
  },
  {
    id: "ai-ayurveda",
    title: "AI Ayurveda",
    shortDescription:
      "AI-powered Ayurvedic health assessment and personalized recommendation platform.",
    fullDescription:
      "An intelligent health platform combining Ayurvedic medicine principles with machine learning. Users complete a health assessment based on Ayurvedic body constitution (Prakriti) and receive AI-generated personalized diet, lifestyle, and herbal recommendations.",
    categories: ["AI / ML", "Full Stack", "Web"],
    technologies: [
      "Python",
      "Streamlit",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "PostgreSQL",
      "Machine Learning",
    ],
    thumbnail: "/images/projects/ai-ayurveda.webp",
    video: null,
    videoType: null,
    github: null,
    liveDemo: null,
    privateRepository: true,
    featured: true,
    problem:
      "Ayurvedic consultations are inaccessible to most people. Personalized health recommendations based on body constitution cannot be easily scaled without technology.",
    solution:
      "An ML classification model trained on Ayurvedic health data that classifies body constitution and generates personalized health plans through an interactive web interface.",
    architecture:
      "Streamlit frontend → Scikit-learn ML pipeline → PostgreSQL for user data. Random Forest classifier trained on Prakriti assessment datasets.",
    features: [
      "ML-based Prakriti (body constitution) classification",
      "Personalized diet and lifestyle recommendations",
      "Interactive health assessment questionnaire",
      "Herbal remedy suggestions",
      "Health insight visualizations",
      "Assessment history tracking",
    ],
    challenges:
      "Collecting and curating a comprehensive Ayurvedic dataset. Validating ML outputs against traditional Ayurvedic principles.",
    results:
      "Functional AI-powered health recommendation system with clean, accessible interface.",
    role: "Full-Stack Developer & ML Engineer — data preparation, ML model, Streamlit interface, and database design.",
  },
  {
    id: "task-expense-manager",
    title: "Task & Expense Manager",
    shortDescription:
      "AI-powered task manager combined with smart expense tracking and spending analytics.",
    fullDescription:
      "A unified productivity platform combining AI-assisted task management with comprehensive expense tracking. The AI component helps prioritize tasks, suggests deadlines, and provides spending insights based on expense patterns.",
    categories: ["AI / ML", "Full Stack", "Web"],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Python",
      "AI",
      "Chart.js",
      "REST API",
    ],
    thumbnail: "/images/projects/task-expense-manager.webp",
    video: "GOOGLE_DRIVE_LINK_TASK_EXPENSE",
    videoType: "gdrive",
    github: null,
    liveDemo: null,
    privateRepository: true,
    featured: true,
    problem:
      "Professionals need both task and expense management but switching between multiple apps fragments their workflow. Standard tools lack intelligent insights.",
    solution:
      "A unified platform where AI helps prioritize tasks and surface spending patterns, giving users actionable insights from both their work and finances in one place.",
    architecture:
      "React frontend → Node.js REST API → PostgreSQL. AI microservice (Python) for task prioritization and expense analysis.",
    features: [
      "AI-assisted task prioritization",
      "Smart deadline suggestions",
      "Expense tracking with categorization",
      "Budget management and alerts",
      "Spending analytics and charts",
      "Combined productivity dashboard",
      "Export reports",
    ],
    challenges:
      "Integrating AI task intelligence into a real-time task management flow. Designing a unified UX that makes two complex features feel simple.",
    results:
      "Full-featured unified platform with working AI task prioritization and expense analytics.",
    role: "Solo Full-Stack Developer — architecture, React frontend, Node.js API, Python AI service, and database design.",
  },
  {
    id: "wedding-site",
    title: "Wedding Website",
    shortDescription:
      "Elegant wedding information and RSVP website with event details, gallery, and guest management.",
    fullDescription:
      "A beautifully designed wedding website that serves as the digital home for a wedding event. Features include event details, venue information, photo gallery, couple's story, and a digital RSVP system for guest management.",
    categories: ["Web", "Full Stack"],
    technologies: ["React", "Node.js", "MySQL", "Tailwind CSS", "REST API"],
    thumbnail: "/images/projects/wedding-site.webp",
    video: "GOOGLE_DRIVE_LINK_WEDDING",
    videoType: "gdrive",
    github: null,
    liveDemo: null,
    privateRepository: true,
    featured: false,
    features: [
      "Event details and countdown timer",
      "Interactive venue map",
      "Photo gallery with lightbox",
      "Digital RSVP with guest management",
      "Couple's story timeline",
      "Mobile-first responsive design",
    ],
    role: "Full-Stack Developer — design, React frontend, RSVP backend, and deployment.",
  },
  {
    id: "birthday-wish",
    title: "Birthday Wish App",
    shortDescription:
      "Interactive birthday greeting web app with personalized animations and shareable wish cards.",
    fullDescription:
      "A fun, interactive web application for creating personalized birthday wishes with animations, custom messages, and shareable links. Features beautiful animated UI with confetti effects and customizable cards.",
    categories: ["Web"],
    technologies: ["React", "CSS Animations", "JavaScript", "Tailwind CSS"],
    thumbnail: "/images/projects/birthday-wish.webp",
    video: "GOOGLE_DRIVE_LINK_BIRTHDAY",
    videoType: "gdrive",
    github: null,
    liveDemo: null,
    privateRepository: true,
    featured: false,
    features: [
      "Personalized animated birthday greetings",
      "Confetti and particle animations",
      "Custom message and name input",
      "Shareable wish links",
      "Mobile responsive design",
    ],
    role: "Frontend Developer — React animations, UI design, and deployment.",
  },
];
