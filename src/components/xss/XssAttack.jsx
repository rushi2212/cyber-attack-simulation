import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import WorkflowMap from "./workflow/WorkflowMap";
import RequestFlow from "./workflow/RequestFlow";
import WorkflowThreatMonitor from "./workflow/ThreatMonitor";
import { xssPayload, xssStages } from "../../data/xssStages";
import {
  xssTransformations,
  xssWorkflowPayload,
  xssWorkflowStages,
} from "../../data/xssWorkflowStages";
import {
  xssAiTransformations,
  xssAiWorkflowPayload,
  xssAiWorkflowStages,
} from "../../data/xssAiWorkflowStages";

function XssAttack() {
  const [isRunning, setIsRunning] = useState(false);
  const [stageIndex, setStageIndex] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [useAiWorkflow, setUseAiWorkflow] = useState(false);

  const workflowStages = useAiWorkflow
    ? xssAiWorkflowStages
    : xssWorkflowStages;
  const workflowPayload = useAiWorkflow
    ? xssAiWorkflowPayload
    : xssWorkflowPayload;
  const workflowTransformations = useAiWorkflow
    ? xssAiTransformations
    : xssTransformations;

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const interval = setInterval(() => {
      setStageIndex((prev) => {
        if (prev >= workflowStages.length - 1) {
          setIsRunning(false);
          return prev;
        }
        return prev + 1;
      });
    }, 2200 / speed);

    return () => clearInterval(interval);
  }, [isRunning, speed, workflowStages]);

  const workflowStage = workflowStages[stageIndex];
  const isAtEnd = stageIndex >= workflowStages.length - 1;

  const handleStart = () => {
    if (isAtEnd) {
      setStageIndex(0);
    }
    setIsRunning(true);
  };
  const handlePause = () => setIsRunning(false);
  const handleReplay = () => {
    setStageIndex(0);
    setIsRunning(true);
  };
  const handleWorkflowToggle = () => {
    setIsRunning(false);
    setStageIndex(0);
    setUseAiWorkflow((prev) => !prev);
  };

  return (
    <div className="mt-20 px-5 md:px-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="text-4xl font-bold text-yellow-400">
            XSS Attack Simulation
          </h2>
          <p className="mt-3 max-w-2xl text-gray-400">
            {useAiWorkflow
              ? "AI-driven pipeline that detects and blocks injected script payloads."
              : "Frontend-only visualization that demonstrates how injected scripts abuse unsafe rendering."}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleStart}
            className="rounded-full border border-green-500/60 bg-green-500/20 px-5 py-2 text-sm text-green-200 hover:bg-green-500/30"
          >
            Start Simulation
          </button>
          <button
            type="button"
            onClick={handlePause}
            className="rounded-full border border-yellow-500/60 bg-yellow-500/20 px-5 py-2 text-sm text-yellow-200 hover:bg-yellow-500/30"
          >
            Pause
          </button>
          <button
            type="button"
            onClick={handleReplay}
            className="rounded-full border border-cyan-500/60 bg-cyan-500/20 px-5 py-2 text-sm text-cyan-200 hover:bg-cyan-500/30"
          >
            Replay
          </button>
          <button
            type="button"
            onClick={handleWorkflowToggle}
            className={
              useAiWorkflow
                ? "rounded-full border border-purple-500/60 bg-purple-500/20 px-5 py-2 text-sm text-purple-200 hover:bg-purple-500/30"
                : "rounded-full border border-blue-500/60 bg-blue-500/20 px-5 py-2 text-sm text-blue-200 hover:bg-blue-500/30"
            }
          >
            {useAiWorkflow ? "Show Standard Workflow" : "Show AI Workflow"}
          </button>
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-300">
            <span>Speed</span>
            <input
              type="range"
              min="0.25"
              max="2"
              step="0.25"
              value={speed}
              onChange={(event) => setSpeed(Number(event.target.value))}
              className="accent-cyan-400"
            />
            <span>{speed.toFixed(2)}x</span>
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[3fr_1fr]">
        <div className="min-w-0">
          <WorkflowMap
            stages={workflowStages}
            activeIndex={stageIndex}
            isRunning={isRunning}
            speed={speed}
            payload={workflowPayload}
          />
        </div>

        <div className="flex h-fit flex-col gap-6 lg:sticky lg:top-6">
          <WorkflowThreatMonitor
            stage={workflowStage}
            payload={workflowPayload}
          />
          <div className="rounded-3xl border border-white/10 bg-black/50 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
              Active node
            </p>
            <h3 className="mt-2 text-lg font-semibold text-yellow-200">
              {workflowStage.title}
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              {workflowStage.description}
            </p>
            <motion.div
              className="mt-4 rounded-2xl border border-yellow-500/40 bg-yellow-500/10 px-4 py-3 text-xs text-yellow-200"
              animate={isRunning ? { opacity: [0.4, 1, 0.4] } : { opacity: 1 }}
              transition={{ duration: 1.2, repeat: isRunning ? Infinity : 0 }}
            >
              {workflowStage.status}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <RequestFlow
          transformations={workflowTransformations}
          activeIndex={Math.min(stageIndex, workflowTransformations.length - 1)}
        />
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {["Stored XSS", "Reflected XSS", "DOM-Based XSS"].map((type) => (
          <div
            key={type}
            className="rounded-3xl border border-white/10 bg-black/40 p-5"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
              XSS type
            </p>
            <h3 className="mt-3 text-lg font-semibold text-yellow-300">
              {type}
            </h3>
            <p className="mt-3 text-sm text-gray-300">
              {type === "Stored XSS"
                ? "Payload is stored in the database and served to every visitor."
                : type === "Reflected XSS"
                  ? "Payload is reflected immediately in the response to the same request."
                  : "Payload is introduced and executed entirely in the browser DOM."}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-red-500/30 bg-black/50 p-5">
          <p className="text-xs uppercase tracking-[0.3em] text-red-300">
            Unsafe rendering
          </p>
          <div className="mt-4 space-y-2 font-mono text-xs text-gray-200">
            <div>{"commentBox.innerHTML = userInput;"}</div>
            <div>{"// DOM executes injected script"}</div>
            <div className="text-yellow-200">{xssPayload}</div>
          </div>
        </div>
        <div className="rounded-3xl border border-green-500/30 bg-black/50 p-5">
          <p className="text-xs uppercase tracking-[0.3em] text-green-300">
            Sanitized rendering
          </p>
          <div className="mt-4 space-y-2 font-mono text-xs text-gray-200">
            <div>{"commentBox.textContent = userInput;"}</div>
            <div>{"sanitize(userInput);"}</div>
            <div className="text-green-200">{"// Escaped output only"}</div>
          </div>
        </div>
      </div>

      <div className="mt-12 rounded-3xl border border-white/10 bg-black/40 p-6">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
          Stage explanations & prevention
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {workflowStages.map((item, index) => (
            <div
              key={item.id}
              className={`rounded-2xl border px-4 py-4 text-sm ${
                index === stageIndex
                  ? "border-yellow-400/60 bg-yellow-500/10 text-yellow-100"
                  : "border-white/10 bg-white/5 text-gray-300"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold">{item.title}</span>
                <span className="text-[10px] text-gray-500">{index + 1}</span>
              </div>
              <p className="mt-2 text-xs text-gray-400">{item.explanation}</p>
              {index === workflowStages.length - 1 ? (
                <p className="mt-3 text-xs text-green-300">
                  Prevention: sanitize input, encode output, use CSP, and deploy
                  WAF rules.
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default XssAttack;
