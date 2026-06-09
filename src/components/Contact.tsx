"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, ExternalLink, Copy, Check } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { siteConfig } from "@/lib/data";
import { SectionHeader } from "./Skills";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const links = [
    {
      label: "EMAIL",
      value: siteConfig.email,
      icon: Mail,
      href: `mailto:${siteConfig.email}`,
      action: copyEmail,
      actionLabel: copied ? "Copied!" : "Copy",
      actionIcon: copied ? Check : Copy,
      color: "bg-[#f472b6]"
    },
    {
      label: "LINKEDIN",
      value: "pruthvirajbc",
      icon: FaLinkedin,
      href: siteConfig.linkedin,
      color: "bg-[#38bdf8]"
    },
    {
      label: "GITHUB",
      value: "pruthviraj-b",
      icon: FaGithub,
      href: siteConfig.github,
      color: "bg-[#2dd4bf]"
    },
    {
      label: "WHATSAPP",
      value: "+91 97406 34537",
      icon: FaWhatsapp,
      href: siteConfig.whatsappUrl,
      color: "bg-[#4ade80]"
    },
    {
      label: "LIVE PROJECT",
      value: "SHALE-NAMMA PRIDE ↗",
      icon: ExternalLink,
      href: siteConfig.liveProject,
      color: "bg-retro-yellow"
    },
  ];

  return (
    <section id="contact" className="py-24 border-b-4 border-retro-black">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="📬 LET'S CONNECT"
          title="READY TO <span>COLLABORATE?</span>"
          sub="Open to junior Android, full-stack, and AI-integrated developer roles across India. Remote and hybrid welcome."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left — CTA card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-[4px] border-retro-black bg-white shadow-brutal p-8 flex flex-col justify-between hover:translate-y-[4px] hover:translate-x-[4px] hover:shadow-none transition-all duration-300"
          >
            <div>
              <h3 className="font-display text-4xl md:text-5xl font-black text-retro-black mb-4 uppercase leading-tight">
                LET&apos;S BUILD<br />SOMETHING <span className="bg-retro-yellow px-2 border-2 border-retro-black shadow-brutal-sm inline-block rotate-1">GREAT.</span>
              </h3>
              <p className="text-retro-black font-medium text-lg leading-relaxed mb-8">
                I&apos;m actively looking for roles where I can apply AI, web, and mobile skills to create meaningful impact. If you&apos;re building something interesting, I&apos;d love to hear from you.
              </p>
              <div className="flex items-center gap-2 text-retro-black font-bold uppercase mb-8">
                <MapPin size={20} strokeWidth={2.5} className="text-[#ef4444]" />
                <span>{siteConfig.location}</span>
              </div>
            </div>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 font-display font-black text-xl uppercase bg-retro-black text-white border-[3px] border-retro-black shadow-brutal hover:bg-white hover:text-retro-black hover:translate-y-[4px] hover:translate-x-[4px] hover:shadow-none transition-all"
            >
              <Mail size={22} strokeWidth={2.5} />
              SEND ME A MESSAGE
            </a>
          </motion.div>

          {/* Right — Contact links */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            {links.map((l, i) => (
              <motion.div
                key={l.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="group flex items-center justify-between p-5 border-[3px] border-retro-black bg-white shadow-brutal-sm hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-brutal transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 ${l.color} border-[3px] border-retro-black flex items-center justify-center text-retro-black shadow-brutal-sm flex-shrink-0`}>
                    <l.icon size={26} strokeWidth={2} />
                  </div>
                  <div>
                    <div className="font-bold text-retro-black/60 uppercase tracking-widest text-sm mb-0.5">{l.label}</div>
                    <div className="font-display font-black text-xl text-retro-black uppercase tracking-tight">{l.value}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {l.action && (
                    <button
                      onClick={l.action}
                      className="p-3 border-2 border-retro-black bg-white text-retro-black shadow-brutal-sm hover:bg-retro-yellow hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all"
                      aria-label={l.actionLabel}
                    >
                      {l.actionIcon && <l.actionIcon size={20} strokeWidth={2.5} />}
                    </button>
                  )}
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border-2 border-retro-black bg-white text-retro-black shadow-brutal-sm hover:bg-[#38bdf8] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all"
                    aria-label={`Open ${l.label}`}
                  >
                    <ExternalLink size={20} strokeWidth={2.5} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
