"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { siteConfig, basePath } from "@/lib/data";
import { useEffect, useState } from "react";

const roles = [
  "FULL STACK & ANDROID DEVELOPER",
  "ASPIRING AI OPERATOR",
  "JETPACK COMPOSE DEVELOPER",
  "REACT / NEXT.JS DEVELOPER",
  "AI-INTEGRATED APP BUILDER",
];

function TypedRole() {
  const [idx, setIdx]  = useState(0);
  const [text, setText] = useState("");
  const [del, setDel]  = useState(false);

  useEffect(() => {
    const current = roles[idx];
    const timer = setTimeout(() => {
      if (!del) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDel(true), 1800);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDel(false);
          setIdx((i) => (i + 1) % roles.length);
        }
      }
    }, del ? 45 : 80);
    return () => clearTimeout(timer);
  }, [text, del, idx]);

  return (
    <span className="text-retro-black">
      {text}
      <span className="animate-pulse text-retro-red">_</span>
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" as const },
  }),
};

const stats = [
  { num: "3", label: "LIVE PROJECTS" },
  { num: "★", label: "EXCELLENT RATING" },
  { num: "8.5", label: "DIPLOMA CGPA" },
  { num: "7+", label: "TECHNOLOGIES" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden border-b-4 border-retro-black"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <div>
            {/* Available badge */}
            <motion.div
              custom={0} variants={fadeUp} initial="hidden" animate="show"
              className="inline-flex items-center gap-2 px-4 py-1.5 border-2 border-retro-black bg-[#ef4444] text-white text-sm font-bold mb-6 shadow-brutal-sm"
            >
              <span className="w-2 h-2 bg-white animate-pulse" />
              OPEN TO WORK · 2026
            </motion.div>

            {/* Name */}
            <motion.h1
              custom={1} variants={fadeUp} initial="hidden" animate="show"
              className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] mb-6 text-retro-bg"
              style={{
                textShadow: "4px 4px 0px #111111, 8px 8px 0px #111111",
                WebkitTextStroke: "2px #111111"
              }}
            >
              {siteConfig.name.toUpperCase()}
            </motion.h1>

            {/* Typed role */}
            <motion.div
              custom={2} variants={fadeUp} initial="hidden" animate="show"
              className="font-display text-xl md:text-3xl font-bold mb-6 min-h-[2.5rem] uppercase"
            >
              <TypedRole />
            </motion.div>

            {/* Bio */}
            <motion.p
              custom={3} variants={fadeUp} initial="hidden" animate="show"
              className="text-retro-black text-lg font-medium leading-relaxed mb-8 max-w-lg"
            >
              {siteConfig.bio.split(". ")[0]}. Shipped{" "}
              <strong className="font-bold bg-retro-yellow px-1">Shale-Namma Pride</strong> — live for real schools — and{" "}
              <strong className="font-bold bg-[#38bdf8] px-1 text-white">Nexus Learn</strong> with OpenAI-powered reports.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={5} variants={fadeUp} initial="hidden" animate="show"
              className="flex flex-wrap gap-4 mb-10 font-display font-bold"
            >
              <a
                href="#projects"
                className="px-6 py-3 text-lg bg-retro-yellow text-retro-black border-[3px] border-retro-black shadow-brutal hover:translate-y-[4px] hover:translate-x-[4px] hover:shadow-none transition-all"
              >
                VIEW PROJECTS ↓
              </a>
              <a
                href={basePath + "/resume.pdf"}
                download="Pruthvi_Raj_B_Resume.pdf"
                className="px-6 py-3 text-lg bg-white text-retro-black border-[3px] border-retro-black shadow-brutal hover:translate-y-[4px] hover:translate-x-[4px] hover:shadow-none transition-all flex items-center gap-2"
              >
                DOWNLOAD RESUME 📄
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              custom={6} variants={fadeUp} initial="hidden" animate="show"
              className="flex items-center gap-4"
            >
              {[
                { href: siteConfig.github, Icon: FaGithub, label: "GitHub", color: "bg-[#2dd4bf]" },
                { href: siteConfig.linkedin, Icon: FaLinkedin, label: "LinkedIn", color: "bg-[#38bdf8]" },
                { href: siteConfig.whatsappUrl, Icon: FaWhatsapp, label: "WhatsApp", color: "bg-[#4ade80]" },
                { href: `mailto:${siteConfig.email}`, Icon: Mail, label: "Email", color: "bg-retro-yellow" },
              ].map(({ href, Icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`p-3 border-[3px] border-retro-black text-retro-black ${color} shadow-brutal-sm hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all`}
                >
                  <Icon size={22} strokeWidth={2.5} />
                </a>
              ))}
              <span className="flex items-center gap-1.5 text-sm font-bold ml-2">
                <MapPin size={18} strokeWidth={2.5} />
                {siteConfig.location.split(",")[0].toUpperCase()}
              </span>
            </motion.div>
          </div>

          {/* Right — Photo + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-end gap-6"
          >
            {/* Photo frame */}
            <div className="relative group">
              <div className="relative w-72 h-80 lg:w-80 lg:h-96 border-[4px] border-retro-black shadow-brutal bg-white overflow-hidden">
                <Image
                  src={basePath + "/photo.jpg"}
                  alt="Pruthvi Raj B"
                  fill
                  className="object-cover object-top filter contrast-125 saturate-0 group-hover:saturate-100 transition-all duration-300"
                  priority
                />
                <div className="absolute inset-0 bg-retro-yellow mix-blend-multiply opacity-20 group-hover:opacity-0 transition-opacity" />
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-[320px]">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white border-[3px] border-retro-black p-4 text-center shadow-brutal-sm"
                >
                  <div className="font-display text-3xl font-black text-retro-black mb-1">
                    {s.num}
                  </div>
                  <div className="text-xs font-bold uppercase">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
