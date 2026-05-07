import { motion } from "framer-motion";

function AnimatedPacket({ activeIndex, isRunning, speed, positions }) {
  if (!positions.length) {
    return null;
  }

  const fromIndex = Math.max(0, activeIndex - 1);
  const toIndex = Math.min(positions.length - 1, activeIndex);
  const from = positions[fromIndex];
  const to = positions[toIndex];

  return (
    <motion.div
      key={`${activeIndex}-${isRunning}`}
      className="absolute h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
      animate={
        isRunning
          ? { x: [from.x, to.x], y: [from.y, to.y] }
          : { x: to.x, y: to.y }
      }
      transition={{ duration: 1 / speed, ease: "easeInOut" }}
    />
  );
}

export default AnimatedPacket;
