const percentageWidth = require("tailwindcss-percentage-width");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, js, ts, vue}", 
    "./src/**/*"
],
  theme: {
    extend: {},
  },
  plugins: [percentageWidth],
};
