import { IconProps } from "./shared";

export interface ThreatDetails {
  subject: string;
  sender: string;
}

export interface Threat {
  id: string;
  timestamp: string;
  type: "Phishing" | "Malware" | "Spam";
  status: "Quarantined" | "Active" | "Resolved";
  risk_score: number;
  details: ThreatDetails;
}

export interface ThreatFeedResponse {
  summary: {
    emails_scanned: number;
    threats_detected: number;
    quarantined_items: number;
  };
  threats: Threat[];
}

export type RiskLevel = "low" | "medium" | "high" | "critical";

export interface RiskConfig {
  level: RiskLevel;
  color: string;
  bgColor: string;
  label: string;
}

export interface ThreatTypeConfig {
  icon: (iconProps:IconProps) => React.ReactElement;
  color: string;
  bgColor: string;
}
