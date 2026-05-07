import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BotTraffic from "./BotTraffic";
import HumanTraffic from "./HumanTraffic";
import DetectionRadar from "./DetectionRadar";
import AIThreatScanner from "./AIThreatScanner";
import CaptchaVerification from "./CaptchaVerification";
import TrafficAnalysis from "./TrafficAnalysis";
import FirewallShield from "../animations/FirewallShield";
import { botStages } from "../../data/botStages";
import WorkflowMap from "./workflow/WorkflowMap";
import RequestFlow from "./workflow/RequestFlow";
import WorkflowThreatMonitor from "./workflow/ThreatMonitor";
import {
  botTransformations,
  botWorkflowPayload,
  botWorkflowStages,
} from "../../data/botWorkflowStages";
import {
  botAiTransformations,
  botAiWorkflowPayload,
  botAiWorkflowStages,
} from "../../data/botAiWorkflowStages";

function BotDetection() {
  const [isRunning, setIsRunning] = useState(false);
  const [stageIndex, setStageIndex] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [threatLevel, setThreatLevel] = useState(2);
  const [useAiWorkflow, setUseAiWorkflow] = useState(false);

  const workflowStages = useAiWorkflow
    ? botAiWorkflowStages
    : botWorkflowStages;
  const workflowPayload = useAiWorkflow
    ? botAiWorkflowPayload
    : botWorkflowPayload;
  const workflowTransformations = useAiWorkflow
    ? botAiTransformations
    : botTransformations;

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
  const stage = botStages[stageIndex];
  const multiplier = 1 + (threatLevel - 1) * 0.35;
  const metrics = {
    totalRequests: Math.round(stage.metrics.totalRequests * multiplier),
    humanUsers: Math.round(stage.metrics.humanUsers * multiplier),
    bots: Math.round(stage.metrics.bots * multiplier),
    threatScore: Math.min(
      99,
      Math.round(stage.metrics.threatScore * multiplier),
    ),
    suspiciousIps: Math.round(stage.metrics.suspiciousIps * multiplier),
    captchaStatus: stage.metrics.captchaStatus,
    firewallStatus: stage.metrics.firewallStatus,
    blockedRequests: Math.round(stage.metrics.blockedRequests * multiplier),
  };

  const isAtEnd = stageIndex >= workflowStages.length - 1;
  const trafficActive = isRunning && stageIndex >= 0;
  const analysisActive = isRunning && stageIndex >= 1;
  const behaviorActive = isRunning && stageIndex >= 2;
  const typingActive = isRunning && stageIndex >= 3;
  const aiActive = isRunning && stageIndex >= 5;
  const captchaActive = isRunning && stageIndex >= 6;
  const firewallActive = isRunning && stageIndex >= 7;
  const decisionActive = isRunning && stageIndex >= 8;

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
          <h2 className="text-4xl font-bold text-cyan-400">
            Bot Detection Simulation
          </h2>
          <p className="mt-3 max-w-2xl text-gray-400">
            {useAiWorkflow
              ? "AI-driven pipeline that profiles sessions and enforces automated defenses."
              : "Frontend-only visualization showing how traffic is analyzed, verified, or blocked."}
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
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-300">
            <span>Threat level</span>
            <input
              type="range"
              min="1"
              max="3"
              step="1"
              value={threatLevel}
              onChange={(event) => setThreatLevel(Number(event.target.value))}
              className="accent-cyan-400"
            />
            <span>{threatLevel}</span>
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
            metrics={metrics}
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

      <div className="mt-8 rounded-3xl border border-white/10 bg-black/50 p-6">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
          Detection response visual
        </p>
        <p className="mt-2 text-sm text-gray-400">
          Human vs bot traffic, behavior scoring, and automated verification in
          one view.
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-6 lg:grid-cols-2">
            <HumanTraffic isActive={trafficActive} />
            <BotTraffic isActive={trafficActive} level={threatLevel} />
          </div>
          <div className="rounded-2xl border border-cyan-500/30 bg-black/70 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
              Signal summary
            </p>
            <div className="mt-4 grid gap-3 text-sm text-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Total requests</span>
                <span className="text-cyan-200">
                  {metrics.totalRequests.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Human users</span>
                <span className="text-green-200">
                  {metrics.humanUsers.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Bot sessions</span>
                <span className="text-red-200">
                  {metrics.bots.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Blocked requests</span>
                <span className="text-yellow-200">
                  {metrics.blockedRequests.toLocaleString()}
                </span>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>Threat score</span>
                <span>{metrics.threatScore}%</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-white/10">
                <div
                  className="h-2 rounded-full bg-cyan-400"
                  style={{ width: `${metrics.threatScore}%` }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <TrafficAnalysis
            isActive={behaviorActive || typingActive}
            threatLevel={threatLevel}
          />
          <DetectionRadar isActive={analysisActive} />
          <AIThreatScanner isActive={aiActive} />
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <CaptchaVerification isActive={captchaActive} />
          <div className="grid gap-6">
            <div className="rounded-2xl border border-cyan-500/30 bg-black/70 p-4 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                Firewall / WAF
              </p>
              <div className="mt-4">
                <FirewallShield />
              </div>
              <motion.p
                className="mt-3 text-sm text-cyan-200"
                animate={
                  firewallActive ? { opacity: [0.3, 1, 0.3] } : { opacity: 0.6 }
                }
                transition={{
                  duration: 1.2,
                  repeat: firewallActive ? Infinity : 0,
                }}
              >
                {firewallActive
                  ? "Firewall filtering suspicious traffic"
                  : "Firewall monitoring"}
              </motion.p>
            </div>
            <div className="rounded-2xl border border-green-500/30 bg-black/70 p-4 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-green-300">
                Access decision
              </p>
              <motion.div
                className="mt-4 rounded-xl border border-green-500/40 bg-green-500/10 px-4 py-4 text-sm text-green-200"
                animate={
                  decisionActive ? { scale: [1, 1.04, 1] } : { scale: 1 }
                }
                transition={{
                  duration: 1.2,
                  repeat: decisionActive ? Infinity : 0,
                }}
              >
                {decisionActive
                  ? "Verified users allowed"
                  : "Awaiting decision"}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {[
          "Behavioral analysis",
          "Browser fingerprinting",
          "IP reputation analysis",
          "Rate limiting",
          "CAPTCHA verification",
          "AI anomaly detection",
        ].map((technique) => (
          <div
            key={technique}
            className="rounded-3xl border border-white/10 bg-black/40 p-5"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
              Detection technique
            </p>
            <h3 className="mt-3 text-lg font-semibold text-cyan-300">
              {technique}
            </h3>
            <p className="mt-3 text-sm text-gray-300">
              {technique === "Behavioral analysis"
                ? "Looks at movement and timing patterns to separate humans from bots."
                : technique === "Browser fingerprinting"
                  ? "Identifies automation by comparing browser characteristics."
                  : technique === "IP reputation analysis"
                    ? "Flags addresses linked to known abuse sources."
                    : technique === "Rate limiting"
                      ? "Slows or blocks repeated requests beyond normal thresholds."
                      : technique === "CAPTCHA verification"
                        ? "Challenges users to prove human interaction."
                        : "AI models detect anomalies across traffic patterns."}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-cyan-500/30 bg-black/50 p-5">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
            Mitigation actions
          </p>
          <ul className="mt-4 space-y-3 text-sm text-gray-300">
            <li>Request throttling reduces automated bursts.</li>
            <li>Traffic filtering removes suspicious agents.</li>
            <li>Firewall blocks repeated offenders.</li>
            <li>Session validation verifies legitimate users.</li>
            <li>Access denial stops confirmed bots.</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-white/10 bg-black/40 p-5">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
            Stage explanations
          </p>
          <div className="mt-4 grid gap-4">
            {workflowStages.map((item, index) => (
              <div
                key={item.id}
                className={`rounded-2xl border px-4 py-4 text-sm ${
                  index === stageIndex
                    ? "border-cyan-400/60 bg-cyan-500/10 text-cyan-100"
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
                    Prevention: combine behavioral analytics, CAPTCHA, and WAF
                    rules.
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BotDetection;
