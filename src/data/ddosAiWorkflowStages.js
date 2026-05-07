export const ddosAiWorkflowPayload = "GET /api/login?retry=1";

export const ddosAiWorkflowStages = [
  {
    id: "multiBots",
    title: "Multiple Bots Send Requests",
    description: "Distributed bots start sending coordinated traffic.",
    status: "Flood initiated",
    severity: "Medium",
    request: "Bot traffic detected",
    vector: "Botnet",
    explanation:
      "Large volumes of automated traffic begin targeting the service.",
  },
  {
    id: "reverseProxy",
    title: "Reverse Proxy (NGINX / HAProxy)",
    description: "Routes traffic into the inspection pipeline.",
    status: "Traffic routed",
    severity: "Medium",
    request: "Proxy forwarding",
    vector: "Edge proxy",
    explanation: "The reverse proxy funnels traffic to preprocessing services.",
  },
  {
    id: "trafficCollection",
    title: "Traffic Collection Layer",
    description: "Aggregates requests for analysis.",
    status: "Traffic collected",
    severity: "Medium",
    request: "Samples captured",
    vector: "Telemetry",
    explanation: "Request metadata is collected for feature extraction.",
  },
  {
    id: "featureExtraction",
    title: "Feature Extraction",
    description: "Extracts rates, IP frequency, volume, sessions, and spikes.",
    status: "Features extracted",
    severity: "High",
    request: "Feature vector ready",
    vector: "Traffic analytics",
    explanation:
      "Key indicators like RPS, session counts, and spike patterns are built.",
  },
  {
    id: "aiEngine",
    title: "AI Detection Engine",
    description: "Isolation Forest + Autoencoder score anomalies.",
    status: "Models scoring",
    severity: "High",
    request: "AI inference running",
    vector: "ML inference",
    explanation: "Models detect abnormal traffic patterns and outliers.",
  },
  {
    id: "threatScoring",
    title: "Threat Scoring Engine",
    description: "Aggregates AI outputs into a risk score.",
    status: "Risk scored",
    severity: "High",
    request: "Risk score: 82/100",
    vector: "Risk aggregator",
    explanation:
      "Scoring combines multiple model results into a unified risk score.",
  },
  {
    id: "decision",
    title: "AI Decision System",
    description: "Applies allow, rate-limit, or block.",
    status: "Decision issued",
    severity: "Critical",
    request: "Action: Rate Limit",
    vector: "Policy engine",
    explanation:
      "Decisions are based on risk thresholds to protect the service.",
  },
  {
    id: "logging",
    title: "Alert + Logging Dashboard",
    description: "Stores attack logs and shows alerts.",
    status: "Alerts dispatched",
    severity: "Medium",
    request: "Dashboard updated",
    vector: "SOC dashboard",
    explanation: "Incidents are logged and responders receive alerts.",
  },
];

export const ddosAiTransformations = [
  "Bot traffic hits the edge",
  "Proxy routes traffic",
  "Traffic telemetry captured",
  "Features extracted",
  "AI models score anomalies",
  "Risk score aggregated",
  "Allow / rate-limit / block",
  "Alerts and logs updated",
];
