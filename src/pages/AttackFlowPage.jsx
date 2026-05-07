import { useState, useEffect, useRef } from "react";
import Navbar from "../components/common/Navbar";

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
      "Imagine a road with 2 lanes suddenly getting 10,000 cars at once — everything stops and no one can move.",
    accent: {
      main: "#ef4444",
      glow: "#ef444433",
      border: "#7f1d1d55",
      bg: "#450a0a",
      dim: "#7f1d1d",
    },
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
        label: "Database Confused",
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
      'Like writing "I don\'t need a ticket, let everyone in" on a form — and the gatekeeper blindly follows it.',
    accent: {
      main: "#fbbf24",
      glow: "#fbbf2433",
      border: "#78350f55",
      bg: "#451a03",
      dim: "#92400e",
    },
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
      "Like putting a poison note inside a library book. The next person who reads it gets affected — and they had no idea.",
    accent: {
      main: "#22d3ee",
      glow: "#22d3ee33",
      border: "#164e6355",
      bg: "#083344",
      dim: "#0e7491",
    },
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
      "Like a robot buying all concert tickets in seconds before any human can. Sites fight back with puzzles only humans can solve.",
    accent: {
      main: "#4ade80",
      glow: "#4ade8033",
      border: "#14532d55",
      bg: "#052e16",
      dim: "#166532",
    },
  },
];

function useTypewriter(text, running) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    if (!running) {
      setDisplayed("");
      return;
    }
    setDisplayed("");
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(iv);
    }, 18);
    return () => clearInterval(iv);
  }, [text, running]);
  return displayed;
}

function GlitchText({ text, active, color }) {
  const [glitch, setGlitch] = useState(false);
  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => setGlitch(true), 200);
    const t2 = setTimeout(() => setGlitch(false), 600);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, [active]);
  return (
    <span
      style={{
        position: "relative",
        color: glitch ? "#fff" : color,
        transition: "color 0.1s",
        display: "inline-block",
      }}
    >
      {text}
      {glitch && (
        <>
          <span
            style={{
              position: "absolute",
              inset: 0,
              color: "#ff0040",
              clipPath: "polygon(0 30%, 100% 30%, 100% 50%, 0 50%)",
              transform: "translateX(-3px)",
              opacity: 0.8,
            }}
          >
            {text}
          </span>
          <span
            style={{
              position: "absolute",
              inset: 0,
              color: "#00ffcc",
              clipPath: "polygon(0 60%, 100% 60%, 100% 80%, 0 80%)",
              transform: "translateX(3px)",
              opacity: 0.8,
            }}
          >
            {text}
          </span>
        </>
      )}
    </span>
  );
}

function AnimatedArrow({ active, done, color, glowColor }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (active || done) {
      let p = 0;
      const iv = setInterval(() => {
        p = Math.min(p + 0.08, 1);
        setProgress(p);
        if (p >= 1) clearInterval(iv);
      }, 16);
      return () => clearInterval(iv);
    } else {
      setProgress(0);
    }
  }, [active, done]);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        paddingTop: 32,
        flexShrink: 0,
        width: 40,
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          height: 2,
          background: "#1f2937",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: color,
            transform: `scaleX(${progress})`,
            transformOrigin: "left",
            transition: "none",
            boxShadow: progress > 0.5 ? `0 0 6px ${glowColor}` : "none",
          }}
        />
      </div>
      {progress > 0.8 && (
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
            borderColor: `transparent transparent transparent ${color}`,
            filter: `drop-shadow(0 0 4px ${glowColor})`,
            marginTop: 12,
          }}
        />
      )}
    </div>
  );
}

