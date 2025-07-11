import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = 'https://www.omdbapi.com/';

export default function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${id}`);
        setMovie(response.data);
      } catch (err) {
        setError('Failed to load movie details.');
      }
    };
    fetchMovie();
  }, [id]);

  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;
  if (!movie) return <p className="text-center mt-10 text-lg">Loading movie details...</p>;

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <button
        onClick={() => navigate('/search')}
        className="mb-6 px-5 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
      >
        ← Back to Search
      </button>

      <div className="flex flex-col md:flex-row items-start gap-8 bg-white rounded-lg shadow-lg p-6">
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : '/no-poster.png'}
          alt={movie.Title}
          className="w-full md:w-1/2 rounded shadow-md"
        />

        <div className="flex-1 space-y-3">
          <h1 className="text-4xl font-bold text-blue-700">{movie.Title}</h1>
          <p><span className="font-semibold">Year:</span> {movie.Year}</p>
          <p><span className="font-semibold">Genre:</span> {movie.Genre}</p>
          <p><span className="font-semibold">Director:</span> {movie.Director}</p>
          <p><span className="font-semibold">Actors:</span> {movie.Actors}</p>
          <p><span className="font-semibold">Plot:</span> {movie.Plot}</p>
          <p><span className="font-semibold">IMDB Rating:</span> ⭐ {movie.imdbRating}</p>
          <p><span className="font-semibold">Runtime:</span> {movie.Runtime}</p>
          <p><span className="font-semibold">Language:</span> {movie.Language}</p>
        </div>
      </div>
    </div>
  );
}
