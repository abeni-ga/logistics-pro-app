/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js, ts, vue}", "./src/**/*"],
  theme: {
    extend: {
      backgroundImage: {
        "map-1": "url('./src/assets/Map.jpg)",
      },
    },
  },
};
