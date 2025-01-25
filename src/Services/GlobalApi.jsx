import axios from "axios"; // Import the axios library for making HTTP requests

const key = "400f128c1a4847d18ab49de8eed6bec7"; // Define API key for accessing the RAWG API

// Create an instance of axios with a base URL for the RAWG API

const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

/**
 * Function to fetch the list of genres from the RAWG API.
 * @returns {Promise} A promise that resolves with the response data.
 */

const getGenreList = axiosCreate.get("/genres?key=" + key); // Pass the API key as a query parameter
export default {
  getGenreList,
};
