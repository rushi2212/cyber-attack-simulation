import { motion } from "framer-motion";

function TrafficFlood({ isActive, intensity }) {
  const bars = Array.from({ length: 10 });
  return (
    <div className="rounded-2xl border border-red-500/30 bg-black/70 p-4">
      <p className="text-xs uppercase tracking-[0.3em] text-red-300">
        Traffic flood
      </p>
      <div className="mt-4 flex items-end gap-2">
        {bars.map((_, index) => (
          <motion.div
            key={index}
            className="w-3 rounded-full bg-red-400/80"
            animate={
              isActive
                ? { height: [12, 40 + intensity * 8, 12] }
                : { height: 12 }
            }
            transition={{
              duration: 1,
              repeat: isActive ? Infinity : 0,
              delay: index * 0.1,
            }}
          />
        ))}
      </div>
      <p className="mt-3 text-xs text-gray-400">
        Massive request spikes overwhelm bandwidth and CPU scheduling.
      </p>
    </div>
  );
}

export default TrafficFlood;
