import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Work", href: "/#projects" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("/#") && location.pathname === "/") {
      const id = href.slice(2);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/90 backdrop-blur-md border-b structural-line">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="text-3xl font-extrabold tracking-tight text-brand-dark">
          alex<span className="text-brand-orange">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => handleClick(link.href)}
              className="text-sm font-medium text-brand-dark hover:text-brand-orange transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/booking"
            className="rounded-full bg-brand-orange px-6 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105 shadow-md shadow-brand-orange/20"
          >
            Book a Call
          </Link>
        </div>

        <button className="md:hidden text-brand-dark" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-brand-bg border-b structural-line px-6 pb-6 pt-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => handleClick(link.href)}
              className="text-base font-semibold text-brand-dark hover:text-brand-orange transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/booking"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-brand-orange px-5 py-3 text-center text-sm font-bold text-white"
          >
            Book a Call
          </Link>
        </div>
      )}
    </nav>
  );
}
