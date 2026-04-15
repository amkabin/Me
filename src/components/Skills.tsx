import { motion } from "framer-motion";
import {
  SiCss,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiRender,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { FiCode } from "react-icons/fi";
import type { IconType } from "react-icons";
import { skills } from "../data/data";

const iconMap: Record<string, IconType> = {
  HTML: SiHtml5,
  CSS: SiCss,
  "JavaScript (ES6+)": SiJavascript,
  React: SiReact,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Git: SiGit,
  GitHub: SiGithub,
  Postman: SiPostman,
  "VS Code": FiCode,
  "JWT Authentication": SiJsonwebtokens,
  "Deployment (Vercel, Render)": SiVercel,
  Render: SiRender,
};

export default function Skills() {
  return (
    <section id="skills" className="relative bg-[#1A1A2E]/30 py-20">
      <div className="absolute inset-0 teal-dot-grid pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title mb-10"
        >
          Skills
        </motion.h2>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="glass-box p-5"
            >
              <h3 className="mb-4 text-lg font-semibold text-[#C9A84C]">{group.title}</h3>
              <ul className="space-y-3 text-sm text-[#E5E5E5]">
                {group.items.map((item) => {
                  const Icon = iconMap[item];
                  return (
                    <li key={item} className="flex items-center gap-2">
                      {Icon ? <Icon className="text-[#C9A84C]" /> : <span className="text-[#C9A84C]">-</span>}
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}