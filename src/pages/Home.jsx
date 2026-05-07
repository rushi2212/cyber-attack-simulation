import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import CyberBackground from "../components/common/CyberBackground";
import Terminal from "../components/common/Terminal";

const architectureLayers = [
  "User Interface",
  "Attack Simulation Components",
  "Animation Engine",
  "Workflow Visualization",
  "Cybersecurity Dashboard",
];

const websiteWorkflow = [
  "User Opens Website",
  "Chooses Attack Module",
  "Simulation Starts",
  "Packets/Requests Animate",
  "Attack Workflow Visualized",
  "Server/Databases React",
  "Protection System Activates",
  "Attack Summary Displayed",
];

const modules = [
  {
    title: "DDoS Attack Simulation",
    id: "ddos",
    path: "/ddos",
    accent: "text-red-400",
    summary:
      "Bots flood the server with continuous requests until the service visibly overloads and crashes.",
  },
  {
    title: "SQL Injection Simulation",
    id: "sql",
    path: "/sql",
    accent: "text-yellow-400",
    summary:
      "A malicious payload moves through an unsafe query path and demonstrates database compromise.",
  },
  {
    title: "XSS Attack Simulation",
    id: "xss",
    path: "/xss",
    accent: "text-cyan-400",
    summary:
      "Injected script flows into the browser and illustrates how cookies or sessions can be stolen.",
  },
  {
    title: "Bot Detection Simulation",
    id: "bot",
    path: "/bot",
    accent: "text-green-400",
    summary:
      "Traffic analysis scans suspicious patterns, then activates CAPTCHA-style protection.",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <CyberBackground />

      <Navbar />

      {/* Hero Section */}
      <div className="text-center pt-20 px-5">
        <h1 className="text-6xl font-bold text-green-400 leading-tight">
          Cyber Attack <br /> Simulation Platform
        </h1>

        <p className="text-gray-400 mt-6 text-xl max-w-3xl mx-auto">
          Visualize DDoS, SQL Injection, XSS, and Bot Attacks using real-time
          animations and workflow simulations.
        </p>
      </div>

      <section id="architecture" className="mt-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto rounded-3xl border border-green-500/40 bg-black/40 backdrop-blur-xl p-6 md:p-10 shadow-[0_0_40px_rgba(0,255,153,0.08)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-green-400 uppercase tracking-[0.35em] text-xs">
                System Architecture
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                User interface to dashboard, in one controlled simulation loop.
              </h2>
            </div>

            <p className="max-w-2xl text-gray-300">
              Every module feeds a shared visual pipeline so the attack, the
              defense, and the outcome are all easy to follow in real time.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-5 mt-8">
            {architectureLayers.map((layer, index) => (
              <div
                key={layer}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center"
              >
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-green-400/50 text-green-300">
                  {index + 1}
                </div>
                <p className="font-semibold text-white">{layer}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-5">
              <h3 className="text-lg font-semibold text-cyan-300">
                Website Workflow
              </h3>
              <div className="mt-4 space-y-3">
                {websiteWorkflow.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-start gap-3 text-gray-200"
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-300 text-xs font-bold">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-5">
              <h3 className="text-lg font-semibold text-red-300">
                Why it works
              </h3>
              <p className="mt-4 text-gray-200 leading-7">
                The attack module, animation layer, workflow diagram, and status
                dashboard are tied together so each simulation remains
                educational, safe, and visually coherent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Terminal />

      <section className="mt-20 px-5 md:px-10">
        <div className="max-w-7xl mx-auto rounded-3xl border border-white/10 bg-black/35 p-6 md:p-10">
          <p className="text-green-400 uppercase tracking-[0.35em] text-xs">
            Summary
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {modules.map((module) => (
              <article
                key={module.id}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <h3 className={`text-xl font-semibold ${module.accent}`}>
                  {module.title}
                </h3>
                <p className="mt-3 text-gray-300 leading-7">{module.summary}</p>
                <Link
                  to={module.path}
                  className="mt-5 inline-flex items-center gap-2 text-sm text-green-300 hover:text-green-200"
                >
                  Open module
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="text-center py-10 text-gray-500">
        © 2026 CyberSim | Educational Cybersecurity Simulator
      </div>
    </div>
  );
}

export default Home;
