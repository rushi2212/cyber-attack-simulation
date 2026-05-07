import { motion } from "framer-motion";

function BotNetwork({ isActive, intensity }) {
  const bots = Array.from({ length: 6 + intensity * 2 });

  return (
    <div className="rounded-2xl border border-red-500/30 bg-black/70 p-5">
      <p className="text-xs uppercase tracking-[0.3em] text-red-300">
        Botnet control
      </p>
      <div className="mt-4 grid grid-cols-4 gap-3">
        <div className="col-span-2 flex flex-col items-center justify-center gap-2 rounded-xl border border-red-500/40 bg-red-500/10 p-3">
          <span className="text-2xl">🧑‍💻</span>
          <span className="text-xs text-red-200">Attacker</span>
        </div>
        {bots.map((_, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 p-3"
            animate={isActive ? { scale: [1, 1.05, 1] } : { scale: 1 }}
            transition={{
              duration: 1.2,
              repeat: isActive ? Infinity : 0,
              delay: index * 0.1,
            }}
          >
            <span className="text-lg">🤖</span>
            <span className="text-[10px] text-gray-400">Bot {index + 1}</span>
          </motion.div>
        ))}
      </div>
      <p className="mt-3 text-xs text-gray-400">
        Bots generate randomized request bursts coordinated by the attacker.
      </p>
    </div>
  );
}

export default BotNetwork;
