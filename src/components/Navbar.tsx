import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import type { NavItem } from "../data/data";

type NavbarProps = {
  navItems: NavItem[];
  activeSection: string;
};

export default function Navbar({ navItems, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0A0A0A]/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <button
          onClick={() => scrollToSection("home")}
          className="text-lg font-semibold tracking-wide text-[#E5E5E5]"
        >
          <span className="text-[#C9A84C]">Brian</span> Philip
        </button>

        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`text-sm transition-colors duration-200 ${
                  activeSection === item.id ? "text-[#C9A84C]" : "text-[#9CA3AF] hover:text-[#E5E5E5]"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="text-[#E5E5E5] md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="border-t border-[#C9A84C]/20 bg-[#0A0A0A]/95 px-4 pb-6 pt-4 backdrop-blur-md md:hidden"
          >
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left text-sm ${
                      activeSection === item.id ? "text-[#C9A84C]" : "text-[#E5E5E5]"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}