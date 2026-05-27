import { useT } from "../../i18n/LanguageContext";

export function Hero() {
  const t = useT();

  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-base-100"
    >
      {/* Background — gradiente radial sutil + grid pattern */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 800px 600px at 70% 30%, rgba(139, 92, 246, 0.18), transparent), radial-gradient(ellipse 600px 400px at 30% 70%, rgba(233, 30, 140, 0.12), transparent)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative container mx-auto px-6 lg:px-10 py-32 grid lg:grid-cols-12 gap-12 items-center">
        {/* Texto principal */}
        <div className="lg:col-span-8 max-w-4xl">
          <p
            className="hero-in text-xs uppercase tracking-[0.25em] text-primary mb-6 font-medium"
            style={{ animationDelay: "100ms" }}
          >
            {t.hero.eyebrow}
          </p>

          <h1
            className="hero-in font-display font-bold leading-[0.95] tracking-tight text-5xl sm:text-6xl lg:text-7xl xl:text-8xl"
            style={{ animationDelay: "250ms" }}
          >
            {t.hero.titleA}
            <br />
            <span className="text-praxia-gradient italic">{t.hero.titleHighlight}</span>
          </h1>

          <p
            className="hero-in mt-8 max-w-2xl text-base sm:text-lg text-base-content/70 leading-relaxed"
            style={{ animationDelay: "500ms" }}
          >
            {t.hero.subtitle}
          </p>

          <div
            className="hero-in mt-10 flex flex-wrap gap-3"
            style={{ animationDelay: "700ms" }}
          >
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-primary text-primary-content font-medium hover:scale-105 hover:shadow-praxia-glow active:scale-95 transition-all duration-300 group"
            >
              {t.hero.ctaPrimary}
              <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>→</span>
            </a>
            <a
              href="#metodologia"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-base-content/20 text-base-content hover:border-primary hover:text-primary transition-colors"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="hero-in absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-60"
        style={{ animationDelay: "1100ms" }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">{t.hero.scroll}</span>
        <span className="block w-px h-10 bg-gradient-to-b from-base-content/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
