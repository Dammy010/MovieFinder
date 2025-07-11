import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-400">
          MovieFinder
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-300">Home</Link>
          <Link to="/about" className="hover:text-blue-300">About</Link>
          <Link to="/search" className="hover:text-blue-300">Search</Link>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 space-y-2">
          <Link to="/" onClick={closeMenu} className="block hover:text-blue-300">Home</Link>
          <Link to="/about" onClick={closeMenu} className="block hover:text-blue-300">About</Link>
          <Link to="/search" onClick={closeMenu} className="block hover:text-blue-300">Search</Link>
        </div>
      )}
    </nav>
  );
}
