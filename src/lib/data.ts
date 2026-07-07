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
    title: "Agritrack",
    description:
      "Smart Finance Management System for Farmers. A full-stack platform that helps farmers track expenses, manage payments, and forecast crop profitability.",
    tags: ["React", "TypeScript", "Node.js", "MySQL"],
    liveUrl: "https://agritrack.vercel.app",
    githubUrl: "https://github.com/Fancy-nateku",
  },
  {
    title: "Role-Based Financial Administration System",
    description:
      "A secure financial administration platform with role-based access control, transaction logging, and approval workflows.",
    tags: ["React", "Node.js", "TypeScript", "MySQL"],
    githubUrl: "https://github.com/Fancy-nateku",
  },
  {
    title: "KSUCU-MC Management System",
    description:
      "A comprehensive management system for Kisii University Christian Union. Handles member registration, event scheduling, and communication.",
    tags: ["TypeScript", "Node.js", "MySQL", "CSS"],
    liveUrl: "https://ksucu-mc.co.ke",
    githubUrl: "https://github.com/Fancy-nateku",
  },
  {
    title: "Neon Tokyo Developer",
    description:
      "A modern UI with cyberpunk aesthetic — neon gradients, dark glassmorphism, and futuristic typography for a developer portfolio.",
    tags: ["React", "Bootstrap", "CSS"],
    githubUrl: "https://github.com/Fancy-nateku",
  },
  {
    title: "Itumbe Resort Website",
    description:
      "A professional business website for Itumbe Resort featuring room booking, gallery, and contact integration.",
    tags: ["HTML", "CSS", "TypeScript", "MySQL"],
    githubUrl: "https://github.com/Fancy-nateku",
  },
]

export const skills = {
  frontend: [
    { name: "React", description: "Component-based UI development" },
    { name: "JavaScript / TypeScript", description: "Core language & type safety" },
    { name: "HTML & CSS", description: "Semantic markup & responsive design" },
    { name: "Tailwind / Bootstrap", description: "Utility-first & component frameworks" },
  ],
  backend: [
    { name: "Node.js / Express", description: "Server-side runtime & API framework" },
    { name: "Databases (MySQL, PostgreSQL, MongoDB)", description: "Relational & NoSQL data management" },
    { name: "Authentication (JWT, OAuth, Passport.js)", description: "Secure user identity & access control" },
  ],
  tools: [
    { name: "Git / GitHub", description: "Version control & collaboration" },
    { name: "Docker", description: "Containerized development & deployment" },
    { name: "Postman", description: "API testing & documentation" },
  ],
}
