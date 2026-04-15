import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiGithub, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { personalInfo, typingRoles } from "../data/data";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const current = typingRoles[roleIndex];
    let charIndex = 0;

    const typingTimer = window.setInterval(() => {
      charIndex += 1;
      setTyped(current.slice(0, charIndex));

      if (charIndex >= current.length) {
        window.clearInterval(typingTimer);
        window.setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % typingRoles.length);
          setTyped("");
        }, 1300);
      }
    }, 70);

    return () => window.clearInterval(typingTimer);
  }, [roleIndex]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24">
      <div className="absolute inset-0 hero-grid opacity-50" />
      <motion.div
        aria-hidden
        className="absolute -left-24 top-32 h-64 w-64 rounded-full bg-[#8B1A2B]/20 blur-[100px]"
        animate={{ y: [0, 22, 0] }}
        transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-[#C9A84C]/20 blur-[120px]"
        animate={{ y: [0, -26, 0] }}
        transition={{ duration: 11, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="relative mx-auto grid min-h-[80vh] max-w-6xl items-center gap-10 px-4 pb-12 md:grid-cols-2 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-[#C9A84C]">Brian Philip</p>
          <h1 className="text-4xl font-bold leading-tight text-[#E5E5E5] md:text-6xl">Software Engineer in Training</h1>
          <p className="h-8 text-lg text-[#C9A84C] md:text-2xl">
            {typed}
            <span className="ml-1 animate-pulse">|</span>
          </p>
          <p className="max-w-xl text-[#9CA3AF]">{personalInfo.shortIntro}</p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-md bg-[#C9A84C] px-5 py-2.5 text-sm font-medium text-[#0A0A0A] transition hover:brightness-110"
            >
              View My Work
            </a>
            <a
              href={personalInfo.resume}
              className="rounded-md border border-[#C9A84C] px-5 py-2.5 text-sm font-medium text-[#E5E5E5] transition hover:bg-[#C9A84C]/10"
            >
              Download Resume
            </a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub">
              <FiGithub size={18} />
            </a>
            <a href={personalInfo.whatsapp} target="_blank" rel="noreferrer" className="icon-btn" aria-label="WhatsApp">
              <FaWhatsapp size={18} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="icon-btn" aria-label="Email">
              <FiMail size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src={personalInfo.profileImage}
            alt="Brian Philip"
            className="h-72 w-72 rounded-full border-4 border-[#C9A84C] object-cover object-[center_20%] shadow-[0_0_45px_rgba(201,168,76,0.35)] md:h-96 md:w-96"
          />
        </motion.div>
      </div>
    </section>
  );
}