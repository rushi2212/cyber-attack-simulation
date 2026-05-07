export const botWorkflowPayload = "GET /search?q=shoes&session=auto";

export const botWorkflowStages = [
  {
    id: "traffic",
    title: "Traffic entering website",
    description: "Humans and bots arrive together, requiring inspection.",
    status: "Traffic intake",
    severity: "Medium",
    request: "Mixed traffic observed",
    vector: "Edge traffic",
    explanation:
      "Initial traffic looks similar, so baseline signals are collected first.",
  },
  {
    id: "frequency",
    title: "Request frequency analysis",
    description: "Rate spikes and burst patterns are detected.",
    status: "Rate analysis",
    severity: "Medium",
    request: "Spike patterns detected",
    vector: "Rate limiter",
    explanation:
      "High-frequency request bursts often signal automated activity.",
  },
  {
    id: "behavior",
    title: "Mouse movement analysis",
    description: "Behavioral signals distinguish humans from scripts.",
    status: "Behavior analysis",
    severity: "High",
    request: "Behavior anomalies flagged",
    vector: "Client telemetry",
    explanation:
      "Human interaction is irregular, while bots show uniform paths.",
  },
  {
    id: "typing",
    title: "Typing pattern analysis",
    description: "Keystroke cadence highlights automation.",
    status: "Keystroke analysis",
    severity: "High",
    request: "Keystroke variance low",
    vector: "Input telemetry",
    explanation: "Robotic typing cadence indicates scripted behavior.",
  },
  {
    id: "ip",
    title: "IP reputation checking",
    description: "Known abusive IPs are flagged.",
    status: "Reputation checks",
    severity: "High",
    request: "IP reputation alerts",
    vector: "Threat intel",
    explanation: "Abuse databases identify repeat offender IP ranges.",
  },
  {
    id: "ai",
    title: "AI threat scoring",
    description: "ML models score sessions for automation risk.",
    status: "AI scoring",
    severity: "Critical",
    request: "Threat score elevated",
    vector: "ML classifier",
    explanation:
      "Models combine telemetry and reputation data into a risk score.",
  },
  {
    id: "captcha",
    title: "CAPTCHA challenge",
    description: "Suspicious sessions are challenged.",
    status: "Verification",
    severity: "Critical",
    request: "CAPTCHA issued",
    vector: "Challenge gate",
    explanation: "Human verification separates legitimate users from bots.",
  },
  {
    id: "firewall",
    title: "Firewall/WAF filtering",
    description: "Rules block abusive traffic signatures.",
    status: "Filtering",
    severity: "High",
    request: "WAF rules applied",
    vector: "Edge defenses",
    explanation: "WAF filters and rate limits reduce abusive traffic.",
  },
  {
    id: "result",
    title: "Access allowed or blocked",
    description: "Clean traffic proceeds while bots are denied.",
    status: "Decision issued",
    severity: "High",
    request: "Allow/block decision",
    vector: "Policy engine",
    explanation:
      "Verified users proceed and automation is blocked or throttled.",
  },
];

export const botTransformations = [
  "Traffic mix enters the edge",
  "Rate spikes highlight automation",
  "Behavioral signals scored",
  "AI model assigns risk",
  "CAPTCHA or verification gate",
  "Allow/Block decision enforced",
];
