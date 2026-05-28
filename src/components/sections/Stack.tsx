import { useT } from "../../i18n/LanguageContext";
import { useReveal } from "../../hooks/useReveal";
import { stackItems } from "../../data/stack";

export function Stack() {
  const t = useT();
  const headerRef = useReveal<HTMLDivElement>();
  const marqueeRef = useReveal<HTMLDivElement>();

  return (
    <section id="stack" className="relative bg-base-100 py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-10">
        {/* Header */}
        <div ref={headerRef} className="reveal max-w-3xl mb-14 lg:mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4">
            {t.stack.eyebrow}
          </p>
          <h2 className="font-display font-bold leading-[1.05] tracking-tight text-4xl sm:text-5xl lg:text-6xl">
            {t.stack.title}
          </h2>
          <p className="mt-6 text-base-content/70 text-lg leading-relaxed max-w-2xl">
            {t.stack.subtitle}
          </p>
        </div>
      </div>

      {/* Marquee — full bleed, sin container para que respire al borde */}
      <div ref={marqueeRef} className="reveal relative">
        <div
          className="overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <ul className="marquee-track flex items-center w-max">
            {[...stackItems, ...stackItems].map((item, index) => (
              <li
                key={`${item}-${index}`}
                className="flex items-center shrink-0"
                aria-hidden={index >= stackItems.length || undefined}
              >
                <span className="font-display font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-base-content/30 hover:text-base-content transition-colors duration-300 px-8 lg:px-12">
                  {item}
                </span>
                <span
                  aria-hidden
                  className="w-1.5 h-1.5 rounded-full bg-secondary/50"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
