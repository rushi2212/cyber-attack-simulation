import { motion } from "framer-motion";

function PacketFlow({
  isActive,
  color = "bg-red-500",
  direction = "right",
  speed = 1,
  label,
}) {
  const travel = direction === "right" ? ["-10%", "110%"] : ["110%", "-10%"];

  return (
    <div className="relative h-10 overflow-hidden">
      {label ? (
        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-[0.3em] text-gray-400">
          {label}
        </span>
      ) : null}
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full ${color}`}
          animate={isActive ? { x: travel } : { x: "-10%" }}
          transition={{
            duration: 1.4 / speed,
            repeat: isActive ? Infinity : 0,
            delay: index * 0.3,
            ease: "linear",
          }}
          style={{ left: 0 }}
        />
      ))}
    </div>
  );
}

export default PacketFlow;
