import { motion } from "framer-motion";

function Meter({ label, value, color }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs text-gray-400">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="mt-1 h-2 rounded-full bg-white/10">
        <div
          className={`h-2 rounded-full ${color}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function ServerMonitor({ cpu, ram, bandwidth, isOverloaded }) {
  return (
    <motion.div
      animate={isOverloaded ? { x: [0, -6, 6, -6, 0] } : { x: 0 }}
      transition={{ duration: 0.6, repeat: isOverloaded ? Infinity : 0 }}
      className="rounded-2xl border border-red-500/30 bg-black/70 p-5"
    >
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.3em] text-red-300">
          Target server
        </p>
        <span
          className={`text-xs ${isOverloaded ? "text-red-300" : "text-green-300"}`}
        >
          {isOverloaded ? "OVERLOADED" : "Stable"}
        </span>
      </div>
      <motion.div
        className="mt-4 flex h-24 items-center justify-center rounded-2xl bg-red-500/20 text-lg font-bold text-red-200 shadow-[0_0_30px_rgba(255,0,0,0.5)]"
        animate={isOverloaded ? { scale: [1, 1.05, 1] } : { scale: 1 }}
        transition={{ duration: 1.2, repeat: isOverloaded ? Infinity : 0 }}
      >
        SERVER OVERLOADED
      </motion.div>
      <div className="mt-4 space-y-3">
        <Meter label="CPU usage" value={cpu} color="bg-red-400" />
        <Meter label="RAM usage" value={ram} color="bg-yellow-400" />
        <Meter label="Bandwidth" value={bandwidth} color="bg-cyan-400" />
      </div>
    </motion.div>
  );
}

export default ServerMonitor;
