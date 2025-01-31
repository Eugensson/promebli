import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.5rem" },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      primary: ["var(--font-montserrat)", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#23262f",
        accent: "#286f6c",
        grey: {
          DEFAULT: "#919297",
          1: "#d9d9d9",
          2: "#e7e9eb",
          3: "#f5f5f5",
        },
        white: "#ffffff",
        pink: "pink",
      },
      backgroundImage: {
        hero: 'url("/images/hero-bg.png")',
        newsletter: 'url("/images/newsletter.png")',
      },
      dropShadow: {
        primary: "0px 4px 10px rgba(15, 27, 51, 0.05);",
      },
    },
  },
  plugins: [],
} satisfies Config;
