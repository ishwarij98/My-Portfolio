import myPhoto from '../assets/myPhoto.jpeg';
import { useState } from 'react';

export default function About() {
  const [tab, setTab] = useState('core');

  const skills = {
    core: [
      "JavaScript", "React", "Node.js", "Express.js", "React Native",
      "HTML5", "CSS3", "Tailwind CSS", "Git", "MongoDB", "VS Code", "Nginx"
    ],
    mastering: ["TypeScript", "Firebase", "Redux", "Styled Components"],
    roadmap: ["Next.js", "GraphQL", "AWS"]
  };

  const tabTitles = {
    core: "Core Skills",
    mastering: "Currently Mastering",
    roadmap: "On My Roadmap"
  };

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-br from-slate-100 to-white dark:from-gray-900 dark:to-gray-950 transition-all duration-700 ease-in-out">
      <div className="max-w-6xl mx-auto text-center space-y-16">
        
        {/* Header */}
        <div>
          <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            About Me
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm <strong>Ishwari Jamodkar</strong>, a Full-Stack Developer blending clean code with creative design. I craft web solutions that are fast, functional, and user-focused.
          </p>
        </div> 

        {/* Photo and Skills */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <img
            src={myPhoto}
            alt="Ishwari Jamodkar"
            className="w-64 h-64 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-700 transform hover:scale-105 transition duration-300"
          />

          <div className="w-full md:w-2/3">
            <div className="flex justify-center md:justify-start gap-3 mb-6">
              {Object.keys(tabTitles).map((key) => (
                <button
                  key={key}
                  onClick={() => setTab(key)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm md:text-base
                    ${tab === key ? 'bg-teal-500 text-white shadow-md' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-teal-400 hover:text-white'}`}
                >
                  {tabTitles[key]}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {skills[tab].map((skill, index) => (
                <span
                  key={index}
                  className="bg-teal-100 dark:bg-gray-800 text-teal-700 dark:text-teal-300 px-5 py-2 rounded-xl text-sm font-semibold shadow hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* What I Do Section */}
        <div className="max-w-4xl mx-auto text-left space-y-8 mt-16">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white text-center">What I Do</h3>
          <ul className="grid md:grid-cols-2 gap-8 text-gray-700 dark:text-gray-300 text-base">
            <li className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
              <strong>Frontend Development</strong><br />
              I design intuitive interfaces using React and Tailwind CSS, focusing on responsiveness and smooth user experience.
            </li>
            <li className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
              <strong>Backend Engineering</strong><br />
              I build fast and secure APIs using Node.js, Express, and MongoDB — ensuring scalable architecture.
            </li>
            <li className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
              <strong>Mobile Development</strong><br />
              With React Native, I create cross-platform mobile apps that feel native and perform smoothly.
            </li>
            <li className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
              <strong>DevOps & Deployment</strong><br />
              I deploy and manage apps using Nginx, DigitalOcean, and Git – making sure your code sees the world.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
