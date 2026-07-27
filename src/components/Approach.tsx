import Reveal from "./Reveal";

const philosophy = [
  { id: "01", title: "Stratégie & design", desc: "Chaque projet allie stratégie, design et développement pour un impact concret sur votre activité." },
  { id: "02", title: "Sur-mesure", desc: "Chaque solution est conçue de zéro pour répondre précisément à vos besoins métiers." },
  { id: "03", title: "Performance", desc: "Des produits optimisés pour la rapidité et le SEO, pour maximiser votre impact." },
];

export default function Approach() {
  return (
    <section id="approach" className="relative px-6 py-32 border-b structural-line bg-brand-bg">
      <Reveal className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-4xl font-bold tracking-tight text-brand-dark">Notre approche</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {philosophy.map((item) => (
            <div key={item.id}>
              <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-full bg-brand-orange text-white font-bold">
                {item.id}
              </div>
              <h3 className="mb-3 text-xl font-bold text-brand-dark">{item.title}</h3>
              <p className="max-w-[42ch] text-brand-gray font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
