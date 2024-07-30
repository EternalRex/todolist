import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        appDarkOrange: "#E38D00",
        appLightOrange: "#EDCE00",
        appWhite: "#FFFFFF",
        appLightBlue: "#62B0DD",
        appDarkBlue: "#1A3555",
      },
    },
  },
  plugins: [],
};
export default config;
