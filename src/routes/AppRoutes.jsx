import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import HowItWorks from '../pages/HowItWorks';
import SearchMovies from '../pages/SearchMovies';
import MovieDetail from '../pages/MovieDetail';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/search" element={<SearchMovies />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}