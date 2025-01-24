import React, { useState } from "react";
import logo from "./../assets/Images/logo.png"; // Importing the logo image to display in the header
import { HiOutlineMagnifyingGlass } from "react-icons/hi2"; // Importing the search icon from react-icons library
import { HiMoon } from "react-icons/hi2"; // Importing the moon icon to represent a theme toggle or dark mode
import { HiSun } from "react-icons/hi2"; // Importing the sun icon to represent light mode

// Header Component
function Header() {
  const [toggle, setToggle] = useState(false); // State to handle theme toggle (true for dark mode, false for light mode)
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
          className="px-2 bg-transparent outline-none"
        />
      </div>

      {/* Theme Toggle Section */}
      <div>
        {toggle ? (
          <HiMoon
            className="text-[40px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => setToggle(!toggle)} // Toggle theme state on click
          />
        ) : (
          <HiSun
            className="text-[40px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => setToggle(!toggle)} // Toggle theme state on click
          />
        )}
      </div>
    </div>
  );
}

export default Header; // Exporting the Header component for use in other parts of the application
