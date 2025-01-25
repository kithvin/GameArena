import React from "react";

function Home() {
  return (
    // Main grid container with 4 columns for small screens, adjusting on larger screens
    <div className="grid grid-cols-4">
      
      {/* Sidebar for Genre section, hidden on small screens and visible on medium screens and up */}
      <div className="bg-red-500 h-full hidden md:block">Genre</div>

      {/* Main game list section, takes up 4 columns on small screens and 3 columns on medium screens and up */}
      <div className="col-span-4 md:col-span-3 bg-blue-400">Game List</div>
    </div>
  );
}

export default Home;
