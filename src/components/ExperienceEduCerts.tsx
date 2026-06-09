"use client";
import React from "react";
import { motion } from "framer-motion";
import { experience, certifications, education } from "@/lib/data";
import { SectionHeader } from "./Skills";

export function Experience() {
  return (
    <section id="experience" className="py-24 border-b-4 border-retro-black">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="💼 WORK EXPERIENCE"
          title="INTERNSHIP & <span>EXPERIENCE</span>"
          sub="Hands-on experience building real Android applications."
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative border-[4px] border-retro-black bg-white shadow-brutal hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all duration-300"
        >
          {/* Accent top border */}
          <div className="absolute top-0 left-0 right-0 h-4 bg-retro-yellow border-b-4 border-retro-black" />

          <div className="p-6 md:p-10 pt-10 md:pt-14">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
              <div>
                <h3 className="font-display text-3xl font-black text-retro-black uppercase mb-1">{experience.role}</h3>
                <p className="text-retro-black font-bold text-lg bg-retro-yellow inline-block px-2 border-2 border-retro-black shadow-brutal-sm">{experience.company}</p>
                <p className="text-retro-black font-medium text-sm mt-2">{experience.companyFull}</p>
              </div>
              <div className="flex flex-col items-start md:items-end gap-2 mt-2 md:mt-0">
                <span className="px-4 py-1 border-2 border-retro-black text-sm font-bold bg-[#38bdf8] text-white shadow-brutal-sm">
                  {experience.period}
                </span>
                <span className="text-retro-black font-bold text-sm uppercase">{experience.location}</span>
              </div>
            </div>

            {/* Program badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-retro-black bg-white shadow-brutal-sm text-retro-black text-sm font-bold mb-8 uppercase">
              📋 {experience.program}
            </div>

            {/* Bullet points */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {experience.bullets.map((b) => (
                <div key={b.num} className="flex gap-4 items-start p-4 bg-retro-bg border-[3px] border-retro-black shadow-brutal-sm">
                  <span className="text-lg font-black text-retro-red flex-shrink-0 font-display">
                    {b.num}
                  </span>
                  <span
                    className="text-base font-medium text-retro-black leading-relaxed [&_strong]:text-black [&_strong]:font-black"
                    dangerouslySetInnerHTML={{ __html: b.text }}
                  />
                </div>
              ))}
            </div>

            {/* Tools + Rating */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-8 border-t-[3px] border-retro-black">
              <div className="flex flex-wrap gap-2">
                {experience.tools.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 text-xs font-bold uppercase bg-retro-black text-white border-2 border-retro-black shadow-brutal-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 px-5 py-3 border-[3px] border-retro-black bg-[#4ade80] shadow-brutal-sm flex-shrink-0">
                <span className="text-retro-black text-lg font-bold">⭐</span>
                <span className="text-retro-black text-lg font-black tracking-wide uppercase">
                  PERFORMANCE: {experience.rating}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="py-24 border-b-4 border-retro-black bg-retro-yellow/10">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="🏅 CREDENTIALS"
          title="CERTIFICATIONS & <span>ACHIEVEMENTS</span>"
          sub="Verified learning milestones and notable accomplishments."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((c, i) => {
            const CardWrapper = ({ children }: { children: React.ReactNode }) => c.link ? (
              <a href={c.link} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            ) : (
              <div>{children}</div>
            );

            return (
            <CardWrapper
              key={c.name}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className={`group flex items-start gap-5 p-6 border-[3px] border-retro-black shadow-brutal hover:translate-y-[4px] hover:translate-x-[4px] hover:shadow-none transition-all duration-200 ${
                  c.achievement ? "bg-retro-yellow" : "bg-white"
                } ${c.link ? "cursor-pointer" : ""}`}
              >
                <span className="text-3xl flex-shrink-0 drop-shadow-md">{c.icon}</span>
                <div className="w-full">
                  <div className="font-display font-black text-lg text-retro-black mb-1 leading-tight uppercase flex items-center justify-between">
                    <span>{c.name}</span>
                    {c.link && (
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                        ↗
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-bold text-retro-black/70">{c.org}</div>
                </div>
              </motion.div>
            </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="py-24 border-b-4 border-retro-black">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="🎓 ACADEMIC BACKGROUND"
          title="MY <span>EDUCATION</span>"
        />
        <div className="flex flex-col gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 border-[4px] border-retro-black bg-white shadow-brutal hover:bg-retro-bg hover:translate-y-[4px] hover:translate-x-[4px] hover:shadow-none transition-all duration-300"
            >
              <div className="w-16 h-16 bg-retro-bg border-[3px] border-retro-black shadow-brutal-sm flex items-center justify-center text-3xl flex-shrink-0 rotate-[-2deg]">
                {edu.icon}
              </div>
              <div className="flex-1 w-full">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-2">
                  <h3 className="font-display font-black text-retro-black text-xl uppercase">{edu.degree}</h3>
                  <span className="text-xs px-3 py-1.5 border-2 border-retro-black bg-[#f472b6] text-white font-bold uppercase shadow-brutal-sm w-fit">
                    {edu.period}
                  </span>
                </div>
                <p className="text-retro-black font-bold text-sm uppercase">
                  {edu.institution} · {edu.university}
                </p>
                <p className="text-retro-black font-medium text-sm mt-2">{edu.score}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
