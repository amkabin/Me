export interface Project {
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  image?: string
}

export const projects: Project[] = [
  {
    title: "TradeFlow",
    description:
      "A professional trading journal that helps traders track performance, analyze risk, monitor win rates, and visualize trading statistics through interactive dashboards.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Zustand", "Recharts", "LocalStorage"],
    githubUrl: "https://github.com/amkabin",
  },
  {
    title: "CampusWhisper",
    description:
      "An anonymous university discussion platform featuring secure authentication, moderation tools, categories, reactions, and modern social features.",
    tags: ["Next.js", "TypeScript", "MongoDB", "NextAuth", "Tailwind CSS"],
    githubUrl: "https://github.com/amkabin",
  },
  {
    title: "Attendance Management System",
    description:
      "A modern attendance management system with authentication, attendance tracking, reporting, and analytics.",
    tags: ["React", "Node.js", "Express", "MySQL"],
    githubUrl: "https://github.com/amkabin",
  },
  {
    title: "Expense Tracker",
    description:
      "A personal finance application for tracking income, expenses, and spending habits with an intuitive dashboard.",
    tags: ["React", "JavaScript", "Local Storage"],
    githubUrl: "https://github.com/amkabin",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio showcasing projects, technical skills, and professional experience with smooth animations and responsive design.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/amkabin",
  },
]

export const skills = {
  frontend: [
    { name: "HTML5", description: "Semantic markup & responsive structure" },
    { name: "CSS3", description: "Modern styling & layouts" },
    { name: "JavaScript (ES6+)", description: "Core language & modern features" },
    { name: "TypeScript", description: "Type-safe JavaScript" },
    { name: "React", description: "Component-based UI development" },
    { name: "Tailwind CSS", description: "Utility-first styling" },
  ],
  backend: [
    { name: "Node.js", description: "Server-side runtime" },
    { name: "Express.js", description: "API framework for Node.js" },
  ],
  database: [
    { name: "MongoDB", description: "NoSQL document database" },
    { name: "MySQL", description: "Relational database management" },
  ],
  tools: [
    { name: "Git", description: "Version control" },
    { name: "GitHub", description: "Code hosting & collaboration" },
    { name: "VS Code", description: "Code editor" },
    { name: "Postman", description: "API testing & documentation" },
  ],
  other: [
    { name: "REST API Development", description: "Designing & building RESTful services" },
    { name: "JWT Authentication", description: "Secure token-based auth" },
    { name: "CRUD Applications", description: "Create, Read, Update, Delete patterns" },
    { name: "Responsive Design", description: "Mobile-first layouts" },
    { name: "Deployment (Vercel, Render)", description: "CI/CD & hosting" },
  ],
}

export function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    frontend: "Frontend",
    backend: "Backend",
    database: "Database",
    tools: "Tools",
    other: "Other",
  }
  return labels[category] || category
}
