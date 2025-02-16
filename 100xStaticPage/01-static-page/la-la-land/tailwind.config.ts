import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lavender: "#C084FC",
      },
      fontFamily: {
        greatVibes: "var(--font-great-vibes)",
        yesevaOne: "var(--font-yeseva-one)"
      }
    },
  },
  plugins: [],
} satisfies Config;
