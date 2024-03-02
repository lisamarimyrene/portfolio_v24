import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,tss,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          dark: "#362B4F",
          medium: "#E9E4EF",
          light: "#F7F3FF",
        },
        orange: "#FFA289",
      },
      fontFamily: {
        archivo: ["var(--font-archivo)"],
        archivo_black: ["var(--font-archivo_black)"],
      },
    },
  },
  plugins: [],
};
export default config;
