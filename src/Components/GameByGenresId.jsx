import React, { useEffect } from "react";

// Functional component to handle games by genre IDs.
function GameByGenresId({ gameList }) {
  useEffect(() => {
    // Logs the 'gameList' variable to the console.
    console.log("GameList", gameList);
  }, []); // Added dependency

  return (
    <div>
      <h2 className="font-bold text-[30px] dark:text-white mt-5 pb-10 h-full">
        Popular Games
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gameList.map((item) => (
          <div className="bg-[#76a8f75e] p-3 rounded-lg mt-4 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
            <img
              src={item.background_image}
              className="w-full h-[80%] rounded-xl object-cover"
            />
            <h3 className="font-bold text-center text-[18px] ">
              {item.name}
              <span className="p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium">{item.metacritic}</span>
            </h3>

            <h2 className="text-[20px] text-gray-500 dark:text-gray-300 font-bold text-center">
              ⭐{item.rating} 🗨{item.reviews_count} 🔥{item.suggestions_count}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameByGenresId;
