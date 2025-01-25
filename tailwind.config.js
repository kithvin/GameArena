/******Tailwind CSS configuration file specifying the setup for the project.******/

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",

  // Enable dark mode based on system settings.

  darkMode: "media", // Use system preferences for dark mode.

  // Specify files for Tailwind to scan.

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  // Theming options for extending Tailwind's default styles.
  theme: {
    extend: {},
  },
  plugins: [],
};
