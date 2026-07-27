import {
  SiClaude,
  SiFigma,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Reveal from "./Reveal";
import LogoLoop, { type LogoItem } from "./LogoLoop";

// Simple Icons ne fournit pas de marque OpenAI (retirée du set) : on retombe sur un logotype texte.
const OpenAiMark = () => <span className="text-[0.85rem] font-extrabold tracking-tight">OpenAI</span>;

const technologies: LogoItem[] = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <OpenAiMark />, title: "OpenAI API", href: "https://platform.openai.com" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiPhp />, title: "PHP", href: "https://www.php.net" },
  { node: <SiClaude />, title: "Claude", href: "https://claude.com" },
  { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
];

export default function Stack() {
  return (
    <section id="stack" className="relative px-6 py-32 border-b structural-line bg-brand-bg">
      <Reveal className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-brand-dark">Stack</h2>
          <p className="text-lg font-medium text-brand-gray leading-relaxed">
            Les technologies que nous utilisons pour construire des produits rapides et fiables.
          </p>
        </div>

        <div className="text-brand-dark/70" style={{ height: 88, position: "relative", overflow: "hidden" }}>
          <LogoLoop
            logos={technologies}
            speed={60}
            direction="left"
            logoHeight={36}
            gap={64}
            pauseOnHover
            fadeOut
            fadeOutColor="#f4f4f0"
            scaleOnHover
            ariaLabel="Technologies utilisées par Landify"
          />
        </div>
      </Reveal>
    </section>
  );
}
