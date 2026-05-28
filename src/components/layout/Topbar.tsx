import { Link } from "react-router-dom";
import { PraxiaMark } from "../ui/PraxiaMark";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useT } from "../../i18n/LanguageContext";

export function Topbar() {
  const t = useT();

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-xl bg-base-100/70 border-b border-base-300/40">
      <div className="container mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2.5 group" aria-label="Praxia Studio — Home">
          <PraxiaMark className="h-8 w-8 transition-transform group-hover:rotate-6" />
          <span className="font-display font-semibold text-base tracking-tight">
            Praxia<span className="text-primary"> Studio</span>
          </span>
        </Link>

        {/* Nav links desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#manifiesto" className="text-base-content/70 hover:text-primary transition-colors">{t.nav.manifesto}</a>
          <a href="#servicios" className="text-base-content/70 hover:text-primary transition-colors">{t.nav.services}</a>
          <a href="#metodologia" className="text-base-content/70 hover:text-primary transition-colors">{t.nav.methodology}</a>
          {/* <a href="#casos" className="text-base-content/70 hover:text-primary transition-colors">{t.nav.cases}</a> */}
          <a href="#equipo" className="text-base-content/70 hover:text-primary transition-colors">{t.nav.team}</a>
        </nav>

        {/* Right side: Lang + CTA */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="#contacto"
            className="hidden sm:inline-flex items-center gap-1.5 h-9 px-4 rounded-full bg-primary text-primary-content text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            {t.nav.contact}
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
