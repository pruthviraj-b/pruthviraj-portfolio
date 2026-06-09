import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import AIChatbot from "@/components/AIChatbot";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Pruthvi Raj B — Retro Brutalist Portfolio",
  description:
    "Portfolio of Pruthvi Raj B — ISE graduate with a strong interest in AI, Android & full-stack web development. Built Shale-Namma Pride and Nexus Learn. Open to developer roles in India.",
  keywords: [
    "Pruthvi Raj B", "AI Operator", "Android Developer", "Kotlin", "Jetpack Compose",
    "Next.js", "React", "Firebase", "Supabase", "OpenAI", "VTU", "portfolio", "India",
  ],
  authors: [{ name: "Pruthvi Raj B" }],
  openGraph: {
    title: "Pruthvi Raj B — Retro Brutalist Portfolio",
    description: "ISE graduate building real-world Android and AI-powered web platforms.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-retro-bg text-retro-black antialiased selection:bg-retro-yellow selection:text-retro-black`}>
        {children}
        <AIChatbot />
      </body>
    </html>
  );
}
