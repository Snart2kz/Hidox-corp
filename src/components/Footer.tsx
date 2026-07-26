import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Work", href: "/#projects" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark px-6 py-8 border-t border-[#333]">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        <Link to="/" className="text-2xl font-extrabold tracking-tight text-white">
          alex<span className="text-brand-orange">.</span>
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {footerLinks.map((link) => (
            <Link key={link.href} to={link.href} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="text-xs text-gray-500">
          PortfolioPreview.jsx <span className="ml-4">Fine hairline rules</span>
        </div>

      </div>
    </footer>
  );
}
