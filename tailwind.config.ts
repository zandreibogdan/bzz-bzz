import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        honeyYellow: "#FFC107",
        darkBrown: "#3E2723",
        lightAmber: "#FFECB3",
        offWhite: "#F5F5F5",
        darkSlateGray: "#2E2E2E",
      },
    },
  },
  plugins: [],
};
export default config;
