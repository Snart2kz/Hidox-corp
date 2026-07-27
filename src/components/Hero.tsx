import { Link } from "react-router-dom";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center overflow-hidden px-6 pt-24 pb-24 border-b structural-line"
    >
      <Reveal className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h1 className="mb-6 text-5xl font-black leading-[1.05] tracking-tight text-brand-dark sm:text-6xl md:text-7xl">
            Votre croissance digitale, conçue pour convertir.
          </h1>

          <p className="mb-10 max-w-xl text-lg font-medium text-brand-gray leading-relaxed">
            Landify conçoit des landing pages, sites de vente et assistants IA qui attirent des clients et accélèrent votre développement.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center rounded-full bg-brand-orange px-8 py-4 text-base font-bold text-white transition-transform hover:scale-105 shadow-lg shadow-brand-orange/25"
            >
              Réserver un appel
            </Link>

            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border-2 border-brand-dark px-8 py-4 text-base font-bold text-brand-dark transition-colors hover:bg-brand-dark hover:text-brand-bg"
            >
              Découvrir nos services
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 hidden sm:grid grid-cols-2 gap-4">
          <div className="flex flex-col items-start gap-4 rounded-2xl bg-brand-orange p-6 text-white">
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <path strokeLinecap="round" d="M3 9h18M7 6.5h.01" />
            </svg>
            <span className="text-sm font-bold">Landing Page</span>
          </div>

          <div className="flex flex-col items-start gap-4 rounded-2xl border border-brand-dark/10 bg-white/50 p-6">
            <svg className="h-7 w-7 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 7h12l1 13H5L6 7z" />
              <path strokeLinecap="round" d="M9 10V6a3 3 0 116 0v4" />
            </svg>
            <span className="text-sm font-bold text-brand-dark">Site de vente</span>
          </div>

          <div className="flex flex-col items-start gap-4 rounded-2xl border border-brand-dark/10 bg-white/50 p-6">
            <svg className="h-7 w-7 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a8 8 0 10-3.8 6.8L21 20l-1.1-3.2c.7-1.2 1.1-2.4 1.1-4.8z" />
            </svg>
            <span className="text-sm font-bold text-brand-dark">Assistant IA</span>
          </div>

          <div className="flex flex-col items-start gap-4 rounded-2xl border border-brand-dark/10 bg-white/50 p-6">
            <svg className="h-7 w-7 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <rect x="7" y="2" width="10" height="20" rx="2" />
              <path strokeLinecap="round" d="M11 18h2" />
            </svg>
            <span className="text-sm font-bold text-brand-dark">App sur-mesure</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
