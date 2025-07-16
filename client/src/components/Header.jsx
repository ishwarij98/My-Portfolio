import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-lg bg-white/70 dark:bg-gray-900/80 shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-teal-600 dark:text-teal-400">Ishwari Jamodkar</h1>
        <ul className="flex space-x-6 text-gray-700 dark:text-gray-200 font-medium">
          <li><Link to="/" className="hover:text-teal-500">Home</Link></li>
          <li><Link to="/about" className="hover:text-teal-500">About</Link></li>
          <li><Link to="/projects" className="hover:text-teal-500">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-teal-500">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
