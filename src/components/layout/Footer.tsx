import { PraxiaMark } from "../ui/PraxiaMark";
import { useT } from "../../i18n/LanguageContext";

export function Footer() {
  const t = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-base-100 border-t border-base-300/60 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-3">
        {/* Col 1 — Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <PraxiaMark className="h-9 w-9" />
            <span className="font-display font-semibold text-lg tracking-tight">
              Praxia<span className="text-primary"> Studio</span>
            </span>
          </div>
          <p className="text-sm opacity-70 leading-relaxed max-w-xs">
            {t.footer.blurb}
          </p>
          <p className="text-xs opacity-50 mt-3 tracking-wider uppercase">
            {t.footer.location}
          </p>
        </div>

        {/* Col 2 — Nav */}
        <div>
          <h3 className="text-primary font-semibold text-xs uppercase tracking-widest mb-4">
            {t.nav.navigation}
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#manifiesto" className="opacity-80 hover:text-primary hover:opacity-100 transition">{t.nav.manifesto}</a></li>
            <li><a href="#servicios" className="opacity-80 hover:text-primary hover:opacity-100 transition">{t.nav.services}</a></li>
            <li><a href="#metodologia" className="opacity-80 hover:text-primary hover:opacity-100 transition">{t.nav.methodology}</a></li>
            {/* <li><a href="#casos" className="opacity-80 hover:text-primary hover:opacity-100 transition">{t.nav.cases}</a></li> */}
            <li><a href="#equipo" className="opacity-80 hover:text-primary hover:opacity-100 transition">{t.nav.team}</a></li>
            <li><a href="#contacto" className="opacity-80 hover:text-primary hover:opacity-100 transition">{t.nav.contact}</a></li>
          </ul>
        </div>

        {/* Col 3 — Contacto */}
        <div>
          <h3 className="text-primary font-semibold text-xs uppercase tracking-widest mb-4">
            {t.nav.contact}
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="mailto:ignacio.leyes@praxiastudio.ar" className="opacity-80 hover:text-primary hover:opacity-100 transition">
                ignacio.leyes@praxiastudio.ar
              </a>
            </li>
            <li>
              <a href="https://praxiastudio.ar" className="opacity-80 hover:text-primary hover:opacity-100 transition">
                praxiastudio.ar
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-base-300/60">
        <div className="container mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs opacity-60">
          <p>{t.footer.copyright(year)}</p>
          <p>{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
