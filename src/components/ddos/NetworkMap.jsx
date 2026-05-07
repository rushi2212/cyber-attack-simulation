import { motion } from "framer-motion";

function NetworkMap({ isActive }) {
  return (
    <div className="rounded-2xl border border-cyan-500/30 bg-black/70 p-4">
      <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
        Network topology
      </p>
      <div className="relative mt-4 h-28">
        <div className="absolute left-4 top-6 h-3 w-3 rounded-full bg-cyan-400" />
        <div className="absolute left-20 bottom-6 h-2 w-2 rounded-full bg-cyan-300" />
        <div className="absolute right-6 top-8 h-3 w-3 rounded-full bg-red-400" />
        <div className="absolute right-16 bottom-8 h-2 w-2 rounded-full bg-red-300" />
        <motion.div
          className="absolute inset-0 rounded-xl border border-cyan-400/20"
          animate={isActive ? { opacity: [0.4, 1, 0.4] } : { opacity: 0.4 }}
          transition={{ duration: 1.4, repeat: isActive ? Infinity : 0 }}
        />
      </div>
      <p className="mt-3 text-xs text-gray-400">
        Routes show attacker traffic paths.
      </p>
    </div>
  );
}

export default NetworkMap;
