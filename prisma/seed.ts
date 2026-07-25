import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
  console.log("Seeding database...")

  const adminEmail = process.env.ADMIN_EMAIL || "admin@example.com"
  const adminPassword = process.env.ADMIN_PASSWORD || "admin123"

  const existingAdmin = await prisma.user.findUnique({ where: { email: adminEmail } })
  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash(adminPassword, 12)
    await prisma.user.create({
      data: {
        email: adminEmail,
        hashedPassword,
        name: "Admin",
      },
    })
    console.log(`Admin user created: ${adminEmail}`)
  } else {
    console.log(`Admin user already exists: ${adminEmail}`)
  }

  const existingProjects = await prisma.project.count()
  if (existingProjects === 0) {
    await prisma.project.createMany({
      data: [
        {
          title: "TradeFlow",
          slug: "tradeflow",
          description:
            "A professional trading journal that helps traders track performance, analyze risk, monitor win rates, and visualize trading statistics through interactive dashboards.",
          tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Zustand", "Recharts", "LocalStorage"],
          githubUrl: "https://github.com/amkabin",
          published: true,
          order: 1,
        },
        {
          title: "CampusWhisper",
          slug: "campuswhisper",
          description:
            "An anonymous university discussion platform featuring secure authentication, moderation tools, categories, reactions, and modern social features.",
          tags: ["Next.js", "TypeScript", "MongoDB", "NextAuth", "Tailwind CSS"],
          githubUrl: "https://github.com/amkabin",
          published: true,
          order: 2,
        },
        {
          title: "Attendance Management System",
          slug: "attendance-management-system",
          description:
            "A modern attendance management system with authentication, attendance tracking, reporting, and analytics.",
          tags: ["React", "Node.js", "Express", "MySQL"],
          githubUrl: "https://github.com/amkabin",
          published: true,
          order: 3,
        },
        {
          title: "Expense Tracker",
          slug: "expense-tracker",
          description:
            "A personal finance application for tracking income, expenses, and spending habits with an intuitive dashboard.",
          tags: ["React", "JavaScript", "Local Storage"],
          githubUrl: "https://github.com/amkabin",
          published: true,
          order: 4,
        },
        {
          title: "Portfolio Website",
          slug: "portfolio-website",
          description:
            "A modern portfolio showcasing projects, technical skills, and professional experience with smooth animations and responsive design.",
          tags: ["React", "TypeScript", "Tailwind CSS"],
          githubUrl: "https://github.com/amkabin",
          published: true,
          order: 5,
        },
      ],
    })
    console.log("Projects seeded")
  }

  const existingSkills = await prisma.skill.count()
  if (existingSkills === 0) {
    await prisma.skill.createMany({
      data: [
        { name: "HTML5", description: "Semantic markup & responsive structure", category: "frontend", order: 1 },
        { name: "CSS3", description: "Modern styling & layouts", category: "frontend", order: 2 },
        { name: "JavaScript (ES6+)", description: "Core language & modern features", category: "frontend", order: 3 },
        { name: "TypeScript", description: "Type-safe JavaScript", category: "frontend", order: 4 },
        { name: "React", description: "Component-based UI development", category: "frontend", order: 5 },
        { name: "Tailwind CSS", description: "Utility-first styling", category: "frontend", order: 6 },
        { name: "Node.js", description: "Server-side runtime", category: "backend", order: 1 },
        { name: "Express.js", description: "API framework for Node.js", category: "backend", order: 2 },
        { name: "MongoDB", description: "NoSQL document database", category: "database", order: 1 },
        { name: "MySQL", description: "Relational database management", category: "database", order: 2 },
        { name: "Git", description: "Version control", category: "tools", order: 1 },
        { name: "GitHub", description: "Code hosting & collaboration", category: "tools", order: 2 },
        { name: "VS Code", description: "Code editor", category: "tools", order: 3 },
        { name: "Postman", description: "API testing & documentation", category: "tools", order: 4 },
        { name: "REST API Development", description: "Designing & building RESTful services", category: "other", order: 1 },
        { name: "JWT Authentication", description: "Secure token-based auth", category: "other", order: 2 },
        { name: "CRUD Applications", description: "Create, Read, Update, Delete patterns", category: "other", order: 3 },
        { name: "Responsive Design", description: "Mobile-first layouts", category: "other", order: 4 },
        { name: "Deployment (Vercel, Render)", description: "CI/CD & hosting", category: "other", order: 5 },
      ],
    })
    console.log("Skills seeded")
  }

  const existingSettings = await prisma.siteSetting.count()
  if (existingSettings === 0) {
    await prisma.siteSetting.createMany({
      data: [
        {
          key: "site_title",
          value: JSON.stringify("Brian Philip | Aspiring Software Engineer"),
        },
        {
          key: "site_description",
          value: JSON.stringify("Aspiring software engineer passionate about building modern web applications with React, Node.js, and TypeScript."),
        },
        {
          key: "hero_name",
          value: JSON.stringify("Brian Philip"),
        },
        {
          key: "hero_tagline",
          value: JSON.stringify("Aspiring Software Engineer | Full-Stack Web Developer"),
        },
        {
          key: "hero_bio",
          value: JSON.stringify("I am an aspiring software engineer passionate about building modern, responsive, and user-focused web applications. I enjoy creating clean interfaces, developing scalable backend systems, and continuously improving my skills through real-world projects."),
        },
        {
          key: "about_content",
          value: JSON.stringify([
            "Hello, I'm Brian Philip, an aspiring software engineer passionate about building modern web applications and solving real-world problems through technology. I enjoy developing full-stack applications using React, Node.js, Express, MongoDB, and MySQL. I focus on writing clean, maintainable code and creating intuitive user experiences while continually learning new technologies.",
            "My journey into software started with curiosity about how websites and applications work behind the scenes. That curiosity led me to explore frontend design, backend logic, and database management — eventually building full-stack projects from the ground up.",
            "I believe the best software solves real problems for real people. Whether it's a trading journal for tracking investments, an anonymous discussion platform, or a simple expense tracker, I enjoy creating tools that make everyday tasks easier and more efficient.",
            "I'm currently focused on deepening my understanding of full-stack development, exploring new technologies, and building projects that challenge me to grow as a developer.",
          ]),
        },
        {
          key: "footer_copyright",
          value: JSON.stringify("Brian Philip. All rights reserved."),
        },
        {
          key: "contact_email",
          value: JSON.stringify("kavukuabrian@gmail.com"),
        },
        {
          key: "contact_phone",
          value: JSON.stringify("+254 704 458 044"),
        },
      ],
    })
    console.log("Site settings seeded")
  }

  const existingSocial = await prisma.socialLink.count()
  if (existingSocial === 0) {
    await prisma.socialLink.createMany({
      data: [
        { platform: "GitHub", url: "https://github.com/amkabin", icon: "github", order: 1 },
      ],
    })
    console.log("Social links seeded")
  }

  console.log("Database seeded successfully!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