function StepCircle({ step, index, state, accent }) {
  const states = {
    idle: {
      bg: "#111827",
      border: "#374151",
      emoji: 0.4,
      num: "#374151",
      numText: "#9ca3af",
      scale: 1,
    },
    active: {
      bg: accent.bg,
      border: accent.main,
      emoji: 1,
      num: accent.main,
      numText: "#fff",
      scale: 1.15,
    },
    done: {
      bg: accent.bg + "88",
      border: accent.dim,
      emoji: 0.75,
      num: accent.dim,
      numText: "#ccc",
      scale: 1,
    },
  };
  const s = states[state];
  return (
    <div
      style={{
        width: 64,
        height: 64,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 26,
        background: s.bg,
        border: `2px solid ${s.border}`,
        position: "relative",
        flexShrink: 0,
        transform: `scale(${s.scale})`,
        transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        boxShadow:
          state === "active"
            ? `0 0 20px ${accent.glow}, 0 0 40px ${accent.glow}`
            : "none",
        opacity: s.emoji,
      }}
    >
      <span style={{ opacity: 1 / s.emoji, transition: "opacity 0.3s" }}>
        {step.icon}
      </span>
      <span
        style={{
          position: "absolute",
          top: -6,
          right: -6,
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: s.num,
          color: s.numText,
          fontSize: 10,
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "monospace",
          transition: "all 0.3s",
          boxShadow: state === "active" ? `0 0 8px ${accent.main}` : "none",
        }}
      >
        {state === "done" ? "✓" : index + 1}
      </span>
    </div>
  );
}

function ProgressBar({ progress, color, glow }) {
  return (
    <div
      style={{
        height: 3,
        background: "#1f2937",
        borderRadius: 2,
        overflow: "hidden",
        margin: "0 1.5rem",
      }}
    >
      <div
        style={{
          height: "100%",
          background: color,
          borderRadius: 2,
          width: `${progress * 100}%`,
          transition: "width 0.5s ease",
          boxShadow: `0 0 8px ${glow}`,
        }}
      />
    </div>
  );
}

