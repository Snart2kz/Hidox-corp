import { useState } from "react";
import Reveal from "./Reveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      // TODO: remplacer par le véritable endpoint Formspree (ou équivalent) de Landify.
      const res = await fetch("https://formspree.io/f/your-form-id", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  }

  return (
    <section id="contact" className="relative px-6 py-32 bg-brand-bg">
      <Reveal className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2">

        {/* Left Side: Contact Form */}
        <div>
          <h2 className="mb-12 text-4xl font-bold tracking-tight text-brand-dark">Contact</h2>

          {submitted ? (
            <div className="flex items-center justify-center rounded-2xl border border-brand-dark/10 bg-white/50 p-12 text-center">
              <div>
                <h3 className="mb-2 text-xl font-bold text-brand-dark">Message envoyé !</h3>
                <p className="font-medium text-brand-gray">Nous vous répondons très vite.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="sr-only">Prénom</label>
                  <input id="name" name="name" type="text" required className="w-full border-b border-brand-dark/30 bg-transparent px-0 py-3 text-brand-dark placeholder-brand-dark/50 outline-none transition-colors focus:border-brand-orange" placeholder="Prénom" />
                </div>
                <div>
                  <label htmlFor="last_name" className="sr-only">Nom</label>
                  <input id="last_name" name="last_name" type="text" className="w-full border-b border-brand-dark/30 bg-transparent px-0 py-3 text-brand-dark placeholder-brand-dark/50 outline-none transition-colors focus:border-brand-orange" placeholder="Nom" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input id="email" name="email" type="email" required className="w-full border-b border-brand-dark/30 bg-transparent px-0 py-3 text-brand-dark placeholder-brand-dark/50 outline-none transition-colors focus:border-brand-orange" placeholder="Email" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea id="message" name="message" required rows={4} className="w-full resize-none border-b border-brand-dark/30 bg-transparent px-0 py-3 text-brand-dark placeholder-brand-dark/50 outline-none transition-colors focus:border-brand-orange" placeholder="Détails de votre projet..." />
              </div>
              <button type="submit" className="inline-flex items-center justify-center rounded-full bg-brand-orange px-8 py-3.5 text-sm font-bold text-white transition-transform hover:scale-105 shadow-md shadow-brand-orange/20">
                Envoyer le message
              </button>
            </form>
          )}
        </div>

        {/* Right Side: Contact Info */}
        <div className="flex flex-col gap-8 lg:pl-12 lg:border-l structural-line pt-20">
          <div>
            <h3 className="mb-4 text-sm font-bold text-brand-dark uppercase tracking-widest">Nous contacter</h3>
            <ul className="space-y-4 font-medium text-brand-gray">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                contact@landify.co <span className="text-xs text-brand-dark/40">(à confirmer)</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                +225 00 00 00 00 <span className="text-xs text-brand-dark/40">(à confirmer)</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                linkedin.com/company/landify <span className="text-xs text-brand-dark/40">(à confirmer)</span>
              </li>
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
