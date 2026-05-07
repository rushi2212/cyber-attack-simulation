import { motion } from "framer-motion";

function TrafficGraph({ isActive, intensity }) {
  const points = Array.from({ length: 12 });

  return (
    <div className="rounded-2xl border border-red-500/30 bg-black/70 p-4">
      <p className="text-xs uppercase tracking-[0.3em] text-red-300">
        Traffic graph
      </p>
      <div className="mt-4 flex items-end gap-2">
        {points.map((_, index) => (
          <motion.div
            key={index}
            className="w-3 rounded-full bg-red-400/80"
            animate={
              isActive
                ? { height: [10, 30 + intensity * 6, 10] }
                : { height: 10 }
            }
            transition={{
              duration: 1,
              repeat: isActive ? Infinity : 0,
              delay: index * 0.1,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default TrafficGraph;
