import { motion } from "framer-motion";

function ServerPulse() {
  return (
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        boxShadow: [
          "0px 0px 10px #00ff99",
          "0px 0px 40px #00ff99",
          "0px 0px 10px #00ff99",
        ],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
      }}
      className="w-40 h-40 bg-green-500 rounded-xl flex items-center justify-center text-black font-bold mx-auto mt-10"
    >
      SERVER
    </motion.div>
  );
}

export default ServerPulse;