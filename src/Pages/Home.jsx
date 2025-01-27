import React from "react";
import GenreList from "../Components/GenreList"; // Import GenreList Component

function Home() {
  return (
    // Main grid container with 4 columns for small screens, adjusting on larger screens
    <div className="grid grid-cols-4 px-6">
      {/* Sidebar for Genre section, hidden on small screens and visible on medium screens and up */}
      <div className=" hidden md:block">
        {/* Render the GenreList component within the sidebar */}
        <GenreList />
      </div>

      {/* Main game list section, takes up 4 columns on small screens and 3 columns on medium screens and up */}

      <div className="col-span-4 md:col-span-3 bg-blue-400">Game List</div>
    </div>
  );
}

export default Home;
