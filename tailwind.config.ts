import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens: {
      tiny: "300px",
      mobile: "440px",
      tablet: "640px",
      laptop: "960px",
      laptopLarge: "1160px",
      desktopSmall: "1280px",
      desktopMedium: "1580px",
      desktopLarge: "1920px",
    },
  },
  plugins: [],
};
export default config;
