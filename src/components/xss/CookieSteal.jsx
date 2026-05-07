import { motion } from "framer-motion";

function CookieSteal({ isActive, speed }) {
  return (
    <div className="relative h-36 overflow-hidden rounded-2xl border border-red-500/30 bg-black/60">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 rounded-lg border border-green-400/40 bg-green-400/10 px-3 py-2 text-xs text-green-200">
        Victim session
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg border border-red-400/40 bg-red-400/10 px-3 py-2 text-xs text-red-200">
        Attacker
      </div>
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 text-3xl"
        animate={isActive ? { x: [0, 220] } : { x: 0 }}
        transition={{ duration: 1.6 / speed, repeat: isActive ? Infinity : 0 }}
        style={{ left: 80 }}
      >
        🍪
      </motion.div>
    </div>
  );
}

export default CookieSteal;
