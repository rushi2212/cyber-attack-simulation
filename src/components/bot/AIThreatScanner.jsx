import { motion } from "framer-motion";

function AIThreatScanner({ isActive }) {
  return (
    <div className="rounded-2xl border border-purple-500/30 bg-black/70 p-4">
      <p className="text-xs uppercase tracking-[0.3em] text-purple-300">
        AI detection engine
      </p>
      <motion.div
        className="mt-4 rounded-xl border border-purple-400/40 bg-purple-400/10 px-4 py-5 text-center text-sm text-purple-200"
        animate={
          isActive
            ? {
                boxShadow: [
                  "0 0 10px rgba(168,85,247,0.3)",
                  "0 0 30px rgba(168,85,247,0.8)",
                  "0 0 10px rgba(168,85,247,0.3)",
                ],
              }
            : {}
        }
        transition={{ duration: 1.4, repeat: isActive ? Infinity : 0 }}
      >
        AI scoring active
      </motion.div>
      <p className="mt-3 text-xs text-gray-400">
        Behavioral fingerprints are ranked by risk.
      </p>
    </div>
  );
}

export default AIThreatScanner;
