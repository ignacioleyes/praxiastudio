import type { LucideIcon } from "lucide-react";
import { Compass, Layers, LifeBuoy, Repeat, Rocket, Users } from "lucide-react";

export type StepId =
  | "discovery"
  | "foundation"
  | "sprints"
  | "uat"
  | "deploy"
  | "support";

export interface Step {
  id: StepId;
  icon: LucideIcon;
}

export const methodologySteps: Step[] = [
  { id: "discovery", icon: Compass },
  { id: "foundation", icon: Layers },
  { id: "sprints", icon: Repeat },
  { id: "uat", icon: Users },
  { id: "deploy", icon: Rocket },
  { id: "support", icon: LifeBuoy },
];
