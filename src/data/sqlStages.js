export const sqlStages = [
  {
    id: "payload",
    title: "User enters malicious payload",
    requestStatus: "Payload injected",
    severity: "Medium",
    detection: "Monitoring",
    explanation:
      "The attacker submits a crafted input to trick the login form into accepting arbitrary SQL.",
    queryLog: "INPUT: ' OR '1'='1",
  },
  {
    id: "http",
    title: "HTTP POST request generation",
    requestStatus: "POST /login",
    severity: "Medium",
    detection: "Monitoring",
    explanation:
      "The browser sends the malicious input as part of a standard HTTP POST request.",
    queryLog: "REQUEST: POST /login payload=malicious",
  },
  {
    id: "backend",
    title: "Backend query construction",
    requestStatus: "Building SQL",
    severity: "High",
    detection: "Monitoring",
    explanation:
      "The backend concatenates the user input into a raw SQL string instead of using parameters.",
    queryLog: "CODE: string concat detected",
  },
  {
    id: "manipulation",
    title: "SQL query manipulation",
    requestStatus: "SQL modified",
    severity: "High",
    detection: "Suspicious",
    explanation:
      "The injected payload alters the WHERE clause so it always evaluates to true.",
    queryLog: "QUERY: WHERE password='' OR '1'='1'",
  },
  {
    id: "execution",
    title: "Database execution",
    requestStatus: "Query executed",
    severity: "Critical",
    detection: "Suspicious",
    explanation:
      "The database runs the manipulated query and returns records without proper checks.",
    queryLog: "DB: execution succeeded",
  },
  {
    id: "bypass",
    title: "Authentication bypass",
    requestStatus: "Access granted",
    severity: "Critical",
    detection: "Detected",
    explanation:
      "The system treats the attacker as authenticated, unlocking protected sessions.",
    queryLog: "AUTH: bypassed",
  },
  {
    id: "leak",
    title: "Data leakage visualization",
    requestStatus: "Data exfiltration",
    severity: "Critical",
    detection: "Detected",
    explanation:
      "Sensitive data is extracted and sent to the attacker-controlled endpoint.",
    queryLog: "DATA: user records exposed",
  },
  {
    id: "waf",
    title: "Firewall/WAF detection",
    requestStatus: "Traffic blocked",
    severity: "High",
    detection: "Blocked",
    explanation:
      "A WAF signature triggers and blocks further malicious traffic at the edge.",
    queryLog: "WAF: rule match, request blocked",
  },
];
