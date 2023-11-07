/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        inter: "Inter",
        inconsolata: "Inconsolata"
      }
    },
  },

  plugins: [],
};

module.exports = config;
