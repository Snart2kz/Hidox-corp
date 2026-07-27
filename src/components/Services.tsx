import { Link } from "react-router-dom";
import Reveal from "./Reveal";

const services = [
  {
    id: "01",
    title: "Landing Page",
    desc: "Page optimisée pour la conversion, design percutant et chargement rapide.",
  },
  {
    id: "02",
    title: "Site vitrine & vente",
    desc: "Site complet multi-pages pour présenter votre offre et convertir vos visiteurs.",
  },
  {
    id: "03",
    title: "Assistant IA",
    desc: "Chatbot intelligent sur-mesure pour automatiser votre support et vos ventes.",
  },
  {
    id: "04",
    title: "Application sur-mesure",
    desc: "Outil ou plateforme conçu spécifiquement pour automatiser vos process métiers.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-32 border-b structural-line bg-brand-bg">
      <Reveal className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-4xl font-bold tracking-tight text-brand-dark">Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col rounded-2xl border border-brand-dark/10 bg-white/50 p-8 transition-shadow hover:shadow-[0_8px_30px_rgba(17,17,17,0.08)]"
            >
              <span className="mb-6 text-sm font-bold text-brand-orange">{service.id}</span>
              <h3 className="mb-3 text-xl font-extrabold text-brand-dark">{service.title}</h3>
              <p className="text-sm font-medium text-brand-gray mb-8 flex-1">{service.desc}</p>

              <Link
                to="/booking"
                className="inline-flex self-start rounded-full border border-brand-dark/20 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-dark transition-colors group-hover:border-brand-orange group-hover:text-brand-orange"
              >
                En savoir plus
              </Link>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
