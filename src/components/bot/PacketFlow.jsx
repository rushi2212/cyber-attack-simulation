import { motion } from "framer-motion";

function PacketFlow({ isActive, color, speed, label }) {
  return (
    <div className="relative h-10 overflow-hidden rounded-2xl border border-cyan-500/20 bg-black/70">
      {label ? (
        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-[0.3em] text-gray-400">
          {label}
        </span>
      ) : null}
      {[0, 1, 2, 3].map((index) => (
        <motion.div
          key={index}
          className={`absolute top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full ${color}`}
          animate={isActive ? { x: ["-10%", "110%"] } : { x: "-10%" }}
          transition={{
            duration: 1.6 / speed,
            repeat: isActive ? Infinity : 0,
            delay: index * 0.2,
            ease: "linear",
          }}
          style={{ left: 0 }}
        />
      ))}
    </div>
  );
}

export default PacketFlow;
