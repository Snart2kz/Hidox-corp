import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Booking() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-brand-bg pt-32 pb-24">
        <section className="px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4">
              <span className="rounded-full border border-brand-orange/30 bg-brand-orange/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange">
                Prise de rendez-vous
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
              Réservez un appel découverte
            </h1>
            <p className="mx-auto mb-12 max-w-2xl text-lg font-medium text-brand-gray">
              Sans engagement. On discute de votre projet, de vos objectifs et de la meilleure façon de collaborer.
            </p>

            <div className="overflow-hidden rounded-2xl border border-brand-dark/10 bg-white/50 p-4">
              <div className="flex items-center justify-center rounded-xl bg-brand-bg border border-brand-dark/10 p-12 text-center">
                <div className="max-w-md">
                  <h3 className="mb-2 text-xl font-bold text-brand-dark">Calendly / Cal.com</h3>
                  <p className="mb-6 text-brand-gray">Remplacez ce bloc par votre widget Calendly ou Cal.com.</p>
                  <div className="rounded-xl border border-dashed border-brand-dark/20 bg-white/50 p-6 text-sm text-brand-gray text-left">
                    {`<div class="calendly-inline-widget"`}<br />
                    {`  data-url="https://calendly.com/votre-lien"`}<br />
                    {`  style="min-width:320px;height:700px;">`}<br />
                    {`</div>`}
                  </div>
                  <p className="mt-4 text-xs text-brand-dark/40">Collez le code d&apos;intégration fourni par Calendly ou Cal.com.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
