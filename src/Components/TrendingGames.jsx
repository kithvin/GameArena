import React, { useEffect } from "react";

// TrendingGames component that displays a list of trending games

function TrendingGames({ gameList }) {
  // useEffect hook to log the gameList when the component mounts

  useEffect(() => {
    console.log(gameList);
  }, []); // Empty dependency array ensures it runs only once when the component is mounted
  return (
    <div className="mt-5 hidden md:block">
      {/* Title of the section */}
      <h2 className="font-bold text-[30px] dark:text-white">Trending Games</h2>

      {/* Grid layout for displaying games, with 4 columns on larger screens */}

      <div className="md:grid gap-4 mt-5 lg:grid-cols-4">
        {/* Mapping through gameList to display each game, but only showing the first 4 */}

        {gameList.map(
          (item, index) =>
            index < 4 && (
              <div className="bg-[#76a8f75e] rounded-lg group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
                {/* Game image */}

                <img
                  src={item.background_image}
                  className="h-[270px] rounded-t-lg object-cover"
                />

                {/* Game title */}

                <h2 className="dark:text-white p-2 text-[20px] font-bold text-center">
                  {item.name}
                </h2>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default TrendingGames;
