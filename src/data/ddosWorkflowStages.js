export const ddosWorkflowPayload = "GET /api/health?cache_bust=bot";

export const ddosWorkflowStages = [
  {
    id: "attacker",
    title: "Attacker / Botmaster",
    description: "Sends commands to coordinate a botnet flood.",
    status: "Command issued",
    severity: "Medium",
    request: "C2 signal dispatched",
    vector: "Command & control",
    explanation:
      "The attacker orchestrates thousands of devices to begin a synchronized flood.",
  },
  {
    id: "botnet",
    title: "Botnet Activation",
    description: "Compromised devices receive instructions and wake up.",
    status: "Bots online",
    severity: "Medium",
    request: "Bot nodes ready",
    vector: "Distributed endpoints",
    explanation:
      "Bots prepare to generate large volumes of requests toward the target.",
  },
  {
    id: "requestStorm",
    title: "Traffic Storm",
    description: "Bots begin sending high-rate traffic bursts.",
    status: "Traffic surge",
    severity: "High",
    request: "High RPS flood",
    vector: "HTTP/UDP/SYN",
    explanation:
      "Massive request volume saturates network edges and upstream links.",
  },
  {
    id: "network",
    title: "Internet Transit",
    description: "Attack traffic traverses ISPs and backbone links.",
    status: "Network congested",
    severity: "High",
    request: "Packets in transit",
    vector: "Transit links",
    explanation:
      "Network congestion introduces latency spikes and packet loss.",
  },
  {
    id: "target",
    title: "Target Server",
    description: "Server receives an overwhelming request load.",
    status: "Resources saturated",
    severity: "Critical",
    request: ddosWorkflowPayload,
    vector: "Service endpoints",
    explanation:
      "CPU, RAM, and bandwidth are exhausted while legitimate users time out.",
  },
  {
    id: "degradation",
    title: "Service Degradation",
    description: "Legitimate traffic is delayed or dropped.",
    status: "Service unstable",
    severity: "Critical",
    request: "Timeouts observed",
    vector: "User traffic",
    explanation: "The service slows or crashes under sustained pressure.",
  },
  {
    id: "waf",
    title: "Firewall / WAF",
    description: "Security rules detect abusive patterns.",
    status: "Filtering traffic",
    severity: "High",
    request: "Rate limits engaged",
    vector: "Edge defenses",
    explanation: "Protection systems begin blocking suspicious request bursts.",
  },
  {
    id: "mitigation",
    title: "Mitigation / Recovery",
    description: "Scrubbing centers absorb attack traffic.",
    status: "Recovery underway",
    severity: "High",
    request: "Clean traffic restored",
    vector: "Mitigation network",
    explanation: "Traffic is filtered so legitimate users regain access.",
  },
];

export const ddosTransformations = [
  "C2 commands activate botnet",
  "Bots generate synchronized traffic",
  "Traffic storm hits network edge",
  "Server resources saturate",
  "Service degrades or crashes",
  "Mitigation filters attack",
];
