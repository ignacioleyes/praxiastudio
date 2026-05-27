import type { Lang } from "./types";

/**
 * UI strings dictionary. Use `useT()` para leer (`const t = useT(); t.hero.titleA`).
 * Mantener las dos ramas (es / en) en sync — TypeScript fuerza la misma shape.
 */
export const messages = {
  es: {
    common: {
      menu: "Menú",
      close: "Cerrar",
      open: "Abrir menú",
      language: "Idioma",
      languageShort: "ES",
    },
    nav: {
      navigation: "Navegación",
      home: "Inicio",
      manifesto: "Manifiesto",
      services: "Servicios",
      methodology: "Metodología",
      cases: "Casos",
      stack: "Stack",
      team: "Equipo",
      faq: "FAQ",
      contact: "Contacto",
    },
    hero: {
      eyebrow: "Studio de software craft · Salta, Argentina",
      titleA: "Software puesto en",
      titleHighlight: "acción.",
      subtitle:
        "Construimos producto digital senior end-to-end. Desde el primer wireframe hasta el sistema en producción, con un equipo que conoce su oficio — UX, desarrollo, seguridad y QA bajo el mismo techo.",
      ctaPrimary: "Hablemos de tu proyecto",
      ctaSecondary: "Ver cómo trabajamos",
      scroll: "scroll",
    },
    footer: {
      blurb: "Software puesto en acción.",
      location: "Salta, Argentina",
      copyright: (year: number) =>
        `© ${year} Praxia Studio. Hecho con criterio en Salta.`,
      tagline: "Praxis aplicada al producto digital.",
    },
  },
  en: {
    common: {
      menu: "Menu",
      close: "Close",
      open: "Open menu",
      language: "Language",
      languageShort: "EN",
    },
    nav: {
      navigation: "Navigation",
      home: "Home",
      manifesto: "Manifesto",
      services: "Services",
      methodology: "Methodology",
      cases: "Cases",
      stack: "Stack",
      team: "Team",
      faq: "FAQ",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Senior software craft studio · Salta, Argentina",
      titleA: "Software put into",
      titleHighlight: "action.",
      subtitle:
        "We build senior digital product end-to-end. From the first wireframe to production-ready systems, with a team that knows its craft — UX, development, security and QA under the same roof.",
      ctaPrimary: "Let's talk about your project",
      ctaSecondary: "See how we work",
      scroll: "scroll",
    },
    footer: {
      blurb: "Software put into action.",
      location: "Salta, Argentina",
      copyright: (year: number) =>
        `© ${year} Praxia Studio. Crafted in Salta.`,
      tagline: "Praxis applied to digital product.",
    },
  },
} as const;

export type Messages = (typeof messages)[Lang];
