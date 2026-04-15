import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "../data/data";

const isComingSoon = (value: string) => value.toLowerCase().includes("coming soon");

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20 md:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title mb-10"
      >
        Projects
      </motion.h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            whileHover={{ y: -8 }}
            className="glass-box overflow-hidden"
          >
            <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
            <div className="space-y-4 p-5">
              <div>
                <h3 className="text-lg font-semibold text-[#E5E5E5]">{project.title}</h3>
                <p className="mt-2 text-sm text-[#9CA3AF]">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-[#C9A84C]/40 px-2.5 py-1 text-xs text-[#E5E5E5]">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#8B1A2B]/20 px-3 py-1 text-xs text-[#C9A84C]">{project.status}</span>
                <div className="flex gap-2">
                  <a
                    href={isComingSoon(project.demo) ? "#" : project.demo}
                    className="inline-flex items-center gap-1 rounded-md border border-[#C9A84C]/50 px-3 py-1.5 text-xs text-[#E5E5E5]"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                  <a
                    href={isComingSoon(project.github) ? "#" : project.github}
                    className="inline-flex items-center gap-1 rounded-md border border-[#C9A84C]/50 px-3 py-1.5 text-xs text-[#E5E5E5]"
                  >
                    <FiGithub /> GitHub
                  </a>
                </div>
              </div>

              {(isComingSoon(project.github) || isComingSoon(project.demo)) && (
                <p className="text-xs text-[#C9A84C]">Coming Soon</p>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}