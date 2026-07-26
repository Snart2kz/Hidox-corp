import { Link } from "react-router-dom";

const services = [
  {
    id: "01",
    title: "Landing Page",
    desc: "Page optimisée pour la conversion avec design percutant, animations fluides.",
    icon: "✦",
  },
  {
    id: "02",
    title: "Site Vitrine / Vente",
    desc: "Site complet multi-pages pour présenter votre offre et convertir vos visiteurs.",
    icon: "🚀",
  },
  {
    id: "03",
    title: "Assistant IA",
    desc: "Chatbot intelligent sur-mesure intégré pour automatiser votre support et vos ventes.",
    icon: "🤖",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-48 border-b structural-line bg-brand-bg">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* Left Side Label */}
        <div className="lg:w-48 flex-shrink-0">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark -rotate-90 origin-bottom-left absolute hidden lg:block" style={{ transform: 'rotate(-90deg) translateX(-100%)' }}>
            Services
          </h2>
          <h2 className="text-4xl font-bold text-brand-dark lg:hidden mb-4">Services</h2>
        </div>

        {/* Right Side Cards */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="group relative bg-brand-bg border border-brand-dark overflow-hidden flex flex-col transition-all hover:shadow-[8px_8px_0px_0px_rgba(255,75,31,1)]">
              {/* Header with Number */}
              <div className="p-6 border-b border-brand-dark flex justify-between items-center bg-white/50">
                <span className="text-2xl font-black text-brand-dark">{service.id}</span>
              </div>
              
              {/* Body */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-3xl mb-4 opacity-80 group-hover:scale-110 transition-transform origin-left">{service.icon}</div>
                <h3 className="mb-3 text-xl font-extrabold text-brand-dark leading-tight">{service.title}</h3>
                <p className="text-sm font-medium text-brand-gray mb-6 flex-1">{service.desc}</p>
                
                <Link to="/booking" className="inline-flex items-center gap-2 mt-auto self-start text-xs font-bold uppercase tracking-wider text-brand-dark group-hover:text-brand-orange transition-colors">
                  <span className="border border-brand-dark/20 rounded-full px-4 py-2 hover:border-brand-orange hover:bg-brand-orange/5">
                    En savoir plus
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
