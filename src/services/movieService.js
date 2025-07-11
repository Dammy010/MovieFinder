import axios from 'axios';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = 'https://www.omdbapi.com/';

export const fetchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
  return response.data;
};