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
    { name: "React", description: "Component-based UI, hooks, state management" },
    { name: "Next.js", description: "Full-stack React applications" },
    { name: "JavaScript / TypeScript", description: "ES6+, async programming, type safety" },
    { name: "HTML & CSS", description: "Semantic markup, responsive design" },
    { name: "Tailwind CSS", description: "Utility-first styling" },
  ],
  backend: [
    { name: "Node.js / Express.js", description: "REST APIs, middleware, server-side logic" },
    { name: "MongoDB / Mongoose", description: "NoSQL databases, data modeling" },
    { name: "MySQL / PostgreSQL", description: "Relational databases, SQL" },
    { name: "Prisma", description: "ORM and database management" },
    { name: "Authentication", description: "Auth.js, JWT, bcrypt, OTP" },
  ],
  tools: [
    { name: "Git / GitHub", description: "Version control, collaboration" },
    { name: "Postman", description: "API development and testing" },
    { name: "Vite", description: "Frontend development tooling" },
    { name: "Cloudinary", description: "Image and media management" },
    { name: "Stripe / M-Pesa", description: "Payment integration" },
  ],
}

export function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    frontend: "Frontend",
    backend: "Backend & Databases",
    tools: "Tools & Workflow",
  }
  return labels[category] || category
}
