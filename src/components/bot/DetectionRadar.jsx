import { motion } from "framer-motion";

function DetectionRadar({ isActive }) {
  return (
    <div className="rounded-2xl border border-cyan-500/30 bg-black/70 p-4 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
        Detection radar
      </p>
      <div className="relative mx-auto mt-4 h-28 w-28 rounded-full border border-cyan-400/30">
        <div className="absolute inset-4 rounded-full border border-cyan-400/20" />
        <motion.div
          className="absolute inset-0 rounded-full border-t border-cyan-300/80"
          animate={isActive ? { rotate: 360 } : { rotate: 0 }}
          transition={{
            duration: 2,
            repeat: isActive ? Infinity : 0,
            ease: "linear",
          }}
        />
      </div>
      <p className="mt-3 text-xs text-gray-400">Scanning for anomalies</p>
    </div>
  );
}

export default DetectionRadar;
