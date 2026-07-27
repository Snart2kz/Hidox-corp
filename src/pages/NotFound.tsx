import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[100dvh] items-center justify-center bg-brand-bg px-6 pt-24">
        <div className="text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-orange">Erreur 404</p>
          <h1 className="mb-6 text-4xl font-black tracking-tight text-brand-dark sm:text-5xl">
            Cette page n'existe pas.
          </h1>
          <p className="mb-10 text-lg font-medium text-brand-gray">
            Le lien est peut-être incorrect ou la page a été déplacée.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-brand-orange px-8 py-4 text-base font-bold text-white transition-transform hover:scale-105 shadow-lg shadow-brand-orange/25"
          >
            Retour à l'accueil
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
