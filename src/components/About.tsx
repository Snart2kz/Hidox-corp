import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-32 border-b structural-line bg-brand-bg">
      <Reveal className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <span className="mb-4 block text-7xl leading-none text-brand-orange/25">“</span>
          <p className="text-3xl md:text-4xl font-bold leading-tight text-brand-dark">
            Nous croyons que la technologie doit être un <em className="not-italic text-brand-orange">véritable levier de croissance</em>, pas une simple vitrine.
          </p>
        </div>

        <div className="lg:col-span-7 lg:pl-8 lg:border-l structural-line">
          <h2 className="mb-8 text-4xl font-bold tracking-tight text-brand-dark">À propos</h2>
          <p className="mb-6 max-w-[60ch] text-lg font-medium text-brand-gray leading-relaxed">
            Landify est un studio de croissance digitale qui accompagne les entreprises dans leur transformation numérique avec des solutions performantes, modernes et orientées résultats.
          </p>
          <p className="mb-8 max-w-[60ch] text-lg font-medium text-brand-gray leading-relaxed">
            Notre ambition : devenir le partenaire technologique de référence des entreprises africaines.
          </p>

          <span className="inline-flex items-center gap-2 rounded-full border border-brand-dark/15 px-5 py-2.5 text-sm font-bold text-brand-dark">
            <svg className="h-4 w-4 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <circle cx="12" cy="12" r="9" />
              <path strokeLinecap="round" d="M3 12h18M12 3c2.5 2.7 3.8 6 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-6-3.8-9s1.3-6.3 3.8-9z" />
            </svg>
            Pensé pour les entreprises africaines
          </span>
        </div>
      </Reveal>
    </section>
  );
}
