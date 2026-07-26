import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
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
    <section id="contact" className="relative px-6 py-48 bg-brand-bg">
      <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2">
        
        {/* Left Side: Contact Form */}
        <div>
          <h2 className="mb-12 text-4xl font-bold tracking-tight text-brand-dark">Contact</h2>
          
          {submitted ? (
            <div className="flex items-center justify-center border border-brand-dark/20 bg-white/50 p-12 text-center shadow-lg">
              <div>
                <div className="mb-4 text-4xl">✅</div>
                <h3 className="mb-2 text-xl font-bold text-brand-dark">Message envoyé !</h3>
                <p className="font-medium text-brand-gray">Je vous réponds très vite.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input id="name" name="name" type="text" required className="w-full border-b border-brand-dark/30 bg-transparent px-0 py-3 text-brand-dark placeholder-brand-dark/50 outline-none transition-colors focus:border-brand-orange" placeholder="Name" />
                </div>
                <div>
                  <label htmlFor="last_name" className="sr-only">Last name</label>
                  <input id="last_name" name="last_name" type="text" className="w-full border-b border-brand-dark/30 bg-transparent px-0 py-3 text-brand-dark placeholder-brand-dark/50 outline-none transition-colors focus:border-brand-orange" placeholder="Last name" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input id="email" name="email" type="email" required className="w-full border-b border-brand-dark/30 bg-transparent px-0 py-3 text-brand-dark placeholder-brand-dark/50 outline-none transition-colors focus:border-brand-orange" placeholder="Email" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea id="message" name="message" required rows={4} className="w-full resize-none border-b border-brand-dark/30 bg-transparent px-0 py-3 text-brand-dark placeholder-brand-dark/50 outline-none transition-colors focus:border-brand-orange" placeholder="Project details..." />
              </div>
              <button type="submit" className="inline-flex items-center justify-center rounded-full bg-brand-orange px-8 py-3.5 text-sm font-bold text-white transition-transform hover:scale-105 shadow-md shadow-brand-orange/20">
                Book a Call
              </button>
            </form>
          )}
        </div>

        {/* Right Side: Contact Info */}
        <div className="flex flex-col gap-8 lg:pl-12 lg:border-l structural-line pt-20">
          <div>
            <h3 className="mb-4 text-sm font-bold text-brand-dark uppercase tracking-widest">Contact us</h3>
            <ul className="space-y-4 font-medium text-brand-gray">
              <li className="flex items-center gap-3 hover:text-brand-orange cursor-pointer transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                alex.name@org
              </li>
              <li className="flex items-center gap-3 hover:text-brand-orange cursor-pointer transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                Contact SVG
              </li>
              <li className="flex items-center gap-3 hover:text-brand-orange cursor-pointer transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                Contact Link
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
