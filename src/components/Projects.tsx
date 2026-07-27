import Reveal from "./Reveal";

const examples = [
  {
    title: "Landing page à haute conversion",
    desc: "Page produit unique, formulaire de capture optimisé, mise en avant d'une offre claire.",
    tags: ["Next.js", "Conversion"],
  },
  {
    title: "Site de vente en ligne",
    desc: "Catalogue produits, paiement intégré et gestion des stocks pour un e-commerçant.",
    tags: ["React", "E-commerce"],
  },
  {
    title: "Assistant IA client",
    desc: "Chatbot intégré à WhatsApp pour qualifier les demandes et répondre automatiquement.",
    tags: ["OpenAI", "Automatisation"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32 border-b structural-line bg-brand-bg">
      <Reveal className="mx-auto max-w-7xl">
        <h2 className="mb-2 text-4xl font-bold tracking-tight text-brand-dark">Réalisations</h2>
        <p className="mb-12 text-sm font-medium text-brand-gray">
          Exemples représentatifs du type de projets que nous menons.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {examples.map((example) => (
            <div key={example.title} className="rounded-2xl border border-brand-dark/10 bg-white/50 p-8">
              <div className="mb-6 h-1.5 w-12 rounded-full bg-brand-orange" />
              <h3 className="mb-3 text-lg font-bold text-brand-dark">{example.title}</h3>
              <p className="mb-6 text-sm text-brand-gray font-medium">{example.desc}</p>
              <div className="flex flex-wrap gap-2">
                {example.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-brand-dark/15 px-3 py-1 text-xs font-semibold text-brand-gray">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
