"use client";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { SectionHeader } from "./Skills";

const info = [
  { label: "NAME", value: "PRUTHVI RAJ B" },
  { label: "LOCATION", value: "CHIKKABALLAPUR, KARNATAKA" },
  { label: "DEGREE", value: "B.E. ISE · VTU · 2026" },
  { label: "FOCUS", value: "ANDROID · WEB · AI/GENAI" },
  { label: "STATUS", value: "✅ IMMEDIATELY AVAILABLE", highlight: true },
];

export default function About() {
  return (
    <section id="about" className="py-24 border-b-4 border-retro-black">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="👤 ABOUT ME"
          title="RESULTS-ORIENTED. <span>TECHNOLOGY-DRIVEN.</span>"
        />
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — bio */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            {[siteConfig.bio, siteConfig.bio2, siteConfig.bio3].map((p, i) => (
              <p key={i} className="text-retro-black font-medium text-lg leading-relaxed bg-white border-[3px] border-retro-black p-5 shadow-brutal-sm">
                {p}
              </p>
            ))}
          </motion.div>

          {/* Right — info card + mini stats */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            {/* Info list */}
            <div className="border-[4px] border-retro-black bg-white shadow-brutal flex flex-col">
              {info.map((item, i) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-4 px-6 py-4 ${
                    i < info.length - 1 ? "border-b-[3px] border-retro-black" : ""
                  }`}
                >
                  <span className="font-display font-black text-sm text-retro-black uppercase tracking-wider w-24 flex-shrink-0">
                    {item.label}
                  </span>
                  <span className={`text-base font-bold uppercase ${item.highlight ? "bg-[#4ade80] px-2 py-0.5 border-2 border-retro-black shadow-brutal-sm text-retro-black" : "text-retro-black"}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Mini stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "3", label: "PROJECTS SHIPPED", color: "bg-[#f472b6]" },
                { num: "1", label: "FORMAL INTERNSHIP", color: "bg-[#38bdf8]" },
                { num: "★ EX", label: "EXCELLENT RATING", color: "bg-[#4ade80]" },
                { num: "8.5", label: "DIPLOMA CGPA", color: "bg-retro-yellow" },
              ].map((s) => (
                <div
                  key={s.label}
                  className={`p-5 border-[3px] border-retro-black ${s.color} shadow-brutal hover:-translate-y-1 hover:-translate-x-1 hover:shadow-brutal-lg transition-all text-center`}
                >
                  <div className="font-display text-4xl font-black text-retro-black mb-2">{s.num}</div>
                  <div className="font-bold text-xs text-retro-black uppercase">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
