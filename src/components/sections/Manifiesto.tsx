import { useT } from "../../i18n/LanguageContext";
import { useReveal } from "../../hooks/useReveal";

export function Manifiesto() {
  const t = useT();
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="manifiesto"
      className="relative overflow-hidden bg-base-100 py-24 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 700px 400px at 50% 50%, rgba(139, 92, 246, 0.12), transparent 70%)",
        }}
      />

      <div className="relative container mx-auto px-6 lg:px-10">
        <div ref={ref} className="reveal max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-10">
            {t.manifesto.eyebrow}
          </p>

          <blockquote className="relative">
            <span
              aria-hidden
              className="absolute -top-8 -left-2 sm:-left-8 text-7xl sm:text-8xl leading-none font-display font-bold text-praxia-gradient select-none"
            >
              &ldquo;
            </span>

            <p className="font-display font-medium leading-[1.25] tracking-tight text-2xl sm:text-3xl lg:text-4xl text-base-content/90">
              {t.manifesto.quote}
            </p>

            <p className="mt-10 font-display font-semibold text-2xl sm:text-3xl lg:text-4xl tracking-tight">
              <span className="text-praxia-gradient">{t.manifesto.tagline}</span>
            </p>

            <span
              aria-hidden
              className="absolute -bottom-16 -right-2 sm:-right-8 text-7xl sm:text-8xl leading-none font-display font-bold text-praxia-gradient select-none"
            >
              &rdquo;
            </span>
          </blockquote>

          <footer className="mt-14 flex items-center justify-center gap-3 text-sm text-base-content/60">
            <span className="block h-px w-10 bg-base-content/20" />
            <span className="font-medium text-base-content/80">
              {t.manifesto.author}
            </span>
            <span aria-hidden>·</span>
            <span>{t.manifesto.authorRole}</span>
            <span className="block h-px w-10 bg-base-content/20" />
          </footer>
        </div>
      </div>
    </section>
  );
}
