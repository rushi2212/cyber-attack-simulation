import { motion } from "framer-motion";

const workflows = [
  {
    id: "ddos",
    title: "DDoS Attack Workflow",
    accent: "text-red-400",
    summary:
      "Bots generate massive traffic bursts that overload the server until the service crashes.",
    steps: [
      "Bots launch distributed requests",
      "Traffic spikes toward the target",
      "Server resources saturate",
      "Service becomes unavailable",
      "Alerts and defenses trigger",
    ],
  },
  {
    id: "sql",
    title: "SQL Injection Workflow",
    accent: "text-yellow-400",
    summary:
      "A crafted payload slips into an unsafe query and exposes the database layer.",
    steps: [
      "Attacker submits malicious input",
      "Application builds unsafe query",
      "Query reaches the database",
      "Authentication bypass occurs",
      "Sensitive data is exposed",
    ],
  },
  {
    id: "xss",
    title: "XSS Attack Workflow",
    accent: "text-cyan-400",
    summary:
      "Injected scripts execute in the browser and leak session data to the attacker.",
    steps: [
      "Script payload is injected",
      "Browser executes the script",
      "Session cookies are accessed",
      "Data is sent to attacker",
      "User session is compromised",
    ],
  },
  {
    id: "bot",
    title: "Bot Detection Workflow",
    accent: "text-green-400",
    summary:
      "Behavior analysis flags abnormal traffic, then activates CAPTCHA and blocking.",
    steps: [
      "Traffic is monitored",
      "Anomalies are detected",
      "Bots are classified",
      "CAPTCHA is deployed",
      "Malicious traffic is blocked",
    ],
  },
];

function WorkflowSimulation({ id }) {
  if (id === "ddos") {
    return <DdosSimulation />;
  }

  if (id === "sql") {
    return <SqlSimulation />;
  }

  if (id === "xss") {
    return <XssSimulation />;
  }

  return <BotSimulation />;
}

function DdosSimulation() {
  return (
    <div className="space-y-4">
      <div className="relative h-32 rounded-2xl border border-red-500/30 bg-black/60 overflow-hidden">
        <div className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg bg-red-500/80 px-3 py-2 text-xs font-semibold text-black shadow-[0_0_20px_rgba(255,0,0,0.6)]">
          SERVER
        </div>
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <motion.div
            key={index}
            className="absolute h-3 w-3 rounded-full bg-red-400"
            style={{ top: 18 + index * 16 }}
            animate={{ x: [-40, 280] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              delay: index * 0.15,
              ease: "linear",
            }}
          />
        ))}
      </div>
      <div className="flex items-end gap-2">
        {[0, 1, 2, 3, 4].map((index) => (
          <motion.div
            key={index}
            className="w-3 rounded-full bg-red-400/80"
            animate={{ height: [12, 40, 12] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          />
        ))}
        <span className="text-xs text-gray-300">Traffic spike</span>
      </div>
    </div>
  );
}

function SqlSimulation() {
  return (
    <div className="relative h-32 rounded-2xl border border-yellow-500/30 bg-black/60 overflow-hidden">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 rounded-lg border border-yellow-400/40 bg-yellow-400/10 px-3 py-2 text-xs text-yellow-200">
        INPUT
      </div>
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 rounded-full bg-yellow-400 px-4 py-1 text-[10px] font-semibold text-black"
        animate={{ x: [70, 250] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        SQL QUERY
      </motion.div>
      <motion.div
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg bg-red-500/80 px-3 py-2 text-xs font-semibold text-black shadow-[0_0_25px_rgba(255,0,0,0.7)]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      >
        DATABASE
      </motion.div>
    </div>
  );
}

function XssSimulation() {
  return (
    <div className="relative h-36 rounded-2xl border border-cyan-500/30 bg-black/60 overflow-hidden">
      <div className="absolute left-4 top-5 rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-3 py-2 text-xs text-cyan-200">
        BROWSER
      </div>
      <div className="absolute right-4 bottom-5 rounded-lg border border-red-400/40 bg-red-400/10 px-3 py-2 text-xs text-red-200">
        ATTACKER
      </div>
      <motion.div
        className="absolute left-4 bottom-5 rounded-full bg-cyan-400 px-3 py-1 text-[10px] font-semibold text-black"
        animate={{ x: [0, 140, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        SCRIPT
      </motion.div>
      <motion.div
        className="absolute right-4 top-12 rounded-full bg-yellow-300 px-3 py-1 text-[10px] font-semibold text-black"
        animate={{ x: [0, -150, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, delay: 0.4 }}
      >
        COOKIE
      </motion.div>
    </div>
  );
}

function BotSimulation() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="relative h-32 rounded-2xl border border-green-500/30 bg-black/60 flex items-center justify-center overflow-hidden">
        <div className="absolute h-24 w-24 rounded-full border border-green-500/40" />
        <div className="absolute h-16 w-16 rounded-full border border-green-500/30" />
        <motion.div
          className="absolute h-24 w-24 rounded-full border-t border-green-400/80"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <span className="text-xs text-green-200">Radar scan</span>
      </div>
      <div className="relative h-32 rounded-2xl border border-cyan-500/30 bg-black/60 flex items-center justify-center">
        <motion.div
          className="rounded-xl bg-cyan-400 px-5 py-3 text-xs font-semibold text-black shadow-[0_0_25px_rgba(0,204,255,0.6)]"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        >
          CAPTCHA ACTIVE
        </motion.div>
      </div>
    </div>
  );
}

function AttackWorkflows() {
  return (
    <div className="mt-16 grid gap-6">
      {workflows.map((workflow) => (
        <section
          key={workflow.id}
          className="rounded-3xl border border-white/10 bg-black/40 p-6 md:p-8"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                Attack workflow
              </p>
              <h3 className={`text-2xl font-semibold ${workflow.accent}`}>
                {workflow.title}
              </h3>
            </div>
            <p className="max-w-2xl text-gray-300">{workflow.summary}</p>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">Workflow steps</p>
              <div className="mt-4 space-y-3">
                {workflow.steps.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-start gap-3 text-gray-200"
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/20 text-xs font-semibold text-white">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">
                Simulation feed
              </p>
              <div className="mt-4">
                <WorkflowSimulation id={workflow.id} />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default AttackWorkflows;
