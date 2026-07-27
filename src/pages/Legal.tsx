import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const sections = [
  {
    title: "Éditeur du site",
    body: [
      "Raison sociale : Landify (à confirmer)",
      "Forme juridique et numéro d'immatriculation : à confirmer",
      "Adresse du siège : à confirmer",
      "Directeur de la publication : à confirmer",
      "Contact : contact@landify.co (à confirmer)",
    ],
  },
  {
    title: "Hébergement",
    body: ["Hébergeur : à confirmer", "Adresse de l'hébergeur : à confirmer"],
  },
  {
    title: "Propriété intellectuelle",
    body: [
      "L'ensemble des contenus présents sur ce site (textes, visuels, marque, logo) est la propriété de Landify, sauf mention contraire, et ne peut être reproduit sans autorisation préalable.",
    ],
  },
  {
    title: "Données personnelles",
    body: [
      "Les informations transmises via le formulaire de contact sont utilisées uniquement pour répondre à votre demande et ne sont ni vendues ni transmises à des tiers.",
      "Vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour l'exercer, contactez-nous à l'adresse ci-dessus.",
    ],
  },
];

export default function Legal() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-brand-bg pt-32 pb-24">
        <section className="px-6">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-brand-dark">Mentions légales</h1>
            <p className="mb-16 text-sm font-medium text-brand-dark/40">
              Les champs marqués "(à confirmer)" doivent être complétés avec les informations réelles de Landify avant mise en ligne.
            </p>

            <div className="space-y-12">
              {sections.map((section) => (
                <div key={section.title} className="border-t structural-line pt-8">
                  <h2 className="mb-4 text-xl font-bold text-brand-dark">{section.title}</h2>
                  <div className="space-y-2">
                    {section.body.map((line) => (
                      <p key={line} className="text-brand-gray font-medium leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
