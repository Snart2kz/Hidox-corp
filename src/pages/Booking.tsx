import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Booking() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <section className="relative px-6 py-16">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/3 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
            <div className="absolute bottom-1/4 right-1/3 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl" />
          </div>

          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4">
              <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-medium text-violet-400">Prise de RDV</span>
            </div>
            <h1 className="mb-4 text-3xl font-bold sm:text-4xl">Réservez un appel découverte</h1>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-400">
              Sans engagement. On discute de votre projet, de vos objectifs et de la meilleure façon de collaborer.
            </p>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="p-4">
                <div className="flex items-center justify-center rounded-xl bg-gray-900 p-12 text-center">
                  <div className="max-w-md">
                    <div className="mb-4 text-6xl">📅</div>
                    <h3 className="mb-2 text-xl font-bold text-white">Calendly / Cal.com</h3>
                    <p className="mb-6 text-gray-400">Remplacez ce bloc par votre widget Calendly ou Cal.com.</p>
                    <div className="rounded-xl border border-dashed border-gray-600 bg-gray-800/50 p-6 text-sm text-gray-500 text-left">
                      {`<div class="calendly-inline-widget"`}<br />
                      {`  data-url="https://calendly.com/votre-lien"`}<br />
                      {`  style="min-width:320px;height:700px;">`}<br />
                      {`</div>`}
                    </div>
                    <p className="mt-4 text-xs text-gray-500">Collez le code d&apos;intégration fourni par Calendly ou Cal.com.</p>
                  </div>
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
