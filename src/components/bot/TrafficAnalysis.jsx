import { motion } from "framer-motion";

function TrafficAnalysis({ isActive, threatLevel }) {
  return (
    <div className="rounded-2xl border border-cyan-500/30 bg-black/70 p-4">
      <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
        Behavioral monitoring
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-3">
          <p className="text-xs text-green-200">Human patterns</p>
          <motion.div
            className="mt-3 h-2 rounded-full bg-green-400/70"
            animate={
              isActive ? { width: ["40%", "80%", "55%"] } : { width: "40%" }
            }
            transition={{ duration: 1.6, repeat: isActive ? Infinity : 0 }}
          />
          <p className="mt-3 text-[10px] text-gray-400">
            Natural mouse & typing variance
          </p>
        </div>
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3">
          <p className="text-xs text-red-200">Bot patterns</p>
          <motion.div
            className="mt-3 h-2 rounded-full bg-red-400/70"
            animate={
              isActive ? { width: ["85%", "90%", "85%"] } : { width: "60%" }
            }
            transition={{ duration: 1.2, repeat: isActive ? Infinity : 0 }}
          />
          <p className="mt-3 text-[10px] text-gray-400">
            Repeated identical patterns
          </p>
        </div>
      </div>
      <p className="mt-4 text-xs text-gray-400">
        Detection confidence: {Math.min(98, 40 + threatLevel * 20)}%
      </p>
    </div>
  );
}

export default TrafficAnalysis;
