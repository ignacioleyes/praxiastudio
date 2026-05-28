export type MemberId = "ignacio" | "magali" | "dario" | "luciano";

export interface TeamMember {
  id: MemberId;
  isFounder: boolean;
  linkedinUrl: string;
  initials: string;
}

export const team: TeamMember[] = [
  {
    id: "ignacio",
    isFounder: true,
    linkedinUrl: "https://www.linkedin.com/in/ignacio-leyes",
    initials: "IL",
  },
  {
    id: "magali",
    isFounder: false,
    linkedinUrl: "https://www.linkedin.com/in/magali-gandini",
    initials: "MG",
  },
  {
    id: "dario",
    isFounder: false,
    linkedinUrl: "https://www.linkedin.com/in/deesposito",
    initials: "DE",
  },
  {
    id: "luciano",
    isFounder: false,
    linkedinUrl: "https://www.linkedin.com/in/luciano-leyes-290ab6199",
    initials: "LL",
  },
];
