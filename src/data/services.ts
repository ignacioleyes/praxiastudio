import type { LucideIcon } from "lucide-react";
import {
  Code2,
  LayoutDashboard,
  Network,
  PenTool,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export type ServiceId =
  | "design"
  | "fullstack"
  | "integrations"
  | "legacy"
  | "admin"
  | "qa";

export interface Service {
  id: ServiceId;
  icon: LucideIcon;
  anchor: string;
}

export const services: Service[] = [
  { id: "design", icon: PenTool, anchor: "#servicio-diseno" },
  { id: "fullstack", icon: Code2, anchor: "#servicio-fullstack" },
  { id: "integrations", icon: Network, anchor: "#servicio-integraciones" },
  { id: "legacy", icon: Wrench, anchor: "#servicio-legacy" },
  { id: "admin", icon: LayoutDashboard, anchor: "#servicio-admin" },
  { id: "qa", icon: ShieldCheck, anchor: "#servicio-qa" },
];