function AttackCard({ attack }) {
  const [activeStep, setActiveStep] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const [done, setDone] = useState(false);
  const intervalRef = useRef(null);
  const analogyRunning = done;
  const analogyText = useTypewriter(attack.analogy, analogyRunning);

  const play = () => {
    if (playing) return;
    setDone(false);
    setActiveStep(-1);
    setPlaying(true);
    let step = 0;
    const tick = () => {
      setActiveStep(step);
      step++;
      if (step < attack.steps.length) {
        intervalRef.current = setTimeout(tick, 900);
      } else {
        setTimeout(() => {
          setPlaying(false);
          setDone(true);
        }, 900);
      }
    };
    intervalRef.current = setTimeout(tick, 200);
  };

  const reset = () => {
    clearTimeout(intervalRef.current);
    setActiveStep(-1);
    setPlaying(false);
    setDone(false);
  };

  useEffect(() => () => clearTimeout(intervalRef.current), []);

  const progress =
    activeStep < 0 ? 0 : done ? 1 : (activeStep + 1) / attack.steps.length;

  const getState = (i) => {
    if (done) return "done";
    if (i === activeStep) return "active";
    if (i < activeStep) return "done";
    return "idle";
  };

  return (
    <div
      style={{
        borderRadius: 20,
        border: `1px solid ${done ? attack.accent.main + "88" : attack.accent.border}`,
        marginBottom: "1.5rem",
        overflow: "hidden",
        background: "#050816",
        transition: "border-color 0.5s, box-shadow 0.5s",
        boxShadow: done ? `0 0 30px ${attack.accent.glow}` : "none",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          padding: "1rem 1.5rem",
          borderBottom: `1px solid ${attack.accent.border}`,
          background: "#0a0a1a",
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
            background: attack.accent.bg,
            flexShrink: 0,
            boxShadow:
              playing || done ? `0 0 12px ${attack.accent.glow}` : "none",
            transition: "box-shadow 0.3s",
            animation: playing ? "pulse 1.2s ease-in-out infinite" : "none",
          }}
        >
          {attack.emoji}
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{ fontSize: 18, fontWeight: 600, color: attack.accent.main }}
          >
            <GlitchText
              text={attack.title}
              active={activeStep === 0}
              color={attack.accent.main}
            />
          </div>
          <div
            style={{
              fontSize: 12,
              marginTop: 2,
              color: attack.accent.dim + "bb",
            }}
          >
            {attack.subtitle}
          </div>
        </div>
        <div
          style={{
            fontSize: 11,
            fontWeight: 600,
            padding: "4px 12px",
            borderRadius: 20,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            background: attack.accent.bg,
            color: attack.accent.main,
            border: `1px solid ${attack.accent.border}`,
          }}
        >
          {attack.badge}
        </div>
      </div>

      {/* Progress bar */}
      <ProgressBar
        progress={progress}
        color={attack.accent.main}
        glow={attack.accent.glow}
      />

      {/* Steps */}
      <div
        style={{
          padding: "1.5rem",
          display: "flex",
          alignItems: "flex-start",
          overflowX: "auto",
          gap: 0,
        }}
      >
        {attack.steps.map((step, i) => {
          const state = getState(i);
          return (
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
                <StepCircle
                  step={step}
                  index={i}
                  state={state}
                  accent={attack.accent}
                />
                <div
                  style={{
                    marginTop: 10,
                    fontSize: 12,
                    fontWeight: 600,
                    color: state === "idle" ? "#4b5563" : attack.accent.main,
                    lineHeight: 1.3,
                    transition: "color 0.4s",
                  }}
                >
                  {step.label}
                </div>
                <div
                  style={{
                    marginTop: 4,
                    fontSize: 11,
                    color: state === "idle" ? "#374151" : "#9ca3af",
                    lineHeight: 1.4,
                    maxWidth: 100,
                    transition: "color 0.4s",
                  }}
                >
                  {step.detail}
                </div>
              </div>
              {i < attack.steps.length - 1 && (
                <AnimatedArrow
                  active={state === "active"}
                  done={state === "done"}
                  color={attack.accent.main}
                  glowColor={attack.accent.glow}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div style={{ padding: "0 1.5rem 1rem", display: "flex", gap: 10 }}>
        <button
          onClick={play}
          disabled={playing}
          style={{
            padding: "8px 20px",
            borderRadius: 10,
            border: "none",
            cursor: playing ? "not-allowed" : "pointer",
            background: playing ? "#1f2937" : attack.accent.main,
            color: playing ? "#6b7280" : "#000",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.05em",
            transition: "all 0.2s",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          {playing ? (
            <>
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: attack.accent.main,
                  display: "inline-block",
                  animation: "blink 0.7s ease-in-out infinite",
                }}
              />
              Simulating...
            </>
          ) : done ? (
            "▶ Play Again"
          ) : (
            "▶ Simulate Attack"
          )}
        </button>
        {(done || activeStep >= 0) && !playing && (
          <button
            onClick={reset}
            style={{
              padding: "8px 16px",
              borderRadius: 10,
              border: `1px solid ${attack.accent.border}`,
              background: "transparent",
              color: attack.accent.main,
              fontSize: 12,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            ↺ Reset
          </button>
        )}
      </div>

      {/* Analogy footer — typewriter */}
      <div
        style={{
          margin: "0 1.5rem 1.5rem",
          padding: "0.875rem 1rem",
          borderRadius: 12,
          border: `1px solid ${done ? attack.accent.main + "55" : attack.accent.border}`,
          background: "#080812",
          display: "flex",
          alignItems: "flex-start",
          gap: 10,
          fontSize: 13,
          color: done ? "#e5e7eb" : "#4b5563",
          minHeight: 64,
          transition: "border-color 0.5s, color 0.5s",
        }}
      >
        <span
          style={{
            fontSize: 18,
            flexShrink: 0,
            marginTop: 1,
            opacity: done ? 1 : 0.3,
          }}
        >
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
              color: done ? attack.accent.main : "#374151",
              transition: "color 0.5s",
            }}
          >
            Simple version
          </strong>
          {done ? (
            <span>
              {analogyText}
              {analogyText.length < attack.analogy.length && (
                <span
                  style={{
                    display: "inline-block",
                    width: 2,
                    height: "1em",
                    background: attack.accent.main,
                    marginLeft: 2,
                    animation: "blink 0.7s step-end infinite",
                    verticalAlign: "text-bottom",
                  }}
                />
              )}
            </span>
          ) : (
            <span style={{ color: "#374151" }}>
              Complete the simulation to reveal the analogy.
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function FloatingParticle({ color }) {
  const style = {
    position: "fixed",
    width: Math.random() * 3 + 1,
    height: Math.random() * 3 + 1,
    borderRadius: "50%",
    background: color,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    opacity: Math.random() * 0.4 + 0.1,
    animation: `float ${Math.random() * 10 + 8}s linear infinite`,
    animationDelay: `-${Math.random() * 10}s`,
    pointerEvents: "none",
    zIndex: 0,
  };
  return <div style={style} />;
}

export default function AttackFlowPage() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    color: ["#ef4444", "#fbbf24", "#22d3ee", "#4ade80", "#818cf8"][i % 5],
  }));

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050816",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-40px) translateX(20px); }
          66% { transform: translateY(20px) translateX(-20px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes gridPulse { 0%,100%{opacity:0.03} 50%{opacity:0.07} }
        ::-webkit-scrollbar { width: 6px; background: #0a0a16; }
        ::-webkit-scrollbar-thumb { background: #1f2937; border-radius: 3px; }
      `}</style>

      {/* Background grid */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage: `
          linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px)
        `,
          backgroundSize: "40px 40px",
          animation: "gridPulse 4s ease-in-out infinite",
        }}
      />

      {/* Scan line */}
      <div
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          height: 2,
          background:
            "linear-gradient(90deg, transparent, rgba(99,102,241,0.15), transparent)",
          zIndex: 1,
          pointerEvents: "none",
          animation: "scanline 8s linear infinite",
        }}
      />

      {/* Particles */}
      {particles.map((p) => (
        <FloatingParticle key={p.id} color={p.color} />
      ))}

      <div style={{ position: "relative", zIndex: 3 }}>
        <Navbar />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "2.5rem 1.25rem",
          maxWidth: 980,
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div
          style={{
            borderRadius: 24,
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.03)",
            padding: "1.5rem 2rem",
            marginBottom: "2rem",
            backdropFilter: "blur(12px)",
          }}
        >
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#6b7280",
              marginBottom: 8,
            }}
          >
            Attack Flow
          </p>
          <h1
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: "#4ade80",
              margin: "0 0 8px",
              letterSpacing: "-0.02em",
            }}
          >
            How attacks happen
          </h1>
          <p
            style={{
              fontSize: 14,
              color: "#9ca3af",
              margin: "0 0 1rem",
              maxWidth: 600,
            }}
          >
            Interactive simulations that show what happens during cyber attacks
            step by step. Hit{" "}
            <strong style={{ color: "#e5e7eb" }}>Simulate Attack</strong> on any
            card to watch it unfold.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {["DDoS Flood", "SQL Injection", "XSS Scripts", "Bot Abuse"].map(
              (tag, i) => (
                <span
                  key={tag}
                  style={{
                    borderRadius: 20,
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.05)",
                    padding: "6px 16px",
                    fontSize: 12,
                    color: "#9ca3af",
                  }}
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </div>

        <p
          style={{
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#4b5563",
            marginBottom: "1.5rem",
          }}
        >
          How each cyber attack works — plain &amp; simple
        </p>

        {attacks.map((attack) => (
          <AttackCard key={attack.cls} attack={attack} />
        ))}
      </div>
    </div>
  );
}
