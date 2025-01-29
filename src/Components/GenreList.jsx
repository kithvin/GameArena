import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi"; // Import GlobalApi Component

/*** GenreList component: Fetches and logs the list of genres on mount. ***/

function GenreList({genereId}) {
  const [genreList, setGenreList] = useState([]); // State to hold the list of genres
  const [activeIndex, setActiveIndex] = useState([0]); // State to track the active genre index

  useEffect(() => {
    // Use useEffect to fetch the genre list when the component mounts
    getGenreList(); // Call the function to retrieve the genre list
  }, []); // Empty dependency array ensures this runs only once on mount

  /*** Retrieves the list of genres from the GlobalApi service. ***/
  const getGenreList = () => {
    // Assuming getGenreList is a promise-based function, use .then() to handle the response
    // However, it seems like getGenreList should be a function call (e.g., getGenreList())
    GlobalApi.getGenreList.then((resp) => {
      // Log the results of the genre list response
      // console.log(resp.data.results); // Log the response data for debugging purposes
      setGenreList(resp.data.results); // Update the state with the retrieved genres
    });
  };

  return (
    <div>
      {/* Wrapper div to contain the entire genre list component */}
      <h2 className="text-black text-[30px] font-bold dark:text-white">
        Genre
      </h2>
      {/* Map through the genreList array and render each genre */}
      {genreList.map((item, index) => (
        <div
          key={index} // Use a unique key for each item to ensure efficient rendering
          className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 
          group rounded-lg hover:dark:bg-gray-600 ${
            activeIndex == index ? "bg-gray-300 dark:bg-gray-600" : null
          }`}
          onClick={() => {setActiveIndex(index);genereId(item.id)}} // Sets the active genre index and updates the selected genre ID when clicked.
        >
          {/* Display the genre's background image */}
          <img
            src={item.image_background}
            alt={item.name} // Add an alt attribute for accessibility
            className={`w-[70px] h-[70px] object-cover rounded-lg group-hover:scale-105 
            transition-all ease-out duration-300 ${
              activeIndex == index ? "scale-105" : null
            }`}
          />
          {/* Display the genre's name */}
          <h3
            className={`dark:text-white text-[18px] group-hover:font-bold transition-all ease-out duration-300 ${
              activeIndex == index ? "font-bold" : null
            }`}
          >
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
}

// Export the GenreList component as the default export
export default GenreList; // Make the component available for use in other files
