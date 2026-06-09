import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import { Experience, Certifications, Education } from "@/components/ExperienceEduCerts";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <footer className="border-t-[4px] border-retro-black py-8 bg-retro-yellow">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 font-display">
          <p className="text-retro-black text-sm font-bold uppercase tracking-wide">
            Designed & built by{" "}
            <span className="font-black underline decoration-[3px] underline-offset-4">Pruthvi Raj B</span> · 2026
          </p>
          <div className="flex items-center gap-2 text-sm text-retro-black font-bold uppercase bg-white px-4 py-2 border-2 border-retro-black shadow-brutal-sm">
            <span className="w-2.5 h-2.5 bg-[#4ade80] border-2 border-retro-black animate-pulse" />
            Open to Work · Chikkaballapur, KA
          </div>
        </div>
      </footer>
    </>
  );
}
