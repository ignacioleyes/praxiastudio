import { useLang } from "../../i18n/LanguageContext";

export function LanguageSwitcher() {
  const { lang, toggle } = useLang();
  const target = lang === "es" ? "EN" : "ES";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch language to ${target}`}
      className="
        inline-flex items-center gap-1.5
        text-xs font-medium uppercase tracking-[0.18em]
        text-base-content/70 hover:text-primary
        transition-colors
        h-8 px-2
      "
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      <span>{target}</span>
    </button>
  );
}
