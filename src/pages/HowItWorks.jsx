import { Search, MousePointerClick, Image, Film } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: 'Search',
      description: 'Type a movie title in the search bar and hit enter.',
    },
    {
      icon: <MousePointerClick className="w-8 h-8 text-blue-600" />,
      title: 'Click',
      description: 'Click the search button to find matching movies.',
    },
    {
      icon: <Image className="w-8 h-8 text-blue-600" />,
      title: 'Browse',
      description: 'Scroll through a gallery of posters and release dates.',
    },
    {
      icon: <Film className="w-8 h-8 text-blue-600" />,
      title: 'Explore',
      description: 'Click on a movie to view full details and enjoy!',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">How It Works</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-blue-100 p-3 rounded-full">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
            </div>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
