"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, User, Bot } from "lucide-react";
import { siteConfig } from "@/lib/data";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const SUGGESTIONS = [
  "What is Shale-Namma Pride?",
  "What is his tech stack?",
  "Tell me about the VTU internship",
  "Is he open to remote work?",
];

const BOT_RESPONSES: Record<string, string> = {
  default: `I can tell you about Pruthvi's projects, technical skills, internship experience, or education. Try asking: "What are his projects?" or "What is his tech stack?"`,
  
  greeting: `Hello! I am Pruthvi's AI Assistant. How can I help you learn more about his background today?`,
  
  projects: `Pruthvi has built three major projects:
  1. **Shale-Namma Pride**: A live bilingual (English + Kannada) school communication system.
  2. **Nexus Learn**: A smart management system with OpenAI-powered report generation.
  3. **JATHIN'S Learning Hub**: A home tuition platform built with Node.js, Express, and Next.js.`,
  
  shale: `**Shale-Namma Pride** is Pruthvi's standout project. It's a bilingual school portal deployed for real schools. Teachers post announcements/menus via an Android app, and parents see them live on a web portal synced instantly via Firebase Realtime Database.`,
  
  nexus: `**Nexus Learn** is a school management platform built with Next.js 14 and Supabase. It uses the OpenAI API to automatically generate personalized performance reports for students, saving teachers hours of manual documentation.`,
  
  jathin: `**JATHIN'S Learning Hub** is a full-stack platform built to help home tutors manage their schedules, students, and progress. It has separate dashboards for tutors and students and uses Node.js/Express.js with Prisma ORM.`,
  
  skills: `Pruthvi's core expertise includes:
  - **Mobile**: Kotlin, Jetpack Compose, Android Studio
  - **Web**: React.js, Next.js 14, TypeScript, Node.js, Express.js
  - **Databases**: Supabase, PostgreSQL, Firebase (Firestore & Realtime DB)
  - **AI**: OpenAI API, Prompt Engineering, Google AI Studio`,
  
  internship: `Pruthvi completed a 3-month **Android Developer Internship** through the VTU MoU program at **MindMatrix (CL Infotech)**. He built 5+ Compose screens, resolved 8 UI bugs (~30% crash reduction), and was awarded an **EXCELLENT** rating for delivering his modules 2 days early.`,
  
  contact: `You can reach Pruthvi at:
  - **Email**: ${siteConfig.email}
  - **Phone**: ${siteConfig.phone}
  - **LinkedIn**: linkedin.com/in/pruthvirajbc
  - **GitHub**: github.com/pruthviraj-b`,
  
  hiring: `Yes! Pruthvi has completed his B.E. in ISE in 2026 and is **immediately available** for Junior Android Developer, Full Stack Web Developer, or AI Operator roles across India. Remote and hybrid positions are welcome!`,
};

