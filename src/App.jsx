import React, { useState } from "react";
import Home from "./Pages/Home"; // Importing the Home component
import Header from "./Components/Header"; // Importing the Header component



function App() {
  const [theme, setTheme] = useState("dark");
  return (
    // State variable to manage the current theme (dark or light)
    <div
      className={`${theme}
    ${theme == "dark" ? "bg-[#121212]" : null} `} > {/* below code Dynamically apply a dark background color when the theme is 'dark' */}
      
    {/* Rendering the Header component */}
      <Header />

      {/* Rendering the Home component */}
      <Home />
    </div>
  );
}

export default App; 
