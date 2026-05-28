import { useT } from "../../i18n/LanguageContext";
import { useReveal } from "../../hooks/useReveal";
import { methodologySteps } from "../../data/methodology";

export function Metodologia() {
  const t = useT();
  const headerRef = useReveal<HTMLDivElement>();
  const listRef = useReveal<HTMLOListElement>();

  return (
    <section
      id="metodologia"
      className="relative bg-base-100 py-24 lg:py-32 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 600px 500px at 80% 20%, rgba(233, 30, 140, 0.10), transparent 70%)",
        }}
      />

      <div className="relative container mx-auto px-6 lg:px-10">
        {/* Header */}
        <div ref={headerRef} className="reveal max-w-3xl mb-16 lg:mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4">
            {t.methodology.eyebrow}
          </p>
          <h2 className="font-display font-bold leading-[1.05] tracking-tight text-4xl sm:text-5xl lg:text-6xl">
            {t.methodology.title}
          </h2>
          <p className="mt-6 text-base-content/70 text-lg leading-relaxed max-w-2xl">
            {t.methodology.subtitle}
          </p>
        </div>

        {/* Stepper */}
        <ol ref={listRef} className="reveal relative max-w-3xl">
          {/* Línea vertical conectora */}
          <div
            aria-hidden
            className="absolute left-7 lg:left-8 top-7 bottom-7 w-px bg-gradient-to-b from-primary via-secondary to-primary/20"
          />

          {methodologySteps.map((step, index) => {
            const Icon = step.icon;
            const copy = t.methodology.steps[step.id];
            const number = String(index + 1).padStart(2, "0");

            return (
              <li
                key={step.id}
                className="relative grid grid-cols-[56px_1fr] lg:grid-cols-[64px_1fr] gap-5 lg:gap-8 pb-12 last:pb-0"
              >
                {/* Marker */}
                <div className="relative z-10 w-14 h-14 lg:w-16 lg:h-16 rounded-full border border-primary/30 bg-base-100 flex items-center justify-center">
                  <span className="font-display font-bold text-lg lg:text-xl tracking-tight text-praxia-gradient">
                    {number}
                  </span>
                </div>

                {/* Contenido */}
                <div className="pt-1.5 lg:pt-2">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-primary/10 text-primary">
                      <Icon className="w-4 h-4" strokeWidth={2} aria-hidden />
                    </span>
                    <p className="text-xs uppercase tracking-[0.2em] text-secondary font-medium">
                      {copy.timing}
                    </p>
                  </div>

                  <h3 className="font-display font-semibold text-xl lg:text-2xl tracking-tight mb-2 text-base-content">
                    {copy.title}
                  </h3>

                  <p className="text-base-content/65 text-sm lg:text-base leading-relaxed mb-4 max-w-xl">
                    {copy.description}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-base-content/80">
                    <span
                      aria-hidden
                      className="w-1.5 h-1.5 rounded-full bg-praxia-gradient"
                    />
                    {copy.badge}
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
