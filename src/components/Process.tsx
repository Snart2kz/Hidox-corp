import { Fragment } from "react";
import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Écoute & analyse",
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
    desc: "Itérations, retours et optimisations pour un produit fiable.",
  },
  {
    number: "04",
    title: "Livraison",
    desc: "Mise en production, formation et accompagnement continu.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative px-6 py-32 border-b structural-line bg-brand-bg">
      <Reveal className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-4xl font-bold tracking-tight text-brand-dark">Process</h2>

        <div className="flex flex-col md:flex-row md:items-start gap-12 md:gap-0">
          {steps.map((step, index) => (
            <Fragment key={step.number}>
              <div className="md:flex-1 md:pr-8">
                <span className="mb-4 block text-5xl font-light text-brand-orange">{step.number}</span>
                <h3 className="mb-2 text-lg font-extrabold text-brand-dark">{step.title}</h3>
                <p className="max-w-[32ch] text-sm font-medium text-brand-gray">{step.desc}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:flex items-start justify-center pt-3 px-4 text-brand-dark/15">
                  <svg className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
