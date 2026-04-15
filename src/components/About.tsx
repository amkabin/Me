import { motion } from "framer-motion";
import { aboutText, personalInfo, stats } from "../data/data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="grid items-center gap-10 md:grid-cols-2"
      >
        <img
          src={personalInfo.profileImage}
          alt="About Brian Philip"
          className="mx-auto h-72 w-72 rounded-2xl border border-[#C9A84C]/40 object-cover object-[center_20%] md:mx-0"
        />

        <div className="space-y-5">
          <h2 className="section-title">About Me</h2>
          <p className="text-[#9CA3AF]">{aboutText}</p>
          <div className="h-px w-28 bg-gradient-to-r from-[#C9A84C] to-[#8B1A2B]" />
          <div className="grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat} className="glass-box px-3 py-4 text-center text-sm text-[#E5E5E5]">
                {stat}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}