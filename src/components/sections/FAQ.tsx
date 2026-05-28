import { ChevronDown } from "lucide-react";
import { useT } from "../../i18n/LanguageContext";
import { useReveal } from "../../hooks/useReveal";
import { faqOrder } from "../../data/faq";

export function FAQ() {
  const t = useT();
  const headerRef = useReveal<HTMLDivElement>();
  const listRef = useReveal<HTMLDivElement>();

  return (
    <section id="faq" className="relative bg-base-100 py-24 lg:py-32 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 600px 400px at 80% 50%, rgba(233, 30, 140, 0.10), transparent 70%)",
        }}
      />

      <div className="relative container mx-auto px-6 lg:px-10">
        {/* Header */}
        <div ref={headerRef} className="reveal max-w-3xl mb-14 lg:mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4">
            {t.faq.eyebrow}
          </p>
          <h2 className="font-display font-bold leading-[1.05] tracking-tight text-4xl sm:text-5xl lg:text-6xl">
            {t.faq.title}
          </h2>
          <p className="mt-6 text-base-content/70 text-lg leading-relaxed max-w-2xl">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Lista */}
        <div ref={listRef} className="reveal max-w-3xl space-y-3">
          {faqOrder.map((id) => {
            const item = t.faq.items[id];
            return (
              <details
                key={id}
                className="group rounded-2xl border border-base-content/10 bg-base-200/60 open:bg-base-200 open:border-primary/40 transition-colors duration-300"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 lg:p-6">
                  <span className="font-display font-semibold text-base lg:text-lg tracking-tight text-base-content pr-2">
                    {item.q}
                  </span>
                  <span className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-base-100 border border-base-content/10 text-base-content/70 group-open:bg-primary/15 group-open:border-primary/40 group-open:text-primary transition-all duration-300">
                    <ChevronDown
                      className="w-4 h-4 transition-transform duration-300 group-open:rotate-180"
                      strokeWidth={2.2}
                      aria-hidden
                    />
                  </span>
                </summary>
                <div className="px-5 lg:px-6 pb-5 lg:pb-6 -mt-1">
                  <p className="text-base-content/70 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </details>
            );
          })}
        </div>

        {/* CTA al final */}
        <div className="mt-10 max-w-3xl">
          <p className="text-sm text-base-content/60">
            {t.faq.ctaQuestion}{" "}
            <a
              href="#contacto"
              className="font-medium text-base-content hover:text-primary transition-colors"
            >
              {t.faq.ctaLink}
              <span aria-hidden className="ml-1">→</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
