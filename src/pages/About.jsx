import { Film } from 'lucide-react';

export default function About() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-6">
          <Film className="w-10 h-10 text-blue-600" />
          <h1 className="text-4xl font-bold text-blue-600">About MovieFinder</h1>
        </div>

        <p className="text-gray-700 text-lg leading-relaxed">
          <strong>MovieFinder</strong> is a fast, reliable, and visually immersive movie search platform  help you find and explore detailed information about your favorite films —
          including posters, plots, genres, cast, ratings, and more.
        </p>

        <p className="text-gray-700 text-lg mt-4 leading-relaxed">
          Whether you're a casual movie-goer, a film student, or just looking for what to watch next,
          MovieFinder offers a simple, clean, and responsive interface to discover and dive into the world of cinema.
        </p>
      </div>
    </section>
  );
}
