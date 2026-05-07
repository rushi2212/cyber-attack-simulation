import { motion } from "framer-motion";

function BotTraffic({ isActive, level }) {
  const bots = Array.from({ length: 5 + level * 2 });

  return (
    <div className="rounded-2xl border border-red-500/30 bg-black/70 p-4">
      <p className="text-xs uppercase tracking-[0.3em] text-red-300">
        Bot traffic
      </p>
      <div className="mt-4 grid grid-cols-4 gap-3">
        {bots.map((_, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center rounded-xl border border-red-500/40 bg-red-500/10 p-3"
            animate={isActive ? { opacity: [0.6, 1, 0.6] } : { opacity: 0.5 }}
            transition={{
              duration: 1,
              repeat: isActive ? Infinity : 0,
              delay: index * 0.1,
            }}
          >
            <div className="h-2 w-8 rounded-full bg-red-400/70" />
            <span className="mt-2 text-[10px] text-red-200">
              Bot {index + 1}
            </span>
          </motion.div>
        ))}
      </div>
      <p className="mt-3 text-xs text-gray-400">
        Bots fire uniform, repeated requests with identical patterns.
      </p>
    </div>
  );
}

export default BotTraffic;
