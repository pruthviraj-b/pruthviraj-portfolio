"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Download } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projects } from "@/lib/data";
import { SectionHeader } from "./Skills";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter((p) => {
    if (filter === "All") return true;
    if (filter === "Android") return p.tech.includes("Kotlin") || p.tech.includes("Jetpack Compose");
    if (filter === "Web") return p.tech.includes("React.js") || p.tech.includes("Next.js 14") || p.tech.includes("Next.js") || p.tech.includes("Node.js");
    if (filter === "AI") return p.tech.includes("OpenAI API") || p.tech.includes("Generative AI");
    return true;
  });

  return (
    <section id="projects" className="py-24 border-b-4 border-retro-black">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="🚀 WORK I'M PROUD OF"
          title="FEATURED <span>PROJECTS</span>"
          sub="Real-world apps — deployed, used by real people, built end-to-end."
        />

        {/* Filter categories */}
        <div className="flex flex-wrap gap-3 mb-10 justify-start font-display font-bold">
          {["All", "Android", "Web", "AI"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 text-lg uppercase border-[3px] border-retro-black transition-all duration-200 ${
                filter === cat
                  ? "bg-retro-black text-white shadow-none translate-y-[2px] translate-x-[2px]"
                  : "bg-white text-retro-black shadow-brutal-sm hover:bg-retro-yellow hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`group relative bg-white border-[4px] border-retro-black shadow-brutal overflow-hidden hover:-translate-y-1 hover:-translate-x-1 hover:shadow-brutal-lg transition-all duration-300 ${
                  project.featured ? "md:grid md:grid-cols-[1fr_auto]" : ""
                }`}
              >
                <div className="p-6 md:p-8">
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-4 mb-6 border-b-2 border-retro-black pb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-retro-bg border-[3px] border-retro-black shadow-brutal-sm flex items-center justify-center text-3xl flex-shrink-0">
                        {project.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="font-display text-2xl md:text-3xl font-black text-retro-black uppercase tracking-tight">{project.name}</h3>
                          {project.live && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 border-2 border-retro-black text-xs font-bold bg-[#4ade80] text-retro-black shadow-brutal-sm uppercase">
                              <span className="w-2 h-2 rounded-full bg-white animate-pulse border border-retro-black" />
                              LIVE
                            </span>
                          )}
                        </div>
                        <p className="text-retro-black font-bold uppercase mt-1">{project.role}</p>
                      </div>
                    </div>
                    {/* Links */}
                    <div className="flex items-center gap-3 flex-shrink-0">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 border-2 border-retro-black bg-white text-retro-black shadow-brutal-sm hover:bg-[#2dd4bf] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all"
                          aria-label="GitHub"
                          title="Primary Repo"
                        >
                          <FaGithub size={20} strokeWidth={2.5} />
                        </a>
                      )}
                      {(project as { secondaryGithubUrl?: string; apkUrl?: string }).secondaryGithubUrl && (
                        <a
                          href={(project as { secondaryGithubUrl?: string; apkUrl?: string }).secondaryGithubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 border-2 border-retro-black bg-white text-retro-black shadow-brutal-sm hover:bg-[#2dd4bf] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all"
                          aria-label="Secondary GitHub"
                          title="Secondary Repo"
                        >
                          <FaGithub size={20} strokeWidth={2.5} />
                        </a>
                      )}
                      {(project as { secondaryGithubUrl?: string; apkUrl?: string }).apkUrl && (
                        <a
                          href={(project as { secondaryGithubUrl?: string; apkUrl?: string }).apkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 border-2 border-retro-black bg-white text-retro-black shadow-brutal-sm hover:bg-[#f472b6] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all"
                          aria-label="Download APK"
                          title="Download APK"
                        >
                          <Download size={20} strokeWidth={2.5} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 border-2 border-retro-black bg-white text-retro-black shadow-brutal-sm hover:bg-[#38bdf8] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={20} strokeWidth={2.5} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-retro-black text-base font-medium leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="flex flex-col gap-2 mb-8">
                    {project.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-retro-black font-medium">
                        <span className="text-retro-red font-bold flex-shrink-0 mt-0.5">→</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 text-xs font-bold uppercase bg-retro-bg text-retro-black border-2 border-retro-black shadow-brutal-sm cursor-default"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Featured project — accent panel */}
                {project.featured && (
                  <div className="hidden md:flex items-center justify-center min-w-[200px] border-l-[4px] border-retro-black bg-retro-yellow transition-all">
                    <span className="text-8xl group-hover:scale-110 transition-transform duration-300">{project.icon}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
