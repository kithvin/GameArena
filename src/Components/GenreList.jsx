import React, { useEffect } from "react";
import GlobalApi from "../Services/GlobalApi"; // Import GlobalApi Component

/*** GenreList component: Fetches and logs the list of genres on mount.***/

function GenreList() {
  useEffect(() => {
    // Use useEffect to fetch the genre list when the component mounts
    getGenreList(); // Call the function to retrieve the genre list
  }, []); // Empty dependency array ensures this runs only once on mount

  /*** Retrieves the list of genres from the GlobalApi service.***/
  const getGenreList = () => {
    // Assuming getGenreList is a promise-based function, use .then() to handle the response
    // However, it seems like getGenreList should be a function call (e.g., getGenreList())
    GlobalApi.getGenreList.then((resp) => {
      // Log the results of the genre list response

      console.log(resp.data.results);
    });
  };
  return <div>GenreList-----</div>;
}

// Export the GenreList component as the default export
export default GenreList;
