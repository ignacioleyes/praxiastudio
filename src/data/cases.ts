export type CaseId = "neos";

export interface CaseStudy {
  id: CaseId;
  url: string;
  stack: string[];
  year: number;
}

export const cases: CaseStudy[] = [
  {
    id: "neos",
    url: "https://neos.com.ar",
    stack: ["React 19", "TypeScript", "Supabase", "Leaflet", "i18n ES/EN", "Tailwind v4"],
    year: 2026,
  },
];
