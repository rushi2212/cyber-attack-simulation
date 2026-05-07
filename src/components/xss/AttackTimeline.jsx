import { motion } from "framer-motion";

function AttackTimeline({ stages, activeIndex }) {
  return (
    <div className="space-y-3">
      {stages.map((stage, index) => {
        const isActive = index === activeIndex;
        return (
          <motion.div
            key={stage.id}
            animate={isActive ? { x: [0, 6, 0] } : { x: 0 }}
            transition={{ duration: 1.2, repeat: isActive ? Infinity : 0 }}
            className={`rounded-xl border px-4 py-3 text-sm ${
              isActive
                ? "border-yellow-400/70 bg-yellow-500/10 text-yellow-100"
                : "border-white/10 bg-white/5 text-gray-300"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold">{stage.title}</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
                {index + 1}
              </span>
            </div>
            <p className="mt-2 text-xs text-gray-400">{stage.requestStatus}</p>
          </motion.div>
        );
      })}
    </div>
  );
}

export default AttackTimeline;
