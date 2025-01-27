import React, { useEffect, useState } from "react";
import Home from "./Pages/Home"; // Importing the Home component
import Header from "./Components/Header"; // Importing the Header component
import { ThemeContext } from "./Context/ThemeContext"; // Importing the ThemeContext

// Main App component

export default function App() {
  const [theme, setTheme] = useState("dark"); // State variable to manage the current theme, default is 'dark'

  // useEffect to load the theme from localStorage when the component mounts
  useEffect(() => {
    // If a theme is stored in localStorage, use it, otherwise default to 'dark'
    // localStorage is a web API that allows you to store key-value pairs in the browser's storage,
    setTheme(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
    );
  }, []);

  return (
    // Providing the ThemeContext to child components with the current theme and the setTheme function

    <ThemeContext.Provider value={{ theme, setTheme }}>
      {/* Dynamically applying the theme class (dark or light) and background color based on the current theme */}
      <div
        className={`${theme}
    ${theme == "dark" ? "bg-[#121212]" : null} min-h-[100vh] `}
      >
        {/* Rendering the Header component */}
        <Header />
        {/* Rendering the Home component */}
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}


