import React, { useState } from "react";
import Home from "./Pages/Home"; // Importing the Home component
import Header from "./Components/Header"; // Importing the Header component
import { ThemeContext } from "./Context/ThemeContext"; // Importing the ThemeContext

// Main App component

function App() {
  const [theme, setTheme] = useState("light"); // State variable to manage the current theme (default is 'light')
  return (
    // Providing the ThemeContext to child components with the current theme and its updater function

    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`${theme}
    ${theme == "dark" ? "bg-[#121212]" : null} h-[100vh] `}
      >
        
        {/* below code Dynamically apply a dark background color when the theme is 'dark' */}
        {/* Rendering the Header component */}
        <Header />
        {/* Rendering the Home component */}
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
