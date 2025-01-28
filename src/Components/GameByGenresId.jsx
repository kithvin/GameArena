import React, { useEffect } from "react";

// Functional component to handle games by genre IDs.

function GameByGenresId({gameList}) {
  useEffect(() => {
    // Logs the 'gameList' variable to the console.
    console.log("GameList", gameList);
  }, []);
  return <div>GameByGenresId</div>;
}

export default GameByGenresId;
