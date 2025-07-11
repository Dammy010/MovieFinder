import { Link } from 'react-router-dom';
import HowItWorks from './HowItWorks';

export default function Home() {
  return (
    <div className="bg-white">
      <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h1 className="text-5xl font-bold mb-6">Discover Movies Instantly</h1>
        <p className="text-lg mb-8">Find details about your favorite movies using our powerful search.</p>
        <Link
          to="/search"
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Search Movies
        </Link>
      </section>

      <section className="py-16">
        <HowItWorks />
      </section>
    </div>
  );
}