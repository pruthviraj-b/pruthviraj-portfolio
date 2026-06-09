import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      colors: {
        retro: {
          bg: "#f4f1ea",
          yellow: "#ffc700",
          black: "#111111",
        },
        slate: {
          950: "#020617",
        },
      },
      boxShadow: {
        "brutal-sm": "2px 2px 0px 0px rgba(17,17,17,1)",
        "brutal": "4px 4px 0px 0px rgba(17,17,17,1)",
        "brutal-lg": "8px 8px 0px 0px rgba(17,17,17,1)",
        "brutal-white": "4px 4px 0px 0px rgba(255,255,255,1)",
      },
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
