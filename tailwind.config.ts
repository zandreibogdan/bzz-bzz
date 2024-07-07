import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        honeyYellow: "#FFC107",
        darkBrown: "#3E2723",
        lightAmber: "#FFECB3",
        offWhite: "#F5F5F5",
        darkSlateGray: "#2E2E2E",
        background: {
          light: "#ffffff",
          dark: "#ff69b4", // Set dark mode background to pink
        },
        text: {
          light: "#000000",
          dark: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
export default config;
