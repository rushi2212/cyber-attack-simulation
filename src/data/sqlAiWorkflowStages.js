export const sqlAiWorkflowPayload =
  "POST /login username=admin&password=' OR '1'='1";

export const sqlAiWorkflowStages = [
  {
    id: "userRequest",
    title: "User Sends Request",
    description: "User submits login input to the application.",
    status: "Request received",
    severity: "Low",
    request: "Login request captured",
    query: "N/A",
    explanation: "Input arrives at the edge before any validation occurs.",
  },
  {
    id: "reverseProxy",
    title: "Reverse Proxy (NGINX / HAProxy)",
    description: "Routes traffic to the inspection pipeline.",
    status: "Traffic routed",
    severity: "Low",
    request: "Proxy forwarding",
    query: "N/A",
    explanation: "The reverse proxy funnels traffic to inspection services.",
  },
  {
    id: "preprocess",
    title: "Traffic Preprocessing Layer",
    description: "Decodes, normalizes, and tokenizes the request.",
    status: "Preprocessing",
    severity: "Medium",
    request: "URL decoded, tokens extracted",
    query: "N/A",
    explanation:
      "URL decode and NLTK tokenization prepare the payload for analysis.",
  },
  {
    id: "features",
    title: "Feature Extraction",
    description: "Detects SQL keywords, length, special chars, and patterns.",
    status: "Features extracted",
    severity: "Medium",
    request: "Feature vector ready",
    query: "N/A",
    explanation:
      "Structured features capture indicators of SQL injection attempts.",
  },
  {
    id: "aiEngine",
    title: "AI Detection Engine",
    description: "Runs BiLSTM, Isolation Forest, and Autoencoder models.",
    status: "Models scoring",
    severity: "High",
    request: "AI inference running",
    query: "N/A",
    explanation: "Multiple models evaluate the request for anomaly and intent.",
  },
  {
    id: "risk",
    title: "Threat Scoring Engine",
    description: "Aggregates model outputs into a risk score.",
    status: "Risk scored",
    severity: "High",
    request: "Risk score: 78/100",
    query: "N/A",
    explanation: "AI outputs are combined into a single risk score (0-100).",
  },
  {
    id: "decision",
    title: "Decision Engine",
    description: "Applies allow, rate-limit, or block policy.",
    status: "Decision issued",
    severity: "Critical",
    request: "Action: Block",
    query: "N/A",
    explanation: "High risk scores trigger blocking or rate limiting actions.",
  },
  {
    id: "logging",
    title: "Logging + Dashboard",
    description: "Stores logs and updates real-time dashboards.",
    status: "Alert recorded",
    severity: "Medium",
    request: "Attack logged",
    query: "N/A",
    explanation:
      "Security teams are notified and metrics are updated in real time.",
  },
];

export const sqlAiTransformations = [
  "Request hits reverse proxy",
  "Decode + normalize payload",
  "Tokenize and extract features",
  "AI models score the request",
  "Risk score aggregated",
  "Allow / rate-limit / block",
  "Logs and alerts updated",
];
