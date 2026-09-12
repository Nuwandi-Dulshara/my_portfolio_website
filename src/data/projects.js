export const PROJECT_FILTERS = [
  "All",
  "Freelance",
  "Full Stack",
  "AI / Smart Apps",
  "Web Apps",
];

export const projects = [
  {
    id: "pos-system",
    title: "POS System",
    shortDescription:
      "A complete Point of Sale system designed for retail businesses with inventory management, sales processing, product management, reporting, and business operations.",
    fullDescription:
      "A complete Point of Sale system designed for retail businesses with inventory management, sales processing, product management, reporting, and business operations.",
    categories: ["Freelance", "Full Stack", "Web Apps"],
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript"],
    image: "/images/projects/pos-system.png",
    demoVideo: "/videos/pos-system.mp4",
    video: "/videos/pos-system.mp4",
    videoType: "mp4",
    github: null,
    liveDemo: null,
    privateRepository: true,
    featured: true,
    caseStudy: "/projects/pos-system",
    problem:
      "Retail operations needed a reliable system to manage stock, process sales, and keep business reporting simple and accurate.",
    solution:
      "A complete POS application built to streamline checkout workflows while giving managers visibility into inventory, transactions, and reports.",
    architecture:
      "Laravel application → MySQL database with JavaScript-driven frontend interactions for a fast retail experience.",
    features: [
      "Inventory management",
      "Sales processing and order handling",
      "Product management",
      "Reporting and business insights",
      "Retail operations workflow support",
    ],
    challenges:
      "Designing a system that balances speed, accuracy, and usability for daily retail operations without adding unnecessary complexity.",
    results:
      "A fully functional retail POS platform built to support real business operations.",
    role: "Full-Stack Developer — system design, backend logic, database structure, and business workflow implementation.",
  },
  {
    id: "course-management",
    title: "Course Management System",
    shortDescription:
      "A complete course management platform designed to manage students, instructors, courses, payments, commissions, learning activities, and administrative operations.",
    fullDescription:
      "A complete course management platform designed to manage students, instructors, courses, payments, commissions, learning activities, and administrative operations.",
    categories: ["Freelance", "Full Stack", "Web Apps"],
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript"],
    image: "/images/projects/course-management.png",
    demoVideo: "/videos/course-management.mp4",
    video: "/videos/course-management.mp4",
    videoType: "mp4",
    github: null,
    liveDemo: null,
    privateRepository: true,
    featured: true,
    caseStudy: "/projects/course-management",
    problem:
      "Educational businesses needed a structured platform to manage student enrollment, course delivery, payments, and business operations in one place.",
    solution:
      "A custom course management system for managing instructors, students, courses, payments, and learning activities through a unified admin and user experience.",
    architecture:
      "Laravel-based platform with MySQL data persistence and JavaScript-enhanced administrative workflows for learning operations.",
    features: [
      "Student and instructor management",
      "Course creation and administration",
      "Payment tracking and commission handling",
      "Learning activity management",
      "Administrative dashboards and reporting",
    ],
    challenges:
      "Balancing business workflows with a clean user experience while keeping administration, payments, and course operations consistent and reliable.",
    results:
      "A complete learning platform able to support course delivery and operational management end-to-end.",
    role: "Full-Stack Developer — backend systems, database design, and business workflow development for the platform.",
  },
  {
    id: "opening-invitation",
    title: "Opening Invitation System",
    shortDescription:
      "A personalized event invitation and guest management platform with individual invitation links, guest management, RSVP responses, attendance tracking, responsive invitation pages, and an admin dashboard.",
    fullDescription:
      "A personalized event invitation and guest management platform with individual invitation links, guest management, RSVP responses, attendance tracking, responsive invitation pages, and an admin dashboard.",
    categories: ["Freelance", "Full Stack", "Web Apps"],
    technologies: ["Next.js", "React", "TypeScript", "MySQL", "REST API"],
    image: "/images/projects/opening-invitation.png",
    demoVideo: "/videos/opening-invitation.mp4",
    video: "/videos/opening-invitation.mp4",
    videoType: "mp4",
    github: null,
    liveDemo: null,
    privateRepository: true,
    featured: true,
    caseStudy: "/projects/opening-invitation",
    problem:
      "Event organizers needed a scalable way to send personal invitations, manage guest responses, and track attendance in a modern, mobile-friendly experience.",
    solution:
      "A Next.js-based invitation platform with dynamic guest links, RSVP handling, attendance tracking, and a clear admin dashboard for event operations.",
    architecture:
      "Next.js frontend with TypeScript and a connected data layer for personalized invitation pages and guest management workflows.",
    features: [
      "Individual invitation links",
      "Guest management and RSVP tracking",
      "Attendance monitoring",
      "Responsive event invitation pages",
      "Admin dashboard for event operations",
    ],
    challenges:
      "Creating a polished, event-ready experience while making guest flows and admin data management simple and reliable across devices.",
    results:
      "A modern invitation system that supports personalized event communication and guest management efficiently.",
    role: "Full-Stack Developer — frontend architecture, user flows, and platform development for invitation management.",
  },
  {
    id: "task-expense-manager",
    title: "AI Task & Expense Manager",
    shortDescription:
      "A productivity platform combining task management and expense tracking with analytics and intelligent features.",
    fullDescription:
      "A productivity platform combining task management and expense tracking with analytics and intelligent features. The system currently includes task and expense management functionality, with room to expand into more AI-powered capabilities over time.",
    categories: ["AI / Smart Apps", "Full Stack", "Web Apps"],
    technologies: ["React", "Python", "REST API", "Database", "AI / Smart Features"],
    image: "/images/projects/task-expense-manager.png",
    demoVideo: "/videos/task-expense-manager.mp4",
    video: "/videos/task-expense-manager.mp4",
    videoType: "mp4",
    github: null,
    liveDemo: null,
    privateRepository: true,
    featured: true,
    caseStudy: "/projects/task-expense-manager",
    problem:
      "Users were juggling separate tools for task planning and expense management, which reduced visibility and made daily productivity harder to track.",
    solution:
      "A unified platform that combines task management and expense tracking with intelligent insights, making it easier to manage productivity and spending in one place.",
    architecture:
      "Modern web dashboard with a React frontend and Python-backed services connected through REST APIs and shared data models for smart analytics.",
    features: [
      "Task management",
      "Expense tracking",
      "Analytics and insights",
      "Smart productivity features",
      "Unified dashboard experience",
    ],
    challenges:
      "Designing an architecture that supports both operational workflows and future AI-driven enhancements without making the platform hard to extend.",
    results:
      "A scalable productivity and finance platform that already supports key workflows and is ready for more intelligent features.",
    role: "Full-Stack Developer — architecture, UI development, data flow design, and intelligent feature planning.",
  },
  {
    id: "birthday-wish",
    title: "Birthday Wish App",
    shortDescription:
      "An interactive birthday greeting web application built with React.js featuring personalized wishes, animations, visual effects, and an engaging celebration experience.",
    fullDescription:
      "An interactive birthday greeting web application built with React.js featuring personalized wishes, animations, visual effects, and an engaging celebration experience.",
    categories: ["Web Apps"],
    technologies: ["React.js", "JavaScript", "CSS Animations"],
    image: "/images/projects/birthday-wish.png",
    demoVideo: "/videos/birthday-wish.mp4",
    video: "/videos/birthday-wish.mp4",
    videoType: "mp4",
    github: null,
    liveDemo: null,
    privateRepository: true,
    featured: false,
    caseStudy: "/projects/birthday-wish",
    problem:
      "A personalized digital greeting needed to feel fun, memorable, and mobile-friendly without relying on heavy or complex tooling.",
    solution:
      "A lightweight React experience featuring custom messages, animated elements, and polished celebratory visuals for a memorable birthday presentation.",
    architecture:
      "Single-page React app with interactive UI logic and custom CSS animations built for a smooth, responsive celebration experience.",
    features: [
      "Personalized interactive wishes",
      "Animation and visual effects",
      "Celebration-focused design",
      "Responsive experience across devices",
    ],
    challenges:
      "Creating a polished celebration experience that feels delightful without overcomplicating the frontend or sacrificing performance.",
    results:
      "A responsive, engaging birthday greeting web app with strong visual appeal and smooth interaction.",
    role: "Frontend Developer — interactive design, animation implementation, and user experience development.",
  },
];
