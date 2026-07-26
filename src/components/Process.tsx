const steps = [
  {
    number: "01",
    title: "Écoute & Analyse",
    desc: "Analyse de votre marché et définition d'une stratégie gagnante.",
  },
  {
    number: "02",
    title: "Conception",
    desc: "Création du design et développement avec les meilleures technologies.",
  },
  {
    number: "03",
    title: "Tests",
    desc: "Itérations, retours et optimisations pour un produit parfait.",
  },
  {
    number: "04",
    title: "Livraison",
    desc: "Mise en production, formation et accompagnement continu.",
  }
];

export default function Process() {
  return (
    <section id="process" className="relative px-6 py-48 border-b structural-line bg-brand-bg overflow-hidden">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* Left Side Label */}
        <div className="lg:w-48 flex-shrink-0 relative">
          <h2 className="text-xl font-bold tracking-[0.2em] text-brand-dark/40 lg:-rotate-90 origin-top-left lg:absolute lg:top-32 lg:left-0 whitespace-nowrap">
            ( TIMELINE )
          </h2>
          <h2 className="text-4xl font-bold text-brand-dark mb-8 lg:mb-0 lg:ml-12">Process</h2>
        </div>

        {/* Right Side Timeline */}
        <div className="flex-1 relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-brand-dark/20 -translate-y-1/2 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className={`relative flex flex-col items-center text-center ${index % 2 !== 0 ? 'md:mt-32' : 'md:mb-32'}`}>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-bg border-2 border-brand-dark text-xl font-black text-brand-dark z-10 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-colors cursor-default">
                  {step.number}
                </div>
                <h3 className="mb-3 text-lg font-extrabold text-brand-dark">{step.title}</h3>
                <p className="text-sm font-medium text-brand-gray">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
