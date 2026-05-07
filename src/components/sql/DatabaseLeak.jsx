import { motion } from "framer-motion";

function DatabaseLeak() {
  return (
    <div className="flex flex-col items-center justify-center h-64">

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
        className="w-40 h-40 bg-red-500 rounded-xl flex items-center justify-center text-black font-bold shadow-[0_0_40px_red]"
      >
        DATABASE
      </motion.div>

      <p className="mt-5 text-red-400">
        Unauthorized Access Detected
      </p>

    </div>
  );
}

export default DatabaseLeak;