function getBotResponse(input: string): string {
  const query = input.toLowerCase();
  
  if (query.includes("hi") || query.includes("hello") || query.includes("hey") || query.includes("assistant")) {
    return BOT_RESPONSES.greeting;
  }
  if (query.includes("shale") || query.includes("namma") || query.includes("pride") || query.includes("school")) {
    return BOT_RESPONSES.shale;
  }
  if (query.includes("nexus") || query.includes("learn") || query.includes("openai")) {
    return BOT_RESPONSES.nexus;
  }
  if (query.includes("jathin") || query.includes("tuition") || query.includes("hub")) {
    return BOT_RESPONSES.jathin;
  }
  if (query.includes("project") || query.includes("portfolio") || query.includes("work")) {
    return BOT_RESPONSES.projects;
  }
  if (query.includes("skill") || query.includes("tech") || query.includes("stack") || query.includes("language") || query.includes("database")) {
    return BOT_RESPONSES.skills;
  }
  if (query.includes("intern") || query.includes("mindmatrix") || query.includes("experience") || query.includes("cl infotech")) {
    return BOT_RESPONSES.internship;
  }
  if (query.includes("contact") || query.includes("email") || query.includes("phone") || query.includes("reach") || query.includes("call")) {
    return BOT_RESPONSES.contact;
  }
  if (query.includes("hiring") || query.includes("job") || query.includes("open") || query.includes("remote") || query.includes("available") || query.includes("offer")) {
    return BOT_RESPONSES.hiring;
  }
  
  return BOT_RESPONSES.default;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "HI! I AM PRUTHVI'S AI ASSISTANT. ASK ME ANYTHING ABOUT HIS PROJECTS, SKILLS, OR EXPERIENCE!" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text }]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking and typing delay
    setTimeout(() => {
      const response = getBotResponse(text);
      setMessages((prev) => [...prev, { sender: "bot", text: response }]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-[340px] h-[460px] md:w-[380px] md:h-[500px] bg-white border-[4px] border-retro-black shadow-brutal flex flex-col mb-4 font-display"
          >
            {/* Header */}
            <div className="bg-retro-black p-4 flex items-center justify-between border-b-[4px] border-retro-black">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-retro-yellow border-[3px] border-retro-black shadow-brutal-sm flex items-center justify-center text-retro-black">
                  <Bot size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="text-base font-black text-white uppercase tracking-wider leading-none">PRUTHVI&apos;S BOT</h4>
                  <span className="text-xs font-bold text-[#4ade80] uppercase">● ONLINE</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-retro-yellow transition-colors"
                aria-label="Close chat"
              >
                <X size={28} strokeWidth={3} />
              </button>
            </div>

            {/* Message window */}
            <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4 scrollbar-thin">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex gap-3 max-w-[85%] ${
                    m.sender === "user" ? "self-end flex-row-reverse" : "self-start"
                  }`}
                >
                  <div
                    className={`w-8 h-8 flex items-center justify-center flex-shrink-0 border-[2px] border-retro-black shadow-brutal-sm ${
                      m.sender === "user" ? "bg-[#38bdf8] text-retro-black" : "bg-retro-yellow text-retro-black"
                    }`}
                  >
                    {m.sender === "user" ? <User size={18} strokeWidth={2.5} /> : <Bot size={18} strokeWidth={2.5} />}
                  </div>
                  <div
                    className={`p-3 text-sm font-bold leading-relaxed whitespace-pre-line border-[3px] border-retro-black shadow-brutal-sm ${
                      m.sender === "user"
                        ? "bg-white text-retro-black"
                        : "bg-retro-bg text-retro-black uppercase [&_strong]:font-black [&_strong]:bg-retro-yellow [&_strong]:px-1"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3 self-start">
                  <div className="w-8 h-8 bg-retro-yellow border-[2px] border-retro-black shadow-brutal-sm text-retro-black flex items-center justify-center flex-shrink-0">
                    <Bot size={18} strokeWidth={2.5} />
                  </div>
                  <div className="bg-retro-bg border-[3px] border-retro-black p-3 shadow-brutal-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-retro-black animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-2 h-2 bg-retro-black animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-2 h-2 bg-retro-black animate-bounce" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {messages.length === 1 && (
              <div className="p-3 border-t-[3px] border-retro-black bg-retro-bg flex flex-col gap-2">
                <span className="text-xs text-retro-black font-black uppercase tracking-wider px-1">SUGGESTED QUESTIONS:</span>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => handleSend(s)}
                      className="px-3 py-1.5 border-[2px] border-retro-black text-[11px] font-bold text-retro-black uppercase bg-white hover:bg-retro-yellow hover:translate-y-[2px] hover:translate-x-[2px] shadow-brutal-sm hover:shadow-none transition-all duration-200 text-left"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="p-3 border-t-[4px] border-retro-black bg-white flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="ASK SOMETHING..."
                className="flex-1 bg-retro-bg border-[3px] border-retro-black px-4 py-2 text-sm font-bold text-retro-black placeholder-retro-black/50 focus:outline-none focus:bg-white transition-colors uppercase"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-3 border-[3px] border-retro-black bg-[#4ade80] text-retro-black shadow-brutal-sm hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:translate-x-0 disabled:hover:shadow-brutal-sm transition-all"
                aria-label="Send message"
              >
                <Send size={20} strokeWidth={2.5} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 md:w-16 md:h-16 bg-retro-yellow text-retro-black flex items-center justify-center border-[4px] border-retro-black shadow-brutal hover:bg-white hover:translate-y-[4px] hover:translate-x-[4px] hover:shadow-none transition-all"
        aria-label="Open AI Assistant"
      >
        <MessageSquare size={28} strokeWidth={2.5} />
      </motion.button>
    </div>
  );
}
