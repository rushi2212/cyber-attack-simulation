import { motion } from "framer-motion";

function AttackFlow() {
  return (
    <div className="mt-20 flex justify-center items-center gap-10 flex-wrap">
      {/* Attacker */}
      <div className="bg-red-500 w-40 h-24 rounded-xl flex items-center justify-center font-bold shadow-[0_0_30px_red]">
        ATTACKER
      </div>

      {/* Arrow */}
      <motion.div
        animate={{
          x: [0, 20, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
        className="text-5xl text-white"
      >
        →
      </motion.div>

      {/* Firewall */}
      <div className="bg-cyan-500 w-40 h-24 rounded-xl flex items-center justify-center font-bold text-black shadow-[0_0_30px_#00ccff]">
        FIREWALL
      </div>

      {/* Arrow */}
      <motion.div
        animate={{
          x: [0, 20, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
        className="text-5xl text-white"
      >
        →
      </motion.div>

      {/* Server */}
      <div className="bg-green-500 w-40 h-24 rounded-xl flex items-center justify-center font-bold text-black shadow-[0_0_30px_#00ff99]">
        SERVER
      </div>

      {/* Arrow */}
      <motion.div
        animate={{
          x: [0, 20, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
        className="text-5xl text-white"
      >
        →
      </motion.div>

      {/* Database */}
      <div className="bg-yellow-400 w-40 h-24 rounded-xl flex items-center justify-center font-bold text-black shadow-[0_0_30px_#facc15]">
        DATABASE
      </div>
    </div>
  );
}

export default AttackFlow;
