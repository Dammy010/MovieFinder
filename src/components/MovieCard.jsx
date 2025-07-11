import { useNavigate } from 'react-router-dom';

export default function MovieCard({ movie }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.imdbID}`);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition"
      onClick={handleClick}
    >
      <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{movie.Title}</h3>
        <p className="text-gray-700">Year: {movie.Year}</p>
      </div>
    </div>
  );
}