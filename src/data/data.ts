export type NavItem = {
  id: string;
  label: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ProjectItem = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  status: string;
  github: string;
  demo: string;
};

export type TimelineItem = {
  title: string;
  subtitle: string;
  period: string;
  description?: string;
};

export const personalInfo = {
  name: "Brian Philip",
  title: "Software Engineering Student | Full-Stack Web Developer",
  location: "Kisii, Kenya",
  email: "Kavukuabrian@gmail.com",
  github: "https://github.com/amkabin",
  whatsapp: "https://wa.link/ncuw9q",
  resume: "/resume.pdf",
  profileImage: "/profile.jpeg",
  shortIntro:
    "Building scalable, user-focused web applications with modern full-stack technologies.",
};

export const typingRoles = [
  "Software Engineering Student",
  "Full-Stack Web Developer",
  "Problem Solver",
];

export const aboutText =
  "I'm Brian Philip, a Software Engineering student at Kisii University, Kenya, passionate about building modern, scalable, and user-friendly web applications. I specialize in full-stack development using React, Node.js, Express.js, and MongoDB. I love turning ideas into real, functional products from trading journals to student management systems. Currently seeking freelance and internship opportunities to contribute to impactful, real-world tech solutions.";

export const stats = ["3+ Projects Built", "5+ Technologies", "Open to Freelance"];

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "hobbies", label: "Hobbies" },
  { id: "contact", label: "Contact" },
];

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript (ES6+)", "React", "Tailwind CSS"],
  },
  { title: "Backend", items: ["Node.js", "Express.js"] },
  { title: "Database", items: ["MongoDB", "MySQL"] },
  { title: "Tools", items: ["Git", "GitHub", "Postman", "VS Code"] },
  {
    title: "Other",
    items: [
      "REST API Development",
      "JWT Authentication",
      "CRUD Operations",
      "Responsive Design",
      "Deployment (Vercel, Render)",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Trading Journal App",
    description:
      "A web-based trading journal for logging trades, tracking profit/loss, and reviewing performance summaries for better decisions.",
    tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    image: "/project1.jpg",
    status: "In Development",
    github: "Coming Soon",
    demo: "Coming Soon",
  },
  {
    title: "Expense Tracker App",
    description:
      "A clean and intuitive expense tracker to record income and expenses, categorize transactions, and visualize spending behavior.",
    tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    image: "/project2.jpg",
    status: "In Development",
    github: "Coming Soon",
    demo: "Coming Soon",
  },
  {
    title: "Student Management System",
    description:
      "A full-stack platform for students, courses, grades, and attendance with role-based access and secure JWT authentication.",
    tech: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "bcrypt",
    ],
    image: "/project3.jpg",
    status: "In Development",
    github: "Coming Soon",
    demo: "Coming Soon",
  },
];

export const education: TimelineItem[] = [
  {
    title: "Kisii University",
    subtitle: "Bachelor of Science in Software Engineering",
    period: "2024 - 2028",
  },
  {
    title: "Maranda High School",
    subtitle: "KCSE Certificate",
    period: "Completed 2023",
  },
  {
    title: "Kasunguni Primary School",
    subtitle: "KCPE Certificate",
    period: "Completed 2019",
  },
];

export const experience: TimelineItem[] = [
  {
    title: "Software Engineering Student",
    subtitle: "Kisii University",
    period: "Current",
    description:
      "Gaining hands-on experience in full-stack development through coursework and practical projects with React, Node.js, Express.js, and MongoDB.",
  },
  {
    title: "Freelance Web Developer",
    subtitle: "Upwork",
    period: "Current",
    description:
      "Building client-ready web applications and actively pursuing freelance opportunities in full-stack web development.",
  },
];

export const hobbies = [
  "Passionate about trading and building tools for financial markets",
  "Love turning ideas into fully functional web applications",
  "Fascinated by system design and large-scale software architecture",
  "Enjoy experimenting with new frameworks and technologies",
  "Love creating dashboards with real-time data and analytics",
  "Constantly learning through personal projects and challenges",
];