// Projects.jsx

const projects = {
  "DOM Projects": [
    { title: "Simple Todo App", link: "https://simpletodo.ishwari.online" },
    { title: "Quick Poll", link: "https://quickpoll.ishwari.online" },
    { title: "Password Vault", link: "https://passwordvault.ishwari.online" },
  ],
  "React Projects": [
    { title: "Food Delivery App", link: "#" }, // Add link when available
    { title: "Calculator", link: "https://math.ishwari.online" },
  ],
  "Full Stack Projects": [
    { title: "Todo App", link: "https://todo.ishwari.online" },
  ]
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gradient-to-br from-slate-100 to-white dark:from-gray-900 dark:to-gray-950 transition-all duration-700 ease-in-out"
    >
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
        My Projects
      </h2>

      <div className="space-y-16 max-w-6xl mx-auto">
        {Object.entries(projects).map(([category, items], index) => (
          <div key={index}>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200 border-l-4 border-teal-500 pl-4">
              {category}
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {items.map((proj, i) => (
                <a
                  key={i}
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 group"
                >
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-teal-500">
                    {proj.title}
                  </h4>
                  <span className="text-sm text-teal-600 dark:text-teal-400">Visit →</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
