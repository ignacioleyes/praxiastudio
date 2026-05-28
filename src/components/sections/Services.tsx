import { useState } from "react";
import { useT } from "../../i18n/LanguageContext";
import { useReveal } from "../../hooks/useReveal";
import { services, type ServiceId } from "../../data/services";

export function Services() {
  const t = useT();
  const headerRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();

  const [flipped, setFlipped] = useState<Set<ServiceId>>(new Set());

  const toggle = (id: ServiceId) => {
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section
      id="servicios"
      className="relative bg-base-200/40 py-24 lg:py-32"
    >
      <div className="container mx-auto px-6 lg:px-10">
        {/* Header */}
        <div ref={headerRef} className="reveal max-w-3xl mb-16 lg:mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4">
            {t.services.eyebrow}
          </p>
          <h2 className="font-display font-bold leading-[1.05] tracking-tight text-4xl sm:text-5xl lg:text-6xl">
            {t.services.title}
          </h2>
          <p className="mt-6 text-base-content/70 text-lg leading-relaxed max-w-2xl">
            {t.services.subtitle}
          </p>
        </div>

        {/* Cards grid */}
        <div
          ref={gridRef}
          className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service) => {
            const Icon = service.icon;
            const copy = t.services.items[service.id];
            const isFlipped = flipped.has(service.id);

            return (
              <article
                key={service.id}
                className={`flip-card min-h-[280px] ${isFlipped ? "is-flipped" : ""}`}
              >
                <div className="flip-card-inner">
                  {/* FRONT */}
                  <div className="flip-face group relative bg-base-200 border border-base-content/10 rounded-2xl p-7 transition-colors duration-300 hover:border-primary/40">
                    <div className="flex flex-col h-full">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                        <Icon className="w-6 h-6" strokeWidth={1.75} aria-hidden />
                      </div>

                      <h3 className="font-display font-semibold text-xl tracking-tight mb-3 text-base-content">
                        {copy.title}
                      </h3>
                      <p className="text-base-content/65 text-sm leading-relaxed mb-6 flex-1">
                        {copy.description}
                      </p>

                      <button
                        type="button"
                        onClick={() => toggle(service.id)}
                        tabIndex={isFlipped ? -1 : 0}
                        aria-label={`${t.services.cardCta} — ${copy.title}`}
                        aria-expanded={isFlipped}
                        className="self-start inline-flex items-center gap-1.5 text-sm font-medium text-base-content/60 group-hover:text-primary transition-colors"
                      >
                        {t.services.cardCta}
                        <span
                          aria-hidden
                          className="transition-transform group-hover:translate-x-0.5"
                        >
                          →
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* BACK */}
                  <div className="flip-face flip-face-back bg-base-200 border border-primary/40 rounded-2xl p-7 shadow-praxia-glow">
                    <div className="flex flex-col h-full">
                      <div
                        className="inline-flex items-center justify-center w-12 h-12 rounded-xl text-white mb-5"
                        style={{
                          background:
                            "linear-gradient(135deg, #8b5cf6 0%, #e91e8c 100%)",
                        }}
                      >
                        <Icon className="w-6 h-6" strokeWidth={1.75} aria-hidden />
                      </div>

                      <h3 className="font-display font-semibold text-xl tracking-tight mb-3">
                        <span className="text-praxia-gradient">{copy.title}</span>
                      </h3>
                      <p className="text-base-content/75 text-sm leading-relaxed mb-6 flex-1">
                        {copy.descriptionLong}
                      </p>

                      <button
                        type="button"
                        onClick={() => toggle(service.id)}
                        tabIndex={isFlipped ? 0 : -1}
                        aria-label={`${t.services.backCta} — ${copy.title}`}
                        aria-expanded={isFlipped}
                        className="self-start inline-flex items-center gap-1.5 text-sm font-medium text-base-content/60 hover:text-primary transition-colors"
                      >
                        <span aria-hidden>←</span>
                        {t.services.backCta}
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
