import React, { useEffect, useState } from "react";
import GenreList from "../Components/GenreList"; // Import GenreList Component
import GlobalApi from "../Services/GlobalApi"; // Import GlobalApi Component
import Banner from "../Components/Banner"; // Import Banner Component

function Home() {
  const [allGamesList, setAllGameList] = useState(); // State for storing the list of all games

  // Fetches and logs all games on component mount using GlobalApi's getAllGames method.
  useEffect(() => {
    getAllGamesList(); // Calls the function to fetch games when the component loads.
  }, []);

  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((resp) => {
      setAllGameList(resp.data.results); // Updates the state with the fetched games data.
    });
  };
  return (
    // Main grid container with 4 columns for small screens, adjusting on larger screens
    <div className="grid grid-cols-4 px-6">
      {/* Sidebar for Genre section, hidden on small screens and visible on medium screens and up */}
      <div className=" hidden md:block">
        {/* Render the GenreList component within the sidebar */}
        <GenreList />
      </div>

      {/* Main game list section, takes up 4 columns on small screens and 3 columns on medium screens and up */}

      <div className="col-span-4 md:col-span-3 ">
        {/* Check if there are any games in the list, and display the banner for the first game */}

        {allGamesList?.length > 0 ? (
          <Banner gameBanner={allGamesList[0]} /> // Pass the first game from the list to the Banner component
        ) : null}
        {/* Null : If no games, render nothing */}
      </div>
    </div>
  );
}

export default Home;
