import { motion } from "framer-motion";

function ServerCrash() {
  return (
    <motion.div
      animate={{
        x: [0, -10, 10, -10, 0],
      }}
      transition={{
        duration: 0.5,
        repeat: Infinity,
      }}
      className="w-52 h-52 bg-red-600 rounded-xl mx-auto mt-20 flex items-center justify-center text-2xl font-bold shadow-[0_0_40px_red]"
    >
      SERVER DOWN
    </motion.div>
  );
}

export default ServerCrash;