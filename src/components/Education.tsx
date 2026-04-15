import { motion } from "framer-motion";
import { education } from "../data/data";

export default function Education() {
  return (
    <section id="education" className="bg-[#1A1A2E]/30 py-20">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title mb-10"
        >
          Education
        </motion.h2>

        <div className="relative space-y-6 border-l border-[#C9A84C]/50 pl-8">
          {education.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-[2.15rem] top-2 h-3 w-3 rounded-full bg-[#C9A84C]" />
              <div className="glass-box p-5">
                <h3 className="text-lg font-semibold text-[#E5E5E5]">{item.title}</h3>
                <p className="text-sm text-[#C9A84C]">{item.period}</p>
                <p className="mt-1 text-sm text-[#9CA3AF]">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}