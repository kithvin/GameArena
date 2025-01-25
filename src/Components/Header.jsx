import React, { useContext, useState } from "react";
import logo from "./../assets/Images/logo.png"; // Importing the logo image to display in the header
import { HiOutlineMagnifyingGlass } from "react-icons/hi2"; // Importing the search icon from react-icons library
import { HiMoon } from "react-icons/hi2"; // Importing the moon icon to represent a theme toggle or dark mode
import { HiSun } from "react-icons/hi2"; // Importing the sun icon to represent light mode
import { ThemeContext } from "../Context/ThemeContext";
import { useEffect } from "react";

// Header Component
function Header() {
  const [toggle, setToggle] = useState(true); // State to handle theme toggle (true for dark mode, false for light mode)
  const {theme,setTheme}=useContext(ThemeContext) // Using ThemeContext to get the current theme and its updater function

  useEffect(()=>{
    console.log("Theme", theme)
  },[])
  return (
    <div className="flex items-center p-3">
      {/* Logo Section */}

      <img src={logo} width={60} height={60} />

      {/* Search Bar Section */}

      <div className="flex bg-slate-200 p-3 w-full items-center mx-5 rounded-full">
        <HiOutlineMagnifyingGlass /> {/* Search Icon */}
        <input
          type="text"
          placeholder="Search Games"
          className="px-2 bg-transparent outline-none dark:bg-cyan-500"
        />
      </div>

      {/* Theme Toggle Section */}
      <div>
        {theme== 'light' ? (
          <HiMoon
            className="text-[40px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => setTheme('dark')} // Set the theme to dark on click
          />
        ) : (
          <HiSun
            className="text-[40px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => setTheme('light')} // Set the theme to light on click
          />
        )}
      </div>
    </div>
  );
}

export default Header; 
