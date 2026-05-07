import { motion } from "framer-motion";

function CaptchaVerification({ isActive }) {
  return (
    <div className="rounded-2xl border border-cyan-500/30 bg-black/70 p-4 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
        CAPTCHA verification
      </p>
      <motion.div
        className="mt-4 rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-4 py-4 text-sm text-cyan-200"
        animate={isActive ? { scale: [1, 1.05, 1] } : { scale: 1 }}
        transition={{ duration: 1.2, repeat: isActive ? Infinity : 0 }}
      >
        {isActive ? "Challenge in progress" : "Awaiting verification"}
      </motion.div>
      <p className="mt-3 text-xs text-gray-400">
        Bots fail verification and are blocked.
      </p>
    </div>
  );
}

export default CaptchaVerification;
