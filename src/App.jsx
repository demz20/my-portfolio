import React from 'react';

const Portfolio = () => {
  const projects = [
    { title: "Project Alpha", desc: "A real-time data dashboard.", tech: "React, Node.js" },
    { title: "Project Beta", desc: "E-commerce API integration.", tech: "Python, AWS" },
    { title: "Project Gamma", desc: "Automated CI/CD pipeline.", tech: "Docker, YAML" },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans p-8">
      {/* Hero Section */}
      <header className="max-w-4xl mx-auto py-20">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Hi, I'm [Your Name].
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl">
          I'm a Developer focused on building clean, automated, and scalable web solutions.
          Currently exploring the intersection of DevOps and Frontend.
        </p>
      </header>

      {/* Projects Grid */}
      <main className="max-w-4xl mx-auto py-12">
        <h2 className="text-2xl font-semibold mb-8 border-b border-slate-700 pb-2">Selected Work</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="p-6 rounded-xl bg-slate-800 border border-slate-700 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-slate-400 mb-4">{project.desc}</p>
              <span className="text-xs font-mono bg-slate-700 px-2 py-1 rounded text-blue-300">{project.tech}</span>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto py-20 text-center border-t border-slate-800">
        <p className="mb-4">Let's build something together.</p>
        <div className="flex justify-center gap-6">
          <a href="#" className="hover:text-blue-400">GitHub</a>
          <a href="#" className="hover:text-blue-400">LinkedIn</a>
          <a href="mailto:your@email.com" className="hover:text-blue-400">Email</a>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;