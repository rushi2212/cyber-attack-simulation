import { motion } from "framer-motion";

function HumanTraffic({ isActive }) {
  const nodes = Array.from({ length: 6 });

  return (
    <div className="rounded-2xl border border-green-500/30 bg-black/70 p-4">
      <p className="text-xs uppercase tracking-[0.3em] text-green-300">
        Human traffic
      </p>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {nodes.map((_, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center rounded-xl border border-green-500/40 bg-green-500/10 p-3"
            animate={isActive ? { y: [0, -4, 0] } : { y: 0 }}
            transition={{
              duration: 1.4,
              repeat: isActive ? Infinity : 0,
              delay: index * 0.15,
            }}
          >
            <div className="h-2 w-6 rounded-full bg-green-400/70" />
            <span className="mt-2 text-[10px] text-green-200">
              User {index + 1}
            </span>
          </motion.div>
        ))}
      </div>
      <p className="mt-3 text-xs text-gray-400">
        Human requests vary in timing and motion patterns.
      </p>
    </div>
  );
}

export default HumanTraffic;
