import React, { useEffect, useState } from "react";
import GenreList from "../Components/GenreList"; // Import GenreList Component
import GlobalApi from "../Services/GlobalApi"; // Import GlobalApi Component
import Banner from "../Components/Banner"; // Import Banner Component
import TrendingGames from "../Components/TrendingGames"; // Import TrendingGames Component
import GameByGenresId from "../Components/GameByGenresId"; // Import GameByGenresId Component

function Home() {
  const [allGamesList, setAllGameList] = useState(); // State for storing the list of all games
  const [gameListByGenres, setGameListByGenres] = useState([]); // State to store the list of games filtered by the selected genre.

  // Fetches and logs all games on component mount using GlobalApi's getAllGames method.
  useEffect(() => {
    getAllGamesList(); // Fetch all games when the component loads.
    getGameByGenresId(4); // Fetch games by genre when the component loads.
  }, []);

  // Function to fetch the complete list of games and update the state

  const getAllGamesList = () => {
    // Call the API method to fetch all games

    GlobalApi.getAllGames.then((resp) => {
      // Once the API call is successful, update the state with the fetched games data
      // 'resp.data.results' contains the array of games from the API response

      setAllGameList(resp.data.results); // Updates the state with the fetched games data
      
    });
  };

  // Function to fetch games based on a specific genre ID

  const getGameByGenresId=(id)=>{
    
    // Call the API method to get the list of games for the given genre ID (hardcoded to 4 here)
    GlobalApi.getGameListByGenreId(id).then((resp) => {
      // Log the results of the API response to the console
      console.log(resp.data.results); // Log the games fetched for the specific genre
      setGameListByGenres(resp.data.results); // Update state for genre-based games
    });
  };

  return (
    // Main grid container with 4 columns for small screens, adjusting on larger screens

    <div className="grid grid-cols-4 px-6">
      {/* Sidebar for Genre section, hidden on small screens and visible on medium screens and up */}
      <div className=" hidden md:block">
        {/* Display the GenreList component in the sidebar for medium and larger screens */}
        <GenreList genereId={(genereId)=>getGameByGenresId(genereId)}/>
      </div>

      {/* Main game list section, takes up 4 columns on small screens and 3 columns on medium screens and up */}

      <div className="col-span-4 md:col-span-3 ">
        {/* Conditionally render components only if games data is available */}
        {allGamesList?.length > 0 && gameListByGenres.length > 0 ? (
          <div>
            {/* Check if allGamesList has elements, and if true, render the following */}

            {/* Pass the first game from the list to the Banner component */}
            <Banner gameBanner={allGamesList[0]} />

            {/* Pass the entire games list to the TrendingGames component */}
            <TrendingGames gameList={allGamesList} />

            {/* Render games by genres */}
            <GameByGenresId gameList={gameListByGenres} />
          </div>
        ) : null}
        {/* Null : If allGamesList is empty or undefined, render nothing */}
      </div>
    </div>
  );
}

export default Home;
