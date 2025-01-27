/** @type {import('tailwindcss').Config} */
export default {
  // Enabling dark mode with a custom class selector for manual control.
  darkMode: "selector",

  // Specify the files Tailwind CSS should scan to generate utility classes.
  // This ensures unused styles are purged in production for optimized performance.

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  // Plugins array for adding additional Tailwind CSS functionality
  theme: {
    extend: {},
  },
  plugins: [],
};
