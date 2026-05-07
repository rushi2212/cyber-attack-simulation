import Navbar from "../components/common/Navbar";
import CyberBackground from "../components/common/CyberBackground";

function AttackStories() {
  const attacks = [
    {
      cls: "ddos",
      emoji: "🌊",
      title: "DDoS Flood Attack",
      subtitle: "Overwhelming a website with fake traffic",
      badge: "⚠ Danger",
      badgeOk: false,
      steps: [
        {
          icon: "🤖",
          label: "Thousands of Bots",
          detail: "Fake users flood the internet",
        },
        {
          icon: "📡",
          label: "Spam Requests",
          detail: "All bots hit website at the same time",
        },
        {
          icon: "🖥️",
          label: "Server Choked",
          detail: "Too many requests, server can't cope",
        },
        {
          icon: "😵",
          label: "Website Crashes",
          detail: "Real users can't open the site",
        },
        {
          icon: "🚨",
          label: "Attack Succeeds",
          detail: "Site goes offline — mission done",
        },
      ],
      analogy:
        "Imagine a road with 2 lanes suddenly getting 10,000 cars at once — everything stops and no one can move. That's a DDoS attack on a website.",
    },
    {
      cls: "sql",
      emoji: "💉",
      title: "SQL Injection",
      subtitle: "Tricking the database with a sneaky login",
      badge: "⚠ Danger",
      badgeOk: false,
      steps: [
        {
          icon: "😈",
          label: "Attacker Opens Login",
          detail: "Goes to a normal login page",
        },
        {
          icon: "⌨️",
          label: "Types Sneaky Code",
          detail: "Enters ' OR 1=1-- instead of a password",
        },
        {
          icon: "🗃️",
          label: "Database Gets Confused",
          detail: "Treats the code as a valid command",
        },
        {
          icon: "🔓",
          label: "Bypasses Password",
          detail: 'Database says "OK, login allowed!"',
        },
        {
          icon: "🗂️",
          label: "Data Stolen",
          detail: "All private records are exposed",
        },
      ],
      analogy:
        'Like writing "I don\'t need a ticket, let everyone in" on a form — and the gatekeeper blindly follows it. The database was never taught to question the instruction.',
    },
    {
      cls: "xss",
      emoji: "🕵️",
      title: "XSS — Cross-Site Scripting",
      subtitle: "Hiding a trap inside a trusted website",
      badge: "⚠ Danger",
      badgeOk: false,
      steps: [
        {
          icon: "😈",
          label: "Attacker Posts Comment",
          detail: "Hides a script inside a review or message",
        },
        {
          icon: "🌐",
          label: "Script Saved on Site",
          detail: "Website stores the poisoned comment",
        },
        {
          icon: "👤",
          label: "Victim Visits Page",
          detail: "An innocent user opens the page",
        },
        {
          icon: "💻",
          label: "Browser Runs Script",
          detail: "Their browser executes the hidden trap",
        },
        {
          icon: "🍪",
          label: "Session Hijacked",
          detail: "Cookies sent to attacker — account stolen",
        },
      ],
      analogy:
        "Like putting a poison note inside a library book. The next person who reads it gets affected — and they had no idea it was there.",
    },
    {
      cls: "bot",
      emoji: "🤖",
      title: "Bot Automation Abuse",
      subtitle: "Robots pretending to be real users",
      badge: "✓ Blocked",
      badgeOk: true,
      steps: [
        {
          icon: "🤖",
          label: "Bot Pretends to Visit",
          detail: "Acts like a real user — clicks, scrolls, types",
        },
        {
          icon: "⚡",
          label: "Too Fast to Be Human",
          detail: "Clicks 1000 times per second — no human can",
        },
        {
          icon: "🔍",
          label: "System Notices",
          detail: "Pattern looks abnormal — alert triggered",
        },
        {
          icon: "🧩",
          label: "CAPTCHA Challenge",
          detail: '"Prove you\'re human" — bots fail this',
        },
        {
          icon: "🚫",
          label: "Bot Blocked",
          detail: "Access denied — real users stay safe",
        },
      ],
      analogy:
        "Like a robot joining a queue and buying all concert tickets in seconds before any human can. Sites fight back by asking puzzles only humans can solve.",
    },
  ];

  const palette = {
    ddos: {
      card: "#0a030200",
      cardBorder: "#7f1d1d44",
      header: "#150505",
      headerBorder: "#7f1d1d33",
      iconWrap: "#450a0a",
      iconColor: "#f87171",
      title: "#fca5a5",
      subtitle: "#7f1d1d99",
      badge: { bg: "#7f1d1d33", color: "#f87171", border: "#7f1d1d55" },
      circle: { bg: "#450a0a", border: "#ef444466", color: "#f87171" },
      num: { bg: "#dc2626", color: "#fff" },
      arrow: "#ef444455",
      arrowHead: "#ef4444",
      footer: {
        bg: "#0d0303",
        border: "#7f1d1d44",
        color: "#fca5a5",
        strong: "#f87171",
      },
    },
    sql: {
      card: "#08060100",
      cardBorder: "#78350f44",
      header: "#100901",
      headerBorder: "#78350f33",
      iconWrap: "#451a03",
      iconColor: "#fbbf24",
      title: "#fde68a",
      subtitle: "#78350f99",
      badge: { bg: "#78350f33", color: "#fbbf24", border: "#92400e55" },
      circle: { bg: "#451a03", border: "#f59e0b66", color: "#fbbf24" },
      num: { bg: "#d97706", color: "#1a0500" },
      arrow: "#f59e0b55",
      arrowHead: "#f59e0b",
      footer: {
        bg: "#080601",
        border: "#78350f44",
        color: "#fde68a",
        strong: "#fbbf24",
      },
    },
    xss: {
      card: "#010a0c00",
      cardBorder: "#164e6344",
      header: "#020e12",
      headerBorder: "#164e6333",
      iconWrap: "#083344",
      iconColor: "#22d3ee",
      title: "#a5f3fc",
      subtitle: "#164e6399",
      badge: { bg: "#164e6333", color: "#22d3ee", border: "#0e749155" },
      circle: { bg: "#083344", border: "#06b6d466", color: "#22d3ee" },
      num: { bg: "#0891b2", color: "#001a20" },
      arrow: "#06b6d455",
      arrowHead: "#06b6d4",
      footer: {
        bg: "#010a0c",
        border: "#164e6344",
        color: "#a5f3fc",
        strong: "#22d3ee",
      },
    },
    bot: {
      card: "#01090100",
      cardBorder: "#14532d44",
      header: "#020e04",
      headerBorder: "#14532d33",
      iconWrap: "#052e16",
      iconColor: "#4ade80",
      title: "#bbf7d0",
      subtitle: "#14532d99",
      badge: { bg: "#14532d33", color: "#4ade80", border: "#16653255" },
      circle: { bg: "#052e16", border: "#22c55e66", color: "#4ade80" },
      num: { bg: "#16a34a", color: "#001a08" },
      arrow: "#22c55e55",
      arrowHead: "#22c55e",
      footer: {
        bg: "#010901",
        border: "#14532d44",
        color: "#bbf7d0",
        strong: "#4ade80",
      },
    },
  };

  return (
    <div style={{ padding: "2.5rem 1.25rem", maxWidth: 980, margin: "0 auto" }}>
      <p
        style={{
          fontSize: 11,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#6b7280",
          marginBottom: "1.5rem",
        }}
      >
        How each cyber attack works — plain &amp; simple
      </p>

      {attacks.map((attack) => {
        const p = palette[attack.cls];
        return (
          <div
            key={attack.cls}
            style={{
              borderRadius: 20,
              border: `1px solid ${p.cardBorder}`,
              marginBottom: "1.5rem",
              overflow: "hidden",
              background: "#050816",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "1rem 1.5rem",
                borderBottom: `1px solid ${p.headerBorder}`,
                background: p.header,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  background: p.iconWrap,
                  flexShrink: 0,
                }}
              >
                {attack.emoji}
              </div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 600, color: p.title }}>
                  {attack.title}
                </div>
                <div style={{ fontSize: 12, marginTop: 2, color: p.subtitle }}>
                  {attack.subtitle}
                </div>
              </div>
              <div
                style={{
                  marginLeft: "auto",
                  fontSize: 11,
                  fontWeight: 600,
                  padding: "4px 12px",
                  borderRadius: 20,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                  background: p.badge.bg,
                  color: p.badge.color,
                  border: `1px solid ${p.badge.border}`,
                }}
              >
                {attack.badge}
              </div>
            </div>

            {/* Flow */}
            <div
              style={{
                padding: "1.5rem",
                display: "flex",
                alignItems: "flex-start",
                overflowX: "auto",
                gap: 0,
              }}
            >
              {attack.steps.map((step, i) => (
                <div key={i} style={{ display: "contents" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      minWidth: 110,
                      flex: 1,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 28,
                        background: p.circle.bg,
                        border: `2px solid ${p.circle.border}`,
                        position: "relative",
                        flexShrink: 0,
                      }}
                    >
                      {step.icon}
                      <span
                        style={{
                          position: "absolute",
                          top: -6,
                          right: -6,
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          background: p.num.bg,
                          color: p.num.color,
                          fontSize: 10,
                          fontWeight: 700,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "monospace",
                        }}
                      >
                        {i + 1}
                      </span>
                    </div>
                    <div
                      style={{
                        marginTop: 10,
                        fontSize: 12,
                        fontWeight: 600,
                        color: p.title,
                        lineHeight: 1.3,
                      }}
                    >
                      {step.label}
                    </div>
                    <div
                      style={{
                        marginTop: 4,
                        fontSize: 11,
                        color: "#9ca3af",
                        lineHeight: 1.4,
                        maxWidth: 100,
                      }}
                    >
                      {step.detail}
                    </div>
                  </div>

                  {/* Arrow between steps */}
                  {i < attack.steps.length - 1 && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        paddingTop: 32,
                        flexShrink: 0,
                        width: 36,
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: 2,
                          background: p.arrow,
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            right: -2,
                            top: "50%",
                            transform: "translateY(-50%)",
                            width: 0,
                            height: 0,
                            borderStyle: "solid",
                            borderWidth: "5px 0 5px 8px",
                            borderColor: `transparent transparent transparent ${p.arrowHead}`,
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Footer analogy */}
            <div
              style={{
                margin: "0 1.5rem 1.5rem",
                padding: "0.875rem 1rem",
                borderRadius: 12,
                border: `1px solid ${p.footer.border}`,
                background: p.footer.bg,
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
                fontSize: 13,
                color: p.footer.color,
              }}
            >
              <span style={{ fontSize: 18, flexShrink: 0, marginTop: 1 }}>
                💡
              </span>
              <div>
                <strong
                  style={{
                    display: "block",
                    fontSize: 11,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 3,
                    color: p.footer.strong,
                  }}
                >
                  Simple version
                </strong>
                {attack.analogy}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <CyberBackground />
      <Navbar />

      <div className="px-5 py-10 md:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-black/60 via-black/40 to-black/20 p-8 shadow-[0_0_40px_rgba(34,211,238,0.08)]">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
              Cyber Dashboard
            </p>
            <h1 className="mt-3 text-4xl font-bold text-green-400 md:text-5xl">
              How attacks happen
            </h1>
            <p className="mt-3 max-w-3xl text-sm text-gray-300 md:text-base">
              Icon-led stories that show what happens during attacks and how it
              impacts real users. Each flow is simplified for non-technical
              audiences.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-gray-300">
              {[
                "DDoS impact",
                "SQL Injection",
                "XSS scripts",
                "Bot automation",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <AttackStories />
      </div>
    </div>
  );
}

export default Dashboard;
