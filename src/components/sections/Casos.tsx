import { ExternalLink } from "lucide-react";
import { useT } from "../../i18n/LanguageContext";
import { useReveal } from "../../hooks/useReveal";
import { cases } from "../../data/cases";

export function Casos() {
  const t = useT();
  const headerRef = useReveal<HTMLDivElement>();
  const caseRef = useReveal<HTMLElement>();

  const neos = cases.find((c) => c.id === "neos")!;
  const copy = t.cases.items.neos;

  return (
    <section id="casos" className="relative bg-base-200/40 py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-10">
        {/* Header */}
        <div ref={headerRef} className="reveal max-w-3xl mb-16 lg:mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4">
            {t.cases.eyebrow}
          </p>
          <h2 className="font-display font-bold leading-[1.05] tracking-tight text-4xl sm:text-5xl lg:text-6xl">
            {t.cases.title}
          </h2>
          <p className="mt-6 text-base-content/70 text-lg leading-relaxed max-w-2xl">
            {t.cases.subtitle}
          </p>
        </div>

        {/* Feature case */}
        <article
          ref={caseRef}
          className="reveal grid lg:grid-cols-5 gap-8 lg:gap-12 items-center"
        >
          {/* Browser mock */}
          <a
            href={neos.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${copy.title} — ${copy.linkLabel}`}
            className="group relative lg:col-span-3 block rounded-2xl overflow-hidden border border-base-content/10 bg-base-200 shadow-praxia-glow/0 hover:shadow-praxia-glow transition-shadow duration-500"
          >
            {/* Browser topbar */}
            <div className="flex items-center gap-3 px-4 py-3 bg-base-100 border-b border-base-content/10">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 flex justify-center">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-base-300/60 text-xs font-mono text-base-content/60">
                  <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-success" />
                  neos.com.ar
                </span>
              </div>
              <span className="w-12" aria-hidden />
            </div>

            {/* Browser content — mock del hero de NEOS */}
            <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0a0d]">
              {/* gradient radial magenta */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 700px 500px at 70% 30%, rgba(233, 30, 140, 0.22), transparent 65%), radial-gradient(ellipse 500px 400px at 20% 80%, rgba(139, 92, 246, 0.15), transparent 70%)",
                }}
              />
              {/* grid lines */}
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />

              {/* fake topbar del sitio */}
              <div className="relative px-6 lg:px-10 pt-5 flex items-center justify-between text-white/80">
                <span className="font-display font-bold tracking-tight text-sm">
                  NEOS<span className="text-[#e91e8c]"> · Salta</span>
                </span>
                <div className="hidden sm:flex items-center gap-4 text-[10px] uppercase tracking-[0.2em]">
                  <span>Inicio</span>
                  <span>Proyectos</span>
                  <span>Contacto</span>
                </div>
              </div>

              {/* contenido central del mock */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#e91e8c] mb-3 font-medium">
                  Desarrollos inmobiliarios
                </p>
                <h4 className="font-display font-bold leading-[0.95] tracking-tight text-white text-3xl sm:text-4xl lg:text-5xl">
                  Vivir Salta
                  <br />
                  <span
                    style={{
                      background:
                        "linear-gradient(135deg, #e91e8c 0%, #8b5cf6 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    en cada proyecto.
                  </span>
                </h4>
                <span className="mt-5 inline-flex items-center gap-2 text-xs text-white/70 px-4 py-2 rounded-full border border-white/15">
                  Ver desarrollos
                  <span aria-hidden>→</span>
                </span>
              </div>

              {/* hover overlay — "live preview" */}
              <div className="absolute inset-0 flex items-center justify-center bg-base-100/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-content text-sm font-medium">
                  {copy.linkLabel}
                  <ExternalLink className="w-4 h-4" strokeWidth={2.2} aria-hidden />
                </span>
              </div>
            </div>
          </a>

          {/* Ficha del caso */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-flex items-center text-xs font-medium px-3 py-1 rounded-full border border-secondary/40 bg-secondary/5 text-secondary">
                {copy.category}
              </span>
              <span className="text-xs text-base-content/40 font-mono">
                {neos.year}
              </span>
            </div>

            <h3 className="font-display font-bold leading-[1.1] tracking-tight text-2xl sm:text-3xl lg:text-4xl mb-5">
              {copy.title}
            </h3>

            <p className="text-base-content/70 leading-relaxed mb-8">
              {copy.description}
            </p>

            <p className="text-[10px] uppercase tracking-[0.25em] text-base-content/40 font-medium mb-3">
              {t.cases.stackLabel}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {neos.stack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-md bg-base-100 border border-base-content/10 text-base-content/80"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={neos.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-base-content hover:text-primary transition-colors group"
            >
              {copy.linkLabel}
              <ExternalLink
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
                aria-hidden
              />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
