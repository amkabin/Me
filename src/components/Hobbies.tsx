import { motion } from "framer-motion";
import { hobbies } from "../data/data";

const hobbyIcons = ["📈", "💡", "🏗️", "🧪", "📊", "📚", "🌍"];

export default function Hobbies() {
  return (
    <section id="hobbies" className="bg-[#1A1A2E]/30 py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title mb-10"
        >
          Fun Facts & Hobbies
        </motion.h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="glass-box p-4"
            >
              <p className="mb-2 text-xl">{hobbyIcons[index % hobbyIcons.length]}</p>
              <p className="text-sm text-[#E5E5E5]">{hobby}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}