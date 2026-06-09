"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl -z-10" />

      <div className="text-center max-w-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-8xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            404
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="text-2xl font-bold text-white mt-4"
        >
          NullPointerException
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-slate-400 text-sm mt-3 leading-relaxed"
        >
          The resource you requested has been dereferenced, garbage collected, or moved to a different branch. Let&apos;s get you back to production.
        </motion.p>

        {/* Mock code block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="bg-slate-900 border border-slate-800 rounded-xl p-4 my-8 text-left font-mono text-xs text-slate-500 shadow-xl"
        >
          <div className="flex gap-1.5 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <p className="text-violet-400">const <span className="text-cyan-400">pageState</span> = <span className="text-amber-400">null</span>;</p>
          <p className="text-slate-500">{"// Stack trace:"}</p>
          <p className="text-rose-400">Error: Page index out of bounds</p>
          <p className="text-slate-500">&nbsp;&nbsp;&nbsp;&nbsp;at getStaticProps (app/page.tsx:404:0)</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-500 hover:to-indigo-500 transition-all duration-200 shadow-lg shadow-violet-900/40 hover:-translate-y-0.5"
          >
            Back to main branch
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
