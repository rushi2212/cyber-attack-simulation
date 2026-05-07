import { motion } from "framer-motion";

function PacketFlow({ isActive, speed, intensity, color = "bg-red-500" }) {
  const count = Math.min(12, 4 + intensity * 2);
  return (
    <div className="relative h-16 overflow-hidden rounded-2xl border border-red-500/30 bg-black/70">
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          className={`absolute top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full ${color}`}
          animate={isActive ? { x: ["-10%", "110%"] } : { x: "-10%" }}
          transition={{
            duration: 1.4 / speed,
            repeat: isActive ? Infinity : 0,
            delay: index * 0.15,
            ease: "linear",
          }}
          style={{ left: 0 }}
        />
      ))}
    </div>
  );
}

export default PacketFlow;
