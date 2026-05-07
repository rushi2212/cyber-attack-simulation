export const xssPayload = "<script>alert('XSS')</script>";

export const xssStages = [
  {
    id: "payload",
    title: "Attacker enters malicious JavaScript payload",
    requestStatus: "Payload drafted",
    severity: "Medium",
    detection: "Monitoring",
    browserStatus: "Idle",
    cookieStatus: "Secure",
    explanation:
      "The attacker crafts a script payload that will execute inside a victim browser if rendered unsafely.",
    log: "INPUT: <script>alert('XSS')</script>",
  },
  {
    id: "http",
    title: "HTTP request submission",
    requestStatus: "POST /comment",
    severity: "Medium",
    detection: "Monitoring",
    browserStatus: "Idle",
    cookieStatus: "Secure",
    explanation:
      "The payload is delivered to the web server via a normal request, often hidden inside a form field.",
    log: "REQUEST: POST /comment payload=<script>",
  },
  {
    id: "stored",
    title: "Server stores or reflects payload",
    requestStatus: "Payload persisted",
    severity: "High",
    detection: "Suspicious",
    browserStatus: "Idle",
    cookieStatus: "Secure",
    explanation:
      "The server stores or reflects the input without sanitizing it, leaving it embedded in the HTML response.",
    log: "RENDER: raw user input in HTML",
  },
  {
    id: "victim",
    title: "Victim opens vulnerable page",
    requestStatus: "GET /post/42",
    severity: "High",
    detection: "Suspicious",
    browserStatus: "Rendering",
    cookieStatus: "Secure",
    explanation:
      "A victim loads the page that contains the injected payload, causing the browser to render unsafe content.",
    log: "VICTIM: page loaded with injected DOM",
  },
  {
    id: "execute",
    title: "Browser executes malicious script",
    requestStatus: "Script running",
    severity: "Critical",
    detection: "Detected",
    browserStatus: "Script executing",
    cookieStatus: "Exposed",
    explanation:
      "Because the browser trusts the page origin, it executes the injected script with user privileges.",
    log: "BROWSER: executing injected script",
  },
  {
    id: "cookie",
    title: "Session cookie theft",
    requestStatus: "Cookie captured",
    severity: "Critical",
    detection: "Detected",
    browserStatus: "Compromised",
    cookieStatus: "Stolen",
    explanation:
      "The script reads session cookies and sends them to the attacker-controlled endpoint.",
    log: "COOKIE: session token exfiltrated",
  },
  {
    id: "hijack",
    title: "Hacker receives stolen session",
    requestStatus: "Session hijack",
    severity: "Critical",
    detection: "Detected",
    browserStatus: "Session hijacked",
    cookieStatus: "Stolen",
    explanation:
      "With a valid session token, the attacker impersonates the victim to access protected resources.",
    log: "SESSION: attacker impersonation active",
  },
  {
    id: "waf",
    title: "Firewall/WAF detection",
    requestStatus: "Traffic blocked",
    severity: "High",
    detection: "Blocked",
    browserStatus: "Recovered",
    cookieStatus: "Reset",
    explanation:
      "Security rules detect script injection patterns and block further malicious requests.",
    log: "WAF: XSS signature matched, request blocked",
  },
];
