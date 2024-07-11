/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      //app color pallete
      colors: {
        appDarkOrange: "#E38D00",
        appLightOrange: "#EDCE00",
        appWhite: "#FFFFFF",
        appLightBlue: "#62B0DD",
        appDarkBlue: "#1A3555",
      },
      dropShadow: {
        "app-ds-yellow": "0 10px 0px rgba(237, 206, 0, 1)",
      },
      fontFamily: {
        appfontsInter: "Inter",
        appfontsPoppins: "Poppins",
      },
      zIndex: {
        low: "10",
        medium: "20",
        large: "40",
        xlarge: "80",
        xxlarge: "160",
      },
      screens: {
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
      },
    },
  },
  plugins: [],
};
