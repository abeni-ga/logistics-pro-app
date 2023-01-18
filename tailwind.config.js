/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js, ts, vue}", "./src/**/*"],
  theme: {
    extend: {
      screens: {
        sm: "750px",
        // => @media (min-width: 640px) { ... }

        md: "870px",
        // => @media (min-width: 768px) { ... }
      },
    },
  },
};
