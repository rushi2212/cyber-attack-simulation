import { motion } from "framer-motion";

function CaptchaBlock() {
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
        className="bg-cyan-500 text-black px-10 py-5 rounded-xl font-bold shadow-[0_0_30px_#00ccff]"
      >
        CAPTCHA ENABLED
      </motion.div>

      <p className="mt-5 text-cyan-400">
        Suspicious Bot Activity Blocked
      </p>

    </div>
  );
}

export default CaptchaBlock;