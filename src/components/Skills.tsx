"use client";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";

function useReveal() {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.5, ease: "easeOut" as const },
  };
}

export function SectionHeader({ label, title, sub }: { label: string; title: string; sub?: string }) {
  const rv = useReveal();
  return (
    <motion.div {...rv} className="mb-12">
      <div className="inline-block px-3 py-1 border-2 border-retro-black bg-white text-retro-black text-sm font-bold tracking-widest uppercase mb-4 shadow-brutal-sm">
        {label}
      </div>
      <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight text-retro-black mb-4 uppercase leading-[1.1]">
        {title.split(/<span>(.*?)<\/span>/g).map((part, i) =>
          i % 2 === 1 ? (
            <span key={i} className="bg-retro-yellow px-2 mx-1 border-[3px] border-retro-black inline-block shadow-brutal-sm rotate-1">
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </h2>
      {sub && (
        <div className="border-l-[4px] border-[#ef4444] pl-4">
          <p className="text-retro-black font-medium text-lg max-w-2xl">{sub}</p>
        </div>
      )}
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-b-4 border-retro-black">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="⚡ TECHNICAL ARSENAL"
          title="SKILLS & <span>TECH</span>"
          sub="Technologies I work with daily — from Android to AI-powered web apps."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.07, duration: 0.4, ease: "easeOut" }}
              className="group p-6 border-[3px] border-retro-black bg-white shadow-brutal hover:-translate-y-1 hover:-translate-x-1 hover:shadow-brutal-lg transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-5 border-b-2 border-retro-black pb-4">
                <span className="text-3xl">{cat.icon}</span>
                <h3 className="font-display text-xl font-bold text-retro-black uppercase tracking-wide">
                  {cat.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm font-bold bg-retro-bg text-retro-black border-2 border-retro-black shadow-brutal-sm hover:bg-retro-yellow hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
