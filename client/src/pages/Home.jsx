import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900">
      <h1 className="text-5xl font-bold mb-4">Ishwari Jamodkar</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hey! I'm <strong>Ishwari Jamodkar</strong>, a passionate Full-Stack Developer from India. I specialize in creating interactive, scalable, and aesthetic applications using modern technologies. My expertise lies in frontend magic with React and backend strength using Node and MongoDB. Let’s build the future, one pixel and API at a time. ✨
          </p>
      <Link to="/about" className="bg-teal-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-600 transition transform hover:scale-105">
        Learn More ↓
      </Link>
    </section>
  );
}
