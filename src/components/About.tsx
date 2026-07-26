const technologies = [
  "React", "TypeScript", "Tailwind CSS",
  "Node.js", "Python", "OpenAI API",
  "PostgreSQL", "Next.js", "Figma",
];

const philosophy = [
  { id: "01", title: "Expériences Web", desc: "Je construis des expériences web à fort taux de conversion et des assistants intelligents." },
  { id: "02", title: "Sur-mesure", desc: "Chaque projet est conçu de zéro pour répondre précisément à vos besoins métiers." },
  { id: "03", title: "Performance", desc: "Des solutions optimisées pour la rapidité et le SEO pour maximiser votre impact." },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-48 border-b structural-line bg-brand-bg">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Column 1: About */}
        <div className="md:col-span-4 pr-8 lg:border-r structural-line">
          <h2 className="mb-8 text-4xl font-bold tracking-tight text-brand-dark">À propos</h2>
          <p className="mb-6 text-lg font-medium text-brand-gray leading-relaxed">
            Développeur passionné avec 5 ans d'expérience. Je combine design thinking et expertise technique pour livrer des produits qui font la différence.
          </p>
          <p className="text-lg font-medium text-brand-gray leading-relaxed">
            Ma philosophie : concevoir des solutions élégantes et performantes, sans compromis sur la qualité.
          </p>
        </div>

        {/* Column 2: Philosophy */}
        <div className="md:col-span-5 px-0 lg:px-8 lg:border-r structural-line">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-brand-dark">Philosophie</h2>
          <div className="space-y-8">
            {philosophy.map((item) => (
              <div key={item.id} className="flex gap-4 items-start group">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-brand-orange text-white font-bold text-sm shadow-md shadow-brand-orange/20 transition-transform group-hover:scale-110">
                  {item.id}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark mb-1">{item.title}</h3>
                  <p className="text-brand-gray text-sm font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: Stack */}
        <div className="md:col-span-3 px-0 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-brand-dark">Stack</h2>
          <ul className="space-y-3">
            {technologies.map((tech) => (
              <li key={tech} className="text-lg font-bold text-brand-gray hover:text-brand-orange cursor-default transition-colors">
                {tech}
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </section>
  );
}
