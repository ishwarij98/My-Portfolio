export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6 mt-20">
      <div className="max-w-7xl mx-auto text-center text-sm text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Ishwari Jamodkar • All rights reserved</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/ishwarij98" className="hover:text-teal-500">GitHub</a>
          <a href="https://linkedin.com/in/ishwarijamodkar08ij" className="hover:text-teal-500">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
