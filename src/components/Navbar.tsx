"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "ABOUT" },
  { href: "#skills", label: "SKILLS" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#education", label: "EDUCATION" },
  { href: "#contact", label: "CONTACT" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]   = useState("");
  const [open, setOpen]       = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((s) => {
        const top = (s as HTMLElement).offsetTop - 100;
        const bot = top + (s as HTMLElement).offsetHeight;
        if (window.scrollY >= top && window.scrollY < bot) setActive(s.id);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled ? "bg-retro-bg border-b-4 border-retro-black shadow-brutal-sm py-0" : "bg-transparent py-2"
        }`}
      >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="font-display font-black text-3xl tracking-tighter text-retro-black hover:-translate-y-0.5 transition-transform">
          PRB<span className="text-retro-yellow">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 font-display font-bold">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`px-4 py-2 text-sm transition-all duration-200 border-2 border-transparent ${
                active === l.href.slice(1)
                  ? "bg-retro-black text-white"
                  : "text-retro-black hover:border-retro-black hover:bg-retro-yellow hover:-translate-y-0.5 hover:shadow-brutal-sm"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-5 py-2 text-sm bg-retro-yellow text-retro-black border-2 border-retro-black shadow-brutal-sm hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all"
          >
            HIRE ME ↗
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-retro-black border-2 border-retro-black p-1 hover:bg-retro-yellow shadow-brutal-sm hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t-4 border-retro-black bg-retro-bg"
          >
            <nav className="flex flex-col p-6 gap-3 font-display font-bold">
              {links.map((l) => (
               <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-center text-lg text-retro-black border-2 border-retro-black hover:bg-retro-yellow shadow-brutal-sm hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 px-4 py-3 text-center text-lg bg-retro-black text-white border-2 border-retro-black shadow-brutal-sm hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all"
              >
                HIRE ME ↗
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  </>
  );
}
