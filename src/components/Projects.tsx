const projects = [
  {
    title: "SaasFlow",
    desc: "Landing page SaaS B2B. Design épuré, animations, formulaire.",
    tags: ["Next.js", "Framer"],
  },
  {
    title: "GreenMarket",
    desc: "Site e-commerce bio. Dashboard, paiement, gestion des stocks.",
    tags: ["React", "Node"],
  },
  {
    title: "AssistBot",
    desc: "Assistant IA client. Intégré WhatsApp, réponses automatiques.",
    tags: ["OpenAI", "Python"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-48 border-b structural-line bg-brand-bg overflow-hidden">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* Left Side Label */}
        <div className="lg:w-48 flex-shrink-0 relative">
          <h2 className="text-xl font-bold tracking-[0.2em] text-brand-dark/40 lg:-rotate-90 origin-top-left lg:absolute lg:top-32 lg:left-0 whitespace-nowrap">
            ( PROJECTS 03 )
          </h2>
          <h2 className="text-4xl font-bold text-brand-dark mb-8 lg:mb-0 lg:ml-12">Projects</h2>
        </div>

        {/* Right Side Cards */}
        <div className="flex-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="group rounded-2xl bg-brand-dark p-6 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-orange/20 cursor-pointer">
              <div className="mb-6 h-40 rounded-xl bg-[#222] border border-white/10 flex items-center justify-center overflow-hidden relative">
                {/* Placeholder for project image */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.02)_10px,rgba(255,255,255,0.02)_20px)]"></div>
                <span className="text-3xl font-black text-white/10 group-hover:text-white/20 transition-colors">{project.title}</span>
                <div className="absolute inset-0 bg-brand-orange mix-blend-overlay opacity-0 group-hover:opacity-40 transition-opacity"></div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-brand-bg">{project.title}</h3>
              <p className="mb-6 text-sm text-gray-400 font-medium">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
