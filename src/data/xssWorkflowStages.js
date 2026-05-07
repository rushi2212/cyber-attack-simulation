export const xssWorkflowPayload = "<script>alert('XSS')</script>";

export const xssWorkflowStages = [
  {
    id: "attacker",
    title: "Attacker / User",
    description: "Crafts a malicious script payload in a comment field.",
    status: "Payload injected",
    severity: "Medium",
    request: "User input: <script>alert('XSS')</script>",
    vector: "Comment input field",
    explanation:
      "The attacker supplies JavaScript that will run if the page renders it unsafely.",
  },
  {
    id: "httpRequest",
    title: "HTTP Request",
    description: "Submits the payload to the web server.",
    status: "Request submitted",
    severity: "Medium",
    request: "POST /comment payload=<script>",
    vector: "Form submission",
    explanation:
      "The payload travels in a normal HTTP request and looks legitimate to basic filters.",
  },
  {
    id: "serverRender",
    title: "Server Render",
    description: "Stores or reflects the payload without sanitizing it.",
    status: "Payload persisted",
    severity: "High",
    request: "HTML response contains raw input",
    vector: "Unsafe template render",
    explanation:
      "The server renders the payload directly into HTML, enabling script execution.",
  },
  {
    id: "victimBrowser",
    title: "Victim Browser",
    description: "A user loads the infected page.",
    status: "Page rendered",
    severity: "High",
    request: "GET /post/42",
    vector: "Victim page load",
    explanation:
      "The browser parses and renders the response that includes the injected script.",
  },
  {
    id: "scriptExecution",
    title: "Script Execution",
    description: "Injected JavaScript executes in the victim context.",
    status: "Script running",
    severity: "Critical",
    request: "Browser executes <script>",
    vector: "DOM execution",
    explanation: "The payload runs with the victim's session privileges.",
  },
  {
    id: "cookieTheft",
    title: "Cookie Theft",
    description: "Session cookie is read and exfiltrated.",
    status: "Cookie stolen",
    severity: "Critical",
    request: "document.cookie exfiltrated",
    vector: "Outbound beacon",
    explanation:
      "The attacker receives a valid session token from the victim browser.",
  },
  {
    id: "sessionHijack",
    title: "Session Hijack",
    description: "Attacker uses the stolen token to impersonate the user.",
    status: "Session hijacked",
    severity: "Critical",
    request: "Replay stolen session token",
    vector: "Account takeover",
    explanation: "The attacker reuses the token to access protected resources.",
  },
  {
    id: "waf",
    title: "Firewall / WAF",
    description: "Security rules detect and block further requests.",
    status: "Traffic blocked",
    severity: "High",
    request: "WAF blocked suspicious payload",
    vector: "Security controls",
    explanation:
      "Defensive controls block repeated attacks and trigger alerts.",
  },
];

export const xssTransformations = [
  "User input includes <script> payload",
  "HTTP request carries the payload",
  "Server renders unescaped HTML",
  "Browser executes injected script",
  "Session cookie is exfiltrated",
  "Attacker hijacks the session",
];
