/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",

  darkMode: "media", // Use system preferences for dark mode.

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Specify files for Tailwind to scan.

  theme: {
    extend: {},
  },
  plugins: [],
};
