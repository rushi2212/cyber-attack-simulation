export const sqlPayload = "' OR '1'='1";

export const sqlWorkflowStages = [
  {
    id: "attacker",
    title: "Attacker / User",
    description: "Inputs a malicious SQL payload into the login form.",
    status: "Payload injected",
    severity: "Medium",
    request: "User Input: ' OR '1'='1",
    query: "N/A",
    explanation:
      "The attacker enters crafted input designed to manipulate the query logic.",
  },
  {
    id: "loginForm",
    title: "Login Form",
    description: "Collects user credentials without sanitizing input.",
    status: "Form submitted",
    severity: "Medium",
    request: "HTTP form payload captured",
    query: "N/A",
    explanation:
      "The form forwards raw input to the server without filtering malicious patterns.",
  },
  {
    id: "httpRequest",
    title: "HTTP Request",
    description: "Sends POST /login with malicious payload.",
    status: "Request in transit",
    severity: "Medium",
    request: "POST /login payload=' OR '1'='1",
    query: "N/A",
    explanation:
      "The payload travels as part of a normal HTTP request to the backend.",
  },
  {
    id: "webServer",
    title: "Web Server",
    description: "Receives the request and forwards it to the backend.",
    status: "Request routed",
    severity: "Medium",
    request: "Request forwarded",
    query: "N/A",
    explanation: "The web server passes user input to the application layer.",
  },
  {
    id: "backend",
    title: "Backend Application",
    description: "Constructs a SQL query using string concatenation.",
    status: "Query building",
    severity: "High",
    request: "User input concatenated",
    query: "SELECT * FROM users ...",
    explanation:
      "Unsafe query construction allows the payload to alter SQL logic.",
  },
  {
    id: "queryBuilder",
    title: "SQL Query Builder",
    description: "Injects payload into the WHERE clause.",
    status: "Query manipulated",
    severity: "High",
    request: "Payload injected into SQL",
    query:
      "SELECT * FROM users WHERE username='admin' AND password='' OR '1'='1';",
    explanation:
      "The payload makes the authentication check always evaluate to true.",
  },
  {
    id: "database",
    title: "Database Server",
    description: "Executes the manipulated SQL query.",
    status: "Query executed",
    severity: "Critical",
    request: "Database execution",
    query: "Execution succeeded",
    explanation: "The database returns records without validating credentials.",
  },
  {
    id: "bypass",
    title: "Authentication Bypass",
    description: "Login succeeds without valid credentials.",
    status: "Access granted",
    severity: "Critical",
    request: "Session granted",
    query: "Auth bypassed",
    explanation:
      "The attacker gains access because the WHERE clause always returns true.",
  },
  {
    id: "access",
    title: "Unauthorized Access",
    description: "Attacker gains access to protected data.",
    status: "Data exposed",
    severity: "Critical",
    request: "Sensitive data accessed",
    query: "Records leaked",
    explanation:
      "Sensitive data is exposed due to the bypassed authentication logic.",
  },
];

export const sqlTransformations = [
  "User Input: ' OR '1'='1",
  "HTTP POST Request",
  "Backend generates vulnerable SQL query",
  "Database executes manipulated query",
  "Authentication bypass occurs",
];
