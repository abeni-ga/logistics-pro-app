/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js, ts, vue}", "./src/**/*"],
  important: "#root",
  plugins: [require("tailwind-scrollbar-hide")],
  theme: {
    extend: {
      colors: {
        lightBlack: "#383838",
        darkIndigo: "#053079",
        mainAsh: "#92929D",
        secondAsh: "#C4C4C4",
        offAsh: "rgba(196, 196, 196, 0.35)",
        lightBlue: "#E8F0FE",
        brightGreen: "#00CE2D",
        mainRed: "#FA2525",
        offWhite: "#F7F7F7",
        mainColor2: "#053582",
        yellow: "#FFB200",
        bolow: "#4339F2",
        linMainBlue:
          "linear-gradient(270deg, #054D82 14.18%, rgba(5, 53, 130, 0.72) 100%)",
        bg: "#E5EFF4",
        bgWhiteSmoke: "#E5E5E5",
        indigo: "#053582",
        lightGreen: "rgba(0, 206, 45, 0.1)",
        lightGray: "#9CA3AF",
        mdGray: "#707070",
        darkGray: "#374151",
        bgLightRed: "rgba(255, 45, 0,0.1)",
      },

      screens: {
        sm: "750px",
        // => @media (min-width: 640px) { ... }

        md: "870px",
        // => @media (min-width: 768px) { ... }
      },
    },
  },
};
