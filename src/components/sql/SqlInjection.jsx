import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import WorkflowMap from "./workflow/WorkflowMap";
import RequestFlow from "./workflow/RequestFlow";
import ThreatMonitor from "./workflow/ThreatMonitor";
import {
  sqlPayload,
  sqlTransformations,
  sqlWorkflowStages,
} from "../../data/sqlWorkflowStages";
import {
  sqlAiTransformations,
  sqlAiWorkflowPayload,
  sqlAiWorkflowStages,
} from "../../data/sqlAiWorkflowStages";

function SqlInjection() {
  const [isRunning, setIsRunning] = useState(false);
  const [stageIndex, setStageIndex] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [useAiWorkflow, setUseAiWorkflow] = useState(false);

  const workflowStages = useAiWorkflow
    ? sqlAiWorkflowStages
    : sqlWorkflowStages;
  const workflowPayload = useAiWorkflow ? sqlAiWorkflowPayload : sqlPayload;
  const workflowTransformations = useAiWorkflow
    ? sqlAiTransformations
    : sqlTransformations;

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
    }, 3200 / speed);

    return () => clearInterval(interval);
  }, [isRunning, speed, workflowStages]);

  const stage = workflowStages[stageIndex];
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
            SQL Injection Workflow Simulation
          </h2>
          <p className="mt-3 max-w-2xl text-gray-400">
            {useAiWorkflow
              ? "AI-driven pipeline that preprocesses, scores, and blocks suspicious SQL payloads."
              : "Step-by-step workflow showing how a malicious request moves through a vulnerable application."}
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
        {/* Left — 3/4 width */}
        <div className="min-w-0">
          <WorkflowMap
            stages={workflowStages}
            activeIndex={stageIndex}
            isRunning={isRunning}
            speed={speed}
            payload={workflowPayload}
          />
        </div>

        {/* Right — 1/4 width */}
        <div className="flex h-fit flex-col gap-6 lg:sticky lg:top-6">
          <ThreatMonitor stage={stage} />
          <div className="rounded-3xl border border-white/10 bg-black/50 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
              Active node
            </p>
            <h3 className="mt-2 text-lg font-semibold text-yellow-200">
              {stage.title}
            </h3>
            <p className="mt-2 text-sm text-gray-300">{stage.description}</p>
            <motion.div
              className="mt-4 rounded-2xl border border-yellow-500/40 bg-yellow-500/10 px-4 py-3 text-xs text-yellow-200"
              animate={isRunning ? { opacity: [0.4, 1, 0.4] } : { opacity: 1 }}
              transition={{ duration: 1.2, repeat: isRunning ? Infinity : 0 }}
            >
              {stage.status}
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

      <div className="mt-12 rounded-3xl border border-white/10 bg-black/40 p-6">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
          Node explanations
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SqlInjection;
