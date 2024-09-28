import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "foreground-light": "#111",
        "background1-light": "#ddd",
        "background2-light": "#eee",
        "foreground-dark": "#eee",
        "background1-dark": "#222",
        "background2-dark": "#111",
      },
    },
  },
  plugins: [],
};
export default config;
