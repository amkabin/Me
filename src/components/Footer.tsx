import { FiGithub, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { personalInfo } from "../data/data";

export default function Footer() {
  return (
    <footer className="border-t border-[#C9A84C]/40 bg-[#0A0A0A] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 text-center text-sm text-[#9CA3AF] md:px-8">
        <p>© 2026 Brian Philip. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-[#C9A84C]">
            <FiGithub />
          </a>
          <a href={personalInfo.whatsapp} target="_blank" rel="noreferrer" className="hover:text-[#C9A84C]">
            <FaWhatsapp />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="hover:text-[#C9A84C]">
            <FiMail />
          </a>
        </div>
        <p className="text-xs">Built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
}