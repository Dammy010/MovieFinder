import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
        className="p-2 w-1/2 border rounded-l-md"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 rounded-r-md">Search</button>
    </form>
  );
}