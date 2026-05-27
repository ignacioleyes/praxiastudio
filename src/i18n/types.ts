export type Lang = "es" | "en";
export const SUPPORTED_LANGS: Lang[] = ["es", "en"];
export const DEFAULT_LANG: Lang = "es";

/** Wrapper para valores que tienen versión ES y EN (ej: textos en data files). */
export type Localized<T> = { es: T; en: T };
