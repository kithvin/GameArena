import React, { useEffect } from "react";

// Banner component displays a game banner with a name, image, and button

function Banner({ gameBanner }) {
  // Log gameBanner prop whenever it updates

  useEffect(() => {
    // console.log("gameBanner", gameBanner); // Dependency array ensures the effect runs only when gameBanner changes
  });
  return (
    <div className="relative">
      {/* Displays the game banner image with a responsive height, full width, and rounded corners */}

      <div className="absolute bottom-0 left-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full">
        <h2 className="text-[24px] text-white font-bold mb-3">{gameBanner.name}</h2>
        <button className="bg-blue-700 text-white font-bold text-[14px] py-2 px-4 rounded-lg shadow-md hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 transition-all duration-300 ease-in-out">
          Get Now
        </button>
      </div>

      {/* Game banner image */}

      <img
        src={gameBanner.background_image}
        className="md:h-[450px] w-full object-fit rounded-xl"
      />
    </div>
  );
}

export default Banner;
