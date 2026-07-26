import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[95vh] items-center justify-center overflow-hidden px-6 pt-48 pb-32 border-b structural-line">
      {/* Background large orange circle - Solid and crisp */}
      <div className="absolute top-1/2 left-1/2 -translate-y-[40%] -translate-x-1/4 h-[550px] w-[550px] rounded-full bg-brand-orange" />

      {/* Side Label */}
      <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 rotate-90 origin-bottom-right">
        <span className="text-sm font-bold tracking-[0.2em] text-brand-dark/40">( 01 / PORTFOLIO )</span>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 animate-fade-in-up">
          <div className="mb-8">
            <span className="text-xs font-bold tracking-widest text-brand-gray uppercase">eyebrow</span>
            <h2 className="text-sm font-extrabold tracking-widest text-brand-dark mt-1">DÉVELOPPEUR & SPÉCIALISTE IA</h2>
          </div>

          <h1 className="mb-10 text-6xl font-black leading-[1.05] tracking-tight text-brand-dark sm:text-7xl md:text-[5.5rem]">
            Je conçois des <br />
            <span className="relative inline-block mt-2">
              expériences web
              <svg className="absolute -bottom-4 left-0 w-[110%] h-6 text-brand-orange -rotate-1" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 15 Q 30 5 100 15" stroke="currentColor" strokeWidth="6" fill="transparent" strokeLinecap="round" />
              </svg>
            </span><br />
            <span className="mt-4 inline-block">assistants intelligents.</span>
          </h1>

          <p className="mb-14 max-w-lg text-xl font-medium text-brand-gray leading-relaxed">
            Montrez-vous aux consommateurs. Je construis des expériences web à fort taux de conversion et développe des assistants intelligents.
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center rounded-full bg-brand-orange px-10 py-4 text-lg font-bold text-white transition-transform hover:scale-105 shadow-xl shadow-brand-orange/30"
            >
              Work with me
            </Link>

            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border-2 border-brand-dark px-10 py-4 text-lg font-bold text-brand-dark transition-colors hover:bg-brand-dark hover:text-brand-bg"
            >
              View Projects
            </a>

            {/* Scribble Arrow */}
            <div className="absolute -bottom-16 left-48 hidden md:block text-brand-dark">
              <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 55 Q 40 50 80 20 T 110 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="transparent"/>
                <path d="M100 2 L 115 2 L 105 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="transparent"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative h-[500px] flex items-center justify-center pointer-events-none">
          {/* Generated Image */}
          <img src="/crumpled_paper.jpg" alt="Crumpled Paper" className="w-[120%] h-auto max-w-[600px] object-cover animate-float mix-blend-multiply" />
        </div>
      </div>
    </section>
  );
}
